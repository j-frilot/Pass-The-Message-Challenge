let btn = document.querySelector('#submitBtn')

btn.addEventListener('click', function (getMessage){
    event.preventDefault()
    let message = document.querySelector('#message').value
    let newMessage = document.querySelector('.message-content')

    newMessage.textContent = message
    message = ''
})