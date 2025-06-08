# Sprint 2 - Projeto Digitalize (com Geolocalização e JSON Server / Dados Embutidos)

## Resumo das Implementações

Este projeto implementa as funcionalidades do Sprint 2 conforme especificado no planejamento individual, com a adição da funcionalidade de geolocalização do usuário para filtragem de empresas próximas. As principais melhorias incluem:

### Novas Funcionalidades Implementadas

1.  **Filtros de Categoria**
    *   Permite filtrar empresas por categoria (Alimentação, Beleza e Estética, Tecnologia)
    *   Interface intuitiva com dropdown de seleção
    *   Atualização dinâmica do mapa e lista de empresas

2.  **Filtros de Distância**
    *   Filtros por distância: 1km, 5km, 10km, 20km
    *   Cálculo de distância baseado em coordenadas geográficas
    *   Referência de distância a partir da localização atual do usuário (geolocalização)

3.  **Lista de Empresas Próximas**
    *   Exibição de empresas filtradas em formato de lista
    *   Informações incluem nome, categoria e distância
    *   Atualização automática baseada nos filtros selecionados

4.  **Geolocalização do Usuário (Aprimorada)**
    *   Solicita a permissão do usuário para acessar sua localização.
    *   Utiliza a localização do usuário para centralizar o mapa e calcular as distâncias das empresas.
    *   Inclui um botão para solicitar a localização manualmente, caso a solicitação automática falhe ou seja negada.
    *   Melhorias de Precisão: Implementadas opções para solicitar alta precisão (`enableHighAccuracy`), definir um tempo limite (`timeout`) e um tempo máximo de cache (`maximumAge`) para a localização.

5.  **Melhorias na Interface**
    *   Design responsivo e moderno
    *   Seções organizadas para filtros, lista e mapa
    *   Estilos CSS aprimorados para melhor experiência do usuário

### Estrutura de Dados Atualizada

-   **Coordenadas Geográficas**: Adicionadas latitude e longitude para cada empresa
-   **Configurações do Sistema**: Estrutura para filtros de distância configuráveis
-   **Dados de Exemplo**: Empresas com localizações em Belo Horizonte

### Arquivos Modificados

1.  **public/index.html**: Adicionados elementos de filtro, lista de empresas e botão de geolocalização.
2.  **public/script.js**: Contém toda a lógica de filtragem, cálculo de distância, obtenção de geolocalização (com aprimoramentos de precisão) e atualização do mapa/lista. **Carrega dados do JSON Server.**
3.  **public/scriptEmbutido.js**: Contém a mesma lógica de `script.js`, mas **carrega dados embutidos diretamente no script**, sem a necessidade de um servidor.
4.  **public/styles.css**: Novos estilos para filtros, lista de empresas e botão de geolocalização.
5.  **public/Db.json**: Base de dados JSON utilizada pelo JSON Server.
6.  **package.json**: Adicionado para gerenciar dependências e scripts para o JSON Server.

## Como Executar o Projeto

Este projeto oferece duas formas de funcionamento. Por padrão, ele carrega os dados via JSON Server. Você pode alternar para a versão com dados embutidos editando o `index.html`.

### Opção 1: Com JSON Server (Padrão e Recomendado para Desenvolvimento)

Esta opção simula uma API real para carregar os dados das empresas, tornando o projeto mais modular e escalável. É a forma padrão e recomendada para desenvolvimento.

#### 1. Pré-requisitos

Certifique-se de ter o Node.js e o npm (ou yarn) instalados em sua máquina.

#### 2. Instalação das Dependências

1.  **Descompacte o arquivo do projeto**
    *   Extraia o conteúdo do arquivo ZIP para uma pasta de sua preferência (ex: `sprint2`).
2.  **Navegue até o diretório do projeto**
    ```bash
    cd sprint2
    ```
3.  **Instale as dependências (json-server)**
    ```bash
    npm install
    # ou
    yarn install
    ```

#### 3. Iniciando o JSON Server

Para iniciar o JSON Server, execute o seguinte comando no terminal, dentro do diretório `sprint2`:

```bash
npm start
# ou
yarn start
```

Isso iniciará o servidor na porta `3001` (ou outra porta disponível). Você deverá ver mensagens no terminal indicando que o `Db.json` está sendo servido.

#### 4. Abrindo o Projeto no Navegador

Com o JSON Server em execução, abra seu navegador web moderno (Chrome, Firefox, Edge, etc.) e acesse:

```
http://localhost:3001/index.html
```

(A porta pode variar dependendo do que o JSON Server indicar no terminal. Se a porta 3001 estiver em uso, ele tentará outra.)

### Opção 2: Com Dados Embutidos (Para Testes Rápidos sem Servidor)

Esta opção não requer a instalação de dependências ou a execução de um servidor. Os dados das empresas estão diretamente no `scriptEmbutido.js`.

