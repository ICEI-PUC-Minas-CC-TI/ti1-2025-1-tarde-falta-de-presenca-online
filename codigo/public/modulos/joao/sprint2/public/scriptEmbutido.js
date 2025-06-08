// script.js com o JSON de clientes embutido

const dadosClientesEmbutido = {
  "empresas": 
  [
    {
      "id": 1,
      "nome": "Empresa 1",
      "proprietario": "Proprietario 1",
      "cnpj": "12.345.678/0001-90",
      "telefone": "(31) 98765-4321",
      "email": "contato@empresa1.com.br",
      "endereco": 
      {
        "rua": "Rua A",
        "numero": "123",
        "bairro": "Centro",
        "cidade": "Belo Horizonte",
        "estado": "MG",
        "cep": "30123-456",
        "latitude": -19.9167,
        "longitude": -43.9345
      },
      "categoria": "Alimentacao",
      "descricao": "Descricao da Empresa 1",
      "horarioFuncionamento": "Segunda a Sabado: 08:00 as 18:00",
      "redesSociais": 
      {
        "instagram": "@empresa1",
        "facebook": "empresa1",
        "whatsapp": "(31) 98765-4321"
      },
      "dataCadastro": "2023-05-15",
      "plano": "basico",
      "logo": "/imagens/logo1.png",
      "ativo": true
    },
    {
      "id": 2,
      "nome": "Empresa 2",
      "proprietario": "Proprietario 2",
      "cnpj": "23.456.789/0001-01",
      "telefone": "(31) 97654-3210",
      "email": "contato@empresa2.com.br",
      "endereco": 
      {
        "rua": "Rua B",
        "numero": "456",
        "bairro": "Savassi",
        "cidade": "Belo Horizonte",
        "estado": "MG",
        "cep": "30112-000",
        "latitude": -19.9386,
        "longitude": -43.9378
      },
      "categoria": "Beleza e Estetica",
      "descricao": "Descricao da Empresa 2",
      "horarioFuncionamento": "Terca a Sabado: 09:00 as 19:00",
      "redesSociais": 
      {
        "instagram": "@empresa2",
        "facebook": "empresa2",
        "whatsapp": "(31) 97654-3210"
      },
      "dataCadastro": "2023-06-20",
      "plano": "premium",
      "logo": "/imagens/logo2.png",
      "ativo": true
    },
    {
      "id": 3,
      "nome": "Empresa 3",
      "proprietario": "Proprietario 3",
      "cnpj": "34.567.890/0001-12",
      "telefone": "(31) 96543-2109",
      "email": "contato@empresa3.com.br",
      "endereco": 
      {
        "rua": "Rua C",
        "numero": "789",
        "bairro": "Funcionarios",
        "cidade": "Belo Horizonte",
        "estado": "MG",
        "cep": "30130-040",
        "latitude": -19.9281,
        "longitude": -43.9419
      },
      "categoria": "Tecnologia",
      "descricao": "Descricao da Empresa 3",
      "horarioFuncionamento": "Segunda a Sexta: 09:00 as 18:00",
      "redesSociais": 
      {
        "instagram": "@empresa3",
        "facebook": "empresa3",
        "whatsapp": "(31) 96543-2109"
      },
      "dataCadastro": "2023-07-10",
      "plano": "intermediario",
      "logo": "/imagens/logo3.png",
      "ativo": true
    }
  ],
  "produtos": 
  [
    {
      "id": 1,
      "empresaId": 1,
      "nome": "Produto 1",
      "descricao": "Descricao do Produto 1",
      "preco": 89.90,
      "categoria": "Categoria A",
      "imagens": 
      [
        "/imagens/produto1-1.jpg",
        "/imagens/produto1-2.jpg"
      ],
      "disponivel": true,
      "destaque": true,
      "tempoProducao": "2 dias",
      "informacoesAdicionais": "Informacoes adicionais do Produto 1",
      "dataCadastro": "2023-05-20"
    },
    {
      "id": 2,
      "empresaId": 1,
      "nome": "Produto 2",
      "descricao": "Descricao do Produto 2",
      "preco": 75.00,
      "categoria": "Categoria A",
      "imagens": 
      [
        "/imagens/produto2.jpg"
      ],
      "disponivel": true,
      "destaque": false,
      "tempoProducao": "1 dia",
      "informacoesAdicionais": "Informacoes adicionais do Produto 2",
      "dataCadastro": "2023-05-25"
    },
    {
      "id": 3,
      "empresaId": 2,
      "nome": "Servico 1",
      "descricao": "Descricao do Servico 1",
      "preco": 150.00,
      "categoria": "Categoria B",
      "imagens": 
      [
        "/imagens/servico1.jpg"
      ],
      "disponivel": true,
      "destaque": true,
      "duracao": "90 minutos",
      "informacoesAdicionais": "Informacoes adicionais do Servico 1",
      "dataCadastro": "2023-06-25"
    },
    {
      "id": 4,
      "empresaId": 3,
      "nome": "Servico 2",
      "descricao": "Descricao do Servico 2",
      "preco": 120.00,
      "categoria": "Categoria C",
      "imagens": 
      [
        "/imagens/servico2.jpg"
      ],
      "disponivel": true,
      "destaque": true,
      "prazoEntrega": "24 horas",
      "informacoesAdicionais": "Informacoes adicionais do Servico 2",
      "dataCadastro": "2023-07-15"
    }
  ],
  "usuarios": 
  [
    {
      "id": 1,
      "nome": "Usuario 1",
      "email": "usuario1@email.com",
      "senha": "senha_criptografada_1",
      "telefone": "(31) 98765-4321",
      "tipo": "empreendedor",
      "empresaId": 1,
      "dataCadastro": "2023-05-15",
      "ultimoAcesso": "2023-10-10T14:30:00",
      "ativo": true,
      "fotoPerfil": "/imagens/usuario1.jpg",
      "endereco": 
      [
        {
          "id": 1,
          "rua": "Rua A",
          "numero": "123",
          "bairro": "Bairro A",
          "cidade": "Cidade A",
          "estado": "MG",
          "cep": "21459-123",
          "complemento": "Apto 201",
          "principal": true
        }
      ]
    },
    {
      "id": 2,
      "nome": "Usuario 2",
      "email": "usuario2@email.com",
      "senha": "senha_criptografada_2",
      "telefone": "(11) 97654-3210",
      "tipo": "empreendedor",
      "empresaId": 2,
      "dataCadastro": "2023-06-20",
      "ultimoAcesso": "2023-10-09T10:15:00",
      "ativo": true,
      "fotoPerfil": "/imagens/usuario2.jpg",
      "endereco": 
      [
        {
          "id": 1,
          "rua": "Rua B",
          "numero": "231",
          "bairro": "Bairro B",
          "cidade": "Cidade A",
          "estado": "MG",
          "cep": "28917-212",
          "complemento": "Apto 202",
          "principal": true
        }
      ]
    },
    {
      "id": 3,
      "nome": "Usuario 3",
      "email": "usuario3@email.com",
      "senha": "senha_criptografada_3",
      "telefone": "(21) 96543-2109",
      "tipo": "empreendedor",
      "empresaId": 3,
      "dataCadastro": "2023-07-10",
      "ultimoAcesso": "2023-10-10T09:45:00",
      "ativo": true,
      "fotoPerfil": "/imagens/usuario3.jpg",
      "endereco": 
      [
        {
          "id": 1,
          "rua": "Rua C",
          "numero": "657",
          "bairro": "Bairro C",
          "cidade": "Cidade A",
          "estado": "MG",
          "cep": "20435-140",
          "complemento": "Apto 301",
          "principal": true
        }
      ]
    },
    {
      "id": 4,
      "nome": "Usuario 4",
      "email": "usuario4@email.com",
      "senha": "senha_criptografada_4",
      "telefone": "(31) 91234-5678",
      "tipo": "cliente",
      "dataCadastro": "2023-06-05",
      "ultimoAcesso": "2023-10-10T11:45:00",
      "ativo": true,
      "fotoPerfil": "/imagens/usuario4.jpg",
      "endereco": 
      [
        {
          "id": 1,
          "rua": "Rua D",
          "numero": "456",
          "bairro": "Bairro D",
          "cidade": "Cidade A",
          "estado": "MG",
          "cep": "30130-170",
          "complemento": "Apto 302",
          "principal": true
        }
      ]
    },
    {
      "id": 5,
      "nome": "Usuario 5",
      "email": "admin@sistema.com",
      "senha": "senha_criptografada_admin",
      "telefone": "(11) 99999-9999",
      "tipo": "administrador",
      "dataCadastro": "2023-01-01",
      "ultimoAcesso": "2023-10-10T08:00:00",
      "ativo": true,
      "fotoPerfil": "/imagens/admin.jpg",
      "endereco": 
      [
        {
          "id": 1,
          "rua": "Rua E",
          "numero": "789",
          "bairro": "Bairro E",
          "cidade": "Cidade A",
          "estado": "MG",
          "cep": "67845-230",
          "complemento": "Apto 401",
          "principal": true
        }
      ]
    }
  ],
  "configuracoesSistema": [
    {
      "filtrosDistancia": [
        {"valor": 1, "unidade": "km"},
        {"valor": 5, "unidade": "km"},
        {"valor": 10, "unidade": "km"},
        {"valor": 20, "unidade": "km"}
      ]
    }
  ]
};

