const form = document.querySelector('.signup')
function submitForm(event){
    event.preventDefault()
    const userData = document.querySelector("#username")
    const emailData = document.querySelector('#email')
    const passwordData = document.querySelector('#password')
    const response = await fetch('/api/user', {
        method: "POST",
        body: JSON.stringify({
            username: userData.value,
            email: emailData.value,
            password: passwordData.value
        }),
        headers: {
            "content-type": "application/json"
        }
    })
    if (response.ok){
        document.location.replace("/dashboard")
    }
} 
form.addEventListener('submit', submitForm)