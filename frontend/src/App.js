import Container from 'react-bootstrap/Container';
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Education from './pages/education';
import Home from './pages/home';

const App = () => {
  return (
    <div className="App">
      <Header title={'Luana Batista'} />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="education" element={<Education />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
