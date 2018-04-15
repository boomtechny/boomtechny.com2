/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Link } from 'react-static'
import linkedSvg from '../assets/images/linkedin-icon.svg'
import gitSvg from '../assets/images/git-icon.svg'
import jsfiddleSvg from '../assets/images/jsfiddle-icon.svg'
import codepenSvg from '../assets/images/codepen-icon.svg'
import behanceSvg from '../assets/images/be-icon.svg'
import dribbbleSvg from '../assets/images/dribbble-icon.svg'
import fbSvg from '../assets/images/fb-icon.svg'
import footerSVG from '../assets/images/boomtechfooter_logo.svg'
export default () => (
  <footer className="footer__container">
  <div className ="footer__row1"> 
  <div className ="footer__social_media_section">
<span className = "footer__social_media_header">FOLLOW</span>
    <div className ="footer__social_media_wrapper">
   
    <span className = "social-media__icon"><a className = "follow-link" href="https://www.linkedin.com/in/boomtech/"><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.29 49.03"><title>linkedin-icon</title><path d="M49.2,49H38.78c0-3.65,0-7.22,0-10.79,0-3.07.06-6.15-.06-9.22-.15-3.91-2-5.87-5.21-5.81s-5,2-5.07,5.9c0,6.55,0,13.11,0,19.88H17.9V14.24H26L26.93,20l.87.89a8.94,8.94,0,0,1,1.29-2.45c3.7-3.59,8.18-4.06,12.83-2.56a10.16,10.16,0,0,1,7.19,9.71C49.46,33.26,49.2,40.94,49.2,49Z" fill="#df6705"/><path d="M10.69,49H.5V14.34H10.69Z" fill="#df6705"/><path d="M11,5.33a5.56,5.56,0,0,1-5.6,5.32A5.68,5.68,0,0,1,0,5.07,5.49,5.49,0,0,1,5.5,0,5.34,5.34,0,0,1,11,5.33Z" fill="#df6705"/></svg></a></span>
    <span className = "social-media__icon"><a className = "follow-link" href="https://github.com/boomtechny"><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50.49 61.04"><title>git-icon</title><path id="GIT" d="M.37,38.78a6.2,6.2,0,0,1,6.25,2,21.43,21.43,0,0,1,1.67,2.35A9.19,9.19,0,0,0,19.11,47a1.57,1.57,0,0,0,1-.76c.56-1.82,1-3.66,1.47-5.43a57.63,57.63,0,0,1-6-1.83C9.52,36.42,6,31.89,6,25.19a60.68,60.68,0,0,1,.9-10A10.89,10.89,0,0,1,9.1,11.16a2.19,2.19,0,0,0,.47-2.22A13,13,0,0,1,10,0c3.71.61,5.9,3.19,7.93,5.75a30.94,30.94,0,0,1,20.48-.13,40.35,40.35,0,0,1,3.28-3.16A25.94,25.94,0,0,1,45.45.22C46.22-.2,46.7.12,47,1a12.21,12.21,0,0,1,.09,8,1.85,1.85,0,0,0,.43,2.2,9.54,9.54,0,0,1,2.67,6.33c.14,3.65.65,7.41,0,10.94C49,34.88,44.31,38.28,38.24,40c-1.13.32-2.3.5-3.63.79,2,2.95,1.8,6.23,1.78,9.48s0,6.34,0,9.51c0,.95-.28,1.29-1.25,1.28Q28.27,61,21.39,61c-1.08,0-1.31-.44-1.29-1.41.05-2.19,0-4.38,0-6.65a45.6,45.6,0,0,1-6.68-.06,9.6,9.6,0,0,1-6.87-5c-1.31-2.21-2.68-4.38-4.17-6.47A13.82,13.82,0,0,0,0,39.3Z" fill="#df6705"/></svg></a></span>
    <span className = "social-media__icon"><a className = "follow-link" href="https://jsfiddle.net/user/boomtech/fiddles/"><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.59 53.73"><title>js-icon</title><path id="js" d="M70.81,23.67c0-.47.07-.94.07-1.42C70.88,9.21,61.6,0,48.35,0A23.75,23.75,0,0,0,26.86,13.43a15.61,15.61,0,0,0-8.06-2.69c-6.11,0-11.34,3.95-11.34,10A10.65,10.65,0,0,0,8,24,15.77,15.77,0,0,0,0,37.61,16.34,16.34,0,0,0,16.12,53.73h48.6A16.17,16.17,0,0,0,80.59,37.61C80.59,31.1,76.55,26,70.81,23.67Zm-49.17,18a9.41,9.41,0,0,1-3-5.31,11.8,11.8,0,0,1-.2-2.19,9.41,9.41,0,0,1,3.24-7.35,11.88,11.88,0,0,1,8.25-2.9,14,14,0,0,1,9.51,3.85,20.31,20.31,0,0,1,2.06,2.16l3.67,4.31a14.6,14.6,0,0,0,2,2.26A8.85,8.85,0,0,0,52.82,39a5.24,5.24,0,0,0,3.68-1.35A4.57,4.57,0,0,0,58,34.71l0-.5a4.44,4.44,0,0,0-.21-1.4,4.65,4.65,0,0,0-1.29-2,5.13,5.13,0,0,0-3.69-1.39A7.75,7.75,0,0,0,47.17,32l-3.25-3.82-.4-.44A12.4,12.4,0,0,1,53,23.89a11.68,11.68,0,0,1,8.22,2.88l0,0a9.53,9.53,0,0,1,3.2,7.42,11.42,11.42,0,0,1-.2,2.16,9.32,9.32,0,0,1-3,5.25,10.81,10.81,0,0,1-5.76,2.72,15.09,15.09,0,0,1-2.39.18,14,14,0,0,1-9.53-3.76,18.89,18.89,0,0,1-2.16-2.3L37.76,34.2a13.93,13.93,0,0,0-2-2.23A8.9,8.9,0,0,0,30,29.44a6.11,6.11,0,0,0-1.55.19,4.83,4.83,0,0,0-2.1,1.18A4.55,4.55,0,0,0,25,33.25a4.78,4.78,0,0,0-.09,1,4.52,4.52,0,0,0,1.41,3.34l.07.07A5.29,5.29,0,0,0,30.11,39a7.72,7.72,0,0,0,5.64-2.55L39,40.2l.36.44a12.58,12.58,0,0,1-9.43,3.88A11.94,11.94,0,0,1,21.64,41.64Z" fill="#df6705"/></svg></a></span>
    <span className = "social-media__icon"><a className = "follow-link" href="https://codepen.io/boomtech/"><svg id="codepensvg" className="codepen_icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58.09 58.96"><defs>
</defs><title>codepen-icon</title><path id="codepenpath" d="M7,38.46,26.55,51.69V39.88L15.72,32.54ZM5,33.73l6.26-4.24L5,25.24Zm26.55,18L51.09,38.46l-8.72-5.92L31.54,39.88ZM29,35.47l8.82-6-8.82-6-8.82,6Zm-13.32-9,10.83-7.34V7.27L7,20.5Zm31.12,3.06,6.26,4.24V25.24Zm-4.47-3.06,8.72-5.92L31.54,7.27V19.08ZM58.09,20.5v18A2.41,2.41,0,0,1,57,40.57l-26.55,18a2.48,2.48,0,0,1-2.79,0L1.1,40.57A2.41,2.41,0,0,1,0,38.46v-18a2.41,2.41,0,0,1,1.1-2.11L27.65.43a2.48,2.48,0,0,1,2.79,0L57,18.39A2.41,2.41,0,0,1,58.09,20.5Z" fill="#df6705"/></svg></a></span>
    <span className = "social-media__icon"><a className = "follow-link" href="https://www.behance.net/boomtech"><svg id="be-icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78.3 49.03"><title>be-icon</title><path d="M78.3,36.74c-.24.82-.46,1.65-.74,2.46-1.43,4.1-4.43,6.63-8.34,8.17a22.65,22.65,0,0,1-14.25.9,14.94,14.94,0,0,1-11-9.93,21,21,0,0,1,1.7-18.1c3-5.16,7.72-7.61,13.5-7.91a27.15,27.15,0,0,1,8,.7c6.64,1.7,9.7,6.6,10.74,13,.08.49.22,1,.33,1.47v4.29H53.88c-.24,5.23,2.38,9.18,6.66,9.66a8.89,8.89,0,0,0,4.65-1c2.41-1.19,3-3.7,3.4-6.21h9.7ZM53.86,26.86H68.44c-.21-4.61-3-7.32-7.37-7.28S54,22.34,53.86,26.86Z" fill="#df6705"/><path d="M32.78,22.51a24.65,24.65,0,0,1,3.38,1.41c2.79,1.69,3.79,4.49,4.07,7.5a19.39,19.39,0,0,1-1.33,10.19,11.92,11.92,0,0,1-11,7.27C18.77,49.15,9.64,49,.5,49a2.68,2.68,0,0,1-.5-.11V.09C.41.06.85,0,1.29,0,9.66,0,18,0,26.39,0a16.84,16.84,0,0,1,3.78.44,10.91,10.91,0,0,1,8.59,9.94,24.42,24.42,0,0,1,.13,4A8.51,8.51,0,0,1,32.78,22.51Zm-23,19.1c5.23,0,10.32.15,15.4,0,4.09-.16,6.37-2.73,6.58-6.8s-1.89-7-5.82-7.51a75.43,75.43,0,0,0-9.29-.32c-2.27,0-4.55,0-6.87,0Zm0-22c4.61,0,9.14.07,13.66,0a3.93,3.93,0,0,0,3.42-2.27,8,8,0,0,0,.08-7.49A4,4,0,0,0,23.41,7.4c-4.52-.11-9,0-13.64,0Z" fill="#df6705"/><path d="M70.91,5V9.66H51.45V5Z" fill="#df6705"/></svg></a></span>
    <span className = "social-media__icon"><a className = "follow-link" href="https://dribbble.com/boomtech"><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57.57 57.6"><title>dribbble-icon</title><path d="M0,26.31c10.17-.05,20.25-.85,30.07-3.72.3-.09.9,0,1,.25,1.2,2.36,2.33,4.75,3.54,7.28A44.34,44.34,0,0,0,9,49.79c-1.28-1.54-2.58-2.92-3.68-4.44a27.59,27.59,0,0,1-5.07-13A3,3,0,0,0,0,31.71Z" fill="#df6705"/><path d="M31.71,0c1.41.3,2.84.56,4.24.91A28.35,28.35,0,0,1,47.38,6.86c.28.24.54.5.87.83-3.84,5.81-9.46,9-15.87,11.45A91,91,0,0,0,19.22,1.5L24.91.24c.32-.07.63-.16.95-.24Z" fill="#df6705"/><path d="M11,51.36A41.66,41.66,0,0,1,35.58,32.5c1,3.2,2.07,6.26,2.78,9.42.87,3.86,1.38,7.8,2.08,11.69.2,1.12-.17,1.64-1.26,2q-14.73,5.3-27.48-3.72C11.49,51.77,11.29,51.6,11,51.36Z" fill="#df6705"/><path d="M.41,23.72a29.2,29.2,0,0,1,16.06-21c3.46,2.85,11.44,13.47,13,17.33C20,22.88,10.36,23.64.41,23.72Z" fill="#df6705"/><path d="M37.44,29.43l-3.74-8C40.18,18.89,46,15.46,50.13,9.52A28.82,28.82,0,0,1,57.55,30,41.07,41.07,0,0,0,37.44,29.43Z" fill="#df6705"/><path d="M38.31,31.84a37.11,37.11,0,0,1,19,.83c-1.49,9.16-6.16,16.08-14.19,21.07A81.16,81.16,0,0,0,38.31,31.84Z" fill="#df6705"/></svg></a></span>
    <span className = "social-media__icon"><a className = "follow-link" href="https://www.facebook.com/boomtechny/"><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.69 51.06"><title>fb-icon</title><path id="FB" d="M5,25.67H0v-9H4.9c0-1.83,0-3.51,0-5.19Q5,.12,16.3,0C18.63,0,21,0,23.44,0V8.92c-1.75,0-3.52,0-5.29,0a2.2,2.2,0,0,0-2.51,2.41c-.05,1.63,0,3.27,0,5.15h8.06c-.25,2.88-.4,5.49-.77,8.07-.06.44-1.06,1-1.67,1.05-1.77.14-3.57.05-5.54.05V51.06H5Z" fill="#df6705"/></svg></a></span>
    </div>
    </div>
    <div className="footer__breadcrumbs_section">
    <div className = "footer__breadcrumbs_wrapper">
      <ul>
      <li> <Link activeClassName = '--active' to="/work">Work</Link></li>
      <li> <Link activeClassName = '--active' to="/profile">Profile</Link></li>
      <li> <Link to="/contact">Contact</Link></li>
      </ul>
    </div>
    </div>
    </div>
    <div className = "footer__row2">
    <div className = "footer__copyright_section">
    <div className = "footer__copyright_wrapper">
    <span className="footer__copyright_owner">BOOMTECH &copy; 2018</span>
    <span className = "footer__copyright_rights">ALL RIGHTS RESERVED</span>
</div>
</div>
<div className ="footer_logo_section">
<object className = "footer__logo" data={footerSVG} type=""></object>
    </div>
    </div>

  </footer>
)
