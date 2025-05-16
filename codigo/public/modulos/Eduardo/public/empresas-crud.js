class EmpresasCRUD {
  constructor() {
    this.empresas = [];
    this.carregarEmpresas();
  }

  async carregarEmpresas() {
    try {
      const response = await fetch("/api/empresas");
      if (!response.ok) throw new Error("Erro ao carregar empresas");
      this.empresas = await response.json();
    } catch (error) {
      console.error("Erro:", error);
      this.empresas = [];
    }
  }

  async aprovarEmpresa(id) {
    try {
      const response = await fetch(`/api/empresas/${id}/aprovar`, {
        method: "PUT",
      });
      if (!response.ok) throw new Error("Erro ao aprovar empresa");
      return await response.json();
    } catch (error) {
      console.error("Erro:", error);
      throw error;
    }
  }

  async rejeitarEmpresa(id) {
    try {
      const response = await fetch(`/api/empresas/${id}/rejeitar`, {
        method: "PUT",
      });
      if (!response.ok) throw new Error("Erro ao rejeitar empresa");
      return await response.json();
    } catch (error) {
      console.error("Erro:", error);
      throw error;
    }
  }

  getEmpresasFiltradas(filtros = {}) {
    let resultado = [...this.empresas];

    if (filtros.status) {
      resultado = resultado.filter((e) => e.status === filtros.status);
    }

    if (filtros.segmento) {
      resultado = resultado.filter((e) =>
        e.segmento.toLowerCase().includes(filtros.segmento.toLowerCase())
      );
    }

    if (filtros.busca) {
      resultado = resultado.filter(
        (e) =>
          e.nomeFantasia.toLowerCase().includes(filtros.busca) ||
          e.razaoSocial.toLowerCase().includes(filtros.busca) ||
          e.cnpj.includes(filtros.busca) ||
          e.responsavelNome.toLowerCase().includes(filtros.busca)
      );
    }

    return resultado;
  }

  getContadores() {
    return {
      total: this.empresas.length,
      pendentes: this.empresas.filter((e) => e.status === "pendente").length,
      aprovadas: this.empresas.filter((e) => e.status === "aprovado").length,
      rejeitadas: this.empresas.filter((e) => e.status === "rejeitado").length,
    };
  }
}

const empresasDB = new EmpresasCRUD();
