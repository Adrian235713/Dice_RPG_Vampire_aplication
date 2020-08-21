import React, {Component, useState} from 'react';


const Dice_generator_10k = () => {

    var all_dice_rolls = [];
    var all_successes = [];
    var critic = null;
    var failure = null;
    var suces = null;

    var CRITICAL_FAILURE = "";

    //---------------------------------------------------------------------------------------------------------------
    // Number_draw Number_draw  Number_draw  Number_draw  Number_draw  Number_draw  Number_draw  Number_draw
    let [dice_Number_draw, set_Dice_Number_Draw] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])

    var [Number_draw, set_Number_draw] = useState(() => {
        return null
    });

    const get_dice_Number_draw_0 = () => {
        set_Number_draw(Number_draw = dice_Number_draw[0]);
    }
    const get_dice_Number_draw_1 = () => {
        set_Number_draw(Number_draw = dice_Number_draw[1]);
    }
    const get_dice_Number_draw_2 = () => {
        set_Number_draw(Number_draw = dice_Number_draw[2]);
    }
    const get_dice_Number_draw_3 = () => {
        set_Number_draw(Number_draw = dice_Number_draw[3]);
    }
    const get_dice_Number_draw_4 = () => {
        set_Number_draw(Number_draw = dice_Number_draw[4]);
    }
    const get_dice_Number_draw_5 = () => {
        set_Number_draw(Number_draw = dice_Number_draw[5]);
    }
    const get_dice_Number_draw_6 = () => {
        set_Number_draw(Number_draw = dice_Number_draw[6]);
    }
    const get_dice_Number_draw_7 = () => {
        set_Number_draw(Number_draw = dice_Number_draw[7]);
    }
    const get_dice_Number_draw_8 = () => {
        set_Number_draw(Number_draw = dice_Number_draw[8]);
    }
    const get_dice_Number_draw_9 = () => {
        set_Number_draw(Number_draw = dice_Number_draw[9]);
    }
    const get_dice_Number_draw_10 = () => {
        set_Number_draw(Number_draw = dice_Number_draw[10]);
    }
    const get_dice_Number_draw_11 = () => {
        set_Number_draw(Number_draw = dice_Number_draw[11]);
    }
    const get_dice_Number_draw_12 = () => {
        set_Number_draw(Number_draw = dice_Number_draw[12]);
    }
    const get_dice_Number_draw_13 = () => {
        set_Number_draw(Number_draw = dice_Number_draw[13]);
    }
    const get_dice_Number_draw_14 = () => {
        set_Number_draw(Number_draw = dice_Number_draw[14]);
    }

    //---------------------------------------------------------------------------------------------------------------
    // level of difficulty /  level of difficulty /  level of difficulty /  level of difficulty /  level of difficulty

    let [level_of_difficulty_number, set_Level_of_difficulty_number] = useState([2, 3, 4, 5, 6, 7, 8, 9, 10])

    let [difficulty_input, setDifficulty_Input] = useState(null)

    const get_level_of_difficulty_number_0 = () => {
        setDifficulty_Input(difficulty_input = level_of_difficulty_number[0]);
    }

    const get_level_of_difficulty_number_1 = () => {
        setDifficulty_Input(difficulty_input = level_of_difficulty_number[1]);
    }

    const get_level_of_difficulty_number_2 = () => {
        setDifficulty_Input(difficulty_input = level_of_difficulty_number[2]);
    }

    const get_level_of_difficulty_number_3 = () => {
        setDifficulty_Input(difficulty_input = level_of_difficulty_number[3]);
    }

    const get_level_of_difficulty_number_4 = () => {
        setDifficulty_Input(difficulty_input = level_of_difficulty_number[4]);
    }

    const get_level_of_difficulty_number_5 = () => {
        setDifficulty_Input(difficulty_input = level_of_difficulty_number[5]);
    }

    const get_level_of_difficulty_number_6 = () => {
        setDifficulty_Input(difficulty_input = level_of_difficulty_number[6]);
    }

    const get_level_of_difficulty_number_7 = () => {
        setDifficulty_Input(difficulty_input = level_of_difficulty_number[7]);
    }

    const get_level_of_difficulty_number_8 = () => {
        setDifficulty_Input(difficulty_input = level_of_difficulty_number[8]);
    }



    //---------------------------------------------------------------------------------------------------------------
    // Make a throw Make a throw Make a throw Make a throw Make a throw Make a throw Make a throw Make a throw


    //---------------------------------------------------------------------------------------------------------------


    function Make_a_throw() {


        for (let i = 0; i < Number_draw; i++) {

            let los_number = Math.floor(Math.random() * 10 + 1);

            all_dice_rolls.push(los_number);
        }


        for (let i = 0; i <= all_dice_rolls.length; i++) {

            if (all_dice_rolls[i] >= difficulty_input) {
                all_successes.push(all_dice_rolls[i]);
                suces++;
            }

            if (all_dice_rolls[i] == 1) {
                failure++;
            }

            if (all_dice_rolls[i] == 10) {
                critic++;
            }
        }

        if (failure > suces) {
            CRITICAL_FAILURE = "CRITICAL FAILURE XD";
        }


        let all_successes_crit_failure = [...all_successes];

        all_dice_rolls.sort(function (a, b) {
            return a - b;
        });
        all_successes.sort(function (a, b) {
            return a - b;
        });
        all_successes_crit_failure.sort(function (a, b) {
            return a - b;
        });

        for (let i = 0; i <= all_successes.length; i++) {

            if (failure > 0) {
                all_successes_crit_failure.pop()
                failure--;
            }

        }

        for (let i = 0; i <= all_successes_crit_failure.length; i++) {

            if (all_successes_crit_failure[i] === 10) {

                let los_number = Math.floor(Math.random() * 10 + 1);

                if (los_number !== 1) {
                    all_successes_crit_failure.push(los_number);
                }
            }
        }

        let all_successes_crit_failure_which_pass_level_of_difficulty = [];

        for (let i = 0; i <= all_successes_crit_failure.length; i++) {

            if (all_successes_crit_failure[i] >= difficulty_input) {
                all_successes_crit_failure_which_pass_level_of_difficulty.push(all_successes_crit_failure[i]);
            }

        }

        if (failure > all_successes_crit_failure_which_pass_level_of_difficulty.length)

            all_dice_rolls.sort(function (a, b) {
                return a - b;
            });
        all_successes.sort(function (a, b) {
            return a - b;
        });
        all_successes_crit_failure.sort(function (a, b) {
            return a - b;
        });
        all_successes_crit_failure_which_pass_level_of_difficulty.sort(function (a, b) {
            return a - b;
        });


        console.log("-----------------------------------------------------------")
        console.log("all_dice_rolls => ", all_dice_rolls);
        console.log("all_successes => ", all_successes);
        console.log("all_successes_crit_failure =>", all_successes_crit_failure);
        console.log("all_successes_crit_failure_which_pass_level_of_difficulty => ", all_successes_crit_failure_which_pass_level_of_difficulty);
        console.log("Success numbers: ", all_successes_crit_failure_which_pass_level_of_difficulty.length);
        console.log("------------------------------------------------------------")


        localStorage.setItem('all_dice_rolls', JSON.stringify(all_dice_rolls));
        localStorage.setItem('all_successes', JSON.stringify(all_successes));
        localStorage.setItem('all_successes_crit_failure', JSON.stringify(all_successes_crit_failure));
        localStorage.setItem('all_successes_crit_failure_which_pass_level_of_difficulty', JSON.stringify(all_successes_crit_failure_which_pass_level_of_difficulty));

        localStorage.setItem('suces', JSON.stringify(suces));
        localStorage.setItem('failure', JSON.stringify(failure));
        localStorage.setItem('critic', JSON.stringify(critic));


        localStorage.setItem('CRITICAL_FAILURE', JSON.stringify(CRITICAL_FAILURE));


        window.location.reload();


        // all_dice_rolls = [];
        // all_successes = [];
        // failure = null;
        // critic = null;
        // suces = null;

    }




// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

    //---------------------------------------------------------------------------------------------------------------
    // return Components return Components return Components return Components return Components return Components




    const x_all_dice_rolls = localStorage.getItem('all_dice_rolls');
    const x_all_successes_crit_failure_which_pass_level_of_difficulty = localStorage.getItem('all_successes_crit_failure_which_pass_level_of_difficulty');
    const x_CRITICAL_FAILURE = localStorage.getItem('CRITICAL_FAILURE');

    return (
        <div className={'dice_generator'}>

            <h2>Dice Number</h2>

                <div className={'dice_number'}>

                    <button onClick={get_dice_Number_draw_0}>{dice_Number_draw[0]}</button>
                    <button onClick={get_dice_Number_draw_1}>{dice_Number_draw[1]}</button>
                    <button onClick={get_dice_Number_draw_2}>{dice_Number_draw[2]}</button>
                    <button onClick={get_dice_Number_draw_3}>{dice_Number_draw[3]}</button>
                    <button onClick={get_dice_Number_draw_4}>{dice_Number_draw[4]}</button>
                    <button onClick={get_dice_Number_draw_5}>{dice_Number_draw[5]}</button>
                    <button onClick={get_dice_Number_draw_6}>{dice_Number_draw[6]}</button>
                    <button onClick={get_dice_Number_draw_7}>{dice_Number_draw[7]}</button>
                    <button onClick={get_dice_Number_draw_8}>{dice_Number_draw[8]}</button>
                    <button onClick={get_dice_Number_draw_9}>{dice_Number_draw[9]}</button>
                    <button onClick={get_dice_Number_draw_10}>{dice_Number_draw[10]}</button>
                    <button onClick={get_dice_Number_draw_11}>{dice_Number_draw[11]}</button>
                    <button onClick={get_dice_Number_draw_12}>{dice_Number_draw[12]}</button>
                    {/*<button onClick={get_dice_Number_draw_13}>{dice_Number_draw[13]}</button>*/}
                    {/*<button onClick={get_dice_Number_draw_14}>{dice_Number_draw[14]}</button>*/}

                </div>

            <h2>Level of Difficulty</h2>

                <div className={'level_of_difficulty'}>

                    <button onClick={get_level_of_difficulty_number_0}>2</button>
                    <button onClick={get_level_of_difficulty_number_1}>3</button>
                    <button onClick={get_level_of_difficulty_number_2}>4</button>
                    <button onClick={get_level_of_difficulty_number_3}>5</button>
                    <button onClick={get_level_of_difficulty_number_4}>6</button>
                    <button onClick={get_level_of_difficulty_number_5}>7</button>
                    <button onClick={get_level_of_difficulty_number_6}>8</button>
                    <button onClick={get_level_of_difficulty_number_7}>9</button>
                    <button onClick={get_level_of_difficulty_number_8}>10</button>

                </div>


            <div className={'Results_all_box'}>

                    <button onClick={Make_a_throw}>Make a Throw</button>


                    <div className={'Results'}>
                        <h2>All Dice: {x_all_dice_rolls}</h2>
                    </div>


                    <div className={'final_result'}>
                        <h2>Final Result: {x_all_successes_crit_failure_which_pass_level_of_difficulty}</h2>
                    </div>


                    <div>
                        <h2>{x_CRITICAL_FAILURE}</h2>
                    </div>




                <button className={'Next_draw'}>Next Draw</button>



            </div>



        </div>
    )


}

export default Dice_generator_10k;