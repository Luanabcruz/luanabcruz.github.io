import Container from 'react-bootstrap/Container';
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Education from './pages/education';
import Home from './pages/home';
import PageNotFound from './pages/page_not_found';
import ResearchPage from './pages/lica/ResearchPage';

const App = () => {
  return (
    <div className="App" style={{ minHeight: '100vh', flexDirection:'column',display:'flex'}}>
      <Header title={'Profa. Dra. Luana Batista'} />
      <Container>
        <div className="pb-5"></div>
        <Routes>
          <Route path='*' element={<PageNotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="ensino/:slug" element={<Education />} />
          <Route path="lica/:slug" element={<ResearchPage  />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
