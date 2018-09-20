// Dependences
import React from 'react';

// Components
import Features from './Features';
import About from './About';
import Pricing from './Pricing';
import Download from './Download';
import Contact from './Contact';

// Data
import data from './../../../data/data';

// Lodash
var _ = require('lodash');

class Home extends React.Component {
  render() {
    const dataFeatures  = _.get(data, '[0]'),
          dataAbout     = _.get(data, '[1]'),
          dataPricing   = _.get(data, '[2]'),
          dataDownload  = _.get(data, '[3]'),
          dataContact   = _.get(data, '[4]');

    return(
      <section className="Homme">
        <Features dataFeatures={dataFeatures} />
        <About dataAbout={dataAbout} />
        <Pricing dataPricing={dataPricing} />
        <Download dataDownload={dataDownload} />
        <Contact dataContact={dataContact}/>
      </section>
    );
  }
}

export default Home;
