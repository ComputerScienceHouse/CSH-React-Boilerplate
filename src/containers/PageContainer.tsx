import {Container} from "reactstrap";
import NavBar from "../components/NavBar";

type Props = {
  children: React.ReactNode;
};

export default function PageContainer({children}: Props) {
  return (
    <div className="page-and-navbar">
      <NavBar />
      <Container className="main" fluid>
        <Container className="main-child">{children}</Container>
      </Container>
    </div>
  );
}
