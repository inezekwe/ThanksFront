import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Collection from './Components/Collection';
import Navs from './Components/Navs';
import Home from './Components/Home';
import Entry from './Components/Entry';
import TimeLine from './Components/TimeLine';
import Login from './Components/Login';
import Register from './Components/Register';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';


function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Navs />
      <Container>
        <Row>
          <Col lg="12">

            {/* **** Managing the Animations for the Components **** */}
            <AnimatePresence>
                <Switch location={location} key={location.pathname}>
                  <Route exact path='/Home' component={Home} />
                  <Route exact path='/Collection' component={Collection} />
                  <Route exact path='/Entry' component={Entry} />
                  <Route exact path='/TimeLine' component={TimeLine} />
                  <Route exact path='/Login' component={Login} />
                  <Route exact path='/Register' component={Register} />
                </Switch>
            </AnimatePresence>
    
          </Col>
        </Row> 
      </Container> 
    </div>

  );
}

export default App;

