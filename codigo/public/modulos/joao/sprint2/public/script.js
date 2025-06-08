// script.js com funcionalidades de geolocalização e filtros

const DADOS_CLIENTES_URL = 'http://localhost:3003/empresas';
const CONFIGURACOES_URL = 'http://localhost:3003/configuracoesSistema';

const MAP_CENTER = [-19.9167, -43.9345]; 
const INITIAL_ZOOM_LEVEL = 12;

const map = L.map('map').setView(MAP_CENTER, INITIAL_ZOOM_LEVEL);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let markers = []; 
let userLocation = null; 
let userMarker = null; 
let empresasData = []; 
let configuracoes = null; 

function clearMarkers() {
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];
}

function getUserLocation() {
    if (navigator.geolocation) {
        
        const options = {
            enableHighAccuracy: true, 
            timeout: 10000, 
            maximumAge: 60000 
        };
        
        navigator.geolocation.getCurrentPosition(
            function(position) {
                userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                    accuracy: position.coords.accuracy 
                };
                
                
                if (userMarker) {
                    map.removeLayer(userMarker);
                }
                
                userMarker = L.marker([userLocation.lat, userLocation.lng], {
                    icon: L.icon({
                        iconUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiIGZpbGw9IiMwMDdCRkYiLz4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNCIgZmlsbD0iI0ZGRkZGRiIvPgo8L3N2Zz4K',
                        iconSize: [20, 20],
                        iconAnchor: [10, 10]
                    })
                }).addTo(map);
                
                const accuracyText = userLocation.accuracy < 100 ? 
                    `Precisão: ${Math.round(userLocation.accuracy)}m` : 
                    `Precisão: ~${Math.round(userLocation.accuracy/100)*100}m`;
                
                userMarker.bindPopup(`<b>Sua localização</b><br>${accuracyText}`);
                
                
                map.setView([userLocation.lat, userLocation.lng], INITIAL_ZOOM_LEVEL);
                
                
                aplicarFiltros();
                
                exibirMensagemSucesso(`Localização obtida! ${accuracyText}`);
            },
            function(error) {
                console.warn("Erro ao obter localização:", error);
                let mensagem = "Não foi possível obter sua localização. ";
                switch(error.code) {
                    case error.PERMISSION_DENIED:
                        mensagem += "Permissão negada pelo usuário. Verifique as configurações de localização do seu navegador.";
                        break;
                    case error.POSITION_UNAVAILABLE:
                        mensagem += "Localização indisponível. Verifique se o GPS está ativado.";
                        break;
                    case error.TIMEOUT:
                        mensagem += "Tempo limite excedido. Tente novamente.";
                        break;
                    default:
                        mensagem += "Erro desconhecido.";
                        break;
                }
                mensagem += " Usando localização padrão (Belo Horizonte).";
                exibirMensagemErro(mensagem);
            },
        );
    } else {
        exibirMensagemErro("Geolocalização não é suportada por este navegador. Usando localização padrão.");
    }
}

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; 
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distance = R * c;
    return distance;
}

