import React from 'react';

export default function PokeBall(props){

    function capitalise(word) {
        return word[0].toUpperCase() + word.substr(1);
    }

    if (!props.pokemon) {
        return (
            <h1>Choose a pokemon!</h1>
        )
    }

    const stats = props.pokemon.stats.map((stat, i) => {
        return (
            <p key={i}>{stat.base_stat + " " + stat.stat.name}</p>
        )
    })

    function handleText(event) {
        props.guessPokemon(event);
    }
    
    let title;
    if (!props.randomised){
        title = <h2>{capitalise(props.pokemon.species.name)}</h2>
    } else {
        title = <input type="text" placeholder="Who's that Pokemon?" onChange={handleText}></input>
    }

    let classname = (props.randomised) ? "hidden" : "";
    
    return (
        <div>
            {title}
            <img id="silhouette" className={classname} src={props.pokemon.sprites.other["official-artwork"].front_default} alt="akdkajshdkjashd" />
            {stats}
        </div>
    )

}