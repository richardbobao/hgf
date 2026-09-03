// Funcionalidade 1 e 2: Calcular Média e Verificar Situação
function calcularResultado() {
    const n1 = parseFloat(document.getElementById('nota1').value);
    const n2 = parseFloat(document.getElementById('nota2').value);
    const n3 = parseFloat(document.getElementById('nota3').value);
    
    const aulasTotais = parseInt(document.getElementById('aulas-totais').value);
    const presencas = parseInt(document.getElementById('presencas').value);

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        alert("Por favor, preencha todas as notas corretamente!");
        return;
    }

    // Cálculo da média
    const media = (n1 + n2 + n3) / 3;
    
    // Verificação de situação acadêmica
    let situacao = "";
    let classeSituacao = "";

    if (media >= 7.0) {
        situacao = "APROVADO";
        classeSituacao = "status-aprovado";
    } else if (media >= 5.0) {
        situacao = "RECUPERAÇÃO";
        classeSituacao = "status-recuperacao";
    } else {
        situacao = "REPROVADO";
        classeSituacao = "status-reprovado";
    }

    // Funcionalidade 3: Calcular Frequência
    let percentualFrequencia = 0;
    let situacaoFrequencia = "Insuficiente";

    if (!isNaN(aulasTotais) && !isNaN(presencas) && aulasTotais > 0) {
        percentualFrequencia = (presencas / aulasTotais) * 100;
        if (percentualFrequencia >= 75) {
            situacaoFrequencia = "Frequência adequada";
        } else {
            situacaoFrequencia = "Abaixo da frequência mínima";
        }
    }

    // Exibir resultados na tela
    document.getElementById('res-media').innerText = media.toFixed(1).replace('.', ',');
    
    const elSituacao = document.getElementById('res-situacao');
    elSituacao.innerText = situacao;
    elSituacao.className = classeSituacao;

    document.getElementById('res-frequencia').innerText = percentualFrequencia.toFixed(0) + "%";
    document.getElementById('res-situacao-freq').innerText = situacaoFrequencia;

    document.getElementById('resultado-calculo').classList.remove('hidden');
}

// Funções dos Botões
function consultarNotas() {
    document.getElementById('boletim').scrollIntoView({ behavior: 'smooth' });
}

function consultarFaltas() {
    alert("Consulta de Faltas Detalhada:\nTotal de ausências no ano: 8 aulas (Frequência Geral: 92%).");
}

function rolarParaCalculadora() {
    document.getElementById('calculadora').scrollIntoView({ behavior: 'smooth' });
}

function imprimirBoletim() {
    window.print();
}

function limparCampos() {
    document.getElementById('form-media').reset();
    document.getElementById('resultado-calculo').classList.add('hidden');
}

function voltarTopo() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
