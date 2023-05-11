const informacionPersonal = () => {
    document.querySelector("#informacionPersonal").innerHTML = `
    <div id="titulo-datos" data-aos="fade-right">
        <h2 class="titulo-datos-personales">Datos Personales</h2>
    </div>

    <div id="content-datos" data-aos="fade-down">
        <div id="item"><span class="span"><strong>Apellido:</strong> Acuña.</span></div>
        <div id="item"><span class="span"><strong>Nombres:</strong> Lucas Martín.</span></div>
        <div id="item"><span class="span"><strong>Ciudad:</strong> San Miguel.</span></div>
        <div id="item"><span class="span"><strong>Provincia:</strong> Buenos Aires.</span></div>
        <div id="item"><span class="span"><strong>Telefono:</strong> 11-2380-2042.</span></div>
        <div id="item"><span class="span"><strong>Intro:</strong> Desarrollador de software Fullstack Javascript.
            Me apasiona el desafio de la programacion y la investigacion.
            Implementar y volcar conocimientos en proyectos web tanto en Front-end como en Back-end.
           
        </span></div>
    </div>
    `
}

informacionPersonal()