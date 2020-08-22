import React, {Component, useState} from 'react';


const Botches_p_1 = <p>
    Bad luck can ruin anything. One more basic rule about rolling dice is the "rule of one," or (spoken in a despairing
    tone) "botching." Whenever one of the dice comes up as a "1," it cancels out a success. Completely. Take the die
    showing "1" and one of the dice showing a successful number and set them aside. In this manner, an otherwise
    successful action may be reduced to failure.
</p>

const Botches_p_2 = <p>
    Occasionally, truly bad fortune strikes. If a die roll garners no successes whatsoever, and one or more "1s" show
    up, a botch occurs. In other word, if none of your dice comes up a success, and there are dice showing "1s" (no
    matter how many), the roll is a botch. If you score at least one success, even if that success is canceled out and
    additional "1s" remain, it's just a simple failure.
</p>

const Botches_p_3 = <p>
    A botch is much worse than a normal failure - it's outright misfortune. For instance, rolling a botch when trying to
    gun down a hunter might result in your gun jamming. Botching a Computer roll when hacking into a system will
    probably alert the authorities, while botching a Stealth roll is the proverbial "stepping on a dry twig." The
    Storyteller decides exactly what goes wrong; a botch might produce a minor inconvenience or a truly unfortunate
    mishap.
</p>

const Botches_p_4 = <p>
    Of course, some Storytellers may find that botches are cropping up a little too frequently in their chronicles (the
    laws of probability often warp around dice, as any veteran roleplayer can attest). In that case, it's the
    Storyteller's privilege to give everyone, player and Storyteller character alike, one botch "free" - in other words,
    the first botched roll of the session doesn't count. This rule tends to make unlife a little easier on the players -
    but then again, there's less chance of their enemies suffering a run of bad luck either...
</p>

const Botches_p_5 = <p>
    Example: Alexandra, a Tremere played by Merida, is desperately firing a gun through the windows of the chantry,
    whichare being shot out by a marauding Sabbat pack. Merida rolls Alex's Dexterity + Firearms (difficulty 8), and
    gets 9, 1, 1, 8, 1. The "1s" more than cancel out the successes, but because she rolled successes to begin with, the
    action simply fails.
</p>


const Botches_p_6 = <p>
    She's not so lucky next turn. The dice come up 1, 3, 4, 3, 7. This time, not only did a "I" occur, but no successes
    were scored at all, so the action is a botch. The Storyteller rules that Alexandra's gun jams, and as she tries to
    force it, something crucial breaks, rendering the gun worthless. Alexandra starts to crawl for the back door, hoping
    that the pack hasn't found it yet...
</p>


const img_1 = <img src="../img/img4.jpg" alt=""/>
const img_2 = <img src="../img/img3.jpg" alt=""/>
const img_3 = <img src="../img/bllod4.jpg" alt=""/>


const Botches = () => {

    return (

        <div className={'Botches_main_div'}>

            <div>{Botches_p_1}</div>
            <div>{img_1}</div>
            <div>{Botches_p_2}</div>
            <div>{Botches_p_3}</div>
            <div>{img_2}</div>
            <div>{Botches_p_4}</div>
            <div>{Botches_p_5}</div>
            <div>{img_3}</div>
            <div>{Botches_p_6}</div>


        </div>
    )
}

export default Botches;