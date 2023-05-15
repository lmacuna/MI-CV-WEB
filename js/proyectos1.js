var i=1;
const proyectosGit1 = () => {
   document.querySelector("#proyecto1").innerHTML=""
   document.querySelector("#proyecto1").innerHTML='<a class="a-proyecto1" target="_blank" href="https://github.com/lmacuna/E-commerce-practice-3"><span class="span-a-codigo">Ir al Código</span></a>'
    i===1?document.querySelector("#proyecto1").innerHTML += `
    <article>
        <a class="a-proyecto" href="https://lmacuna.github.io/E-commerce-practice-3/"  target="_blank"><img alt="imagen ecommerce" id="img-proyecto1" src="img/E-commerce-1.jpeg"><span class="span-a">Ir a Produccion</span></a>
        
    </article>
    `:null
    i===2?document.querySelector("#proyecto1").innerHTML += `
    <article>
       
        <a class="a-proyecto" href="https://lmacuna.github.io/E-commerce-practice-3/"  target="_blank"><img alt="imagen ecommerce" id="img-proyecto1" src="img/E-commerce-2.jpeg"><span class="span-a">Ir a Produccion</span></a>
      
    </article>
    `:null
    i===3?document.querySelector("#proyecto1").innerHTML+= `
    <article>
       
        <a class="a-proyecto" href="https://lmacuna.github.io/E-commerce-practice-3/"  target="_blank"><img alt="imagen ecommerce" id="img-proyecto1" src="img/E-commerce-3.jpeg"><span class="span-a">Ir a Produccion</span></a>
    </article>
    `:null

    
}

proyectosGit1()

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
    proyectosGit1()
},4000);