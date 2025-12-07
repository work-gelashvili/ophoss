import Header from "@components/Header/Header"
import { Team } from "@components/Team/Team"

const team = () => {
    return (
        <>
            <Header 
                style={{
                    backgroundColor: '#484965',
                }} 
                fixBg={10}/>
                <Team />
        </>
    )
}

export default team