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
        topScore: 0, // the highest score from last game
        score: 0,
        futurama
    };

    // function to shuffle the card when user clicks the card
    shuffleCard = id => {
        
        
        // let clickedCard = this.state.clickedCard;

        let newFuturama = this.state.futurama.map( card => {

              // Since include() is string method, change card.id to string
              
            if(card.id.toString().includes(id)){
                if(card.clicked){ // if  click = true (means been clicked twice)

                     this.setState({score: 0}) // penalize user by setting their score back to 0

                }else { // else click = undefined (user hasn't clicked the card)

                    this.setState({score: this.state.score+1}) // update the score by adding 1 point to it

                        if(this.state.score >= this.state.topScore){ //increase topscore by 1 when the score increase by 1

                            this.setState({topScore : this.state.topScore +1 })
                        }

                    card.clicked = true; // turn the click property to true as a proof that user has clicked the card
                }
            }

        // Have to return card
        return card

        })


        if(this.state.score === 0){ // when score = 0, return the array with new clicked props as undefined (mean user hasn't clicked card)
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

            <div className="App">

          
           <nav className = "nav">
               <ul className ="nav justify-content-center">
                   <li className ="nav-item">
                        <a className="nav-link active">
                        <Score 
                            score = {this.state.score} 
                            topScore = {this.state.topScore}
                            // status = {this.state.status}
                        />
                        </a>
                   </li>
               </ul>
           </nav>
             {/* Header */}
                <header className="appHeader">

                    <h1 className="App-Title">FUTURAMA clicky game
                        <p className="rule">Try not to click the same card TWICE!</p>
                    </h1>
                      
                    
                </header>

            {/* Score Section */}
            


            {/* //Wrapper  */}
            <Wrapper>
                {console.log(this.state.futurama)}
                <div className = "row">
                {this.state.futurama.map(character => {
                    
                    return (
                    //Render Image
                    <div className = "col-sm-2" style={{"margin-bottom": "15px"}}>
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