import { Ecomerce } from "@components/Ecommerce"
import Header from "@components/Header/Header"

const ecommerce = () => {
    return (
        <>
            <Header 
                style={{
                    backgroundColor: '#484965',
                }} 
                fixBg={10}/>
                <Ecomerce />
        </>
    )
}

export default ecommerce