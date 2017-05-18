/*global React, ReactDOM, React.Component, console*/
//=======================================================
//GLOBALS
let app = document.getElementById("App");

//=======================================================
//CLASSES
class App extends React.Component{

    render(){
        return(
            <section>
                hello world
            </section>
        );
    }
}

//=======================================================
//MAIN
ReactDOM.render(<App/>, app);
//=======================================================
//CALLBACKS

//=======================================================
//FUNCTIONS