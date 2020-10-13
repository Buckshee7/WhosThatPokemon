import React, {Component} from 'react';
import BillsPC from '../components/BillsPC';
import PokeBall from '../components/PokeBall';

export default class Pokedex extends Component{
    constructor(props) {
        super(props);
        this.state = {
            pokemons: [],
            selectedPokemon: null,
            randomised: false
        };
        this.onChooseYou = this.onChooseYou.bind(this);
        this.randomise = this.randomise.bind(this);
        this.guessPokemon = this.guessPokemon.bind(this);
    }

    componentDidMount(){
        const url = "http://pokeapi.co/api/v2/pokemon/?limit=151";
        
        fetch(url)
            .then(response => response.json())
            .then(pokemons => this.setState({pokemons: pokemons.results}))
            .catch(err => console.error)
    }

    onChooseYou(url){
        console.log(url)
        fetch(url)
            .then(response => response.json())
            .then(pokemon => this.setState({selectedPokemon: pokemon}))
            .catch(err => console.error)
    }

    randomise(){
        const index = Math.floor(Math.random()*151);
        const url = this.state.pokemons[index].url;
        this.onChooseYou(url);
        this.setState({randomised : true});
    }

    guessPokemon(event){
        if (event.target.value.toLowerCase() === this.state.selectedPokemon.species.name.toLowerCase()){
            this.setState({randomised : false})
            document.querySelector("#silhouette").classList.remove("hidden")
        }
    }

    render(){
        return (
            <div id="pokedex">
                {/* <audio autoPlay>
                    <source src="https://www.myinstants.com/media/sounds/whos-that-pokemon_.mp3" type="audio/mpeg"></source>
                        Your browser does not support the audio tag
                </audio> */}
                <h1>Pokedex</h1>
                <BillsPC pokemon={this.state.pokemons} onChooseYou={this.onChooseYou}  randomise={this.randomise} randomised={this.state.randomised} />
                <PokeBall pokemon={this.state.selectedPokemon} randomised={this.state.randomised} guessPokemon={this.guessPokemon} />
            </div>
        )
    }


}