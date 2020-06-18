const form = document.querySelector('form')
form.addEventListener('submit', validateForm)

function validateForm(event) {
    event.preventDefault()

    for (const input of [...this].slice(0, -1)) {
        const control = input.closest('.control')
        const error = control.querySelector('.error-message')

        if (input.validity.valueMissing) {
            control.classList.add('error')
            error.textContent = `${input.placeholder} cannot be empty`
        }

        if (input.placeholder == 'Email Address' && input.validity.typeMismatch) {
            control.classList.add('error')
            error.textContent = 'Looks like this is not an email'
        }

        if (input.checkValidity()) {
            control.classList.remove('error')
        }
    }
}