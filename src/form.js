const email = document.getElementById('email-input');
const btn = document.getElementById('btn')

btn.addEventListener('click', (event) => {
    event.preventDefault()
    if(email.value === "" | email.value.length < 3) {
     return   alert("Error")
    }

    console.log("Hola")
} )




