import React from 'react'
import InfoSpinner from '../components/InfoSpinner'

const Authenticating: React.FC = () => {
    return (
        <InfoSpinner isCentered>Authenticating...</InfoSpinner>
    )
}

export default Authenticating