"use client"

import React from 'react'
import styles from './styles.module.scss'
import SectionText from '@components/SectionText/SectionText'
import Team from '../Team/Team'


export const About = () => {
    return (
        <section className={styles.about}>
            <div className='container'>
                <div className={`${styles['about__head']}`}>
                    <h1 className={`${styles['about__head--title']}`}>
                    OPHOS შესახებ
                    </h1>
                </div>
                <div className={`${styles['about__text']}`}>
                    <p>
                        ჩვენი გუნდი შექმნილია აუთსორსზე მომუშავე იმ ხალხის მიერ რომლებიც მუშაობენ
                        2015 წლიდან.
                    </p>
                    <p>
                        სხვასდასხვა კომპანიებში მათ დააგროვეს ის ხედვა და გამცოდიელბა რაც ამ საქმეში საჭიროა.
                    </p>
                    <p>
                    ჩვენს მიერ შექმნილია კრიპტო პლატფორმის აპლიკაცია, e-commerce საიტები, B2B და P2P სისტემები, ონლაინ ბილეთების პლატფორმა, დავალებების მენეჯმენტის სისტემა, ონლაინ კრიპტო კაზინო და სხვადასხვა UI/UX ვებ-გვერდები.
                    </p>
                </div>
            </div>
        </section>
    )
}
