document.addEventListener("DOMContentLoaded", () => {
  // Elementos da tabela
  const tabela = document.querySelector("#empresasTable tbody");
  const btnNovaEmpresa = document.querySelector("#btnNovaEmpresa");

  // Contadores
  const totalEmpresasSpan = document.querySelector("#totalEmpresas");
  const pendentesCountSpan = document.querySelector("#pendentesCount");

  // Filtros
  const filtroStatus = document.querySelector("#filtroStatus");
  const filtroSegmento = document.querySelector("#filtroSegmento");
  const filtroBusca = document.querySelector("#filtroBusca");
  const btnBuscar = document.querySelector("#btnBuscar");

  // Modal
  const modalDetalhes = new bootstrap.Modal(
    document.getElementById("detalhesEmpresa")
  );
  const modalTitle = document.querySelector("#detalhesEmpresa .modal-title");
  const modalBody = document.querySelector("#modalDetalhesBody");
  const btnAprovarModal = document.querySelector("#btnAprovarModal");
  const btnRejeitarModal = document.querySelector("#btnRejeitarModal");

  // Variável para armazenar a empresa sendo visualizada
  let empresaAtual = null;

  // Carrega empresas
  function carregarEmpresas() {
    return empresasDB.getEmpresas();
  }

  // Atualiza contadores
  function atualizarContadores() {
    const empresas = carregarEmpresas();
    const total = empresas.length;
    const pendentes = empresas.filter((e) => e.status === "pendente").length;

    totalEmpresasSpan.textContent = total;
    pendentesCountSpan.textContent = pendentes;
  }

  // Renderiza tabela
  function renderizarTabela(empresasFiltradas = carregarEmpresas()) {
    tabela.innerHTML = "";

    if (empresasFiltradas.length === 0) {
      tabela.innerHTML = `
        <tr>
          <td colspan="8" class="text-center py-4">
            Nenhuma empresa encontrada. 
            <a href="cadastro-empresa.html" class="text-primary">Cadastre uma nova empresa</a>
          </td>
        </tr>`;
      return;
    }

    empresasFiltradas.forEach((emp) => {
      const statusClass =
        {
          pendente: "badge-pendente",
          aprovado: "badge-aprovado",
          rejeitado: "badge-rejeitado",
        }[emp.status] || "badge-secondary";

      const linha = `
        <tr data-id="${emp.id}">
          <td>${emp.id}</td>
          <td>
            <div class="fw-bold">${emp.nomeFantasia}</div>
            <small class="text-muted">${emp.razaoSocial}</small>
          </td>
          <td>${emp.cnpj}</td>
          <td>${emp.responsavelNome}</td>
          <td>${emp.segmento}</td>
          <td>${emp.dataCadastro}</td>
          <td><span class="badge ${statusClass}">${emp.status}</span></td>
          <td>
            <div class="d-flex">
              ${
                emp.status !== "aprovado"
                  ? `
                <button class="btn btn-sm btn-success me-1 btn-aprovar" title="Aprovar">
                  <i class="fas fa-check"></i>
                </button>`
                  : ""
              }
              ${
                emp.status !== "rejeitado"
                  ? `
                <button class="btn btn-sm btn-danger me-1 btn-rejeitar" title="Rejeitar">
                  <i class="fas fa-times"></i>
                </button>`
                  : ""
              }
              <button class="btn btn-sm btn-primary me-1 btn-ver" title="Ver detalhes">
                <i class="fas fa-eye"></i>
              </button>
              <button class="btn btn-sm btn-warning btn-editar" title="Editar">
                <i class="fas fa-edit"></i>
              </button>
            </div>
          </td>
        </tr>`;
      tabela.insertAdjacentHTML("beforeend", linha);
    });
  }

  // Aplica filtros
  function aplicarFiltros() {
    const status = filtroStatus.value.toLowerCase();
    const segmento = filtroSegmento.value.toLowerCase();
    const busca = filtroBusca.value.toLowerCase();

    let resultado = carregarEmpresas();

    if (status) {
      resultado = resultado.filter((emp) => emp.status === status);
    }

    if (segmento) {
      resultado = resultado.filter((emp) =>
        emp.segmento.toLowerCase().includes(segmento)
      );
    }

    if (busca) {
      resultado = resultado.filter(
        (emp) =>
          emp.nomeFantasia.toLowerCase().includes(busca) ||
          emp.razaoSocial.toLowerCase().includes(busca) ||
          emp.cnpj.includes(busca) ||
          emp.responsavelNome.toLowerCase().includes(busca)
      );
    }

    renderizarTabela(resultado);
  }

  // Mostra detalhes da empresa
  function mostrarDetalhes(id) {
    empresaAtual = empresasDB.getEmpresaById(id);
    if (!empresaAtual) return;

    modalTitle.textContent = `Detalhes: ${empresaAtual.nomeFantasia}`;

    const servicos =
      empresaAtual.servicosInteresse &&
      empresaAtual.servicosInteresse.length > 0
        ? empresaAtual.servicosInteresse
            .map((s) => `<span class="badge bg-primary me-1">${s}</span>`)
            .join("")
        : "<em>Nenhum serviço selecionado</em>";

    modalBody.innerHTML = `
      <div class="row">
        <div class="col-md-6">
          <h5 class="text-muted mb-3">Dados da Empresa</h5>
          <ul class="list-group list-group-flush mb-3">
            <li class="list-group-item d-flex justify-content-between">
              <strong>Razão Social:</strong> <span>${
                empresaAtual.razaoSocial
              }</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              <strong>Nome Fantasia:</strong> <span>${
                empresaAtual.nomeFantasia
              }</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              <strong>CNPJ:</strong> <span>${empresaAtual.cnpj}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              <strong>Segmento:</strong> <span>${empresaAtual.segmento}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              <strong>Data Cadastro:</strong> <span>${
                empresaAtual.dataCadastro
              }</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              <strong>Status:</strong> 
              <span class="badge ${
                empresaAtual.status === "aprovado"
                  ? "bg-success"
                  : empresaAtual.status === "rejeitado"
                  ? "bg-danger"
                  : "bg-warning"
              }">
                ${empresaAtual.status}
              </span>
            </li>
          </ul>
        </div>
        <div class="col-md-6">
          <h5 class="text-muted mb-3">Dados do Responsável</h5>
          <ul class="list-group list-group-flush mb-3">
            <li class="list-group-item d-flex justify-content-between">
              <strong>Nome:</strong> <span>${
                empresaAtual.responsavelNome
              }</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              <strong>Cargo:</strong> <span>${
                empresaAtual.responsavelCargo || "Não informado"
              }</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              <strong>E-mail:</strong> <span>${
                empresaAtual.responsavelEmail
              }</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              <strong>Telefone:</strong> <span>${
                empresaAtual.responsavelTelefone
              }</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="mb-3">
        <h5 class="text-muted">Serviços de Interesse</h5>
        <div>${servicos}</div>
      </div>
      <div class="mb-3">
        <h5 class="text-muted">Observações</h5>
        <p>${empresaAtual.observacoes || "Nenhuma observação cadastrada."}</p>
      </div>`;

    // Atualiza botões do modal conforme status
    btnAprovarModal.style.display =
      empresaAtual.status !== "aprovado" ? "block" : "none";
    btnRejeitarModal.style.display =
      empresaAtual.status !== "rejeitado" ? "block" : "none";

    modalDetalhes.show();
  }

  // Aprova empresa
  function aprovarEmpresa(id) {
    empresasDB.updateEmpresa(id, { status: "aprovado" });
    aplicarFiltros();
    atualizarContadores();
  }

  // Rejeita empresa
  function rejeitarEmpresa(id) {
    empresasDB.updateEmpresa(id, { status: "rejeitado" });
    aplicarFiltros();
    atualizarContadores();
  }

  // Event listeners
  filtroStatus.addEventListener("change", aplicarFiltros);
  filtroSegmento.addEventListener("change", aplicarFiltros);
  filtroBusca.addEventListener("input", aplicarFiltros);
  btnBuscar.addEventListener("click", aplicarFiltros);

  btnNovaEmpresa.addEventListener("click", () => {
    window.location.href = "cadastro-empresa.html";
  });

  // Delegation para botões dinâmicos
  tabela.addEventListener("click", (e) => {
    const row = e.target.closest("tr");
    if (!row) return;

    const id = parseInt(row.dataset.id);

    // Aprovar empresa
    if (e.target.closest(".btn-aprovar")) {
      aprovarEmpresa(id);
    }

    // Rejeitar empresa
    if (e.target.closest(".btn-rejeitar")) {
      rejeitarEmpresa(id);
    }

    // Ver detalhes
    if (e.target.closest(".btn-ver")) {
      mostrarDetalhes(id);
    }

    // Editar empresa
    if (e.target.closest(".btn-editar")) {
      // Implemente a edição conforme necessário
      alert(`Editar empresa ${id} - Implemente esta funcionalidade`);
    }
  });

  // Eventos do modal
  btnAprovarModal.addEventListener("click", () => {
    if (empresaAtual) {
      aprovarEmpresa(empresaAtual.id);
      modalDetalhes.hide();
    }
  });

  btnRejeitarModal.addEventListener("click", () => {
    if (empresaAtual) {
      rejeitarEmpresa(empresaAtual.id);
      modalDetalhes.hide();
    }
  });

  // Inicialização
  atualizarContadores();
  renderizarTabela();
});
