import React from 'react'
import { useLocation } from 'react-router'

const Error404 = () => {
    let location = useLocation();

    return (
        <>
            <h3>
                No match for <code>{location.pathname}</code>
            </h3>  
        </>
    )
}

export default Error404
