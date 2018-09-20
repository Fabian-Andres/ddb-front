// Dependences
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

// Assets
import './Features.scss';

class Features extends React.Component {
  static propTypes = {
    dataFeatures: PropTypes.object.isRequired
  }

  render() {
    const { dataFeatures } = this.props;
    const { title, description, image, logo } = dataFeatures;

    return(
      <section className="Features" id="content-1">
        <div className="page-header page-header-medium">
            <div className="page-header-image" style={ { backgroundImage: 'url(' + require('./../../../../Assets/images/' + image ) + ')' } }></div>
            <Container>
              <Row>
                <Col md="6" className="text-left text-xs-center">
                  <img src={ require('./../../../../Assets/images/' + logo ) } alt=""/>
                  <h2 className="title">{title}</h2>
                  <h4 className="description">{description}</h4>
                  <br />
                  <div className="buttons">
                      <a href="/" className="btn btn-neutral btn-simple">
                          Download
                      </a>
                  </div>
                </Col>
              </Row>
            </Container>
        </div>
      </section>
    );
  }
}

export default Features;
