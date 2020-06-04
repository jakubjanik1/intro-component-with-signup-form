document.querySelector('form').addEventListener('submit', event => {    
    event.preventDefault()

    for (const input of event.target) {
        if (input.validity.valueMissing) {
            input.parentElement.classList.add('error')
            input.nextElementSibling.textContent = `${input.placeholder} cannot be empty`
        }

        if (input.placeholder == 'Email Address' && input.validity.typeMismatch) {
            input.parentElement.classList.add('error')
            input.nextElementSibling.textContent = 'Looks like this is not an email'
        }
    }
})