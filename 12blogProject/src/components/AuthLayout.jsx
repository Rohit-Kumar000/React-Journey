import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({ children, authentication = true }) {
    const navigate = useNavigate()
    const authStatus = useSelector((state) => state.auth.status)
    const allowed = authStatus === authentication

    useEffect(() => {
        if (!allowed) navigate(authentication ? "/login" : "/", { replace: true })
    }, [allowed, authentication, navigate])

    return allowed ? <>{children}</> : null
}
