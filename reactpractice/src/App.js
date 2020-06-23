import React, { Component } from "react";
import Card from "./components/Card/card";
import Score from "./components/Score/score";
import Wrapper from "./components/Wrapper/wrapper";
import futurama from "./image.json";
import "./App.css";

class App extends Component {

    // Initial state before mount
    state = {
        status: "",
        topScore: 0,
        score: 0,
        futurama,
        // clickedCard : []
    };

    // function to shuffle the card when user clicks the card
    shuffleCard = id => {
        
        
        // let clickedCard = this.state.clickedCard;

        let newFuturama = this.state.futurama.map((card) => {
              // If users click a card twice, they lose
        if(card.id.toString().includes(id)){
                if(card.clicked){ // if  click = true (means been clicked twice)
                     this.setState({score: 0}) // penalize user
                }else { // else click = undefined
                    this.setState({score: this.state.score+1})
                    if(this.state.score >= this.state.topScore){
                        this.setState({topScore : this.state.topScore +1 })
                    }
                    card.clicked = true;
                }
          } 
        
        
        return card
        })

        if(this.state.score === 0){ // when score = 0, return the array with 
            newFuturama = newFuturama.map(card => {
                card.clicked = undefined;
                return card;
            })
        }

        newFuturama = newFuturama.sort(() => {
           return Math.random()- 0.5 // make the card shuffle
        })
          this.setState({futurama : newFuturama}) // reset the game, create new array
    }

    //Map over componenet using this.state and render all components
    render() {

        return (

            // Header
            <div className="App">
                <header className="appHeader">
                    <h1 className="App-Title">Futurama Memory Game</h1>
                    <p className="App-Intro">Try not to click the same image TWICE!</p>
                </header>

            {/* Score Section */}
            <Score 
               score = {this.state.score}
                topScore = {this.state.topScore}
                status = {this.state.status}
            />

            {/* //Wrapper  */}
            <Wrapper>
                {console.log(this.state.futurama)}
                <div className = "row">
                {this.state.futurama.map(character => {
                    
                    return (
                    //Render Image
                    <div className = "col-sm-3">
                        <Card 
                            shuffleCard = {this.shuffleCard}
                            id = {character.id}
                            key = {character.id}
                            image = {character.image}
                        />
                    </div>
                    ) 
                })}
                </div>
              
            </Wrapper>

            {/* Footer */}
            <footer>
                <p>Futurama Memory Game designed by <strong><a href="https://github.com/ngavu2712/Memory-Game">Anna Vu</a></strong></p>
            </footer>

            </div>
        )
    }

}

export default App;