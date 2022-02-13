import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results.js";


export default function Dictionary (){
    let [keyWord, setKeyword] = useState(" ");
    let [results, setResults] = useState(null);
function handleResponse(response){
setResults(response.data[0]);

}


    function submitSearch (event) {
    event.preventDefault();
    

    let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
axios.get(apiUrl).then(handleResponse);
}
function handelKeywordChange(event){
    setKeyword(event.target.value);
}

    return (<div className="Dictionary">
    <form onSubmit={submitSearch}>
<input type="search" autoFocus={true}  onChange={handelKeywordChange}/>


    </form>
    <Results results={results} />
    </div>)
}