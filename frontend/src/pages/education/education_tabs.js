import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ListWithTitle from '../../components/ListWithTitle';
import RenderHtml from './parts/render_html';
import ListFiles from './parts/list_files';

const EducationTabs = ({ data }) => {
  const [key, setKey] = useState('plano-ensino');

  const { education_plan, notes, references, lessons } = data || {};

  return (
    <Tabs
      id="education-tabs"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="plano-ensino" title="Plano de Ensino">
        <RenderHtml data={education_plan} />
      </Tab>
      <Tab eventKey="slides-aulas" title="Slides/Aulas">
        <ListFiles title='Slides/Aulas' prefix='Aula' files={notes} />
      </Tab>
      <Tab eventKey="atividades" title="Atividades" >
      <ListFiles title='Atividades' prefix='Atividade' files={lessons} />
      </Tab>
      <Tab eventKey="bibliografia" title="Bibliografia" >
        <RenderHtml data={references} />
      </Tab>
    </Tabs>
  );
}

export default EducationTabs;