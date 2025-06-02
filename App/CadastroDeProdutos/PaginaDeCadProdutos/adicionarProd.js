// Configuração das colunas da tabela
const colunas = [
    { nome: 'Autor', classe: 'Autor' },
    { nome: 'Título', classe: 'Titulo' },
    { nome: 'Subtítulo', classe: 'subtitulo' },
    { nome: 'Editora', classe: 'Editora' },
    { nome: 'Local de Publicação', classe: 'Local-pub' },
    { nome: 'Ano', classe: 'Ano' },
    { nome: 'Número de Página', classe: 'NumPag' },
    { nome: 'Processo de Classificação', classe: 'Classificaçao' }
];

function inicializarTabela() {
    // Verifica se a tabela já existe
    let table = document.getElementById('Tabela');
    
    // Se a tabela não existir, cria uma nova
    if (!table) {
        // Cria a tabela
        table = document.createElement('table');
        table.id = 'Tabela';
        table.style.borderCollapse = 'collapse';
        table.style.width = '100%';
        
        // Cria o cabeçalho
        let tr_th = document.createElement('tr');
        for (let col of colunas) {
            let th = document.createElement('th');
            th.textContent = col.nome;
            th.style.border = '1px solid black';
            th.style.padding = '4px';
            th.style.backgroundColor = '#7b0000';
            tr_th.appendChild(th);
        }
        table.appendChild(tr_th);
        
        // Insere a tabela no container com classe 'table'
        let container = document.getElementsByClassName('table')[0];
        if (container) {
            // Configurando o container para expandir conforme necessário
            container.style.maxHeight = "none";
            container.style.overflow = "auto";
            container.appendChild(table);
        } else {
            console.error("Elemento com classe 'table' não encontrado.");
        }
    }
    
    return table;
}

function adicionarLinha() {
    // Pega os inputs de cada classe
    let dadosPorColuna = colunas.map(col => 
        Array.from(document.getElementsByClassName(col.classe))
    );

    // Verifica se todos têm o mesmo número de inputs
    const numLinhas = dadosPorColuna[0].length;
    for (let i = 1; i < dadosPorColuna.length; i++) {
        if (dadosPorColuna[i].length !== numLinhas) {
            console.error(`Número de inputs diferente para a classe ${colunas[i].classe}`);
            return;
        }
    }
    
    // Obtém ou inicializa a tabela
    let table = inicializarTabela();

    // Adiciona apenas as novas linhas (usando o último input de cada coluna)
    let tr = document.createElement('tr');
    for (let j = 0; j < colunas.length; j++) {
        let td = document.createElement('td');
        // Pega o valor do último input de cada coluna
        const lastIndex = dadosPorColuna[j].length - 1;
        td.textContent = dadosPorColuna[j][lastIndex].value || '';
        td.style.border = '1px solid black';
        td.style.padding = '4px';
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

// Para compatibilidade com código existente
function CriarTable() {
    adicionarLinha();
}