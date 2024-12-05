import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Header</h1>
      </header>
      <div className="main-content-area">
        <div className="box-left">
          <div className="hero">
            <p>Hero</p>
          </div>
          <div className="sidebar">
            <p>Sidebar</p>
          </div>
        </div>
        <div className="box-right">
          <main>
            <div className='main-content'>
              <h2>Main Content</h2>
              <p> **Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptatum similique possimus. Sed maiores adipisci earum eveniet, architecto quos tenetur enim nostrum possimus perferendis. Asperiores maxime distinctio autem qui totam?</p>
            </div>
          </main>
          <div className='extra-content'>
            <p>Extra Content</p>
          </div>
        </div>
      </div>
      <div className="related-area">
        <div className="related-images">
          <p>Related Images</p>
        </div>
        <div className="related-posts">
          <div>
            <p>Related Posts</p>
          </div>
        </div>
      </div>
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default App;
