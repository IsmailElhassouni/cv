import 'bootstrap/dist/css/bootstrap.min.css';
//"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
import './App.css';
import Headersvg from './Headersvg';
import Mysvg from './Mysvg.png';
import Icons from './icons';
import Html from './Html';
import Css from './css';
import Js from './Js'
import Php from './Php';
import Python from './Python';
import Git from './Git';
import Mongodb from './mongodb-ar21';
import download from './download.jpg'
import Ana from './Ana';
import Footer from './Footer';
import './words.css'

function App() {
  





  return (
    <>
    
    <div className="main">
     
      <Headersvg/>
      <h1>Ismail Elhassouni</h1>
      
      <div className="right">
        <h2>Full stack Developer</h2>
        <p>Diploma of 2023 Ofppt bengerir</p>
      </div>
      <div className="left">
        <div>
       <Ana className='head'/>
        <img src={download} alt="img" /></div>
      </div>
      <svg  viewBox="0 0 100 100" preserveAspectRatio="none">
        <line x1="0" y1="0" x2="100" y2="100" stroke="cyan" strokeWidth="2.5" />
        <line x1="100" y1="0" x2="0" y2="100" stroke="cyan" strokeWidth="2.5" />
      </svg>
    </div>

    <div className="about">
      <div className="lorem">
        <label htmlFor="" className="title">About Me :</label>
        
        <span className="text white-text1618">
       Beyond coding, I find fulfillment in cultivating green spaces, tending to plants,and going for regular runs.
    </span>
      </div>
     
    </div>
    <fieldset>
     <center> <h1>Skills</h1></center> 
    <div className='Frameworks'>
      <h1>My Frameworks :</h1>
      <Icons />
      </div>
      <div className="lang">
    <h1>Programming Languages</h1>
    <ul>
      <li><span> <Html className='htmlsvg'/>
</span>Html</li>
      <li><span><Css className='htmlsvg'/></span>Css</li>
      <li><span><Js className='htmlsvg'/></span>Javascript</li>
      <li><span><Php className='htmlsvg'/></span>PHP</li>
      <li><span><Python className='htmlsvg'/></span>Python</li>
      <li><span><img src="https://img.icons8.com/?size=1x&id=ywH6EJgZ7sm5&format=png" alt=""  /></span>sql,mysql</li>
      
    </ul>
  </div>

  <div className="other">
    <h1>Others</h1>
    <ul>
      <li><span><Git className='htmlsvg'/></span>GIT, GitHub</li>
      <li><span><Mongodb className='htmlsvg'/></span></li>
      <li><span><img className='vscode'src="https://upload.vectorlogo.zone/logos/visualstudio_code/images/0aea25bb-27bb-427f-8d65-f999bf0cba67.svg" alt=""  /></span>VsCode</li>
      <li><span><img className='words' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Microsoft_Office_Word_%282019%E2%80%93present%29.svg/1101px-Microsoft_Office_Word_%282019%E2%80%93present%29.svg.png" alt=""  /></span>Words
       </li> 
       
          <li><span><img className='words' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg/1101px-Microsoft_Office_Excel_%282019%E2%80%93present%29.svg.png" alt=""  /></span>Excel</li>
          <li><span><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSscixw2rwES7eGhSdMIqQkRSBnR7cNNAYS7w&s" className='words' alt="" /></span>PowerPoints</li>
          <li><span><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC9EJuzEaEtONWADmrZj_P5i-TkhNIlvd7trrNd0uN8A&s" className='words' alt="" /></span>Access</li>
          <li><span><img className='needed' src="https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png" alt="" /></span></li>
          <li><span><img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/microsoft_azure_logo_icon_168977.png" className='needed'alt="" /></span></li>
          <li><span><img style={{height:100+'px'}} src="https://blog.postman.com/wp-content/uploads/2014/07/logo.png" className='needed' alt="" /></span></li>
          <li><span><img className='needed'src="https://www.rabbitmq.com/img/rabbitmq_logo_strap.png" alt="" /></span></li>
    </ul>
  </div>
    </fieldset>
    <Footer/>
    </>
  );
}

export default App;

