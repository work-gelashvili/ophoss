"use client"

import Link from 'next/link'
import Style from './Header.module.scss'

const Menu = () => {
    return (
        <div className='d-flex justify-content-between'>
            <ul className={`${Style['header__menu']} d-flex align-items-center`}>
                <li className={`${Style['header__menu--item']}`} >
                    <Link
                        href={'/'}
                        className={`${Style['header__menu--link']} `}
                    >
                        Home
                    </Link>
                </li>
                <li className={`${Style['header__menu--item']}`} >
                    <Link
                        href={'/team'}
                        className={`${Style['header__menu--link']} `}
                    >
                        Team
                    </Link>
                </li>
            </ul>
            <ul className={`${Style['header__menu']} d-flex align-items-center`}>
                <li className={`${Style['header__menu--item']}`} >
                    <Link
                        href={'/ecommerce'}
                        className={`${Style['header__menu--link']} ${Style['header__menu--ecommerce']}`}
                    >
                        E-COMMERCE
                    </Link>
                </li>
                <li className={`${Style['header__menu--item']}`} >
                    <Link
                        href={'/startupper'}
                        className={`${Style['header__menu--link']} ${Style['header__menu--startupper']}`}
                    >
                        STARTUPPER
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu