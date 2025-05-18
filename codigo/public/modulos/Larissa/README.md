# Digitalize - Página de Detalhamento das Empresas - Larissa Varella Araújo

Exibe os dados da empresa recebida como parâmetro na URL

## Instruções para executar (local)

1. Instale: npm install 
2. Inicie o servidor: npm start 
3. Acesse no navegador abrindo a <a href="http://localhost:3000/index.html">página principal ("http://localhost:3000/index.html")</a> ou a página de <a href="http://localhost:3000/empresa_lista.html">listagem de empresas.</a>

## Informações Adicionais
- As empresas cadastradas e que podem ser detalhadas pelo "id" estão no arquiovo data/"empresas.json"
- Manter sempre ao menos "[ ]" dentro do "empresas.json" para a atualização dos cadastros

## Funcionalidades Implementadas

- Página de detalhamento dinâmico da empresa via Json e parâmetro (id) recebido na URL da página de consulta de empresas
- Utilização de Node
- Sistema de marcar mais de uma opção e passagem desses dados
- Rota para listar empresas cadastradas: http://localhost:3000/empresas.html. Ao selecionar uma empresa, será listada os dados dela na página de detalhe.

