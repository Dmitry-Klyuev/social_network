import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';

export function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog +' '+ s.active}>
                    <NavLink to='/messages/1'>Dimych</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/messages/2'>Panda</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/messages/3'>Jenya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/messages/4'>Uyra</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Hi
                </div>
                <div className={s.message}>
                    How are you
                </div>
                <div className={s.message}>
                    Ok
                </div>
            </div>

        </div>
    )
}