const MAP_CENTER = [-19.9167, -43.9345]; // Belo Horizonte
const INITIAL_ZOOM_LEVEL = 12;

const map = L.map("map").setView(MAP_CENTER, INITIAL_ZOOM_LEVEL);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", 
  
{
    attribution: "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors"
}).addTo(map);

let markers = []; // Array para armazenar os marcadores do mapa
let userLocation = null; // Localização do usuário
let userMarker = null; // Marcador da localização do usuário

function clearMarkers() {
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];
}

function getUserLocation() {
    if (navigator.geolocation) {
        // Opções para melhorar a precisão da geolocalização
        const options = {
            enableHighAccuracy: true, // Solicita alta precisão
            timeout: 10000, // Timeout de 10 segundos
            maximumAge: 60000 // Cache de 1 minuto
        };
        
        navigator.geolocation.getCurrentPosition(
            function(position) {
                userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                    accuracy: position.coords.accuracy // Precisão em metros
                };
                
                // Adicionar marcador da localização do usuário
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
                
                // Centralizar o mapa na localização do usuário
                map.setView([userLocation.lat, userLocation.lng], INITIAL_ZOOM_LEVEL);
                
                // Reaplicar filtros com a nova localização
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
            options // Aplicar as opções de precisão
        );
    } else {
        exibirMensagemErro("Geolocalização não é suportada por este navegador. Usando localização padrão.");
    }
}

