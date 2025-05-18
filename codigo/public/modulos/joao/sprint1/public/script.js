// script.js padrão 

const DADOS_CLIENTES_URL = './db.json';

const MAP_CENTER = [-23.5505, -46.6333];
const INITIAL_ZOOM_LEVEL = 10; 

const map = L.map('map').setView(MAP_CENTER, INITIAL_ZOOM_LEVEL);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
{
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

async function carregarClientes() 
{
    try 
    {
        const response = await fetch(DADOS_CLIENTES_URL);
        if (!response.ok) 
        {
            throw new Error(`Erro ao carregar dados dos clientes: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        
        const clientes = data.empresas; 

        if (!clientes || !Array.isArray(clientes) || clientes.length === 0) 
        {
            console.warn('Nenhum cliente encontrado nos dados ou formato inesperado.');
            return;
        }

        clientes.forEach(cliente => 
            {
            let lat = cliente.endereco && cliente.endereco.latitude ? cliente.endereco.latitude : MAP_CENTER[0] + (Math.random() - 0.5) * 0.2;
            let lng = cliente.endereco && cliente.endereco.longitude ? cliente.endereco.longitude : MAP_CENTER[1] + (Math.random() - 0.5) * 0.2;

            let enderecoCompleto = 'Endereco nao disponivel';
            if (cliente.endereco) 
                {
                const partesEndereco = [
                    cliente.endereco.rua,
                    cliente.endereco.numero,
                    cliente.endereco.bairro,
                    cliente.endereco.cidade,
                    cliente.endereco.estado,
                    cliente.endereco.cep
                ].filter(Boolean); 
                
                if (partesEndereco.length > 0) 
                {
                    enderecoCompleto = partesEndereco.join(', ');
                }
            }

            const marker = L.marker([lat, lng]).addTo(map);
            
          
            const popupContent = `<b>${cliente.nome || 'Nome nao disponivel'}</b><br>${enderecoCompleto}`;
            marker.bindPopup(popupContent);
        });

    } catch (error) 
    {
        console.error('Falha ao carregar ou processar os dados dos clientes:', error);
        const erroDiv = document.getElementById('map-error-message') || document.createElement('div');
        erroDiv.id = 'map-error-message';
        erroDiv.style.position = 'fixed'; 
        erroDiv.style.top = '10px';
        erroDiv.style.left = '50%';
        erroDiv.style.transform = 'translateX(-50%)';
        erroDiv.style.padding = '10px 15px';
        erroDiv.style.backgroundColor = '#d9534f'; 
        erroDiv.style.color = 'white';
        erroDiv.style.borderRadius = '5px';
        erroDiv.style.zIndex = '1000'; 
        erroDiv.style.textAlign = 'center';
        erroDiv.textContent = `Erro ao carregar os dados dos clientes. Detalhes: ${error.message}`;
        
        if (!document.getElementById('map-error-message')) 
        {
            document.body.appendChild(erroDiv);
        }
    }
}

document.addEventListener('DOMContentLoaded', carregarClientes);

