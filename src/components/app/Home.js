import React, { Component } from 'react';
import { connect } from 'react-redux'

class Home extends Component {
  async componentWillMount() {
    const { dispatch } = this.props
    await this.loadBlockchainData(dispatch)
  }

  async loadBlockchainData(dispatch) {
    // TODO: Wire up blockchain connection
  }

  render() {
    return(
      <div>
        <h1>Hello, Welcome to my Blockchain Application!</h1>
        <hr/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    // TODO: Fill me in
  };
}

export default connect(mapStateToProps)(Home);
