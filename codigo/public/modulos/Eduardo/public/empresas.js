document.addEventListener("DOMContentLoaded", async () => {
  const empresasDB = new EmpresasCRUD();

  // Elementos da tabela
  const tabela = document.querySelector("#empresas-table");
  const btnNovaEmpresa = document.querySelector("#btnNovaEmpresa");

  // Contadores
  const totalEmpresasSpan = document.querySelector("#totalEmpresas");
  const pendentesCountSpan = document.querySelector("#pendentesCount");

  // Filtros
  const filtroStatus = document.querySelector("#filtroStatus");
  const filtroSegmento = document.querySelector("#filtroSegmento");
  const filtroBusca = document.querySelector("#filtroBusca");
  const btnBuscar = document.querySelector("#btnBuscar");

  // Redireciona para cadastro de empresa
  btnNovaEmpresa.addEventListener("click", () => {
    window.location.href = "cadastro-empresa.html";
  });

  // Carrega e exibe empresas
  async function carregarEmpresas() {
    await empresasDB.carregarEmpresas();
    atualizarContadores();
    renderizarTabela();
  }

  // Atualiza contadores
  function atualizarContadores() {
    const contadores = empresasDB.getContadores();
    totalEmpresasSpan.textContent = contadores.total;
    pendentesCountSpan.textContent = contadores.pendentes;
  }

  // Renderiza tabela
  async function renderizarTabela(empresasFiltradas = null) {
    const empresas = empresasFiltradas || empresasDB.empresas;
    tabela.innerHTML = "";

    if (empresas.length === 0) {
      tabela.innerHTML = `
        <tr>
          <td colspan="4" class="text-center py-4">
            Nenhuma empresa encontrada. 
            <a href="cadastro-empresa.html" class="text-primary">Cadastre uma nova empresa</a>
          </td>
        </tr>`;
      return;
    }

    empresas.forEach((emp) => {
      const statusClass =
        emp.status === "pendente"
          ? "badge-pendente"
          : emp.status === "aprovado"
          ? "badge-aprovado"
          : emp.status === "rejeitado"
          ? "badge-rejeitado"
          : "badge-secondary";

      const linha = `
        <tr>
          <td>${emp.id}</td>
          <td>${emp.nomeFantasia}</td>
          <td>${emp.cnpj}</td>
          <td><span class="badge ${statusClass}">${emp.status}</span></td>
        </tr>`;
      tabela.insertAdjacentHTML("beforeend", linha);
    });
  }

  // Aplica filtros
  function aplicarFiltros() {
    const status = filtroStatus.value;
    const segmento = filtroSegmento.value;
    const busca = filtroBusca.value.toLowerCase();

    const empresasFiltradas = empresasDB.getEmpresasFiltradas({
      status,
      segmento,
      busca,
    });

    renderizarTabela(empresasFiltradas);
  }

  // Event listeners para filtros
  filtroStatus.addEventListener("change", aplicarFiltros);
  filtroSegmento.addEventListener("change", aplicarFiltros);
  filtroBusca.addEventListener("input", aplicarFiltros);
  btnBuscar.addEventListener("click", aplicarFiltros);

  // Inicializa a página
  await carregarEmpresas();
});
