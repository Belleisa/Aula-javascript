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
}

window.onload = inserir;

function calcPreco(tam, qt){
    var x = tam.inserir();
    var y = qt.inserir();
    
    if(x == 'a3' || x == 'A3'){
        x == 8;
    } 
    else if (x == 'a4' || x == 'A4'){
        x == 4;
    } 
    else {
        document.write("Tamanho do papel não disponível.");
    }
    
    var resultado = (x + 16) * y;
    
    document.write("O valor final da sua encomenda é: "+resultado);
    
    
    
}