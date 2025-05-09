const email = document.getElementById('email');
const text = document.getElementById('text');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkInputs()

})

function setError(input, message) {
    const form = input.parentElement;
    const small = form.querySelector("small")

    small.innerText = message;
    small.classList.remove("d-none")

    input.classList.remove("is-valid")
    input.className += " is-invalid"
}

function setSucess(input, message) {
    const form = input.parentElement;
    const small = form.querySelector("small")

    small.className += (" d-none")
    small.classList.remove("d-flex")


    input.classList.remove("is-invalid")
    input.className += " is-valid"
}


function checkEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// CHECK IF THE INPUTS HAVE BEEN FILLED IN AND ARE CORRECT

function checkInputs() {

    if (email.value === "")
        setError(email, "Fill in this field")
    if (text.value === "")
        setError(text, "Fill in this field")
    if (!checkEmail(email.value))
        setError(email, "This email is invalid")
    else {
        setSucess(email)
        setSucess(text)

    }

    const formControl = form.querySelectorAll("input") && form.querySelectorAll("textarea")

    const formValid = [...formControl].every(formControl => {
        return (formControl.className === "form-control is-valid")
    })

    if (formValid) {
        alert("Message sent successfully!")
        window.location.href = "#"
    }

}
