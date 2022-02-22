import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results.js";


export default function Dictionary (props){
    let [keyWord, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
function handleResponse(response){
setResults(response.data[0]);

}
function submitSearch(event){
      let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
axios.get(apiUrl).then(handleResponse);
}

    function handleSubmit(event) {
    event.preventDefault();
    submitSearch ();

  
}
function handelKeywordChange(event){
    setKeyword(event.target.value);
}

function load() {
    setLoaded(true);
    submitSearch();
}

if(loaded){

    return (<div className="Dictionary">
      <p className="simply">Simply look something up</p> 
       <div class="form-inline">
           <div class="flex">
    <form className="input-section" onSubmit={handleSubmit}>
<input type="search" placeholder="   ...." autoFocus={true}  onChange={handelKeywordChange}/>
<button class="buttonSearch">Search</button>

    </form>
    
    </div>
    <p className="simply">suggested words: solitude, pranayama, petrichor</p>
    </div>
    


    <Results results={results} />
     
    </div>
    
    );
}else{
    load();
}
}