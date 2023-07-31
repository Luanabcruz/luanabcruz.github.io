import Container from 'react-bootstrap/Container';
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Education from './pages/education';
import Home from './pages/home';
import PageNotFound from './pages/page_not_found';
import LicaPage from './pages/lica/LicaPage';
import ProjectSubscriptions from './pages/lica/ProjectSubscriptions';
import EnrollmentHome from './pages/lica/EnrollmentHome';

const App = () => {
  return (
    <div className="App" style={{ minHeight: '100vh', flexDirection:'column',display:'flex'}}>
      <Header title={'Profa. Dra. Luana Batista'} />
      <Container>
        <div className="pb-5"></div>
        <Routes>
          <Route path='*' element={<PageNotFound />} />
          <Route path='/404' element={<PageNotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="ensino/:slug" element={<Education />} />
          <Route path="lica/sobre" element={<LicaPage  />} />
          <Route path="lica/inscricoes" element={<ProjectSubscriptions  />} />
          <Route path="lica/inscricao/projeto/:id" element={<EnrollmentHome  />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
