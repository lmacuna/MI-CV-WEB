const estudios = () => {
    document.querySelector("#estudios").innerHTML = `
    <div id="titulo-estudios" data-aos="fade-right">
        <h2 class="titulo-estudios">Estudios Cursados</h2>
    </div>

    <div id="content-estudios" data-aos="fade-down">
        <div id="item"><span class="span"><strong>Técnico Programador:</strong> Instituto TECLAB 2° año(en curso).</span></div>
        <div id="item"><span class="span"><strong>Secundario:</strong>EEM n°4 de JC PAZ (Finalizado).</span></div>
        <div id="item"><span class="span"><strong>Ciclo Básico Secundario:</strong> E.N.E.T. Ntra Sra del Valle de Muñiz.</span></div>
        <div id="item"><span class="span"><strong>JAVA Fundamentos:</strong> ITMaster Academy(ORACLE Cert.).</span></div>
        <div id="item"><span class="span"><strong>Javascript FullSatck:</strong> Academia GUAYERD.</span></div>
        <div id="item"><span class="span"><strong>PYTHON Basico:</strong> CIVET.</span></div>
      
    </div>
    `
}

estudios()