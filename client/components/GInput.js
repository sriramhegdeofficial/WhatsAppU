import React from 'react';
import gsap from 'gsap';
import { Transition } from 'react-transition-group';

class GInput extends React.Component {

    constructor(props) {
        super(props);
      
       
            this.myElement = null;
    }

        
  
   render() {
       return(
           <React.Fragment>
               <Transition 
               mountOnEnter
               unmountOnExit
               in={!this.props.lIsSelected} 
               timeout={700}
               addEndListener = {
                   (node, done) => {
                    if(this.props.lIsSelected) {
                        gsap.to(node, 0.7, {scaleY: 0, opacity: 0, onComplete: done})
                    }else {
                        gsap.from(node, 0.7, {scaleY: 0, opacity: 0, onComplete: done})
                    }
               }
               
            }

               >
                    <input ref={input => this.myElement = input}   type="text" placeholder="Enter email address"/>
               </Transition>
             <style jsx>
                 {
                     `
                     input {
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

                    input:focus {
                        box-shadow:  var(--input-focus-neomorphic-box-shadow);
                        text-shadow: 1px 1px 0 #FFF;
                    }

                    input::placeholder {
                        font-size: 0.8rem;
                        font-family: 'Nunito Sans', sans-serif;
                        font-weight: 400;
                    }
                     `
                 }
             </style>
        </React.Fragment>
       );
   }
}


export default GInput;