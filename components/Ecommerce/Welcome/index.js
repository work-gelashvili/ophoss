import React from 'react'
import styles from './styles.module.scss'
import FirstSection from '@components/FirstSection/FirstSection'
import cover from './../../../public/assets/ecommerce/img/gallery/hero.png'


export const Welcome = () => {
    return (
        <FirstSection
            texts={['შექმენი Ecommerce', 'ონლაინ მაღაზია']}
            img={cover}
            bg={true}
        />
    )
}
