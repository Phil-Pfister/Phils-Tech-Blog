

const editPost = async (event) => {
    event.preventDefault();

    const editTitle = document.getElementById('edit-title').value;
    const editContent = document.getElementById('edit-content').value;
    const post_id = window.location.pathname.replace("/api/edit/", "");
    const response = await fetch(`/api/edit/${post_id}`, {
        method: 'PUT',
        body: JSON.stringify({ editTitle, editContent }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to update post');
    }
};

document.querySelector('#update-post').addEventListener('submit', editPost);