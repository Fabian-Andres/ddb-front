// Dependences
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLightbulb, faKeyboard, faBolt } from '@fortawesome/free-solid-svg-icons'

// Assets
import './About.scss';

library.add(faLightbulb, faKeyboard, faBolt);


class About extends React.Component {
  static propTypes = {
    dataAbout: PropTypes.object.isRequired
  }

  render() {
    const { dataAbout } = this.props;
    const { title, description, items } = dataAbout;
    return(
      <section className="About" id="content-2">
        <div className="section">
          <Container className="text-center">
              <Row>
                <Col md="8" className="ml-auto mr-auto">
                  <h2 className="title">{title}</h2>
                  <p className="description">{description}</p>
                </Col>
              </Row>

              <Row>
                { items && items.map((item, key) => (
                    <Col md="4" key={key}>
                      <div className="info info-hover">
                        <div className="icon icon-circle">
                            <FontAwesomeIcon icon={faLightbulb} />
                            <div className="d-none">{item.icon}</div>
                        </div>
                        <h4 className="info-title">{item.title}</h4>
                        <p className="description">{item.description}</p>
                      </div>
                    </Col>
                  )
                )}
              </Row>
          </Container>
        </div>
      </section>
    );
  }
}

export default About;
