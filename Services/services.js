var res;

const peticiones = async (id, data, metodo) => {

    switch (metodo) {
        case 'POST-CONTACTO':

            res = await fetch('https://web-vercel-kappa.vercel.app/contacto', {
                method: 'POST',
                body: data,
             
             
            })

            res = await res.json()

            return res

        default:
            break;
    }
}