import React from 'react'
import { useNavigate } from 'react-router-dom'

const Mission = () => {
    const navigate = useNavigate()
    return (
        <>
            <div>Missions</div>

            <button onClick={() => navigate('/')}>Salam</button>
        </>
    )
}

export default Mission