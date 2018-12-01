import React, { Component } from 'react';
import './Word.css';

class Word extends Component {
    render() {
        return (
            <div className="Word">
                <div className="Word__Column">
                    <img src={this.props.image} alt={this.props.writer} title={this.props.writer} className="Word__Image" />
                </div>
                <div className="Word__Column">
                    <h1>{this.props.writer}</h1>
                    <div className="Word__text">
                        {this.props.word}
                    </div>
                </div>
            </div>
        );
    }
}

export default Word;
