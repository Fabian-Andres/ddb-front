// Dependencies
import React from 'react';
import { Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

// Assets
import './Footer.scss';

library.add(fab)


class Footer extends React.Component {
  render() {
    return (
      <footer className="Footer">
          <Container>
              <nav>
                  <ul>
                      <li>
                          <a href="https://www.facebook.com" rel="noopener noreferrer" target="_blank">
                            <FontAwesomeIcon icon={['fab', 'facebook-f']} color="#ccc" />
                          </a>
                      </li>
                      <li>
                          <a href="https://www.twitter.com" rel="noopener noreferrer" target="_blank">
                            <FontAwesomeIcon icon={['fab', 'twitter']} color="#ccc" />
                          </a>
                      </li>
                      <li>
                          <a href="https://www.google.com" rel="noopener noreferrer" target="_blank">
                            <FontAwesomeIcon icon={['fab', 'google-plus-g']} color="#ccc" />
                          </a>
                      </li>
                      <li>
                          <a href="https://www.pinterest.com" rel="noopener noreferrer" target="_blank">
                            <FontAwesomeIcon icon={['fab', 'pinterest']} color="#ccc" />
                          </a>
                      </li>
                      <li>
                          <a href="https://www.instagram.com" rel="noopener noreferrer" target="_blank">
                            <FontAwesomeIcon icon={['fab', 'instagram']} color="#ccc" />
                          </a>
                      </li>
                      <li>
                          <a href="https://www.stumbleupon.com" rel="noopener noreferrer" target="_blank">
                            <FontAwesomeIcon icon={['fab', 'stumbleupon']} color="#ccc" />
                          </a>
                      </li>
                  </ul>
              </nav>
              <div className="copyright" id="copyright">
                  © 2018 Copyright <a href="http://www.ddbcol.com.co/" rel="noopener noreferrer" target="_blank">DDB</a>.
                  Coded by <a href="https://github.com/Fabian-Andres" rel="noopener noreferrer" target="_blank">Fabian Andres</a>.
              </div>
          </Container>
      </footer>
    );
  }
}

export default Footer;
