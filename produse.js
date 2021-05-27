window.onload = function(){
    fetch('http://localhost:3000/Produse', {
         method: 'get'
        }).then((response)=>{
            response.json().then((data)=>{
                var x = document.getElementById("lista_prajituri");
            x.style.display = "flex";
            x.style.flexDirection = "row";
            x.style.flexWrap = "wrap";
            x.style.justifyContent = "space-around";
            x.style.marginTop = "90px";
            x.style.marginLeft = "60px";
            x.style.justifyContent = "center";
            x.style.marginBottom = "50px";

        for( i = 0; i < data.length; i++ ){
            let produs = document.createElement('div');
            let denumire = document.createElement('p');
            denumire.className = 'nume'
            let pret = document.createElement('p');
            pret.className = 'pret'
            let poza = document.createElement('img');
            poza.className = 'poza_produs'
            poza.src = data[i].poza;
            poza.style.maxWidth = "220px";
            poza.style.marginLeft = "5px";
            poza.style.marginRight = "5px";
            poza.style.maxHeight = "350px";
            poza.style.marginTop = "2%";
            poza.style.justifyContent = "center";
            denumire.innerHTML = data[i].denumire;
            denumire.style.textAlign = "center";
            pret.innerHTML = "Pret " + data[i].pret + "  lei";
            pret.style.textAlign = "center";
            produs.style.backgroundColor = "rgb(148, 148, 148)";
            produs.style.marginLeft = "20px";
            produs.style.marginBottom = "20px";
            produs.style.width = "230px";
            produs.className = "produse";
            buton = document.createElement('button')
            buton.innerHTML = 'adauga'
            buton.style.justifyContent = 'center'
            buton.style.marginLeft = '85px'
            cantitate = document.createElement('input')
            cantitate.className = 'cantitate'
            cantitate.style.width = '30px'
            cantitate.style.marginLeft = '90px'
            produs.append(denumire);
            produs.append(poza);
            produs.append(pret);
            x.append(produs);
        }
    })
});          
fetch('http://localhost:3000/recenzii', {
    method: 'get'
   }).then((response)=>{
       response.json().then((data)=>{
           for( let i = 0; i < data.length; i++ ){
               var x = document.getElementById("recenzii");
               var y = document.createElement('div');
               var text = data[i].recenzie;
               var recenzie = document.createElement('div');
               recenzie.innerHTML = text;
               recenzie.style.marginLeft = "40px";
               var titlu = document.createElement('div');
               titlu.innerHTML = 'Recenzia numarul: ' + (i+1)
               var buton_stergere = document.createElement('button');
               buton_stergere.innerHTML = "X";
               let produs_id = data[i].id;
               buton_stergere.onclick = function(){stergere(produs_id)};
               y.append(titlu)
               y.append(recenzie);
               y.append(buton_stergere)
               var spatiu = document.createElement('br');
               y.append(spatiu);
               y.style.fontSize = "15px";
               y.style.marginLeft = '50px'
               x.append(y);
} 
  
})}); }
function posteaza(){
    var text = document.getElementById("recenzie").value;
    var recenzie = {
        recenzie : text
    }
    fetch('http://localhost:3000/recenzii', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(recenzie)
    }).then(function(response) {
       window.location.reload();
    })
}
function stergere(produs_id){
    fetch('http://localhost:3000/recenzii/' + produs_id, {
    method: 'delete',
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(function(response) 
    {
        window.location.reload();
    })
}
