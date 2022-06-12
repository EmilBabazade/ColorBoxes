import React, {Component} from 'react';
import ColorBox from './ColorBox';
import './ColorBoxContainer.css';

export default class ColorBoxContainer extends Component {
    static defaultProps = {
        possibleColors: ['red', 'green', 'blue', 'orange', 'yellow', 'cyan', 'purple'],
        colorBoxCount: 30
    };

    constructor(props) {
        super(props);
        const colorBoxes = [];
        for(let i = 0; i < props.colorBoxCount; i++) {
            colorBoxes.push({id: i, color: this._getRandomColor()});
        }
        this.state = { colorBoxes };
    }

    _getRandomColor() {
        const {possibleColors} = this.props; 
        const randomIndex = Math.floor(Math.random() * possibleColors.length);
        return possibleColors[randomIndex];
    }

    _changeBoxColor(id, newColor) {
        const newColorBoxes = [...this.state.colorBoxes];
        newColorBoxes[newColorBoxes.indexOf(newColorBoxes.find(c => c.id === id))] = {id, color: newColor};
        return {colorBoxes: newColorBoxes};
    }

    changeBoxColor(id) {
        const newColor = this._getRandomColor();
        this.setState(this._changeBoxColor(id, newColor));
    }
    
    render() {
        const {colorBoxes} = this.state;
        return(<div className='ColorBoxContainer'>
            {colorBoxes.map(c => <ColorBox key={c.id} color={c.color} onClick={() => this.changeBoxColor(c.id)} />)}
        </div>);
    }
}