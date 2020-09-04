import React, { Component } from 'react';
import Route from 'react-router-dom/Route';
import CreateClient from './pages/createClient';
import RechargeWallet from './pages/rechargeWallet';
import GetBalance from './pages/getBalance';
import CreateTransaction from './pages/createTransaction';
import ConfirmTransaction from './pages/confirmTransaction';
import { BrowserRouter } from 'react-router-dom';
import Nav from "./components/navBar";
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Nav />
            <Route exact path="/client" component={CreateClient} />
            <Route path="/wallet" component={RechargeWallet} />
            <Route exact path="/balance" component={GetBalance} />
            <Route exact path="/transaction" component={CreateTransaction} />
            <Route exact path="/confirm" component={ConfirmTransaction} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;