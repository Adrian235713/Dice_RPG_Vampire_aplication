import React, {Component} from "react";
import ReactDOM from "react-dom";


import Dice_generator_10k from "./dice_generator_k10";
import Foorer from "./footer";
import Nav from "./nav";
import Basic_rules from "./Basic_rules";
import Multiply_Actions from "./multiply_actions";
import Botches from "./Botches";

// ------------------------------------------------------------------------------------------------

const x_Dice_generator_10k = <Dice_generator_10k/>
const x_Basic_rules = <Basic_rules/>
const x_Multiply_Actions = <Multiply_Actions/>
const x_Botches = <Botches/>


let x = parseInt(localStorage.getItem('x'));
let render_component = null;

if (x === 0) {
    render_component = x_Dice_generator_10k;
}
if (x === 1) {
    render_component = x_Basic_rules;
}
if (x === 2) {
    render_component = x_Multiply_Actions;
}
if (x === 3) {
    render_component = x_Botches;
}


// ------------------------------------------------------------------------------------------------
const App = () => {


    return <div className={'main_app_box'}>
        <header>
        </header>

        <nav>
            <Nav/>
        </nav>

        <div>

            {render_component}

        </div>

        <footer>
            <Foorer/>
        </footer>

    </div>
}
ReactDOM.render(<App/>, document.getElementById("app"));
