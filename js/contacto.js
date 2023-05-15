const contactame = () => {
    document.querySelector("#contactame").innerHTML = `
    <section>
        <h2> Contacto</h2>
        <form id="form" class="form-contacto">
            <div id="box-nombre" class="box-form">
                <input autocomplete="off" class="input-form" id="nombre" name="nombre" type="text" placeholder="Nombre"></input>
                <div class="tilde-nombre" id="tilde-nombre"></div>
            </div>

            <div class="nombre-vacio" id="nombre-vacio">
            </div>
            <div id="box-email" class="box-form">
            <input id="email" name="email" class="input-form" type="text" placeholder="E-Mail"></input>
            <div class="tilde-email" id="tilde-email"></div></div>
            <div class="email-vacio" id="email-vacio">
            </div>
            <div id="box-asunto" class="box-form">
            <input id="asunto" class="input-form" name="asunto" type="text" placeholder="Asunto"></input>
            <div class="tilde-asunto" id="tilde-asunto"></div></div>
            <div class="asunto-vacio" id="asunto-vacio">
            </div>
            <div id="box-mensaje" class="box-mensaje"><textarea id="mensaje" name="mensaje" row="30" column="10" placeholder="Mensaje min 20 caracteres"></textarea><div class="tilde-mensaje" id="tilde-mensaje"></div></div>
            <div class="mensaje-vacio" id="mensaje-vacio">
            </div>
            <div class="box-btn"><input class="btn-contactame" type="submit" value="ENVIAR"></input><input id="reset" class="btn-reset" type="reset"></input></div>
        </form>
    </section>
    `

}

contactame()



const form = document.querySelector("#form")
form.addEventListener('submit', (e) => {
    e.preventDefault()

    const data = new FormData(e.currentTarget)
    nombre = document.querySelector("#nombre").value
    email = document.querySelector("#email").value
    asunto = document.querySelector("#asunto").value
    mensaje = document.querySelector("#mensaje").value

    if (nombre !== "" && email !== "" && asunto !== "" && mensaje !== "") {

        var respuesta = validarEmail(email)
        console.log(respuesta)
        if (!respuesta || mensaje.length < 20) {
            !respuesta ? document.querySelector("#email-vacio").innerText = "*correo no válido o incorrecto" : null
            mensaje.length < 20 ? document.querySelector("#mensaje-vacio").innerText = "*Mínimo 20 caracteres" : null

        } else if (respuesta && mensaje.length >= 20) {



            var id;
            var metodo = 'POST-CONTACTO'
            const info = async () => {
                var res = await peticiones(id, data, metodo)
                return (console.log(res.data), recibido(res))
            }
            info()
            resetear()
        }

    } else if (nombre === "" || email === "" || asunto === "" || mensaje === "") {
        !nombre ? (document.querySelector("#nombre-vacio").innerText = "*falta completar el nombre", document.querySelector("#nombre").classList.add("input-rojo"), document.querySelector("#tilde-nombre").innerHTML = `<div style="color:red;height:24px">X</div>`) : null
        !email ? (document.querySelector("#email-vacio").innerText = "*falta completar el email", document.querySelector("#email").classList.add("input-rojo"), document.querySelector("#tilde-email").innerHTML = `<div style="color:red;height:24px">X</div>`) : null
        !asunto ? (document.querySelector("#asunto-vacio").innerText = "*falta completar el asunto", document.querySelector("#asunto").classList.add("input-rojo"), document.querySelector("#tilde-asunto").innerHTML = `<div style="color:red;height:24px">X</div>`) : null
        !mensaje ? (document.querySelector("#mensaje-vacio").innerText = "*falta completar el mensaje", document.querySelector("#mensaje").classList.add("textarea-rojo"), document.querySelector("#tilde-mensaje").innerHTML = `<div style="color:red;height:24px">X</div>`) : null
    }

})

const recibido = (res) => {
    Swal.fire({
        text: res.data,
        icon: 'success',
        color: 'rgb(161, 161, 161)',
        iconColor: 'rgba(5, 156, 53, 0.9)',
        background: 'radial-gradient(circle,rgb(0, 4, 9),rgb(5, 37, 91))',
        position: 'center',
        customClass: {
            confirmButton: 'sweet-button',
        },
        buttonsStyling: false
       
    })
}


const validarEmail = (email) => {
    var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var validacion = expReg.test(email)

    return validacion

}


