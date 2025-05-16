const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const DATA_FILE = path.join(__dirname, "data", "empresas.json");

// Garante que o arquivo de dados existe
if (!fs.existsSync(path.dirname(DATA_FILE))) {
  fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
}
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, "[]");
}

// Rotas da API
app.get("/api/empresas", (req, res) => {
  try {
    const data = fs.readFileSync(DATA_FILE, "utf8");
    res.json(JSON.parse(data));
  } catch (error) {
    console.error("Erro ao ler empresas:", error);
    res.status(500).json({ error: "Erro ao carregar empresas" });
  }
});

app.post("/api/empresas", (req, res) => {
  try {
    const empresas = JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
    const novaEmpresa = {
      id: empresas.length > 0 ? Math.max(...empresas.map((e) => e.id)) + 1 : 1,
      ...req.body,
      status: "pendente",
      dataCadastro: new Date().toISOString(),
    };

    empresas.push(novaEmpresa);
    fs.writeFileSync(DATA_FILE, JSON.stringify(empresas, null, 2));
    res.status(201).json(novaEmpresa);
  } catch (error) {
    console.error("Erro ao criar empresa:", error);
    res.status(500).json({ error: "Erro ao criar empresa" });
  }
});

app.put("/api/empresas/:id/aprovar", (req, res) => {
  try {
    const empresas = JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
    const id = parseInt(req.params.id);

    const empresa = empresas.find((e) => e.id === id);
    if (!empresa)
      return res.status(404).json({ error: "Empresa não encontrada" });

    empresa.status = "aprovado";
    fs.writeFileSync(DATA_FILE, JSON.stringify(empresas, null, 2));
    res.json(empresa);
  } catch (error) {
    console.error("Erro ao aprovar empresa:", error);
    res.status(500).json({ error: "Erro ao aprovar empresa" });
  }
});

app.put("/api/empresas/:id/rejeitar", (req, res) => {
  try {
    const empresas = JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
    const id = parseInt(req.params.id);

    const empresa = empresas.find((e) => e.id === id);
    if (!empresa)
      return res.status(404).json({ error: "Empresa não encontrada" });

    empresa.status = "rejeitado";
    fs.writeFileSync(DATA_FILE, JSON.stringify(empresas, null, 2));
    res.json(empresa);
  } catch (error) {
    console.error("Erro ao rejeitar empresa:", error);
    res.status(500).json({ error: "Erro ao rejeitar empresa" });
  }
});

app.delete("/api/empresas/:id", (req, res) => {
  try {
    const empresas = JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
    const id = parseInt(req.params.id);

    const index = empresas.findIndex((e) => e.id === id);
    if (index === -1)
      return res.status(404).json({ error: "Empresa não encontrada" });

    const [empresaRemovida] = empresas.splice(index, 1);
    fs.writeFileSync(DATA_FILE, JSON.stringify(empresas, null, 2));

    console.log(`Empresa ${id} removida com sucesso`);
    res.json(empresaRemovida);
  } catch (error) {
    console.error("Erro ao remover empresa:", error);
    res.status(500).json({
      error: "Erro ao remover empresa",
      details: error.message,
    });
  }
});

// Rotas para páginas HTML
app.get(["/admin", "/empresas", "/cadastro-empresa"], (req, res) => {
  const page = req.path.substring(1) || "admin";
  res.sendFile(path.join(__dirname, "public", `${page}.html`));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log("Endpoints disponíveis:");
  console.log(`- GET    http://localhost:${PORT}/api/empresas`);
  console.log(`- POST   http://localhost:${PORT}/api/empresas`);
  console.log(`- PUT    http://localhost:${PORT}/api/empresas/:id/aprovar`);
  console.log(`- PUT    http://localhost:${PORT}/api/empresas/:id/rejeitar`);
  console.log(`- DELETE http://localhost:${PORT}/api/empresas/:id`);
});
