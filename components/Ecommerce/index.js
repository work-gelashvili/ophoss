import React from 'react'
import styles from './styles.module.scss'
import { Welcome } from './Welcome'
import { About } from './About'
import Contact from '@components/Contact/Contact'

export const Ecomerce = () => {
    return (
        <>
            <Welcome />
            <About />
            <Contact />
        </>
    )
}
