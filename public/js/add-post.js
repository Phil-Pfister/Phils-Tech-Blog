const  newFormHandler = async (event) => {
  event.preventDefault();
  const title = document.querySelector('#post-title').value;
  const post_content = document.querySelector('#post-content').value;
  
  const response = await fetch(`/api/post`, {
    method: 'POST',
    body: JSON.stringify({ title, post_content }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to add post');
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    
    const response = await fetch(`/api/post/${id}`, {
      method: 'DELETE',
    });
    
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete project');
    }
  }
};


document.querySelector('#new-post').addEventListener('submit', newFormHandler);
document.querySelector('.post-list').addEventListener('click', delButtonHandler);

