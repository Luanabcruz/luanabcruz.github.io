import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';

import { FilePdfFill } from 'react-bootstrap-icons';

const EducationMaterial = ({ subjects }) => {

  return (
    <Container>
      <h4>Slides / Aulas</h4>
      {
        !!subjects && (
          <ul>
            {
              subjects.map((item, index) => (
                <li><FilePdfFill color="red" /><a href={item?.slide_link} target="_blank" > Aula {index+1}</a> - <span style={{fontWeight:'500'}}>{item?.name} </span></li>
              )
              )
            }
          </ul>
        )
      }
    </Container>
  );
}

export default EducationMaterial;