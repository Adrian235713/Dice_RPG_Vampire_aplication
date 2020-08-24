import React, {Component, useState} from 'react';

const Nav = () => {

    const menu_Dice = () => {
        localStorage.setItem('x', JSON.stringify(0));
        window.location.reload();
    }

    const Basic_rules = () => {
        localStorage.setItem('x', JSON.stringify(1));
        window.location.reload();
    }

    const menu_Multiply_Actions = () => {
        localStorage.setItem('x', JSON.stringify(2));
        window.location.reload();
    }

    const menu_Botches = () => {
        localStorage.setItem('x', JSON.stringify(3));
        window.location.reload();
    }

    return (
        <div className={'Nav_main_div'}>
            <button onClick={menu_Dice}>Dice</button>
            <button onClick={Basic_rules}>Basic rules</button>
            <button onClick={menu_Multiply_Actions}> Multiply Actions</button>
            <button onClick={menu_Botches}>Botches</button>
        </div>
    )
}

export default Nav;