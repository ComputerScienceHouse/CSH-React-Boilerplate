import React from "react"
import { Container } from "reactstrap"
import NavBar from "../components/NavBar"

type Props = {
    children: React.ReactNode
}

export const PageContainer: React.FC<Props> = ({ children }) => {
    return (
        <div style={{ marginTop: '90px' }}>
            <Container className="main" fluid>
                <NavBar />
                <Container>{children}</Container>
            </Container>
        </div>
    )
}

export default PageContainer