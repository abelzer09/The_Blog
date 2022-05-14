const { response } = require("express");

const commentForm = document.querySelector('.comment')

async function submitCommentForm(event){
    event.preventDefault()
    const comment = document.querySelector('#newComment').value.trim();
    
    if (comment == '') {
        return response.json({message: "must add a comment"})
    } else {
        const res = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({
            comment
        }),
            headers: { 
                'Content-Type': 'application/json' },
        });

        if (res.ok) {
            document.location.replace('/dashboard')
        } else {
            alert(response.statusText)
        }
    }
};

commentForm.addEventListener('submit', submitCommentForm)