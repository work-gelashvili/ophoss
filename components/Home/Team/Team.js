import TeamList from '@components/TeamList/TeamList'
import style from './Team.module.scss'
import data from './data.module'

const Team = () => {
    return (
        <div className={`container ${style['team']}`}>
            <TeamList data={data} />
        </div>
    )
}

export default Team