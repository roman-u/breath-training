import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Timer from 'react-compound-timer'

import '../styles/App.css';

class Step2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            breathTime: {hours: 0, minutes: 0, seconds: 0},
            start: undefined
        };
    }

    componentDidMount () {
        //this.setState({start: new Date('2019-09-02T22:13:00')});
        this.setState({start: new Date()});

        setInterval(this.countTime.bind(this), 1000)
    }

    countTime() {

        this.setState({breathTime: {
            seconds: Math.floor((new Date() - this.state.start) / 1000) % 60,
            minutes: (Math.floor((new Date() - this.state.start) / 60000)) % 60,
            hours: (Math.floor((new Date() - this.state.start) / 3600000)) % 12
        }});
    }

    render() {
        return <div>
            <h4>Засекается время дыхания без ИВЛ</h4>
            <div>
                {this.state.breathTime.hours} : 
                {this.state.breathTime.minutes} : 
                {this.state.breathTime.seconds}
            </div>
            <Link to={{
                    pathname:"/step3/", 
                    state:{
                        saturationBefore: this.props.location.state.saturationBefore, 
                        pulseBefore: this.props.location.state.pulseBefore,
                        breathTime: this.state.breathTime
                    }
                }}>
                Готово
            </Link>
        </div>
    }

}


export default Step2;