
import './App.css';
import Dictionary from './Dictionary';
import becreative from './confused.png';

function App() {
  return (
    <div className="App"> 
    
    <div className="container mainApp">
      <header className="App-header">
        <img className="logo" src={becreative} />
 {/* <h1>Dictionary app</h1> */}

          
     
      </header>
     
      <main>

        <Dictionary defaultKeyword="sunrise"/>





      </main>
</div>

<footer className="app_footer"><small>Coded by Alyona</small></footer>
      
    </div>
  );
}

export default App;
