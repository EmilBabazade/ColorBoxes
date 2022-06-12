import React, {Component} from "react";
import './ColorBox.css'

export default class ColorBox extends Component {
    render() {
        const {color, onClick} = this.props;
        return <div className="ColorBox" style={{backgroundColor: color}} onClick={onClick}></div>
    }
}