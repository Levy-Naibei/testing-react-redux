import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.scss'

export default class Headline extends Component {
    render() {
        const {header, desc} = this.props;

        if(!header){
            return null;
        }
        
        return (
            <div data-test='app-headline'>
                <h3 data-test='header'>{header}</h3>
                <p data-test='desc'>{desc}</p>
            </div>
        )
    }
}

// defining prop types/typeOf data recieved
Headline.propTypes = {
    header: PropTypes.string,
    desc: PropTypes.string
};
