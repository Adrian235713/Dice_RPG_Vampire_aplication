import React, {Component} from "react";
import ReactDOM from "react-dom";

import Dice_generator_10k from "./dice_generator_k10";



import Foorer from "./footer";

console.log("Test = app,js");

const App = () => {
    return <div className={'main_app_box'}>

        <header>   <h2>Lasciate ogni speranza, o voi ch'entrate</h2>     </header>

        <nav>        nav       </nav>

        <div>

            <Dice_generator_10k/>


        </div>

        <footer> <Foorer/> </footer>

    </div>


}


ReactDOM.render(<App/>, document.getElementById("app"));
