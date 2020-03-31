import Logo from "./Logo";
import Chat from './message';


const ChatBox = () => {
    return (
        <div className = "container">
           
            <div className="chatHeader">
                
                <Logo />
                <h2 className="title">
                    WhatsApp
                </h2>
                
            </div>
            
             
            <style jsx>{`

          
            
            .container {
                width: 40%;
                min-width: 300px;
                height: 100%;
                min-height: 600px;
                border-left: 1px solid rgba(0,0,0,0.1);
                border-right: 1px solid rgba(0,0,0,0.1);
                background-image: url("/default-wallpaper.jpg");
                display: flex;
                flex-direction: column;
                
                
            }

            .chatHeader {
                width: 100%;
                height: 58px;
                background: #25D366;
                display: flex;
                align-items: center;
                padding: 0px 15px;
            }

            .title {
                color: white;
            }

            



            `}

            </style>
        </div>
    );
}

export default ChatBox;