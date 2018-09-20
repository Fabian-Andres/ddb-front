// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Header from './Partials/Header';
import Content from './Modules/Content';
import Footer from './Partials/Footer';

class App extends React.Component {

  static propTypes = {
    children: PropTypes.object.isRequired
  }

  render() {
    const { children } = this.props;

    return(
      <div className="App">
        {/*---- Header ----*/}
        <Header />

        {/*---- Content ----*/}
        <Content body={children} />

        {/*---- Footer ----*/}
        <Footer />
      </div>
    );
  }
}

export default App;
