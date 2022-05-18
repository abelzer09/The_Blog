const postForm = document.querySelector('.newPost')

async function submitPostForm(event){
    event.preventDefault()
    const title = document.querySelector('#postTitle').value.trim();
    const post = document.querySelector('#post').value.trim();
    if (title == '' && post == '') {
        return res.json({message: "must add a post"})
    } else {
        const response = await fetch('/api/post', {
            method: 'POST',
            body: JSON.stringify({
            title,
            post
        }),
            headers: { 
                'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard')
        } else {
            alert(response.statusText)
        }
    }
};

postForm.addEventListener('submit', submitPostForm)