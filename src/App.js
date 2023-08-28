import './App.css';
import { BsGlobe2 } from "react-icons/bs";
import { FcOnlineSupport } from "react-icons/fc";
import { BiSolidNews } from "react-icons/bi";
import { PiChatLight } from "react-icons/pi";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Ambiente ID</h1>
        <BsGlobe2 id='globe' size={50}></BsGlobe2>
        <div className='main'>
        </div>
      </header>
      <body className='App-body'>
          <div className='menu'>
            <div className='home'>
              <a>Home</a>
            </div>
            <div className='habilidades'>
              <a>Habilidades</a>
            </div>
            <div className='downloads'>
              <a>Downloads</a>
            </div>
            <div className='configurações'>
              <a>Configurações</a>
            </div>
          </div>
          </body>
          <FcOnlineSupport id='suporte' size={45}></FcOnlineSupport>
      
    </div>

  );
}

export default App;
