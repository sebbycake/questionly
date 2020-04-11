import React, { Component } from "react";
import questionsData from "./questionsList";
import randomColor from "randomcolor";
import shuffleArray from "./shuffle";

class Question extends Component {

    constructor() {
        super()
        this.state = {
            question: "Generate question below!",
            questionList: questionsData,
            questionsAppeared: []
        }
        this.generateQuestion = this.generateQuestion.bind(this)
    } // end of constructor

    generateQuestion() {
        shuffleArray(this.state.questionList)
        const questionListLength = this.state.questionList.length
        let randomInt = Math.floor(Math.random() * questionListLength)
        let randomQn = this.state.questionList[randomInt]
        this.setState({
            question: randomQn
        })
    }


    render() {
        return (

            <div className="text-center">
                <p style={{ color: randomColor() }} className="question">{this.state.question}</p>
                {/* <button className="btn btn-outline-light btn-lg btn-block" onClick={this.generateQuestion}>Generate</button> */}
                <button className="glow-btn" onClick={this.generateQuestion}>Generate</button>
               
            </div>
        )
    } // end of render()

} // end of class


export default Question