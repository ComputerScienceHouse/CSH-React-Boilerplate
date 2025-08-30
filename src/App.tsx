import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import PageContainer from "./containers/PageContainer";
import "csh-material-bootstrap/dist/csh-material-bootstrap.css";
import NotFound from "./pages/NotFound";

type Props = {
  rerouteHomeOn404?: boolean;
};

export default function App({rerouteHomeOn404 = undefined}: Props) {
  return (
    <Router>
      <PageContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="*"
            element={(rerouteHomeOn404 ?? true) ? <Home /> : <NotFound />}
          />
        </Routes>
      </PageContainer>
    </Router>
  );
}
