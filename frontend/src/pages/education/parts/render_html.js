import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';
import ContentWithTitle from '../../../components/ContentWithTitle';
import Evalutation from './evaluation';

const RenderHtml = ({data}) => {

  return (
    <Container>
      { <div dangerouslySetInnerHTML={{ __html: data }} /> }
      <div className='pb-5'></div>
    </Container>
  );
}

export default RenderHtml;