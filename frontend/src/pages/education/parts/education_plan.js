import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';
import ContentWithTitle from '../../../components/ContentWithTitle';
import ListWithTitle from '../../../components/ListWithTitle';

const EducationPlan = ({data}) => {

  const { program, goals, content_workload, procedure } = data || {};

  return (
    <Container>
      <ContentWithTitle title="Ementa" content={program}/>
      <ContentWithTitle title="Objetivos" content={goals}/>
      <ListWithTitle title="Conteúdo Programático" list={content_workload}/>
      <ContentWithTitle title="Procedimento de Ensino" content={procedure} />
    </Container>
  );
}

export default EducationPlan;