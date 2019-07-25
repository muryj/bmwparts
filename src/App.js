//@flow

import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import Login from './Login';
import Register from './Register';
import Home from './Home'


const App = () => {
    console.disableYellowBox = true;
  return (
      <Router>
          <Stack key="root">
              <Scene key="login" component={Login} title="Login" hideNavBar/>
              <Scene key="register" component={Register} title="Register"/>
              <Scene key="home" component={Home}/>
          </Stack>
      </Router>
  );
};
export default App;
