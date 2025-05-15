const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const DATA_FILE = path.join(__dirname, 'empresas.json');

// Função para carregar dados existentes ou iniciar com array vazio
function loadEmpresas() {
  if (fs.existsSync(DATA_FILE)) {
    const content = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(content || '[]');
  }
  return [];
}

// Receber dados
app.post('/admin/cadastro', (req, res) => {
  const novaEmpresa = req.body;

  const empresas = loadEmpresas();
  empresas.push(novaEmpresa);

  fs.writeFileSync(DATA_FILE, JSON.stringify(empresas, null, 2));

  console.log(" -> Nova empresa cadastrada e salva no JSON:", novaEmpresa);
  res.status(200).json({ mensagem: "Cadastro salvo com sucesso!" });
});

// Rota opcional para consultar dados salvos
app.get('/admin/empresas', (req, res) => {
  const empresas = loadEmpresas();
  res.json(empresas);
});

app.listen(PORT, () => {
  console.log(` -> Servidor disponível em | http://localhost:${PORT} |`);
});
