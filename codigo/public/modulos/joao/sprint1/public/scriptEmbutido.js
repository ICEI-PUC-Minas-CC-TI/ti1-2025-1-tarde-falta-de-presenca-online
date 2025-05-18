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
      "telefone": "(11) 97654-3210",
      "email": "contato@empresa2.com.br",
      "endereco": 
      {
        "rua": "Rua B",
        "numero": "456",
        "bairro": "Savassi",
        "cidade": "Belo Horizonte",
        "estado": "MG",
        "cep": "30130-000",
        "latitude": -19.9367,
        "longitude": -43.9265
      },
      "categoria": "Beleza e Estetica",
      "descricao": "Descricao da Empresa 2",
      "horarioFuncionamento": "Terca a Sabado: 09:00 as 19:00",
      "redesSociais": 
      {
        "instagram": "@empresa2",
        "facebook": "empresa2",
        "whatsapp": "(11) 97654-3210"
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
      "telefone": "(21) 96543-2109",
      "email": "contato@empresa3.com.br",
      "endereco": 
      {
        "rua": "Rua C",
        "numero": "789",
        "bairro": "Lourdes",
        "cidade": "Belo Horizonte",
        "estado": "MG",
        "cep": "30170-040",
        "latitude": -19.9267,
        "longitude": -43.9465
      },
      "categoria": "Tecnologia",
      "descricao": "Descricao da Empresa 3",
      "horarioFuncionamento": "Segunda a Sexta: 09:00 as 18:00",
      "redesSociais": 
      {
        "instagram": "@empresa3",
        "facebook": "empresa3",
        "whatsapp": "(21) 96543-2109"
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
          "bairro": "Centro",
          "cidade": "Belo Horizonte",
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
          "bairro": "Savassi",
          "cidade": "Belo Horizonte",
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
          "bairro": "Lourdes",
          "cidade": "Belo Horizonte",
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
          "bairro": "Pampulha",
          "cidade": "Belo Horizonte",
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
          "bairro": "Funcionarios",
          "cidade": "Belo Horizonte",
          "estado": "MG",
          "cep": "67845-230",
          "complemento": "Apto 401",
          "principal": true
        }
      ]
    }
  ]
};

const MAP_CENTER = [-19.9167, -43.9345]; 
const INITIAL_ZOOM_LEVEL = 12;

const map = L.map("map").setView(MAP_CENTER, INITIAL_ZOOM_LEVEL);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", 
  
{
    attribution: "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors"
}).addTo(map);


function carregarClientes() 
{
    try 
    {
        const clientes = dadosClientesEmbutido.empresas;

        if (!clientes || !Array.isArray(clientes) || clientes.length === 0) 
          {
            console.warn("Nenhum cliente encontrado nos dados embutidos ou formato inesperado.");
            exibirMensagemErro("Nenhum dado de cliente para exibir.");
            return;
        }

        clientes.forEach(cliente => 
          {
            let lat = cliente.endereco && cliente.endereco.latitude ? cliente.endereco.latitude : MAP_CENTER[0] + (Math.random() - 0.5) * 0.2;
            let lng = cliente.endereco && cliente.endereco.longitude ? cliente.endereco.longitude : MAP_CENTER[1] + (Math.random() - 0.5) * 0.2;

            let enderecoCompleto = "Endereco nao disponivel";
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
                
                if (partesEndereco.length > 0) {
                    enderecoCompleto = partesEndereco.join(", ");
                }
            }

            const marker = L.marker([lat, lng]).addTo(map);
            const popupContent = `<b>${cliente.nome || "Nome nao disponivel"}</b><br>${enderecoCompleto}`;
            marker.bindPopup(popupContent);
        });

    } catch (error) {
        console.error("Falha ao processar os dados dos clientes embutidos:", error);
        exibirMensagemErro(`Erro ao processar dados: ${error.message}`);
    }
}


function exibirMensagemErro(mensagem) 
{
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
}

document.addEventListener("DOMContentLoaded", carregarClientes);

