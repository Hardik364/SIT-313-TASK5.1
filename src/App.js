import React, { useState } from 'react';
import './App.css';
import Searchbar from './Components/Searchbar';
import Post from './Components/Post';
import QuestionSection from './Components/QuestionForm';
import ArticleSection from './Components/ArticleForm';

function App() {
  const [selectedPostType, setSelectedPostType] = useState('question');

  const handlePostTypeChange = (type) => {
    setSelectedPostType(type);
  };

  return (
    <div className="App">
       <Searchbar />
       <Post onSelect={handlePostTypeChange}/>
       {selectedPostType === 'question' ? <QuestionSection /> : null}
      {selectedPostType === 'article' ? <ArticleSection /> : null}
     
    </div>
  );
}

export default App;