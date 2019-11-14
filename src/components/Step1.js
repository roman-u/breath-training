import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../styles/App.css';

class Step1 extends React.Component {
    state = {
        saturationBefore: undefined,
        pulseBefore: undefined
    }   

    onSaturationBeforeChangeHandler = (e) => {
        this.setState({
            saturationBefore: e.target.value
        });
    };
    onPulseBeforeChangeHandler = (e) => {
        this.setState({
            pulseBefore: e.target.value
        });
    };

    render() {
        return <div>
            <h3>Введите сатурацию и пульс до отключения</h3>
            <div>
                <span>Сатурация:</span>
                <input type="text" value={this.state.saturationBefore} onChange={this.onSaturationBeforeChangeHandler}/>
            </div>
            <div><
                span>Пульс:</span>
                <input type="text" value={this.state.pulseBefore} onChange={this.onPulseBeforeChangeHandler}/>
            </div>
            <Link to={{pathname:"/step2/", state: {saturationBefore: this.state.saturationBefore, pulseBefore: this.state.pulseBefore}}}>
                Начать самостоятельное дыхание
            </Link>
        </div>
    }
}

export default Step1;