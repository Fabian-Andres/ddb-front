// Dependences
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

// Assets
import './Download.scss';
import image from './../../../../Assets/images/banner-download.jpg';

class Download extends React.Component {
  static propTypes = {
    dataDownload: PropTypes.object.isRequired
  }

  render() {
    const { dataDownload } = this.props;
    const { title, description } = dataDownload;
    return(
      <section className="Download" id="content-4">
        <div className="section" style={ { backgroundImage: 'url(' + image + ')' } }>
          <Container>
              <Row>
                <Col md="10" className="ml-auto mr-auto text-center">
                  <h2 className="title">{title}</h2>
                  <p className="description">{description}</p>
                  <button className="btn btn-neutral btn-simple" type="button">Download</button>
                </Col>
              </Row>
          </Container>
        </div>
      </section>
    );
  }
}

export default Download;
