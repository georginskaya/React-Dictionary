import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";


export default function Dictionary (){
    let [keyWord, setKeyword] = useState("");
function handleResponse(response){
console.log(response);
}


    function submitSearch (event) {
    event.preventDefault();
    alert(`Searching for ${keyWord}`);

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
    </div>)
}