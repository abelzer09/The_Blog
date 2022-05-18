const commentForm = document.querySelector('.comment')

async function submitCommentForm(event){
    event.preventDefault()
    const comment = document.querySelector('#newComment').value.trim();
    
    if (comment == '') {
        return res.json({message: "must add a comment"})
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
            alert(res.statusText)
        }
    }
};

commentForm.addEventListener('submit', submitCommentForm)