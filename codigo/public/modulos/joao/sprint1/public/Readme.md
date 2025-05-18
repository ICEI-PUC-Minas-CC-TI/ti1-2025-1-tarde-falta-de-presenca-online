# Projeto Mapa de Clientes

Este projeto exibe um mapa interativo com a localização de clientes (empresas). Foi desenvolvido utilizando HTML, CSS e JavaScript, com a biblioteca LeafletJS para a funcionalidade do mapa.

## Estrutura do Projeto

- `index.html`: Ficheiro principal HTML que estrutura a página.
- `styles.css`: Ficheiro CSS para estilização da página e do mapa.
- `script.js`: Ficheiro JavaScript que contém a lógica para inicializar o mapa, carregar os dados dos clientes e adicionar os marcadores.
- `EstruturasDeDados.json` (ou `Db.json`): Ficheiro JSON que contém os dados dos clientes/empresas. (Nota: a versão atual para avaliação pode ter estes dados embutidos no `script.js`).

## Sobre o Carregamento de Dados (JSON)

Atualmente, para garantir a funcionalidade e facilitar a avaliação do projeto diretamente ao abrir o ficheiro `index.html` no navegador (sem a necessidade de um servidor web), os dados dos clientes (originalmente no ficheiro `EstruturasDeDados.json`) foram **embutidos diretamente no ficheiro `script.js`**.

**Motivo:**
Os navegadores modernos possuem políticas de segurança (CORS - Cross-Origin Resource Sharing) que restringem o acesso a ficheiros locais quando uma página HTML é aberta através do protocolo `file:///` (ou seja, clicando duas vezes no ficheiro `index.html`). Tentar carregar um ficheiro JSON externo (`fetch("./Db.json")`) neste cenário geralmente resulta num erro "Failed to fetch".

Ao embutir os dados no `script.js`, eliminamos a necessidade de uma requisição externa para o ficheiro JSON, garantindo que o mapa e os marcadores dos clientes sejam exibidos corretamente em qualquer máquina, mesmo sem um servidor web configurado.

## Execução do Projeto

### Opção 1: Abrir Diretamente (com Dados Embutidos - Recomendado para Avaliação)

Se você estiver a usar a versão do projeto onde os dados dos clientes estão embutidos no `script.js`:

1.  Descarregue a pasta do projeto para o seu computador.
2.  Abra o ficheiro `index.html` diretamente no seu navegador de preferência (ex: Google Chrome, Firefox, Edge).
3.  O mapa com os marcadores dos clientes deverá ser exibido sem problemas.

### Opção 2: Executar com um Servidor Local (para usar um JSON Externo)

Se você deseja modificar o `script.js` para carregar os dados de um ficheiro JSON externo (ex: `Db.json`) e testar essa configuração, você precisará de um servidor HTTP local. Isto é necessário para contornar as restrições de segurança do navegador mencionadas acima.

**Passos:**

1.  **Certifique-se de que tem o Python instalado.** (A maioria dos sistemas macOS e Linux já o têm. Para Windows, pode ser necessário instalar a partir de [python.org](https://python.org)).
2.  **Modifique o `script.js` (se necessário):**
    *   Se o seu `script.js` já está configurado para buscar um ficheiro externo (ex: `const DADOS_CLIENTES_URL = './Db.json';`), certifique-se de que o nome do ficheiro (`Db.json`) corresponde ao seu ficheiro de dados.
    *   Se o `script.js` tem os dados embutidos, você precisará alterá-lo para usar `fetch` para carregar o ficheiro JSON externo. Por exemplo:
        ```javascript
        // No inicio do script.js
        const DADOS_CLIENTES_URL = './Db.json'; // Ou o nome do seu ficheiro JSON

        // Dentro da funcao carregarClientes ou similar, substitua o acesso aos dados embutidos por:
        fetch(DADOS_CLIENTES_URL)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(dados => {
                const clientes = dados.empresas; // Ou a estrutura correta do seu JSON
                // ... resto da lógica para processar clientes e adicionar marcadores ...
            })
            .catch(error => {
                console.error("Falha ao carregar os dados dos clientes:", error);
                exibirMensagemErro(`Erro ao carregar dados: ${error.message}. Verifique o console para mais detalhes.`);
            });
        ```
3.  **Coloque o ficheiro JSON** (ex: `Db.json`) na mesma pasta que o `index.html`.
4.  **Abra um terminal ou linha de comandos:**
    *   Navegue até à pasta raiz do projeto (onde está o `index.html`).
5.  **Inicie o servidor HTTP local:**
    *   Se tiver Python 3.x, execute o comando:
        `python -m http.server`
    *   (Opcional) Se quiser usar uma porta específica, por exemplo 8000:
        `python -m http.server 8000`
6.  **Aceda no navegador:**
    *   Abra o seu navegador e vá para `http://localhost:8000` (ou a porta que o terminal indicar, geralmente 8000 por defeito).
    *   O mapa deverá carregar os dados a partir do seu ficheiro JSON externo.

## Personalização

-   **Dados dos Clientes:** Para alterar os clientes exibidos, modifique o ficheiro JSON (`Db.json` se estiver a usar a abordagem de ficheiro externo) ou a variável `dadosClientesEmbutido` dentro do `script.js` (se estiver a usar a abordagem de dados embutidos).

