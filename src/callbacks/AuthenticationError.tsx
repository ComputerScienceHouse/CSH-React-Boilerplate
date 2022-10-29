import React from 'react'
import { Link } from 'react-router-dom'

const AuthenticationError: React.FC = () => {
    return (
        <div className='alert alert-dismissible alert-danger' style={{ textAlign: 'center' }}>
            <strong>Oh snap!</strong> <Link to='/' className='alert-link'>Authentication Error!</Link> :(
        </div>
    )
}

export default AuthenticationError