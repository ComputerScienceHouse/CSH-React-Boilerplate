import React from 'react'
import { Link } from 'react-router-dom'

const SessionLost: React.FC = () => {
    return (
        <div className='alert alert-warning'>
            <h4 className='alert-heading'>Session Lost!</h4>
            <p className='mb-0'>Session Lost. <Link to='/' className='alert-link'>Click to attempt to retry.</Link> :(</p>
        </div>
    )
}

export default SessionLost