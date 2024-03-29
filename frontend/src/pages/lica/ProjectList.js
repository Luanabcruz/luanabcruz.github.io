import React from 'react';
import { Link } from 'react-router-dom';
import formatDate from '../../utils/date';


const ProjectList = ({projectsData}) => {
  
  const projectStyle = {
    marginBottom: '20px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  const linkStyle = {
    display: 'block',
    marginTop: '10px',
    color: 'blue',
    textDecoration: 'underline',
  };

  return (
    <div>
      {projectsData.map((project) => (
        <div key={project.id} style={projectStyle}>
          <h4>{project.title}</h4>
          
          <p style={{paddingTop:'10px'}}>{project.summary}</p>
          <p>Inscrições de  {formatDate(project?.startDate)} até  {formatDate(project?.endDate)} </p>
           {
              
             <Link to={`/lica/inscricao/projeto/${project.id}`} >
              { project?.openEnrollment ? 'Inscreva-se' : 'Ver mais'}
              </Link>
           }
           
           
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
