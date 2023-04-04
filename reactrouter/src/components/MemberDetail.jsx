import React from 'react'
import { useParams } from 'react-router-dom'

const MemberDetail = () => {
    // const params = useParams()
    // const memberId = params.memberId
    const {memberId} = useParams()
    return (
        <div>MemberDetail {memberId}</div>
    )
}

export default MemberDetail