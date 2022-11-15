import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';
import ContentWithTitle from '../../../components/ContentWithTitle';

import ContentWorkload from './content_workload';

const EducationPlan = ({data}) => {

  const { program, goals, content_workload, procedure } = data || {};

  return (
    <Container>
      <ContentWithTitle title="Ementa" content={program}/>
      <ContentWithTitle title="Objetivos" content={goals}/>
      <ContentWorkload data={content_workload}/>
      <ContentWithTitle title="Procedimento de Ensino" content={procedure} />
      <div className='pb-5'></div>
    </Container>
  );
}

export default EducationPlan;