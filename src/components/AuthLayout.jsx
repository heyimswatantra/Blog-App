// mechanism to protect routes/pages

import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({children, authentication = true}) {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        // agar user logged in nhi h to route to Login page
        if (authentication && authStatus !== authentication){
            navigate("/login")
        } else if (!authentication && authStatus !== authentication) {
            navigate("/")
        }
        setLoader(false)
    }, [authentication, authStatus, navigate])

    return loader ? <h1>Loadin...</h1> : <>{children}</>
}
