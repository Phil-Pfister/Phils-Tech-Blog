const  commentFormHandler = async (event) => {
    event.preventDefault();
    
    const comment_text = document.querySelector('#comment-text').value;
    const post_id = window.location.pathname.replace("/post/", "");
    
    const response = await fetch(`/api/post/comment`, {
      method: 'POST',
      body: JSON.stringify({ comment_text, post_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      document.location.replace(`/post/${post_id}`);
    } else {
      alert('Failed to add comment');
    }
  };

  document.querySelector('#new-comment').addEventListener('submit', commentFormHandler);