import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../styles/App.css';

class Step4 extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            
            <h3>Результат тренировки</h3>
            <table>
                <tr>
                    <td>Сатурация до тренировки</td>
                    <td>{this.props.location.state.saturationBefore}</td>
                </tr>
                <tr>
                    <td>Пульс до тренировки</td>
                    <td>{this.props.location.state.pulseBefore}</td>
                </tr>
                <tr>
                    <td>Длительность дыхания без ИВЛ</td>
                    <td>
                        {this.props.location.state.breathTime.hours}: 
                        {this.props.location.state.breathTime.minutes}: 
                        {this.props.location.state.breathTime.seconds}
                    </td>
                </tr>
                <tr>
                    <td>За время тренировки сатурация упала до</td>
                    <td>{this.props.location.state.saturationAfter}</td>
                </tr>
                <tr>
                    <td>За время тренировки пульс упал до</td>
                    <td>{this.props.location.state.pulseAfter}</td>
                </tr>
                <tr>
                    <td>Длительность восстановления</td>
                    <td>
                        {this.props.location.state.recoveryTime.hours}:
                        {this.props.location.state.recoveryTime.minutes}:
                        {this.props.location.state.recoveryTime.seconds}

                    </td>
                </tr>
            </table>
            <button>Сохранить данные</button>
            <Link to="/">Звершить тренировку</Link>
        </div>
    }

}

export default Step4;