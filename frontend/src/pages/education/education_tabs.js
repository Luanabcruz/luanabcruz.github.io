import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ListWithTitle from '../../components/ListWithTitle';
import EducationPlan from './parts/education_plan';
import ListFiles from './parts/list_files';

const EducationTabs = ({ data }) => {
  const [key, setKey] = useState('plano-ensino');

  const { education_plan, subjects, references, exercises } = data || {};

  return (
    <Tabs
      id="education-tabs"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="plano-ensino" title="Plano de Ensino">
        <EducationPlan data={education_plan} />
      </Tab>
      <Tab eventKey="slides-aulas" title="Slides/Aulas">
        <ListFiles title='Slides/Aulas' prefix='Aula' files={subjects} />
      </Tab>
      <Tab eventKey="atividades" title="Atividades" >
      <ListFiles title='Atividades' prefix='Atividade' files={exercises} />
      </Tab>
      <Tab eventKey="bibliografia" title="Bibliografia" >
        <ListWithTitle title="Bibliografia" list={references} />
      </Tab>
    </Tabs>
  );
}

export default EducationTabs;