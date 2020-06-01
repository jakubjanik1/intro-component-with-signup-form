document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault()
    const inputs = document.querySelectorAll('input')

    inputs.forEach(input => {
        if (input.placeholder === 'Email Address' && !validateEmail(input.value)) {
            input.nextElementSibling.innerText = 'Looks like this is not an email'
            input.classList.add('error')
        } 

        if (! input.value.length) {
            input.nextElementSibling.innerText = `${input.placeholder} cannot be empty`
            input.classList.add('error')
        }
    })
})

const validateEmail = email => /^\S+@\S+$/.test(email)