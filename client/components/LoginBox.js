

import GInput from './GInput';



const LoginBox = (props) => {

    
    const authButtonText = () => {
        if(props.loginButton.isSelected === true) {
            return `login`;
        }else {
            return `signup`;
        }
    }






    return(
        <div className="container">
                <div className="heading-wrapper">
                    <div onClick={() => props.handleLoginSignupButtonClick('login')}>
                        <h2 className="login">Login</h2>
                    </div>
                    <div onClick={() => props.handleLoginSignupButtonClick('signup')}>
                        <h2 className="signup">signup</h2>
                    </div>
                   
                </div>
                
               
                 <form>
                    
                    <GInput lIsSelected={props.loginButton.isSelected} />
                     
                     <input type="text" placeholder= {props.loginButton.isSelected ? "Enter email or username" : "Enter username"} />
                     
                     <input type="password" placeholder="password" />
                     
                 </form>
                 <a href="" className="forgot-password">forgot password?</a>
                <button>
                    {authButtonText()}
                </button>

            <style jsx>
                {
                    `
                  
                    .container {
                        background: var(--neomorphic-white);
                        width: 350px;
                        height: 550px;
                        box-shadow: 0px 0px 25px 5px rgba(0,0,0,0.2);
                        padding: 30px 10px;
                        border-radius: 10px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        box-shadow: var(--neomorphic-box-shadow);
                        position: relative;
                        
                    }

                    .heading-wrapper {
                        width: 70%;
                        border-radius: 50px;
                        
                        display: flex;
                        justify-content: center;
                        align-items : center;
                        overflow: hidden;
                        height: 45px;
                        margin-bottom: 20%;
                        box-shadow: var(--neomorphic-box-shadow);
                        background: var(--neomorphic-white);
                    }

                    .heading-wrapper div {
                        width: 50%;
                        box-shadow: var(--neomorphic-box-shadow);
                        background: var(--neomorphic-white);
                        display: flex;
                        justify-content: center;
                        align-items : center;
                        height: 100%;
                        cursor: pointer;
                    }

                   

                    .container .heading-wrapper div h2 {
                        font-weight: 900;
                        text-transform: uppercase;
                        font-size: 1rem;
                        text-align: center;
                        text-shadow: var(--neomorphic-text-shadow);
                        
                    }

                    .signup {
                       
                      color: ${!props.loginButton.isSelected ? `black` : `rgba(0,0,0,0.3)`};
                      transition: color 0.7s linear;

                    }

                    .login {
                        color:  ${props.loginButton.isSelected ? `black` : `rgba(0,0,0,0.3)`};
                        transition: color 0.5s linear;

                    }

                  
 
                    .container button {
                        width: 70%;
                        height: 40px;
                        text-transform: uppercase;
                        border: none;
                        outline: none;
                        cursor: pointer;
                        font-size: 0.7rem;
                        font-weight: 900;
                        box-shadow: var(--neomorphic-box-shadow);
                        background: var(--neomorphic-white);
                        color: black;
                        border-radius: 50px;
                        transition: all 0.27s linear;
                        position: absolute;
                        bottom: 15%;
                        left: 50%;
                        transform: translateX(-50%);
                    }
                    
                    .container button:hover {
                        box-shadow: var(--hover-neomorphic-box-shadow);
                    }

                    form {
                        width: 100%;
                        display: flex;
                        align-items : center;
                        flex-direction: column;
                    }

                    form input {
                        width: 80%;
                        min-width: 200px;
                        height: 40px;
                        border: none;
                        outline: 0;
                        border-radius: 50px;
                        font-size: 0.8rem;
                        padding: 0px 25px;
                        background-color: var(--neomorphic-white);
                        box-shadow:  var(--input-neomorphic-box-shadow);
                        margin: 17px 0;
                        font-weight: 900;
                         
                    }


                    form input:focus {
                        box-shadow:  var(--input-focus-neomorphic-box-shadow);
                        text-shadow: 1px 1px 0 #FFF;
                    }

                    form input::placeholder {
                        font-size: 0.8rem;
                        font-family: 'Nunito Sans', sans-serif;
                        font-weight: 400;
                    }

                   

                   a.forgot-password {
                       font-size: 0.9rem;
                       position: absolute;
                       right: 15%;
                       top: 67%;
                       color: rgba(0,0,0,0.3);
                       text-decoration: none;
                       font-style: italic;
                       text-shadow: 1px 1px 0 #FFF;
                       font-weight: 900;
                       transition: all 0.27s linear; 
                   }

                   a.forgot-password:hover {
                       color: black;
                   }

                    @media only screen and (max-width: 500px) {
                       
                        .container { 
                            width: 96%;
                            
                        }
                      }
                    
                    `
                }
            </style>
        </div>
    )
            
}

export default LoginBox;