import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Members = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const isActive = searchParams.get('filter') === 'active'
    return (
        <>
            <div>Members</div>
            <button onClick={() => setSearchParams({filter:'active'})}>Active Users</button>
            <button onClick={() => setSearchParams()}>All Users</button>
            {isActive ? <h2>Active Users</h2> : <h2>All Users</h2>}
        </>
    )
}

export default Members