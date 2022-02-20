
import './App.css';
import Dictionary from './Dictionary';
// import becreative from './becreative.png';

function App() {
  return (
    <div className="App"> 
    
    <div className="container mainApp">
      <header className="App-header">
 <h1>Dictionary app</h1>
 <p class="simply">Simply look something up</p>
          
     
      </header>
     
      <main>

        <Dictionary />
{/* 
        <div className="wordOfTheDay">
          <div className="container">
<div class="col-sm">
            <h3 id="wordnik-wordofday-heading">Word of the day!</h3>
<div id="wordnik-wordofday"></div></div>
          
          
         <div class="col-sm"><img src={thinking} className="thinking" alt="logo" /></div></div> 

          </div> */}
      </main>
</div>

<footer className="app_footer"><small>Coded by Alyona</small></footer>
      
    </div>
  );
}

export default App;
