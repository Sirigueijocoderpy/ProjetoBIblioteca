function CriarTable() {
    // Evita criar a tabela mais de uma vez
    if (document.getElementById('Tabela')) {
        console.warn("Tabela já existe!");
        
    }

    // Define as colunas e as classes dos inputs correspondentes
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

    // Cria a tabela
    let table = document.createElement('table');
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

    // Cria as linhas de dados
    for (let i = 0; i < numLinhas; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < colunas.length; j++) {
            let td = document.createElement('td');
            td.textContent = dadosPorColuna[j][i].value || ''; // valor do input ou vazio
            td.style.border = '1px solid black';
            td.style.padding = '4px';
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    // Insere a tabela no container com classe 'table'
    let container = document.getElementsByClassName('table')[0];
    if (container) {
        container.appendChild(table);
    } else {
        console.error("Elemento com classe 'table' não encontrado.");
    }
}