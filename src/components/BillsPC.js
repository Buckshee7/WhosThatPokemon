import React from 'react';

export default function BillsPC(props){

    function capitalise(word) {
        return word[0].toUpperCase() + word.substr(1);
    }

    if (!props.pokemon) {
        return (
        <h1>You need to start collecting 'em all!</h1>
        );
    }

    const options = props.pokemon.map((pokemon, i) => {
        return (
            <option value={pokemon.url} key={i}>{capitalise(pokemon.name)}</option>
        )
    })

    function handleSelect(event){
        props.onChooseYou(event.target.value);
    }
    
    return (
        <div>
            <select onChange={handleSelect} defaultValue="default">
                <option disabled value="default">I choo-choo-choose you!</option>
                {options}
            </select>
            <button onClick={props.randomise}>Randomise</button>
        </div>
    )

}