import React from"react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning (props){
    console.log(props.meaning);
    return( 
    <div className="Meaning">
    <h3>{props.meaning.partOfSpeech}</h3>
    {props.meaning.definitions.map(function(definition,index){
// go (loop) thru all definitions and examples and display them 
return (<div key={index}>
 <div className="meanings">
    <div className="definition">{definition.definition}</div>
    
        <div className="example">{definition.example}</div>

    
        < Synonyms synonyms={definition.synonyms} />
        </div>
</div>);
    })}
   
    </div>
    
    
    );
    
}