import React from 'react';
import Typed from 'react-typed'
import BaseLayout from '../components/layouts/BaseLayout';
import {Container, Row, Col} from 'reactstrap';

class Index extends React.Component{

  constructor(props) {
    super(props);

    this.roles =['IT Student', 'Football Lover', 'Powered by Typed.js']
  }

  render() {

        return (
          <BaseLayout className="cover">
          <div className="main-section">
          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className="hero-section-content">
                    <h2>Web Developer </h2>
                    <div className="hero-section-content-intro">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam pretium libero id elit egestas.<br/>
                      <a href="http://www.freepik.com">Designed by katemangostar / Freepik</a>
                    </div>
                  </div>
                    <img className="image" src="/static/images/section-1.png"/>
                    <div className="shadow-custom">
                      <div className="shadow-inner"> </div>
                    </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                    Welcome to my portfolio website.<br/>
                    Nam pretium libero id elit suscipit egestas.
                  </h1>
                </div>

                <Typed
                  loop
                  typeSpeed={70}
                  backSpeed={70}
                  strings={this.roles}
                  backDelay={1000}
                  fadeOutDelay={100}
                  loopCount={0}
                  showCursor
                  className="self-typed"
                  cursorChar="|"
                />

                <div className="hero-welcome-bio">
                  <h1>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h1>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </BaseLayout>

        )
  }
}

export default Index;