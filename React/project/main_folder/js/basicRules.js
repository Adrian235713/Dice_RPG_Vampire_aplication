import React, {Component, useState} from 'react';

// -----------------------------------------------------------------------------------------------------------
const rules_text_0 = <ul>

    <li>Set the difficulty level</li>
    <li>Roll the dice for the RPG.</li>
    <li>If you have 1, discard any 10 throw</li>
    <li>If you still have 1, discard any die success</li>
    <li>If you have a dice  of 10 left, you can chew the dice again and if the score meets the difficulty level add it here to the success pool</li>
    <li>If the number 1 is greater than the number of successes you draw Critical Failure / Botches XD</li>

</ul>

const rules_text_1 = <p>Although your character's personality is limited only by your imagination, his capabilities
    are defined by his Traits - all of his innate and learned aptitudes and abilities. Each Trait is described by a
    rating of 1 to 5; a 1 in a Trait is barely competent, while a 5 is the pinnacle of human achievement. Most
    people's Traits range from 1 to 3; a 4 in a Trait indicates an exceptional person, while a 5 is nearly
    incomparable - among humans, at any rate. Think of this as similar to the "star" rating system of movies and
    restaurants - a 1 is barely passable while a 5 is superb. It's also possible to have a zero in a Trait - this
    usually represents a skill that the character never learned, but some exceptions (such as the hideous
    Nosferatu's lack of an Appearance Trait) do occur.
</p>

const rules_text_2 = <p>
    Whenever you roll dice, you roll one die for every dot in the appropriate Trait; for instance, if your character
    is trying to find something and he has three dots in Perception, you would roll three dice. However, you almost
    never simply roll the number of dice you have in an Attribute; raw potential is modified by skill, after all.
    The most common rolls in the game involve adding the dice gained from an Attribute to the dice gained from an
    Ability.

</p>

const rules_text_3 = <p>
    For instance, if Veronica were trying to find a specific file in a cluttered clerk's office, the Storyteller
    might have her player Lynn roll Perception + Finance - an Attribute plus an Ability. In this case, Lynn would
    take two dice for Veronica's Perception of 2, plus as many dice as she had in Finance; Veronica has Finance 4,
    so Lynn gets four more dice from that. Veronica has a total of six dice tcr attempt her task. These dice are
    called the dice pool - in other words, the total number of dice you roll in a single turn. Most often, you'll
    calculate a dice pool for only one action at a time, although you can modify it to be able to perform multiple
    tasks in a turn (for more information, see the "Multiple Actions" sidebar).

</p>

const rules_text_4 = <p>
    Of course, you might not need to add an Ability to an Attribute for some rolls; for instance, there's no skill
    that will help Veronica heft a small safe. In such cases, Lynn would use only the dice from the Attribute - in
    this case, Strength.

</p>

const rules_text_5 = <p>
    There is absolutely no situation in which more than two Traits can add to a dice pool. What's more, if your dice
    pool involves a Trait whose maximum rating is 10 (such as Humanity or Willpower), you can't add any other Traits
    to your dice pool. It's effectively impossible for a normal human being to have more than 10 dice in a dice
    pool.
</p>

const img_1 = <img src="../img/img5.jpg" alt=""/>
const img_2 = <img src="../img/ph2.jpg" alt=""/>
// -----------------------------------------------------------------------------------------------------------

const BasicRules = () => {

    return (

        <div className={'Basic_rules_main_div'}>

            <div>{rules_text_0}</div>
            <div>{img_1}</div>
            <div>{rules_text_1}</div>
            <div>{rules_text_2}</div>
            <div>{img_2}</div>
            <div>{rules_text_3}</div>
            <div>{rules_text_4}</div>
            <div>{rules_text_5}</div>

        </div>
    )
}
export default BasicRules;