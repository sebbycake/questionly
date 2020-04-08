import React, {Component} from "react";
import questionsData from "./questionsList";
import randomColor from "randomcolor";

class Question extends Component {

    constructor() {
        super()
        this.state = {
            question : "Generate question below!",
            questionList : questionsData,
            questionsAppeared : []
        }
        this.generateQuestion = this.generateQuestion.bind(this)
    } // end of constructor

    generateQuestion() {
        const questionListLength = this.state.questionList.length
        let randomInt = Math.floor(Math.random() * questionListLength)
        let randomQn = this.state.questionList[randomInt]
        this.setState({
            question : randomQn
        })
    }


    render() {
         return (
            
            <div> 
                <p style={{color:randomColor()}} className="text-center question">{this.state.question}</p>
                <p className="text-center">
                    <button className="btn btn-outline-light btn-lg btn-block" onClick={this.generateQuestion}>Generate</button>
                </p>
            </div>
         )
    } // end of render()

} // end of class


export default Question