async function carregarConfiguracoes() {
    try {
        const response = await fetch(CONFIGURACOES_URL);
        if (!response.ok) {
            throw new Error(`Erro ao carregar configurações: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        configuracoes = data[0]; 
        return configuracoes;
    } catch (error) {
        console.error('Falha ao carregar configurações:', error);
        
        return {
            filtrosDistancia: [
                {"valor": 1, "unidade": "km"},
                {"valor": 5, "unidade": "km"},
                {"valor": 10, "unidade": "km"},
                {"valor": 20, "unidade": "km"}
            ]
        };
    }
}

async function carregarClientes() {
    try {
        
        configuracoes = await carregarConfiguracoes();
        
        
        const response = await fetch(DADOS_CLIENTES_URL);
        if (!response.ok) {
            throw new Error(`Erro ao carregar dados dos clientes: ${response.status} ${response.statusText}`);
        }
        empresasData = await response.json();
        
        if (!empresasData || !Array.isArray(empresasData) || empresasData.length === 0) {
            console.warn('Nenhum cliente encontrado nos dados ou formato inesperado.');
            return;
        }

        
        const categorias = [...new Set(empresasData.map(empresa => empresa.categoria))];
        const categoryFilter = document.getElementById('category-filter');
        categorias.forEach(cat => {
            const option = document.createElement('option');
            option.value = cat;
            option.textContent = cat;
            categoryFilter.appendChild(option);
        });

        const distanceFilter = document.getElementById('distance-filter');
        configuracoes.filtrosDistancia.forEach(dist => {
            const option = document.createElement('option');
            option.value = dist.valor;
            option.textContent = `${dist.valor} ${dist.unidade}`;
            distanceFilter.appendChild(option);
        });

        
        categoryFilter.addEventListener('change', aplicarFiltros);
        distanceFilter.addEventListener('change', aplicarFiltros);
        
        
        const locationBtn = document.getElementById('location-btn');
        locationBtn.addEventListener('click', getUserLocation);

        
        getUserLocation();

        aplicarFiltros(); 

    } catch (error) {
        console.error('Falha ao carregar ou processar os dados dos clientes:', error);
        exibirMensagemErro(`Erro ao carregar os dados dos clientes. Detalhes: ${error.message}`);
    }
}

function aplicarFiltros() {
    let empresasFiltradas = [...empresasData];

    const selectedCategory = document.getElementById('category-filter').value;
    const selectedDistance = parseFloat(document.getElementById('distance-filter').value);

    
    if (selectedCategory !== 'all') {
        empresasFiltradas = empresasFiltradas.filter(empresa => empresa.categoria === selectedCategory);
    }

   
    if (!isNaN(selectedDistance) && selectedDistance !== 'all') {
        const refLat = userLocation ? userLocation.lat : MAP_CENTER[0];
        const refLon = userLocation ? userLocation.lng : MAP_CENTER[1];

        empresasFiltradas = empresasFiltradas.filter(empresa => {
            if (empresa.endereco && empresa.endereco.latitude && empresa.endereco.longitude) {
                const distancia = calculateDistance(refLat, refLon, empresa.endereco.latitude, empresa.endereco.longitude);
                empresa.distancia = distancia; 
                return distancia <= selectedDistance;
            }
            return false; 
        });
    } else {
        const refLat = userLocation ? userLocation.lat : MAP_CENTER[0];
        const refLon = userLocation ? userLocation.lng : MAP_CENTER[1];
        
        empresasFiltradas.forEach(empresa => {
            if (empresa.endereco && empresa.endereco.latitude && empresa.endereco.longitude) {
                empresa.distancia = calculateDistance(refLat, refLon, empresa.endereco.latitude, empresa.endereco.longitude);
            }
        });
    }

    clearMarkers();
    empresasFiltradas.forEach(cliente => {
        let lat = cliente.endereco && cliente.endereco.latitude ? cliente.endereco.latitude : MAP_CENTER[0] + (Math.random() - 0.5) * 0.2;
        let lng = cliente.endereco && cliente.endereco.longitude ? cliente.endereco.longitude : MAP_CENTER[1] + (Math.random() - 0.5) * 0.2;

        let enderecoCompleto = "Endereco nao disponivel";
        if (cliente.endereco) {
            const partesEndereco = [
                cliente.endereco.rua,
                cliente.endereco.numero,
                cliente.endereco.bairro,
                cliente.endereco.cidade,
                cliente.endereco.estado,
                cliente.endereco.cep
            ].filter(Boolean);
            
            if (partesEndereco.length > 0) {
                enderecoCompleto = partesEndereco.join(", ");
            }
        }

        const marker = L.marker([lat, lng]).addTo(map);
        const popupContent = `<b>${cliente.nome || "Nome nao disponivel"}</b><br>${enderecoCompleto}`;
        marker.bindPopup(popupContent);
        markers.push(marker); 
    });

    updateCompanyList(empresasFiltradas);
}

function updateCompanyList(empresas) {
    const companyList = document.getElementById('company-list');
    companyList.innerHTML = ''; 

    empresas.forEach(empresa => {
        const listItem = document.createElement('li');
        listItem.className = 'company-item';
        
        const distanciaTexto = empresa.distancia !== undefined ? 
            `${empresa.distancia.toFixed(2)} km` : 'N/A';
        
        listItem.innerHTML = `
            <div class="company-info">
                <h3 class="company-name">${empresa.nome}</h3>
                <p class="company-category">Categoria: ${empresa.categoria}</p>
                <p class="company-distance">Distância: ${distanciaTexto}</p>
            </div>
        `;
        
        companyList.appendChild(listItem);
    });
}

function exibirMensagemErro(mensagem) {
    const erroDivId = "map-error-message";
    let erroDiv = document.getElementById(erroDivId);
    if (!erroDiv) {
        erroDiv = document.createElement("div");
        erroDiv.id = erroDivId;
        erroDiv.style.position = "fixed"; 
        erroDiv.style.top = "20px"; 
        erroDiv.style.left = "50%";
        erroDiv.style.transform = "translateX(-50%)";
        erroDiv.style.padding = "10px 15px";
        erroDiv.style.backgroundColor = "#dc3545"; 
        erroDiv.style.color = "white";
        erroDiv.style.borderRadius = "5px";
        erroDiv.style.zIndex = "2000"; 
        erroDiv.style.textAlign = "center";
        erroDiv.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";
        document.body.appendChild(erroDiv);
    }
    erroDiv.textContent = mensagem;
    
    
    setTimeout(() => {
        if (erroDiv && erroDiv.parentNode) {
            erroDiv.parentNode.removeChild(erroDiv);
        }
    }, 5000);
}

function exibirMensagemSucesso(mensagem) {
    const sucessoDivId = "map-success-message";
    let sucessoDiv = document.getElementById(sucessoDivId);
    if (!sucessoDiv) {
        sucessoDiv = document.createElement("div");
        sucessoDiv.id = sucessoDivId;
        sucessoDiv.style.position = "fixed"; 
        sucessoDiv.style.top = "20px"; 
        sucessoDiv.style.left = "50%";
        sucessoDiv.style.transform = "translateX(-50%)";
        sucessoDiv.style.padding = "10px 15px";
        sucessoDiv.style.backgroundColor = "#28a745"; 
        sucessoDiv.style.color = "white";
        sucessoDiv.style.borderRadius = "5px";
        sucessoDiv.style.zIndex = "2000"; 
        sucessoDiv.style.textAlign = "center";
        sucessoDiv.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)";
        document.body.appendChild(sucessoDiv);
    }
    sucessoDiv.textContent = mensagem;
    
    
    setTimeout(() => {
        if (sucessoDiv && sucessoDiv.parentNode) {
            sucessoDiv.parentNode.removeChild(sucessoDiv);
        }
    }, 3000);
}

document.addEventListener("DOMContentLoaded", carregarClientes);

