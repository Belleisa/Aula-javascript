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


