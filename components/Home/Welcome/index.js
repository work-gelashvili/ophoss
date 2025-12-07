import React from 'react'
import styles from './styles.module.scss'
import FirstSection from '@components/FirstSection/FirstSection'

export const Welcome = () => {
    return (
        <FirstSection
            line={true}
            texts={['Do have idea?', 'Are You Startuper?']} />
    )
}
