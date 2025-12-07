import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '@styles/global.css'

export const metadata = {
    title: `OPHOS • DIGITAL`,
    description: 'საიტების დამზადება'
}

const RootLayout = ({children}) => {
    return (
        <html>
            <body>
                {children}
            </body>
        </html>
    )
}

export default RootLayout