import './App.css';
import './blog/Blog.css'
import Blog from './Components/Blog';

function App() {
  const bg = {fontSize:"40px"}
  return (
    <div className="App">
      <Blog inputArea="Abu Bakkar Siddik" heading="Teh beda" auhtor="Raihan"></Blog>
     <article className='Blog'>
      <h2>Hello This is Practies Projects</h2>
      <p style={bg}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nihil nam iure non explicabo labore molestias molestiae porro quidem magnam ipsam accusantium consectetur ut, quo expedita! Repudiandae architecto aperiam perspiciatis?</p>
     </article>
    </div>
  );
}

export default App;
