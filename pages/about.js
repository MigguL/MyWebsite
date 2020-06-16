import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import {Row, Col} from 'reactstrap';

class About extends React.Component {

  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className="about-page">
        <Row className="mt-5">
          <Col md="6">
            <div className="left-side">
              <h1 className="title fadein">Hello, Welcome</h1>
              <h4 className="subtitle fadein">To About Page</h4>
              <p className="subsubTitle fadein">Feel free to read short description about me.</p>
            </div>
          </Col>
          <Col md="6">
            <div className="fadein">
              <p>My name is Michał Latos and I am CS student at UITM in Rzeszow. </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod purus sit amet ipsum finibus, vel rhoncus mi consequat. Fusce eget dictum felis. Aenean dolor leo, vestibulum elementum interdum sed, convallis ut massa. Vestibulum vel ipsum odio. Praesent blandit, urna at finibus gravida, nunc libero interdum eros, nec sollicitudin odio metus eget ante. Morbi eu lacus enim. Vivamus placerat magna eu erat consequat maximus.
              </p>
              <p>
                Donec nunc diam, euismod vel purus sit amet, hendrerit porttitor ex. Donec elementum, tortor dictum aliquet imperdiet, lacus tortor dapibus libero, ac luctus nibh arcu a quam. Aliquam a ante ac felis posuere elementum nec non magna. Mauris vulputate vulputate aliquet. Ut tortor orci, faucibus et sem id, congue ultrices neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae erat quam. 
              </p>
            </div>
          </Col>
        </Row>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default About;