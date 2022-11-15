import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import EducationMaterial from './parts/education_material';
import EducationPlan from './parts/education_plan';

const EducationTabs = ()=>  {
  const [key, setKey] = useState('plano-ensino');

  return (
    <Tabs
      id="education-tabs"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="plano-ensino" title="Plano de Ensino">
        <EducationPlan />
      </Tab>
      <Tab eventKey="slides-aulas" title="Slides/Aulas">
        <EducationMaterial />
      </Tab>
      <Tab eventKey="exercicios" title="Exercícios" disabled >
        
      </Tab>
      <Tab eventKey="bibliografia" title="Bibliografia" disabled>
        
      </Tab>
    </Tabs>
  );
}

export default EducationTabs;