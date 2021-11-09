import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './stylesheets/style.scss';
import Home from 'app/Home/Home';
import Cart from 'app/Cart/Cart';
import ToastWrap from 'app/shared/components/partials/Toast/ToastWrap';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
      <ToastWrap />
    </>
  );
}
export default App;
