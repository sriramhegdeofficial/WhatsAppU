


const Layout = (props) => {
    return (
        <React.Fragment>
            {props.children}
            <style global jsx>
                {
                    `
                     @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;400;900&display=swap');

                 * {
                     box-sizing: border-box;
                     margin: 0;
                     padding: 0;

                 }

                 html, body {
                     width: 100%;
                     height: 100%;
                 }

                 :root {
                     --main-green-color: #25D366;
                     --side-green-color: #5BD9AB;
                     --neomorphic-white: #e8e8e8;
                     --neomorphic-box-shadow: 7px 7px 15px #bbcfda, -4px -4px 13px #ffffff, 
                     inset 4px 4px 8px rgba(209, 217, 230, 0.35), 
                     inset -8px -8px 8px rgba(255, 255, 255, 0.3);
                     --hover-neomorphic-box-shadow: 4px 2px 18px #bbcfda, 
                     -4px -4px 13px #ffffff, 
                     inset 6px 6px 16px rgba(209, 217, 230, 0.8), 
                     inset -8px -8px 8px rgba(255, 255, 255, 0.2);
                     --input-neomorphic-box-shadow: inset 1px 1px 2px #BABECC, 
                     inset -1px -1px 2px white;
                    

                     --input-focus-neomorphic-box-shadow: inset 2px 2px 5px #BABECC, 
                     inset -5px -5px 10px var(--neomorphic-white);
                     --neomorphic-text-shadow:  1px 1px 0 #fff;
                 }
                
                   body {
                    font-family: 'Nunito Sans', sans-serif;
                   }
                 
                
                 #__next {
                     width: 100%;
                     height: 100%;
                 }
                    
                    `
                }
            </style>
        </React.Fragment>
    )
}

export default Layout;