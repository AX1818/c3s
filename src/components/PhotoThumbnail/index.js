import React from 'react';

import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';

import { default as styled } from 'styled-components';

const StyledImg = styled.img`
  width: 10em;  
  margin: auto;
`;

export default class PhotoThumbnail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card>
        <StyledImg src={this.props.src} alt={this.props.altText} className="img-thumbnail"/>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
        </CardBody>
      </Card>
    );
  }
}
