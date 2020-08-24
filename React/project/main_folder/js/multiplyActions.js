import React, {Component, useState} from 'react';

// --------------------------------------------------------------------------------------------------------------
const Multiply_Actions_p_1 = <p>
    Occasionally, a player will want her character to perform more than one action in a turn - for example, firing a gun
    at two different targets, or climbing a ledge while kicking at pursuers below. In such situations, the player can
    attempt actions normally, though all actions suffer a penalty.
</p>

const Multiply_Actions_p_2 = <p>
    The player declares the total number of actions he wishes his character to attempt. He then subtracts a number of
    dice from his first dice pool equal to the total number of actions. Additional actions lose an extra die from their
    pools, cumulative; if a dice pool is reduced to zero or below in this manner, the action may not be attempted.
</p>

const Multiply_Actions_p_3 = <p>
    Example: Justin wishes his character, Hall the Nosferatu, to throw a punch while simultaneously dodging two incoming
    blows. Hall has Dexterity 3, Brawl 4 and Dodge 3. Justin calculates the dice pool for the punch (Dexterity 3 + Brawl
    4 = 7 dice pool), then subtracts three dice from it (because of the three actions total), for a final dice pool of
    4. The first dodge has abase dice pool of 6 (Dexterity 3 + Dodge 3), minus four (three for the number of actions,
    plus one for being the second multiple action), for a final dice pool of 2. The final dodge has a dice pool of 1 (6,
    minus three for the number of actions, minus an additional two for being the third action attempted). Hall had
    better be pretty lucky.
</p>

const Multiply_Actions_p_4 = <p>
    Vampires with the Discipline of Celerity may take multiple actions without subtracting dice from their dice pools.
    These extra actions may not themselves be divided into multiple actions.
</p>

const img_2 = <img src="../img/img2.jpg" alt=""/>
// --------------------------------------------------------------------------------------------------------------
const MultiplyActions = () => {

    return (

        <div className={'Multiply_Actions_main_div'}>
            <div>{Multiply_Actions_p_1}</div>
            <div>{img_2}</div>
            <div>{Multiply_Actions_p_2}</div>
            <div>{Multiply_Actions_p_3}</div>
            <div>{Multiply_Actions_p_4}</div>

        </div>
    )
}

export default MultiplyActions;