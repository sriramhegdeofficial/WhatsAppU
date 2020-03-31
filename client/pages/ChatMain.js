import {Component} from 'react';
import ChatBox from './../components/ChatBox';
import Layout from './../components/Layout';

class ChatMain extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <Layout>
                    <div className="container">
                        <ChatBox />
                    </div>
                    <style jsx>{`
                                
                                .container {
                                width: 100%;
                                height: 100%;
                                display: flex;
                                justify-content: center;
                                }
                            `}
                            </style>
            </Layout>   
        )
    }
}


export default ChatMain;