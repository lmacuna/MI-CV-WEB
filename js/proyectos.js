var i=1;
const proyectosGit = () => {
   document.querySelector("#proyectos").innerHTML=""
   document.querySelector("#proyectos").innerHTML='<a class="a-proyecto" target="_blank" href="https://github.com/lmacuna/E-commerce-practice-3">Ir al Código</a>'
    i===1?document.querySelector("#proyectos").innerHTML += `
    <article>
        <a class="a-proyecto" href="https://lmacuna.github.io/E-commerce-practice-3/"  target="_blank"><img alt="imagen ecommerce" id="img-proyectos" src="img/E-commerce-1.jpeg">Ir a Produccion</a>
        
    </article>
    `:null
    i===2?document.querySelector("#proyectos").innerHTML += `
    <article>
       
        <a class="a-proyecto" href="https://lmacuna.github.io/E-commerce-practice-3/"  target="_blank"><img alt="imagen ecommerce" id="img-proyectos" src="img/E-commerce-2.jpeg">Ir a Produccion</a>
      
    </article>
    `:null
    i===3?document.querySelector("#proyectos").innerHTML+= `
    <article>
       
        <a class="a-proyecto" href="https://lmacuna.github.io/E-commerce-practice-3/"  target="_blank"><img alt="imagen ecommerce" id="img-proyectos" src="img/E-commerce-3.jpeg">Ir a Produccion</a>
    </article>
    `:null
}

proyectosGit()

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
    proyectosGit()
},4000);