// empresas-crud.js - Gerenciamento de empresas com localStorage

class EmpresaCRUD {
  constructor() {
    this.empresas =
      JSON.parse(localStorage.getItem("empresasDigitalize")) || [];
    this.currentId =
      this.empresas.length > 0
        ? Math.max(...this.empresas.map((e) => e.id))
        : 0;
  }

  // Cria uma nova empresa
  create(empresaData) {
    const novaEmpresa = {
      id: ++this.currentId,
      ...empresaData,
      dataCadastro: new Date().toISOString(),
      status: "pendente",
    };

    this.empresas.push(novaEmpresa);
    this._saveToLocalStorage();
    return novaEmpresa;
  }

  // Lê todas as empresas ou filtra por critérios
  read(filters = {}) {
    let resultado = [...this.empresas];

    // Aplicar filtros
    if (filters.status) {
      resultado = resultado.filter(
        (emp) => emp.status.toLowerCase() === filters.status.toLowerCase()
      );
    }

    if (filters.segmento) {
      resultado = resultado.filter((emp) =>
        emp.segmento.toLowerCase().includes(filters.segmento.toLowerCase())
      );
    }

    if (filters.search) {
      const termo = filters.search.toLowerCase();
      resultado = resultado.filter(
        (emp) =>
          emp.razaoSocial.toLowerCase().includes(termo) ||
          emp.nomeFantasia.toLowerCase().includes(termo) ||
          emp.cnpj.includes(termo) ||
          emp.responsavelNome.toLowerCase().includes(termo)
      );
    }

    return resultado;
  }

  // Atualiza uma empresa existente
  update(id, updatedData) {
    const index = this.empresas.findIndex((emp) => emp.id === id);
    if (index !== -1) {
      this.empresas[index] = { ...this.empresas[index], ...updatedData };
      this._saveToLocalStorage();
      return this.empresas[index];
    }
    return null;
  }

  // Remove uma empresa
  delete(id) {
    const index = this.empresas.findIndex((emp) => emp.id === id);
    if (index !== -1) {
      this.empresas.splice(index, 1);
      this._saveToLocalStorage();
      return true;
    }
    return false;
  }

  // Aprova uma empresa
  approve(id) {
    return this.update(id, { status: "aprovado" });
  }

  // Rejeita uma empresa
  reject(id) {
    return this.update(id, { status: "rejeitado" });
  }

  // Obtém uma empresa por ID
  getById(id) {
    return this.empresas.find((emp) => emp.id === id);
  }

  // Salva no localStorage
  _saveToLocalStorage() {
    localStorage.setItem("empresasDigitalize", JSON.stringify(this.empresas));
  }

  // Contadores para dashboard
  getCounts() {
    return {
      total: this.empresas.length,
      aprovadas: this.empresas.filter((emp) => emp.status === "aprovado")
        .length,
      pendentes: this.empresas.filter((emp) => emp.status === "pendente")
        .length,
      rejeitadas: this.empresas.filter((emp) => emp.status === "rejeitado")
        .length,
    };
  }
}

// Instância global do CRUD
const empresaCRUD = new EmpresaCRUD();

// Manipulação do formulário de cadastro
$(document).ready(function () {
  $("#empresaForm").submit(function (e) {
    e.preventDefault();

    // Coletar dados do formulário
    const empresaData = {
      razaoSocial: $("#razaoSocial").val(),
      nomeFantasia: $("#nomeFantasia").val(),
      cnpj: $("#cnpj").val(),
      segmento: $("#segmento").val(),
      dataFundacao: $("#dataFundacao").val(),
      site: $("#site").val() ? "https://" + $("#site").val() : "",
      responsavelNome: $("#responsavelNome").val(),
      responsavelCargo: $("#responsavelCargo").val(),
      responsavelEmail: $("#responsavelEmail").val(),
      responsavelTelefone: $("#responsavelTelefone").val(),
      servicosInteresse: {
        site: $("#servicoSite").is(":checked"),
        marketing: $("#servicoMarketing").is(":checked"),
        seo: $("#servicoSEO").is(":checked"),
        redes: $("#servicoRedes").is(":checked"),
        erp: $("#servicoERP").is(":checked"),
      },
      observacoes: $("#observacoes").val(),
    };

    // Validar campos obrigatórios
    if (
      !empresaData.razaoSocial ||
      !empresaData.nomeFantasia ||
      !empresaData.cnpj ||
      !empresaData.segmento ||
      !empresaData.responsavelNome ||
      !empresaData.responsavelCargo ||
      !empresaData.responsavelEmail ||
      !empresaData.responsavelTelefone ||
      !$("#termos").is(":checked")
    ) {
      alert(
        "Por favor, preencha todos os campos obrigatórios e aceite os termos."
      );
      return;
    }

    // Adicionar empresa
    const novaEmpresa = empresaCRUD.create(empresaData);

    // Feedback e redirecionamento
    alert(
      `Empresa ${novaEmpresa.nomeFantasia} cadastrada com sucesso! ID: ${novaEmpresa.id}`
    );
    $(this).trigger("reset");

    // Atualizar contadores nas outras páginas
    updateBadgeCounts();
  });
});

// Atualiza os contadores nos badges
function updateBadgeCounts() {
  const counts = empresaCRUD.getCounts();

  // Atualizar na página de empresas
  $(".badge-empresas-total").text(counts.total);
  $(".badge-empresas-pendentes").text(counts.pendentes);

  // Atualizar na sidebar do admin
  $(".badge-empresas-count").text(counts.total);
  $(".badge-pendentes-count").text(counts.pendentes);
}

// Inicializar contadores quando a página carrega
updateBadgeCounts();