function updateCompanyList(empresas) {
    const companyList = document.getElementById('company-list');
    companyList.innerHTML = ''; // Limpa a lista existente

    if (empresas.length === 0) {
        companyList.innerHTML = '<li>Nenhuma empresa encontrada com os filtros selecionados.</li>';
        return;
    }

    empresas.forEach(cliente => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<b>${cliente.nome || 'Nome não disponível'}</b><br>Categoria: ${cliente.categoria || 'Não informada'}<br>Distância: ${cliente.distancia ? cliente.distancia.toFixed(2) + ' km' : 'N/A'}`;
        companyList.appendChild(listItem);
    });
}

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Raio da Terra em quilômetros
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
}

function carregarClientes() 
{
    try 
    {
        clearMarkers();
        const empresas = dadosClientesEmbutido.empresas;
        const categorias = [...new Set(empresas.map(empresa => empresa.categoria))];
        const filtrosDistancia = dadosClientesEmbutido.configuracoesSistema[0].filtrosDistancia;

        // Popular filtros
        const categoryFilter = document.getElementById('category-filter');
        categorias.forEach(cat => {
            const option = document.createElement('option');
            option.value = cat;
            option.textContent = cat;
            categoryFilter.appendChild(option);
        });

        const distanceFilter = document.getElementById('distance-filter');
        filtrosDistancia.forEach(dist => {
            const option = document.createElement('option');
            option.value = dist.valor;
            option.textContent = `${dist.valor} ${dist.unidade}`;
            distanceFilter.appendChild(option);
        });

        // Adicionar event listeners
        categoryFilter.addEventListener('change', aplicarFiltros);
        distanceFilter.addEventListener('change', aplicarFiltros);
        
        // Event listener para o botão de localização
        const locationBtn = document.getElementById('location-btn');
        locationBtn.addEventListener('click', getUserLocation);

        // Solicitar geolocalização do usuário
        getUserLocation();

        aplicarFiltros(); // Aplica os filtros iniciais

    } catch (error) {
        console.error("Falha ao processar os dados dos clientes embutidos:", error);
        exibirMensagemErro(`Erro ao processar dados: ${error.message}`);
    }
}

function aplicarFiltros() {
    let empresasFiltradas = dadosClientesEmbutido.empresas;

    const selectedCategory = document.getElementById('category-filter').value;
    const selectedDistance = parseFloat(document.getElementById('distance-filter').value);

    // Filtrar por categoria
    if (selectedCategory !== 'all') {
        empresasFiltradas = empresasFiltradas.filter(empresa => empresa.categoria === selectedCategory);
    }

    // Filtrar por distância
    if (!isNaN(selectedDistance) && selectedDistance !== 'all') {
        // Usar a localização do usuário se disponível, senão usar o centro do mapa
        const refLat = userLocation ? userLocation.lat : MAP_CENTER[0];
        const refLon = userLocation ? userLocation.lng : MAP_CENTER[1];

        empresasFiltradas = empresasFiltradas.filter(empresa => {
            if (empresa.endereco && empresa.endereco.latitude && empresa.endereco.longitude) {
                const distancia = calculateDistance(refLat, refLon, empresa.endereco.latitude, empresa.endereco.longitude);
                empresa.distancia = distancia; // Adiciona a distância ao objeto da empresa
                return distancia <= selectedDistance;
            }
            return false; // Empresas sem coordenadas válidas não são incluídas
        });
    } else {
        // Se não há filtro de distância, ainda calcular a distância para exibição
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
        markers.push(marker); // Adiciona o marcador ao array
    });

    updateCompanyList(empresasFiltradas);
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
    
    // Auto-remover após 5 segundos
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
    
    // Auto-remover após 3 segundos
    setTimeout(() => {
        if (sucessoDiv && sucessoDiv.parentNode) {
            sucessoDiv.parentNode.removeChild(sucessoDiv);
        }
    }, 3000);
}

document.addEventListener("DOMContentLoaded", carregarClientes);

