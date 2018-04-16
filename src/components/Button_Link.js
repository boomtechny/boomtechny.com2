import React, { PropTypes } from 'react'
import { Link, Route, Component } from 'react-static'




class ButtonLink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        //this._setMessage = this._setMessage.bind(this); 
    }
    render() {
        return ( <
            a href = { this.props.link } > < button className = "cta-button"
            value = { this.props.value } > { this.props.label } <
            /button></a >
            //TODO: replace cta-button with button, this can be used globally   
        )
    }
}
export default ButtonLink;