import React, { Component } from 'react'; //import React Component
import "./style.css";
import {find} from "lodash";
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            pets:this.props.pets
        };
    }

    adopt(name) {
        //name = string
        let tmp = this.state.pets.map(
            (item)=> {
                if(this.name === item.name){
                    item.adopted = true;
                }
            }
        );

        this.setState(
            () => {
                return({pets:tmp})
            }
        );
    }

    render(){

        //this.props.pets = json object containing pets
        //array containing pet objects: name, sex, breed, img

        let breeds = this.state.pets.map(
            (item) => {
                return item.breed;
            }
        );

        breeds = breeds.filter(
            (value, index, self) => { 
                return self.indexOf(value) === index;
            }
        );
        //found identical snippet at
        //https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
        //whoops.


        return (
        <div>
            <header className="jumbotron jumbotron-fluid py-4">
            <div className="container">
                <h1>Adopt a Pet</h1>
            </div>
            </header>

            <main className="container">
                <div className="row">
                    <div id="navs" className="col-3">
                        <BreedNav breeds={breeds}/>
                        <AboutNav/>
                    </div>

                    <div id="petList" className="col-9">
                        <PetList pets={this.state.pets} adoptCallback={()=>{return this.adopt}}/>
                    </div>
                </div>
            </main>
            <footer class="container">
                <small>Images from <a href="http://www.seattlehumane.org/adoption/dogs">Seattle Humane Society</a></small>
            </footer>
        </div>
        );
    }
}

class AboutNav extends Component {
    render() {
        return (
            <nav id="aboutLinks">
                <h2>About</h2>
                <ul className="list-unstyled">
                    <li><a href="#/">How to Adopt</a></li>
                    <li><a href="#/">Volunteering</a></li>
                    <li><a href="#/">Events</a></li>
                    <li><a href="#/">Donate</a></li>
                    <li><a href="#/">About Us</a></li>
                </ul>
            </nav>
        )
    }
}

class BreedNav extends Component {
    render(){
        //this.prop.breeds = array of strings

        let breeds = this.props.breeds.map(
            (item) => {
                return (
                    <li key={item}><a href="">{item}</a></li>
                );
            }
        );

        
        //<li><a href="#/">Husky</a></li>

        return(
            <nav id="breedLinks">
                <h2>Pick a Breed</h2>
                <ul class="list-unstyled">
                    {breeds}
                </ul>            
            </nav>
        )
    }
}

class PetCard extends Component {
    render() {
        //this.prop.pet = single item from pets json
        let pet = this.props.pet;
        let name = pet.name;

        if(pet.adopted) {
            name = name + " (Adopted)";
        }

        return (
            <div className="card" onClick={()=>{this.props.adoptCallback(pet.name)}}>
                <img className="card-img-top" src={pet.img} alt={name} />
                <div class="card-body">
                    <h3 class="card-title">{pet.name}</h3>
                    <p class="card-text">{pet.sex + " " + pet.breed}</p>
                </div>
            </div>
        )
    }
}

class PetList extends Component {
    render(){
        //this.prop.pets = dogs.json

        let petCards = this.props.pets.map(
            (item) => {
                return <PetCard key={item.name} adoptCallback={this.props.adoptCallback} pet={item}/>
            }
        );

        return(
            <div id="petList" class="col-9">
                <h2>Dogs for Adoption</h2>
                <div class="card-deck">
                    {petCards}
                </div>
            </div>
        );
    }
}

export default App;

