const form = document.querySelector('.signup')
 async function submitForm(event){
    event.preventDefault()
    const username = document.querySelector("#username").value.trim()
    const email = document.querySelector('#email').value.trim()
    const password = document.querySelector('#password').value.trim()
    const response = await fetch('/api/user', {
        method: "POST",
        body: JSON.stringify({
            username,
            email,
            password,
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