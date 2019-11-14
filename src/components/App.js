import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

import '../styles/App.css';


function Index() {
    return <div>
        <h1>Тренировка дыхания без ИВЛ</h1>
        <Link to={{pathname:"/step1/"}}>Начать тренировку</Link>
    </div>
}

class App extends Component {
    render() {
        return (
            <Router>
                <h1>Варя дыши :)</h1>
                <Route exact path="/" component={Index} />
                <Route path="/step1/" component={Step1} />
                <Route path="/step2/" component={Step2} />
                <Route path="/step3/" component={Step3} />
                <Route path="/step4/" component={Step4} />
            </Router>
        );
    }
}

export default App;