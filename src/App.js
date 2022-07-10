import { useState } from 'react';
import './App.css';
import On from './assets/on.PNG'
import Off from './assets/off.PNG'


const App = ()=> {
  const [mentos, setmentos] = useState(false);
    const khai = ()=> {
        setmentos(!mentos);
    }
  return (
    <div className="App">
      <button onClick={khai}>
                {mentos ? 'Mentos mat khao' : 'Mentos khao'}
      </button>
      <img src={mentos ? On : Off}  ></img>
      <h1>{mentos ? "Dimag Ki Batti Jalao" : "Dimag Ki Batti Bhujao" }</h1>
    </div>
  );
}

export default App;
