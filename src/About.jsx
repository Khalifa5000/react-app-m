
import {Link}  from 'react-router-dom';


const About = () => {
  return (
    <div className='App'>
      <button style={{marginBottom:"20px"}}>
        <Link to= "/"> 
              Go to Home page
        </Link>
      </button>

      <h2>Welcom to About Page</h2>
    </div>
  );
}

export default About;
