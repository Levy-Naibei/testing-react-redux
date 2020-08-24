import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ListPost extends Component {

    render() {
        const {title, desc} = this.props;

        if(!title){
            return null;
        }

        return (
            <div>
                <div data-test='list-item'>
                    <h3 data-test='title'>{title}</h3>
                    <p data-test='postDesc'>{desc}</p>
                </div>
            </div>
        )
    }
}

ListPost.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string
}

export default ListPost;