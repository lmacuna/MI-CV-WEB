var i=1;
const proyectosGit2 = () => {
   document.querySelector("#proyecto2").innerHTML=""
   document.querySelector("#proyecto2").innerHTML='<a class="a-proyecto1" target="_blank" href="https://github.com/lmacuna/App-node-example-1"><span class="span-a-codigo">Ir al Código</span></a>'
    i===1?document.querySelector("#proyecto2").innerHTML += `
    <article>
        <a class="a-proyecto" href="https://app-node-example-1.vercel.app/"  target="_blank"><img alt="imagen ecommerce" id="img-proyecto1" src="img/Node-img-2.jpeg"><span class="span-a">Ir a Produccion</span></a>
        
    </article>
    `:null
    i===2?document.querySelector("#proyecto2").innerHTML += `
    <article>
       
        <a class="a-proyecto" href="https://app-node-example-1.vercel.app/"  target="_blank"><img alt="imagen ecommerce" id="img-proyecto1" src="img/Node-img-1.jpeg"><span class="span-a">Ir a Produccion</span></a>
      
    </article>
    `:null
    i===3?document.querySelector("#proyecto2").innerHTML+= `
    <article>
       
        <a class="a-proyecto" href="https://app-node-example-1.vercel.app/"  target="_blank"><img alt="imagen ecommerce" id="img-proyecto1" src="img/Node-img-3.jpeg"><span class="span-a">Ir a Produccion</span></a>
    </article>
    `:null

    
}

proyectosGit2()

var cambio=false;
setInterval(() => {
    if(cambio===false){
        i++
        if(i===3){
            cambio=true
            
        }
    }else if(cambio===true){
        i=i-1
        if(i===1){
            cambio=false
        }
    }
    proyectosGit2()
},4000);