const inputNombre = document.querySelector("#nombre")

inputNombre.addEventListener('input', (e) => {
    if (e.target.id === 'nombre') {
        if (e.target.value !== "") {
            document.querySelector("#tilde-nombre").innerHTML = `<div>&#10003;</div>`
            document.querySelector("#nombre").classList.remove("input-rojo")
            document.querySelector("#nombre").classList.add("input-verde")
            document.querySelector("#nombre-vacio").innerText = ""
        } else if (e.target.value === "") {
            document.querySelector("#nombre").classList.remove("input-verde")
            document.querySelector("#tilde-nombre").innerHTML = `<div></div>`

        }
    }
})


const inputEmail = document.querySelector("#email")

inputEmail.addEventListener('input', (e) => {
    if (e.target.id === 'email') {
        if (e.target.value !== "") {

            var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
            var re = expReg.test(e.target.value)
            re ? (document.querySelector("#tilde-email").innerHTML = `<div>&#10003;</div>`,
                document.querySelector("#email").classList.remove("input-rojo"),
                document.querySelector("#email").classList.add("input-verde"),
                document.querySelector("#email-vacio").innerText = "") : (document.querySelector("#tilde-email").innerHTML = `<div></div>`,
                    document.querySelector("#email").classList.remove("input-verde"))
        } else if (e.target.value === "") {

            document.querySelector("#email").classList.remove("input-verde")
            document.querySelector("#tilde-email").innerHTML = `<div></div>`

        }
    }
})


const inputAsunto = document.querySelector("#asunto")

inputAsunto.addEventListener('input', (e) => {
    if (e.target.id === 'asunto') {
        if (e.target.value !== "") {
            document.querySelector("#tilde-asunto").innerHTML = `<div>&#10003;</div>`
            document.querySelector("#asunto").classList.remove("input-rojo")
            document.querySelector("#asunto").classList.add("input-verde")
            document.querySelector("#asunto-vacio").innerText = ""
        } else if (e.target.value === "") {
            document.querySelector("#asunto").classList.remove("input-verde")
            document.querySelector("#tilde-asunto").innerHTML = `<div></div>`
        }
    }
})


const inputMensaje = document.querySelector("#mensaje")

inputMensaje.addEventListener('input', (e) => {
    console.log(e.target.value)
    if (e.target.id === 'mensaje') {
        if (e.target.value !== "" && e.target.value.length >= 20) {
            document.querySelector("#tilde-mensaje").innerHTML = `<div>&#10003;</div>`
            document.querySelector("#mensaje").classList.remove("textarea-rojo")
            document.querySelector("#mensaje").classList.add("textarea-verde")
            document.querySelector("#mensaje-vacio").innerText = ""
        } else if (e.target.value === "" || e.target.value.length < 20) {
            document.querySelector("#mensaje").classList.remove("textarea-verde")
            document.querySelector("#tilde-mensaje").innerHTML = `<div></div>`
        }
    }
})


const resetBtn = document.querySelector("#reset")

resetBtn.addEventListener('click', (e) => {
    resetear()
})

const resetear = () => {
    document.querySelector("#nombre").value = ""
    document.querySelector("#email").value = ""
    document.querySelector("#asunto").value = ""
    document.querySelector("#mensaje").value = ""
    document.querySelector("#nombre-vacio").innerText = ""
    document.querySelector("#email-vacio").innerText = ""
    document.querySelector("#asunto-vacio").innerText = ""
    document.querySelector("#mensaje-vacio").innerText = ""
    document.querySelector("#nombre").classList.remove("input-rojo")
    document.querySelector("#email").classList.remove("input-rojo")
    document.querySelector("#asunto").classList.remove("input-rojo")
    document.querySelector("#mensaje").classList.remove("textarea-rojo")
    document.querySelector("#nombre").classList.remove("input-verde")
    document.querySelector("#tilde-nombre").innerHTML = `<div></div>`
    document.querySelector("#email").classList.remove("input-verde")
    document.querySelector("#tilde-email").innerHTML = `<div></div>`
    document.querySelector("#asunto").classList.remove("input-verde")
    document.querySelector("#tilde-asunto").innerHTML = `<div></div>`
    document.querySelector("#mensaje").classList.remove("textarea-verde")
    document.querySelector("#tilde-mensaje").innerHTML = `<div></div>`
}


