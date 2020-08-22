import React, {Component, useState} from 'react';



const Masquerade = "The Masquerade is technically outlined in the Traditions, however until the 15th century this was commonly interpreted as not informing mortals of the niceties of vampiric society, how common vampires were or generally making too big a noise. The Tradition was openly flouted by several clans (notably the Tzimisce), while the vampires in more civilized societies would often adhere to it more tightly." +
    "\n" +
    "All of this changed with the Inquisition, following the Anarch Revolt, when the true number of vampires became apparent and Rome started to have at the undead igne ferroque, the nascent Camarilla was primarily organized around promulgating and strongly enforcing a Masquerade. History holds that Rafael de Corazon's famous speech in 1450 made enforcing the Masquerade the Camarilla's primary policy."


const Domain = "Domain is a physical territory to which a vampire has access for the purpose of feeding and asserting his will. This term is often employed to describe an area claimed by an influential vampire who has gained respect; a Prince will often claim a city as their domain. Some vampires refer to their domain as hunting grounds, and most jealously guard them, even invoking the Second Tradition of the same name to protect their claims."

const Koldun = "Koldun. While all Tzimisce consider themselves scholars, scientists, and sorcerers of a sort, those who call themselves kolduns claim to be the first vampires to have mastered sorcery. It is uncertain if kolduns are a true variation of the blood or a title bestowed upon those who have mastered the eldritch energies of the land, but in any case, kolduns are rare and respected among the Tzimisce. Not all have the aptitude to properly harness and control the land's spirits in the practice of koldunism, and those who fail are incinerated by the unbound power. Those who succeed are Kolduns. Due to their unique ties to their ancestral soil, most Kolduns belong to the Old Clan, and the discipline is almost universal among them; most Tzimisce in the Sabbat lack the spiritual strength to master Koldunism, although exceptions are becoming increasingly common in the modern nights."

const Old_Clan_Tzimisce = "Old Clan Tzimisce. The younger generations of Tzimisce have taken to calling them the Old Clan Tzimisce, members of the Tzimisce clan who did not join the Sabbat or cultivate the use of Vicissitude, but they call themselves the Dracul and do not consider themselves a bloodline. Most of them are old (at least 500 years old, as they predate the formation of the Sabbat), of low generation and rule small domains almost exclusively in Eastern Europe. " +
    "The majority of Tzimisce elders met Final Death when the clan joined the Sabbat, but a fair number escaped their vindictive progeny. Securing their demesnes against the ravages of the Sabbat, these vampires continued to exist much as they had for centuries, albeit more warily."


const  Tzimisce_antitribu= "Tzimisce antitribu. The vast majority of the Tzimisce belong squarely to the Sabbat; the rest are apolitical. There is barely even a handful of Tzimisce in the Camarilla, and those few are only there for personal reasons and tend to leave once their objectives are completed. The presence of the Tremere virtually guarantees that the Tzimisce have no interest in remaining. Although a scant few individual members may join temporarily, it cannot be said that there is enough of an ideological difference, or enough members to declare an antitribu bloodline."

const  Kupala = "Kupala. Legends of the Tzimisce clan recall that the Eldest met Kupala long ago, when it first arrived at Transylvania. It was a slumbering entity, sealed by the Lupines and yearned for freedom. Despite great resistance, [Tzimisce] managed to free Kupala in exchange for mystic knowledge, but even the Antediluvian could not sever the ties between it and the Carpathian land." +
    "" +
    "Kupala's presence in the Carpathian soil may have influenced the nature of the Tzimisce clan weakness; the demon is also referenced by name, if not directly invoked, by some kolduns through a number of powerful Koldunic Sorcery rituals. Kupala, in the guise of Root of All, influenced the founder Tremere and his conspirators in House Tremere to found the chantry of Ceoris and, later, to transform themselves into vampires." +
    "" +
    "The demon created a Sacred Fire-Flower, which is said to bind or loose demons and also might have been the fundamental stone to the ritual of Vaulderie, practised by the Sabbat. It also may have manipulated the Cathedral of Flesh to consume its master, the methuselah Yorak."


const Baali = "The Baali are a bloodline of vampires associated with demon worship. Because of their affinity with the unholy, the Baali are particularly vulnerable to holy iconography, holy ground and holy water. They are highly vulnerable to True Faith." +
    "" +
    "Some versions present the true purpose of the Baali as keeping demons sleeping by feeding them with carnage and destruction. But most presentations show them as infernalists, using demon worship to gain additional power." +
    "" +
    "They have a somewhat complex heritage, appearing at times as a bloodline and at times as a clan. There is some indication that they may be a bloodline of the Salubri, Cappadocians, or Tzimisce, although one earlier source suggested they may instead be descendants or even predecessors of the Gangrel line. They also recruit vampires from other clans to become Baali via a dark thaumaturgic initiation, further confusing the issue and making them also a sect or cult."




const Dice_generator_10k = () => {

    var all_dice_rolls = [];
    var all_successes = [];
    var critic = null;
    var failure = null;
    var suces = null;

    var CRITICAL_FAILURE = "";

    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


    var all_curiosities = [Masquerade,Domain,Koldun,Old_Clan_Tzimisce,Tzimisce_antitribu,Kupala,Baali];


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

        var x = 0;
        if (failure > suces) {
            CRITICAL_FAILURE = "CRITICAL FAILURE XD";
            x = 1;
        }

        if (x === 0){

            let los_number = Math.floor(Math.random() * 7);
            let x = all_curiosities[los_number];
            CRITICAL_FAILURE = x;

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


        all_dice_rolls = [];
        all_successes = [];
        failure = null;
        critic = null;
        suces = null;

    }


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

    //---------------------------------------------------------------------------------------------------------------
    // return Components return Components return Components return Components return Components return Components


    const x_all_dice_rolls = localStorage.getItem('all_dice_rolls');
    const x_all_successes_crit_failure_which_pass_level_of_difficulty = localStorage.getItem('all_successes_crit_failure_which_pass_level_of_difficulty');
    const x_CRITICAL_FAILURE = localStorage.getItem('CRITICAL_FAILURE');



    const Next_draw = () => {
        console.log("sdasdasdasd");

        localStorage.clear();
        window.location.reload();
        all_dice_rolls = [];
        all_successes = [];
        failure = null;
        critic = null;
        suces = null;
    }



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


                <button onClick={Next_draw} className={'Next_draw'}>Next Draw</button>


            </div>


        </div>
    )


}

export default Dice_generator_10k;