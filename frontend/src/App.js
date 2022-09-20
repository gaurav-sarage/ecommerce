import React from 'react';
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <>

    <Header />

    <main className='py-3'>
      <Container>
        <HomeScreen />
          <h1>Welcome to Shopping App</h1>
      </Container>
    </main>

    <Footer />
    </>
  );
}

export default App;
 