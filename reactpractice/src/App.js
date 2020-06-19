import React, { Component } from "react";
import Card from "./components/Card";
import Score from "./components/Score";
import Wrapper from "./components/Wrapper";
import futurama from "./image.json";
import "./App.css";

class App extends Component {

    // Initial state before mount
    state = {
        status: "",
        goal: 12,
        score: 0,
        futurama,
        clickedCard : []
    };

    // function to shuffle the card when user clicks the card
    shuffleCard = id => {

        let clickedCard = this.state.clickedCard;

        // If users click a card twice, they lose
        if(clickedCard.include(id)){
            this.setState( {clickedCard : [], score: 0, status: "Game Over! Click to Play Again!"})
            return ;
        } else {
            clickedCard.push(id)
        

            // If the user do not repeat any card, they win
            if(clickedCard === 12){
                this.setState( {score: 12, status : "You Won! You must be a fan of Futurama!", clickedCard : []})
                return;
            }

            //
            this.setState({futurama, clickedCard, score : clickedCard.length, status: " "})

                for (let i= futurama.length -1; i > 0; i--) 
                {
                    let j = Math.floor(Math.random() * (i+1))
                    [futurama[i], futurama[j]] = [futurama[j], futurama[i]]
                }
        }
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
                total = {this.state.score}
                goal = {12}
                status = {this.state.status}
            />

            {/* //Wrapper  */}
            <Wrapper>
                {this.state.futurama.map(character => {

                    //Render Image
                    <Card 
                        shuffleCard = {this.shuffleCard}
                        id = {character.id}
                        key = {character.id}
                        image = {character.image}
                    />
                })}
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