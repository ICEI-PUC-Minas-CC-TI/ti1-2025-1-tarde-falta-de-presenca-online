// Armazena e gerencia os dados das empresas
const empresasDB = {
  getEmpresas: () => {
    const empresas = localStorage.getItem("empresas");
    return empresas ? JSON.parse(empresas) : [];
  },

  saveEmpresas: (empresas) => {
    localStorage.setItem("empresas", JSON.stringify(empresas));
  },

  addEmpresa: (empresa) => {
    const empresas = empresasDB.getEmpresas();
    empresa.id = Date.now();
    empresa.dataCadastro = new Date().toLocaleDateString("pt-BR");
    empresa.status = "pendente";
    empresas.push(empresa);
    empresasDB.saveEmpresas(empresas);
    return empresa;
  },

  updateEmpresa: (id, updates) => {
    const empresas = empresasDB.getEmpresas();
    const index = empresas.findIndex((e) => e.id === id);
    if (index !== -1) {
      empresas[index] = { ...empresas[index], ...updates };
      empresasDB.saveEmpresas(empresas);
      return empresas[index];
    }
    return null;
  },

  deleteEmpresa: (id) => {
    const empresas = empresasDB.getEmpresas();
    const filtered = empresas.filter((e) => e.id !== id);
    empresasDB.saveEmpresas(filtered);
    return filtered.length !== empresas.length;
  },

  getEmpresaById: (id) => {
    return empresasDB.getEmpresas().find((e) => e.id === id);
  },
};
