import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.scss'

export default class GlobalButton extends Component {

    onSubmit = () => {
        if(this.props.emitEvent){
            return this.props.emitEvent();
        }
    }

    render() {
        const { buttonText } = this.props;

        return (
            <div>
                <button onClick={() => this.onSubmit()} data-test='btn'>
                    {buttonText}
                </button>
            </div>
        )
    }
}

GlobalButton.propTypes = {
    buttonText: PropTypes.string,
    emitEvent: PropTypes.func
}
