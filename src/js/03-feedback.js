const form = document.querySelector('.feedback-form')
const email = document.querySelector('.feedback-form input')
const textarea = document.querySelector('.feedback-form textarea')

document.addEventListener('DOMContentLoaded', checkStorage)
form.addEventListener('input', formInput)
form.addEventListener('submit', formSubmit)



function formInput(e) {
    let values = {
        email: form['email'].value,
        message: form['message'].value
    }

    localStorage.setItem("feedback-form-state", JSON.stringify(values))
}

function formSubmit(e) {
    e.preventDefault()
    let data = localStorage.getItem("feedback-form-state")
    let dataParse = JSON.parse(data)
    console.log(dataParse)

    form.reset()
    localStorage.removeItem("feedback-form-state")
}

function checkStorage() {
    let data = localStorage.getItem("feedback-form-state")
    let dataParse = JSON.parse(data)

    if (dataParse === null) {
        return
    }

    email.value = dataParse.email
    textarea.value = dataParse.message
}