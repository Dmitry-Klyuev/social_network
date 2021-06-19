import React from 'react';
import s from './Header.module.css';

export function Header() {
    return (
        <header className={s.header}>
            <img className={s.logoImg}
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
                 alt="logo"/>
        </header>
    )
}