import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Navbar from './components/app/Navbar'
import Home from './components/app/Home'
import MyComponent from './components/app/MyComponent'
import MyComponent2 from './components/app/MyComponent2'
import { loadWeb3 } from './store/interactions'

class App extends Component {
  componentWillMount() {
    this.loadBlockchainData(this.props.dispatch)
  }

  async loadBlockchainData(dispatch) {
    const web3 = await loadWeb3(dispatch)
    const blockNumber = await web3.eth.getBlockNumber()
    console.log(blockNumber)
  }

  render() {
    const {
      account,
    } = this.props;

    return (
      <BrowserRouter>
        <div className="app">
          <Navbar {...this.props} />
          <div id="content">
            <Switch>
              <Route
                path='/my-component'
                render={(props) => (
                  <MyComponent account={account} /> : null
                )}
              />
              
              <Route
                path='/my-component-2'
                render={(props) => (
                  <MyComponent2 account={account} /> : null
                )}
              />

              <Route
                path='/'
                render={(props) => (
                  <Home {...props} /> : null
                )}
              />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

function mapStateToProps(state) {
  return {
    // TODO: Fill me in
  }
}

export default connect(mapStateToProps)(App);
