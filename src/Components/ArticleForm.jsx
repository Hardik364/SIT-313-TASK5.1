import React from 'react';
import './ArticleForm.css'; 

const Article = () => {
  return (
    <div className="Article-section">
      
      <h2>What do you want to ask or share</h2>

      <p>
        This section is designed based on the type of the post. It could be developed by conditional rendering. 
        <a className='color'> For posting an article, the following section would be displayed.</a>
      </p>

      <label className='Articletitle'>Title</label>
      <input className= 'Font1'type="text" placeholder="start your question with how, what, why, etc." />

      <label> Abstract</label>
      <textarea placeholder='Enter a 1- paragraph Abstract'/>

      <label>Describe your problem:</label>
      <textarea placeholder="Describe your problem..." />

      <label>Tags</label>
      <input className= 'Font2' type="text" placeholder="please add up to three tags to describe what your question is about, e.g., Java" />

      <button className="post">Post</button>
    </div>
  );
};

export default Article;
