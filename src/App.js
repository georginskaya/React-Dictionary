
import './App.css';
import Dictionary from './Dictionary';
import React from 'react';
// import think from './thinking.png';
// import  spirit from './spirit.png';




function App() {
  return (
    <div className="App"> 
    
    <div className="container mainApp">
      {/* <header className="App-header">
        
      </header> */}
   
      <main>
      

        <Dictionary defaultKeyword="mum"/>
      

 



      </main>
</div>

<footer className="app_footer"><small>Coded by Alyona</small>
 {/* <div className="bear">
        <img className="logo" alt ="img" src={think} />
         <img className="success" alt ="img" src={spirit} />
         </div> */}


</footer>
      
    </div>
  );
}

export default App;
