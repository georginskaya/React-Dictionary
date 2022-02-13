import React from"react";

export default function Meaning (props){
    console.log(props.meaning);
    return( 
    <div className="Meaning">
    <h3>{props.meaning.partOfSpeech}</h3>
    {props.meaning.definitions.map(function(definition,index){
// go (loop) thru all definitions and examples and display them 
return (<div key={index}>
 <p>
    Definition: {definition.definition}
    <br />
        <em>Exampple: {definition.example}</em>
        </p>
</div>);
    })}
   
    </div>
    
    
    );
}