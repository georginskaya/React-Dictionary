import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
// import QuoteGenerator from './QuoteGenerator'
import Results from "./Results.js";
import Photos from "./Photos.js";

import atom from "./Atom.png";

export default function Dictionary(props) {
  let [keyWord, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }
  function submitSearch() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);
    let pexelsApiKey =
      "GBa2K6rdQfOwKomHIEjylJ1BFsmIocb7uJLLbp14KUFnVAXrPv8jYfXn";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyWord}&per_page=4`;
    let headers = {
      Authorization: `
Bearer ${pexelsApiKey}`,
    };

    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    submitSearch();
  }
  function handelKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    submitSearch();
  }

  if (loaded) {
    return (
      <div className='Dictionary'>
        {/* <p className="simply">What word do you want to look up?</p> */}

        <div className='row'>
          <div className='col-5 galery'>
            {" "}
            <Photos photos={photos} />{" "}
          </div>
          <div className='col-6'>
            <h1>{keyWord}</h1>
            <div className='form-inline'>
              <div className='flex'>
                <form className='input-section' onSubmit={handleSubmit}>
                  <input
                    className='input-field'
                    type='search'
                    placeholder='   ....'
                    defaultValue={props.defaultKeyword}
                    onChange={handelKeywordChange}
                  />
                  {/* <button className="buttonSearch">Search</button> */}
                </form>
              </div>
              <p className='simply'>
                suggested words: solitude, pranayama, petrichor
              </p>
            </div>

            <Results results={results} />
          </div>

          <div className='col-1 credits'>
            <img src={atom} className='reactLogo' alt='react logo' />
            <div className='titleDictio'>Dictionary</div>{" "}
            <div className='titleDictio'>made by </div>{" "}
            <span className='titleDictio'>
              <a
                href='https://www.linkedin.com/in/olena-heorhinska-3b4b33137/'
                className='alyona'
              >
                Alyona
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    load();
  }
}
