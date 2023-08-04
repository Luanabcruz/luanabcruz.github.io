import React from 'react';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const imgStyle = {
  width: '400px', // Tamanho médio de 400px responsivo
  maxWidth: '100%', // Para garantir que a imagem não fique maior que o contêiner
};

const LicaPage = () => {
  const imgUrl = `${process.env.PUBLIC_URL}/logo_lica_no_background.png`

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div style={containerStyle}>
            <img src={imgUrl} alt="LICA" style={imgStyle} />

          </div>
        </div>
        <div className="col-md-6">
          <div style={{ textAlign: 'justify', marginTop: '35px' }}>
            <p>O Laboratório de Inteligência Computacional Aplicada <b>(LICA)</b> é um centro de pesquisa que tem como objetivo aplicar técnicas de inteligência artificial, como aprendizado de máquina, processamento de linguagem natural e visão computacional para solucionar problemas em diferentes áreas, como medicina, finanças, logística e automação industrial.
            </p>
            <p>
              Para realizar as pesquisas e desenvolver soluções inteligentes e personalizadas, o LICA conta com uma equipe formada por alunos e professores dos cursos de ciência da computação e matemática computacional da Universidade Federal do Cariri <b>(UFCA)</b>.
            </p>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-12'>
          <h4>Orientadores</h4>
          <hr />
          <ul>
            <li>Luana Batista da Cruz</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LicaPage;
