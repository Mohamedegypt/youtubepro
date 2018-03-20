import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginData : {
                email: "",
                password:"",
                isActive: true
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }
    
    handleChange(event) {
        console.log(this.state)
        console.log(this.state.loginData)
        const loginDataCopy = {...this.state.loginData};
        loginDataCopy[event.target.name] = event.target.value;
        this.setState({loginData : loginDataCopy});
        
       

    };
    
    handleSubmit(e) {
        //alert('new user submitted: ' + this.state.value);
        e.preventDefault();
        
        const data = {
            email: this.state.loginData.email,
            password: this.state.loginData.password
        };
        
        fetch('/login', {
          method: 'POST', 
          body: JSON.stringify(data), 
          headers: new Headers({
            'Content-Type': 'application/json'
          })
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
    };


    validateForm(value) {      
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(value);
        
      };
 





        render(){
            return (
    <div className="container">    
                    <div>
                        <div>   
                            <h1>Login</h1>
                        </div>
                        <div id="login">   
                            <form onSubmit={this.handleSubmit} action="/" method="post">
                            <div>
                                <label>
                                Email Address<span>*</span>
                                </label>
                                <input
                                    value={this.state.loginData.email} 
                                    onChange={this.handleChange}
                                    type="email"
                                    name="email"
                                    />
                            </div>
                        
                            <div>
                                <label>
                                    Password<span>*</span>
                                </label>
                                <input 
                                    value={this.state.loginData.password}
                                    onChange={this.handleChange}
                                    type="password" 
                                    name="password"
                                    />
                            </div>
                        
                                <button onClick={(e) => this.handleChange(e)}>Log In</button>
                                <p><a href="#">Register a new account</a></p>
                                <p><a href="#">Forgot Password</a></p>
                            </form>
                        </div>
                    </div>
    </div>    
            );
        }


}



export default Login;


