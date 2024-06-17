import logo from './logo.svg';
import './App.css';
import TrackGame from './TrackGame'
import Container from 'react-bootstrap/Container';
import Feed from './Feed';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LandingPage from './LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Navbar>
        <Container>
          {/* <Navbar.Brand href="#home">Home</Navbar.Brand> */}
          <Nav className='me-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='Feed'>Feed</Nav.Link>
            <Nav.Link href='TrackGames'>List Of Tracked Games</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/Feed' element={<Feed />} />
        <Route path='/TrackGames' element={<TrackGame />} />
      </Routes>
    </Router>
  );
}

export default App;
