function inserir(){
    var p = document.createElement("p");
    var pnome = document.createElement("p");
    var nome = document.createElement("input");
    var ptam = document.createElement("p");
    var tam = document.createElement("input");
    var pqt = document.createElement("p");
    var qt = document.createElement("input");
    var div = document.createElement("div");
    var form = document.createElement("form");
    
    p.innerHTML = "Encomende seu pôster!!";
    pnome.innerHTML = "Nome:";
    ptam.innerHTML = "Tamanho(A3 ou A4):";
    pqt.innerHTML = "Quantos pôsteres você deseja?";
    
    
    form.appendChild(p);
    form.appendChild(pnome);
    form.appendChild(nome);
    form.appendChild(ptam);
    form.appendChild(tam);
    form.appendChild(pqt);
    form.appendChild(qt);
    div.appendChild(form);
    document.body.appendChild(div);
    
    var btn = document.getElementsByTagName("button");
    div.appendChild(btn);
    
    nome.setAttribute("type","text");
    nome.setAttribute("id","nome");
    tam.setAttribute("type","text");
    tam.setAttribute("id","tam");
    qt.setAttribute("type","numeric");
    qt.setAttribute("id","qt");
    
    
    
}

window.onload = inserir;

function tamanho(){
    var x = document.getElementsById("tam");
    return x;
}

function quantidade(){
    var y = document.getElementsById("qt");
    return y;
}

 function nome(){
    var z = document.getElementsById("nome");
    return z;
}

function montarTabela(resp){
    var table = document.createElement("table");
    var tHead = document.createElement("thead");
    var trowh = document.createElement("tr");
    var thnome = document.createElement("th");
    var thtam = document.createElement("th");
    var thqt = document.createElement("th");
    var thpf = document.createElement("th");
    
    thnome.innerHTML = "NOME";
    thtam.innerHTML = "TAMANHO";
    thqt.innerHTML = "QUANTIDADE";
    thpf.innerHTML = "PREÇO TOTAL";
    
    var vetObj = resp.dados;
    var tbody = document.createElement("tbody");
    for (var i=0; i < vetObj.length; i++){
        var tr = document.createElement("tr"); 
        var tdNome = document.createElement("td"); 
        var tdTam = document.createElement("td"); 
        var tdQt = document.createElement("td"); 
        var tdPf = document.createElement("td"); 
        
        tdNome.innerHTML = vetObj[i].nome;
        tdTam.innerHTML = vetObj[i].tam;
        tdQt.innerHTML = vetObj[i].qt;
        tdPf.innerHTML = vetObj[i].tam*vetObj[i].qt;
        
        tr.appendChild(tdNome);
        tr.appendChild(tdTam);
        tr.appendChild(tdQt);
        tr.appendChild(tdPf);
        tbody.appendChild(tr);
        
    }
    
    tHead.appendChild(thnome);
    tHead.appendChild(thtam);
    tHead.appendChild(thqt);
    tHead.appendChild(thpf);
    table.appendChild(tHead);
    table.appendChild(tbody);
    
    var div = document.querySelector(".tabela");
    div.appendChild(table);
    
}


function iniciarTabela(){
    montarTabela({dados: [{nome:nome(); tam:tamanho(); qt:quantidade()}]});
}

