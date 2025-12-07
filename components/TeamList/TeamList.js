import TeamItem from './Item'

const TeamList = ({data}) => {
    return (
        <div className={`row`}>
            {
                data && data?.map((item, key) => {
                    return (
                        <div className='col-3 d-flex justify-content-center align-items-start' key={item.name + key}>
                            <TeamItem item={item} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TeamList