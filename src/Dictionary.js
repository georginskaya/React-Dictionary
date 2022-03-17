import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";
// import QuoteGenerator from './QuoteGenerator'
import Results from "./Results.js";
import Photos from "./Photos.js";



export default function Dictionary (props){
    let [keyWord, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
let [ photos, setPhotos] = useState (false);

function handleResponse(response){
setResults(response.data[0]);

}
function handlePexelsResponse (response){
    setPhotos(response.data.photos);
}
function submitSearch(){
      let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
axios.get(apiUrl).then(handleResponse);
let pexelsApiKey ="563492ad6f917000010000015bc292821b8b4a038bb394077696de49";
let pexelsApiUrl =`https://api.pexels.com/v1/search?query=${keyWord}&per_page=4`;
let headers = {"Authorization" : `
er ${pexelsApiKey}`};

axios.get(pexelsApiUrl, { headers: headers })
    .then(handlePexelsResponse);
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
      {/* <p className="simply">What word do you want to look up?</p> */}


<div className="row">
    
    

<div className="col-5 galery"> <Photos photos={photos} /> </div>
<div className="col-6"> 

      
      <h1>{keyWord}</h1>
       <div className="form-inline">
           <div className="flex">
    <form className="input-section" onSubmit={handleSubmit}>
<input className="input-field" type="search" placeholder="   ...." autoFocus={true}  defaultValue={props.defaultKeyword} onChange={handelKeywordChange}/>
{/* <button className="buttonSearch">Search</button> */}

    </form>
   
    
    </div>
    <p className="simply">suggested words: solitude, pranayama, petrichor</p>
      
    </div>
    


    <Results results={results} />
   
 
     
    </div>   
    
     <div className="col-1">dictio</div>
    
    </div></div>
    
    );
}else{
    load();
}
}