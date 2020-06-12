import React from "react";
import About from "./navbar/About";
import Contact from "./navbar/Contact";
import Header from "./Header";
import Footer from "./Footer";
import Question from "./Question";
import NotFound from "./NotFound";
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
                        <Route path="/" component={NotFound} />
                    </Switch>
                   
                <Footer />
            </div>
        </Router>
    )
}

export default App