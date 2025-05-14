document.addEventListener("DOMContentLoaded", () => {
  const tabela = document.querySelector("#empresasTable tbody");
  const filtroStatus = document.querySelector("#filtroStatus");
  const filtroSegmento = document.querySelector("#filtroSegmento");
  const filtroBusca = document.querySelector("#filtroBusca");

  let empresas = JSON.parse(
    localStorage.getItem("empresasCadastradas") || "[]"
  );

  function renderizarTabela(filtradas) {
    tabela.innerHTML = "";

    if (filtradas.length === 0) {
      tabela.innerHTML =
        '<tr><td colspan="7" class="text-center">Nenhuma empresa encontrada.</td></tr>';
      return;
    }

    for (const emp of filtradas) {
      const linha = `
          <tr>
            <td>${emp.razaoSocial}</td>
            <td>${emp.nomeFantasia}</td>
            <td>${emp.cnpj}</td>
            <td>${emp.segmento}</td>
            <td>${emp.responsavelNome}</td>
            <td>${emp.dataCadastro}</td>
            <td><span class="badge bg-${
              emp.status === "aprovado"
                ? "success"
                : emp.status === "rejeitado"
                ? "danger"
                : "warning"
            } text-uppercase">${emp.status}</span></td>
          </tr>`;
      tabela.insertAdjacentHTML("beforeend", linha);
    }
  }

  function aplicarFiltros() {
    let resultado = empresas;

    const status = filtroStatus.value.toLowerCase();
    const segmento = filtroSegmento.value.toLowerCase();
    const busca = filtroBusca.value.toLowerCase();

    if (status) {
      resultado = resultado.filter(
        (emp) => emp.status.toLowerCase() === status
      );
    }

    if (segmento) {
      resultado = resultado.filter(
        (emp) => emp.segmento.toLowerCase() === segmento
      );
    }

    if (busca) {
      resultado = resultado.filter(
        (emp) =>
          emp.nomeFantasia.toLowerCase().includes(busca) ||
          emp.razaoSocial.toLowerCase().includes(busca)
      );
    }

    renderizarTabela(resultado);
  }

  filtroStatus.addEventListener("change", aplicarFiltros);
  filtroSegmento.addEventListener("change", aplicarFiltros);
  filtroBusca.addEventListener("input", aplicarFiltros);

  // Inicial
  renderizarTabela(empresas);
});
