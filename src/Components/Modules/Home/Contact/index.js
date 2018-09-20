// Dependences
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, InputGroup, Input } from 'reactstrap';

// Assets
import './Contact.scss';

class Contact extends React.Component {
  static propTypes = {
    dataContact: PropTypes.object.isRequired
  }

  render() {
    const { dataContact } = this.props;
    const { title, description } = dataContact;
    return(
      <section className="Contact" id="content-5">
        <div className="section">
          <Container>
            <Row>
              <Col md="12">
                <div className="text-center mb-5">
                  <h2 className="title">{title}</h2>
                  <p className="description">{description}</p>
                </div>
                <form id="contact-form" method="post">
                    <Row>
                      <Col md="6">
                        <InputGroup>
                          <Input placeholder="Name" />
                        </InputGroup>
                        <InputGroup>
                          <Input placeholder="Email" />
                        </InputGroup>
                        <InputGroup>
                          <Input placeholder="Subjet" />
                        </InputGroup>
                      </Col>
                      <Col md="6">
                        <div className="form-group">
                            <Input type="textarea" placeholder="Message" rows="5"/>
                        </div>
                      </Col>
                    </Row>
                    <div className="submit text-center mt-3">
                      <button type="submit" className="btn btn-primary btn-raised">Send Message</button>
                    </div>
                </form>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    );
  }
}

export default Contact;
