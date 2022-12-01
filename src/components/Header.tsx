import css from './Header.module.css'

import igniteLogo from '../assets/ignite-logo.svg'

export function Header() {
    return (
        <header className={css.header}>
            <img src={igniteLogo} alt="Logo ignite" />
        </header>
    )
}