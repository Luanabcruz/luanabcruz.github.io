import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';

import { FilePdfFill } from 'react-bootstrap-icons';

const ListFiles = ({ title, prefix , files }) => {
  
  return (
    <Container>
      <h4>{title}</h4>
      {
        !!files && (
          <ul>
            {
              files.map((item, index) => (
                <li>
                  <FilePdfFill color="red" /><a href={item?.link} target="_blank" > {prefix} {index+1}</a>  {!!item?.name ? '-' : ''} <span style={{fontWeight:'500'}}>{item?.name} </span>
                </li>
              )
              )
            }
          </ul>
        )
      }
    </Container>
  );
}

export default ListFiles;