import React, { PropTypes } from 'react'
import { Link, Route, Component } from 'react-static'

import GitIcon from '../assets/images/git-icon.svg'



class GitButtonIcon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        //this._setMessage = this._setMessage.bind(this); 
    }
    render() {
        return ( <span className="social-media__icon"> <a className = "follow-link"  href={this.props.href} >  <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50.49 61.04"><title>git-icon</title><path id="GIT" d="M.37,38.78a6.2,6.2,0,0,1,6.25,2,21.43,21.43,0,0,1,1.67,2.35A9.19,9.19,0,0,0,19.11,47a1.57,1.57,0,0,0,1-.76c.56-1.82,1-3.66,1.47-5.43a57.63,57.63,0,0,1-6-1.83C9.52,36.42,6,31.89,6,25.19a60.68,60.68,0,0,1,.9-10A10.89,10.89,0,0,1,9.1,11.16a2.19,2.19,0,0,0,.47-2.22A13,13,0,0,1,10,0c3.71.61,5.9,3.19,7.93,5.75a30.94,30.94,0,0,1,20.48-.13,40.35,40.35,0,0,1,3.28-3.16A25.94,25.94,0,0,1,45.45.22C46.22-.2,46.7.12,47,1a12.21,12.21,0,0,1,.09,8,1.85,1.85,0,0,0,.43,2.2,9.54,9.54,0,0,1,2.67,6.33c.14,3.65.65,7.41,0,10.94C49,34.88,44.31,38.28,38.24,40c-1.13.32-2.3.5-3.63.79,2,2.95,1.8,6.23,1.78,9.48s0,6.34,0,9.51c0,.95-.28,1.29-1.25,1.28Q28.27,61,21.39,61c-1.08,0-1.31-.44-1.29-1.41.05-2.19,0-4.38,0-6.65a45.6,45.6,0,0,1-6.68-.06,9.6,9.6,0,0,1-6.87-5c-1.31-2.21-2.68-4.38-4.17-6.47A13.82,13.82,0,0,0,0,39.3Z" fill="#df6705"/></svg></a></span>
            //TODO: replace cta-button with button, this can be used globally   
        )
    }
}
export default GitButtonIcon;