import React from 'react'
import TeamList from '@components/TeamList/TeamList'
import data from './data.module'
import styles from './styles.module.scss'

export const Team = () => {
    return (
        <div className={styles.team}>
            <div className='container'>
                <TeamList data={data} />
            </div>
        </div>
    )
}
