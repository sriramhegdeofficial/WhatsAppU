import React from 'react';
import Layout from './../components/Layout';
import LoginBox from './../components/LoginBox';
import {Component} from 'react';


class Login extends Component {

    constructor() {
        super();
        this.state = {
            loginButton: {
                isSelected: false
            }
        }
    }

    handleLoginSignupButtonClick = (value) => {
        if(value === 'login') {
            if(this.state.loginButton.isSelected === true) {
                return;
            }else {
                this.setState(prevState => ({
                    loginButton: {                   // object that we want to update
                        ...prevState.loginButton,    // keep all other key-value pairs
                        isSelected: true       // update the value of specific key
                    }
                }))
            }
        }
            
            else if(value=== 'signup')
            {
                if(this.state.loginButton.isSelected === true) {
                    this.setState(prevState => ({
                        loginButton: {                   // object that we want to update
                            ...prevState.loginButton,    // keep all other key-value pairs
                            isSelected: false      // update the value of specific key
                        }
                    }))
                } else {
                    return
                }
            }

        
    }
        



    render() {
    return(
        <Layout>
            <div className="container">
                <LoginBox 
                loginButton = {this.state.loginButton} 
                handleLoginSignupButtonClick = {this.handleLoginSignupButtonClick} />
                <style jsx>
                    {`

                        .container {
                            width: 100%;
                            height: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background: var(--neomorphic-white);
                        }

                      
                    
                    `}
                </style>
            </div>
            
        </Layout>
       
    );
                    }
}

export default Login;