// Dependences
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

// Assets
import './Pricing.scss';

class Pricing extends React.Component {
  static propTypes = {
    dataPricing: PropTypes.object.isRequired
  }

  render() {
    const { dataPricing } = this.props;
    const { title, description, items } = dataPricing;

    return(
      <section className="Pricing" id="content-3">
        <div className="section bg-gray">
          <Container className="text-center">
            <Row>
              <Col md="8" className="ml-auto mr-auto mb-5">
                <h2 className="title">{title}</h2>
                <p className="description">{description}</p>
              </Col>
            </Row>
            <Row>
              { items && items.map((item, key) => (
                  <Col md="4" key={key}>
                    <div className="card card-pricing">
                      <div className="card-head">
                        <h3 className="category">{item.category}</h3>
                        <h4 className="price"><small>$</small>{item.price}</h4>
                        <p className="description"><i>{item.fee}</i></p>
                        <span className="tag">{item.popular}</span>
                      </div>
                      <div className="card-body">
                        <ul>
                          <li>{item.disk}</li>
                          <li>{item.badwidth}</li>
                          <li>{item.websites}</li>
                          <li>{item.customization}</li>
                          <li>{item.integration}</li>
                          <li>{item.support}</li>
                        </ul>
                      </div>
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

export default Pricing;
