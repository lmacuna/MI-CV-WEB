const proyectos = () => {
    document.querySelector("#proyectos").innerHTML = `
    <div id="titulo-proyectos" data-aos="fade-right">
        <h2 class="titulo-proyectos">Proyectos</h2>
    </div>

    <div id="content-proyectos" data-aos="fade-down">
    <a class="a-proyectos" href="proyecto1.html"><i id="i-proyectos" class="fa-solid fa-diagram-project"></i><span id="span-proyectos" class="span-proyecto">Proyecto 1</span></a>
    <a class="a-proyectos" href="proyecto2.html"><i id="i-proyectos" class="fa-solid fa-diagram-project"></i><span id="span-proyectos" class="span-proyecto">Proyecto 2</span></a>
    </div>
    `
}

proyectos()