import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';
import ContentWithTitle from '../../../components/ContentWithTitle';
import Evalutation from './evaluation';

const EducationPlan = ({data}) => {

  const { program, goals, procedure, evaluation } = data || {};

  return (
    <Container>
      <ContentWithTitle title="Ementa" content={program}/>
      <ContentWithTitle title="Objetivos" content={goals}/>
      <ContentWithTitle title="Procedimento de Ensino" content={procedure} />  
      <Evalutation title=" Sistemática de Avaliação" data={evaluation}/>
      <div className='pb-5'></div>
    </Container>
  );
}

export default EducationPlan;