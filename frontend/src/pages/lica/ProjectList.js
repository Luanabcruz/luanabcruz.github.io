import React from 'react';

const projectsData = [
  {
    id: 1,
    name: 'Projeto A',
    description: 'Este é o Projeto A, focado em resolver problemas de sustentabilidade.',
    registrationLink: 'https://exemplo.com/formulario-projeto-a',
  },
  {
    id: 2,
    name: 'Projeto B',
    description: 'O Projeto B busca soluções inovadoras para o setor educacional.',
    registrationLink: 'https://exemplo.com/formulario-projeto-b',
  },
  // Adicione mais projetos aqui, se necessário
];

const ProjectList = () => {
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
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <p>Incrições entre os 02/08/2023 até 10/08/2023 </p>
          <a href={'inscricao/projeto-1'} style={linkStyle}>
            Inscreva-se aqui
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
