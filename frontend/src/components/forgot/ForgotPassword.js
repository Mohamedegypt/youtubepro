import React, { Component } from 'react';
import './ForgotPassword.css';


class ForgotPassword extends Component {
  render() {
    return (
      // Main html element for the React component
      <div id="resetpassdiv">
	        <h4 className="resetpasstitle">Reset Password</h4>
	        	<form className="resetpassform">
	        		E-mail:<br />
	        		<input type="text" name="E-l" value="" className="resetpassinput" /> 
	        		<br />
	        		<br />
	        		<button className="resetpassbutton" type="submit">Reset Password</button>
	        	</form>
	        		<br />
	        	
	        	<a href="/admin">login</a>
      </div>
      // !END Main html element for the React component
    );
  }
}

export default ForgotPassword;
