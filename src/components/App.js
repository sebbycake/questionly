import React from "react";
import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Footer from "./Footer";
import Question from "./Question";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div>
                <Header />
                    <Switch>
                        <Route path="/" exact component={Question}/>
                        <Route path="/about" exact component={About}/>
                        <Route path="/contact" exact component={Contact}/>
                    </Switch>
                    {/* <Question /> */}
                <Footer />
            </div>
        </Router>
    )
}

export default App