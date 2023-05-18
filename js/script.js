
const navBar = () => {
    document.querySelector("#navBar").innerHTML =`
    <ul>
        <li><a href="index.html"><i id="i-inicio" class="fa-solid fa-house"></i><span id="span-inicio" class="span-nav">Inicio</span></a></li>
        <li><a href="DatosPersonales.html"><i id="i-perfil" class="fa-solid fa-user"></i><span id="span-perfil" class="span-nav">Perfil</span></a></li>
        <li><a href="Estudios.html"><i id="i-estudios" class="fa-solid fa-graduation-cap"></i><span id="span-estudios" class="span-nav">Estudios</span></a></li>
        <li><a href="ExperienciaLaboral.html"><i id="i-experiencia" class="fa-solid fa-briefcase"></i><span id="span-experiencia" class="span-nav">Experiencia</span></a></li>
        <li><a href="Proyectos.html"><i id="i-proyectos" class="fa-solid fa-diagram-project"></i><span id="span-proyectos" class="span-nav">Proyectos</span></a></li>
        <li><a href="Contactame.html"><i class="fa-solid fa-envelopes-bulk"></i><span id="span-inicio" class="span-nav">Contactame</span></a></li>
    </ul>
    `
}


const footer = () => {
    document.querySelector("#footer").innerHTML =`
    <footer class="div-icons-footer">
        <a  class="links-footer" target="_blank" href="https://www.linkedin.com/in/lucas-mart%C3%ADn-acu%C3%B1a-270776148/"><i id="linkedin" onmouseover="efectoHover(id)" onmouseout="removerHover(id)" class="fa-brands fa-linkedin-in"></i></a>
        <a class="links-footer" target="_blank" href="https://github.com/lmacuna"><i id="github" onmouseover="efectoHover(id)" onmouseout="removerHover(id)" class="fa-brands fa-github"></i></a>
        <a class="links-footer" target="_blank" href="https://walink.co/521028"><i id="whatsapp" onmouseover="efectoHover(id)" onmouseout="removerHover(id)" class="fa-brands fa-whatsapp"></i></a>
        <a class="links-footer" target="_blank" href="https://mail.google.com/mail/u/0/#inbox?compose=new"><i id="gmail" onmouseover="efectoHover(id)" onmouseout="removerHover(id)" class="fa-regular fa-envelope"></i></a>
    </footer>
    
    <div class="div-copy-footer">
        <p class="copy-footer"><a style="color:white !important" target="_blank" href="#">Copyright &copy; 2023 Luna Software</a></p>
    </div>
    `
}

const rotar = () => {
    let inputCheck = document.querySelector("#input-nav").checked
    const spanClass = document.querySelectorAll(".span-nav");
    
    inputCheck ? document.querySelector("#idIcono").classList.add("rotarIcono") : document.querySelector("#idIcono").classList.remove("rotarIcono")
    inputCheck ? spanClass.forEach(s => s.classList.add("menuDesplegado")) : spanClass.forEach(s => s.classList.remove("menuDesplegado"))
}

const efectoHover = (id) => {
    if (id === "github"){
        document.querySelector("#github").classList.add("movimiento")
    } else if (id === "linkedin"){
        document.querySelector("#linkedin").classList.add("movimiento")
    } else if (id === "whatsapp"){
        document.querySelector("#whatsapp").classList.add("movimiento")
    } else if (id === "gmail"){
        document.querySelector("#gmail").classList.add("movimiento")
    }
}

const removerHover = (id) => {
    if (id === "github"){
        document.querySelector("#github").classList.remove("movimiento")
    } else if (id === "linkedin"){
        document.querySelector("#linkedin").classList.remove("movimiento")
    } else if (id === "whatsapp"){
        document.querySelector("#whatsapp").classList.remove("movimiento")
    } else if (id === "gmail"){
        document.querySelector("#gmail").classList.remove("movimiento")
    }
}

footer();
navBar();
