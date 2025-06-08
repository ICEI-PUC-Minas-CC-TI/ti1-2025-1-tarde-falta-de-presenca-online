# Digitalize - Página de Detalhamento das Empresas - Larissa Varella Araújo

Exibe os dados da empresa recebida como parâmetro na URL

## Instruções para executar (local)

1. Instale: npm install 
2. Inicie o servidor: npm start 
3. Acesse o navegador abrindo a <a href="http://localhost:3000/index.html">página principal (index.html - "http://localhost:3000/index.html")</a> ou clicar na opção <a href="http://localhost:3000/index.html">Empresas</a> do menu lateral. A seguir, detalhar uma empresa e apertar no botão _Favorito_ no canto superior direito da página. Também foi criada página onde se pode visualizar e remover as empresas favoritadas. Para isso, clicar no  por meio da opção <a href="http://localhost:3000/favoritos.html">Empresas</a> do menu lateral.

## Informações Adicionais
- As empresas cadastradas e que podem ser detalhadas pelo "id" estão no arquiovo data/"empresas.json"
- Manter sempre ao menos "[ ]" dentro do "empresas.json" para a atualização dos cadastros

## Funcionalidades Implementadas

- Página de detalhamento dinâmico da empresa via Json e parâmetro (id) recebido na URL da página de consulta de empresas
- Utilização de Node
- Sistema de marcar mais de uma opção e passagem desses dados
- Rota para listar empresas cadastradas: http://localhost:3000/empresas.html. Ao selecionar uma empresa, será listada os dados dela na página de detalhe.
- Favoritar empresa: inclusão do botão _Favorito_ na página de detalhe de empresa e criação da página _Favoritos.html_ para visualização e remoção das empresas favoritadas.

