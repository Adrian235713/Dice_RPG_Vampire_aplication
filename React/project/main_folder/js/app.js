import React, {Component} from "react";
import ReactDOM from "react-dom";
import Dice_generator_10k from "./diceGenerator_k10";
import Foorer from "./linkToCurriculumVitae";
import Nav from "./nav";
import BasicRules from "./basicRules";
import MultiplyActions from "./multiplyActions";
import Botches from "./botches";

// ------------------------------------------------------------------------------------------------
const x_Dice_generator_10k = <Dice_generator_10k/>
const x_Basic_rules = <BasicRules/>
const x_Multiply_Actions = <MultiplyActions/>
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
        <footer>
            {/*footer - Displacement was made due to smo-promotion !!!*/}
            <Foorer/>
        </footer>
        <header>
        </header>
        <nav>
            <Nav/>
        </nav>
        <div>
            {render_component}
        </div>

    </div>
}
ReactDOM.render(<App/>, document.getElementById("app"));