#### 1. Abrindo o Projeto no Navegador

Simplesmente abra o arquivo `index.html` diretamente no seu navegador web moderno (Chrome, Firefox, Edge, etc.).

*   Navegue até a pasta `public/` dentro do diretório `sprint2`.
*   Abra o arquivo `index.html`.

### Alternando entre as Opções (Editando `index.html`)

Por padrão, o `index.html` carrega o `script.js` (que utiliza o JSON Server). Para alternar para a versão com dados embutidos, você precisará editar o arquivo `public/index.html`.

1.  Abra o arquivo `public/index.html` em um editor de texto.
2.  Localize a linha que carrega o script JavaScript, que deve ser semelhante a esta:
    ```html
    <script src="script.js"></script>
    ```
3.  Para usar a versão com dados embutidos, altere esta linha para:
    ```html
    <script src="scriptEmbutido.js"></script>
    ```
4.  Salve o arquivo `index.html` e recarregue a página no seu navegador.

Para voltar a usar a versão com JSON Server, basta reverter a alteração no `index.html` para `script.js`.

### 5. Permitir Acesso à Localização

*   Ao abrir a página, o navegador pode solicitar permissão para acessar sua localização. **Permita** para que a funcionalidade de geolocalização funcione corretamente.
*   Caso a permissão seja negada ou a localização não seja obtida automaticamente, você pode clicar no botão "📍 Usar Minha Localização" para tentar novamente.

### 6. Dicas para Melhorar a Precisão da Geolocalização

*   **Conexão à Internet**: Uma conexão Wi-Fi geralmente oferece melhor precisão do que dados móveis, pois pode usar informações de redes próximas.
*   **Ativar GPS**: Certifique-se de que o GPS do seu dispositivo esteja ativado.
*   **Ambiente**: Em ambientes fechados ou com muitos obstáculos (prédios altos), a precisão pode ser menor.
*   **Permissões do Navegador**: Verifique as configurações de privacidade do seu navegador para garantir que o acesso à localização não esteja restrito.

### 7. Usar os Filtros

*   **Filtro de Categoria**: Selecione uma categoria específica ou "Todas" para ver as empresas correspondentes.
*   **Filtro de Distância**: Escolha um raio de distância (1km, 5km, 10km, 20km) ou "Todas". As distâncias serão calculadas a partir da sua localização atual.
*   Os filtros funcionam de forma independente ou combinada.

### 8. Interagir com o Mapa

*   O mapa será centralizado na sua localização (se obtida) ou no centro padrão de Belo Horizonte.
*   Clique nos marcadores para ver informações detalhadas da empresa.
*   Use os controles de zoom (+/-) para navegar pelo mapa.
*   O mapa e os marcadores serão atualizados automaticamente conforme os filtros selecionados.

### 9. Visualizar a Lista de Empresas

*   A seção "Empresas Próximas" exibirá uma lista das empresas que correspondem aos filtros aplicados.
*   Cada item da lista mostrará o nome da empresa, categoria e a distância calculada da sua localização.

## Funcionalidades Testadas

✅ Obtenção da geolocalização do usuário (com aprimoramentos de precisão)
✅ Filtro por categoria funcionando corretamente
✅ Filtro por distância operacional com base na localização do usuário
✅ Lista de empresas atualizada dinamicamente
✅ Mapa interativo com marcadores
✅ Popups informativos nos marcadores
✅ Interface responsiva e intuitiva
✅ Carregamento de dados via JSON Server (padrão)
✅ Carregamento de dados embutidos (opcional, via edição manual)

## Tecnologias Utilizadas

-   **HTML5**: Estrutura da página
-   **CSS3**: Estilos e responsividade
-   **JavaScript**: Lógica de filtragem, interação e geolocalização
-   **Leaflet.js**: Biblioteca de mapas interativos
-   **OpenStreetMap**: Dados de mapa
-   **Node.js/npm**: Ambiente de execução e gerenciador de pacotes (para JSON Server)
-   **JSON Server**: API RESTful mock (opcional)

## Estrutura do Projeto

```
sprint2/
├── package.json        # Gerenciamento de dependências e scripts (para JSON Server)
├── public/
│   ├── index.html          # Página principal
│   ├── script.js           # Lógica JavaScript principal (usa JSON Server)
│   ├── scriptEmbutido.js   # Lógica JavaScript com dados embutidos
│   ├── styles.css          # Estilos CSS
│   └── Db.json            # Base de dados JSON (para JSON Server)
└── node_modules/       # Dependências do Node.js (gerado após npm install)
```

O projeto está pronto para uso e todas as funcionalidades do Sprint 2, incluindo a geolocalização aprimorada e as duas opções de carregamento de dados, foram implementadas e testadas com sucesso.


