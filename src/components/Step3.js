import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../styles/App.css';

class Step3 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            recoveryTime: {hours: 0, minutes: 0, seconds: 0},
            start: undefined,
            saturationAfter: undefined,
            pulseAfter: undefined
        };
    }

    componentDidMount() {
        this.setState({
            start: new Date()
        });

        setInterval(this.countTime.bind(this), 1000);
    }

    countTime() {
        this.setState({
            recoveryTime: {
                seconds: Math.floor((new Date() - this.state.start) / 1000) % 60,
                minutes: (Math.floor((new Date() - this.state.start) / 60000)) % 60,
                hours: (Math.floor((new Date() - this.state.start) / 3600000)) % 12
            }
        });
    }

    onSaturationAfterChangeHandler = (e) => {
        this.setState({
            saturationAfter: e.target.value
        });
    };

    onPulseAfterChangheHandler = (e) => {
        this.setState({
            pulseAfter: e.target.value
        });
    };

    render() {
        return <div>

            <h3>Ввведите сатурацию и пульс после включения</h3>
            <div>
                <span>Сатурация</span>
                <input 
                    type="text" 
                    value={this.state.saturationAfter} 
                    onChange={this.onSaturationAfterChangeHandler}
                />
            </div>

            <div>
                <span>Пульс</span>
                <input 
                    type="text"
                    value={this.state.pulseAfter}
                    onChange = {this.onPulseAfterChangheHandler}
                />
            </div>


            <h3>Засекается время восстановления</h3>
            <div>
                {this.state.recoveryTime.hours} : 
                {this.state.recoveryTime.minutes} : 
                {this.state.recoveryTime.seconds}
            </div>

            <Link to={{
                    pathname:"/step4/", 
                    state:{
                        saturationBefore: this.props.location.state.saturationBefore, 
                        pulseBefore: this.props.location.state.pulseBefore,
                        breathTime: this.props.location.state.breathTime,
                        recoveryTime: this.state.recoveryTime,
                        saturationAfter: this.state.saturationAfter,
                        pulseAfter: this.state.pulseAfter
                    }
            }}>
                Готово
            </Link>
        </div>
    }

}


export default Step3;