import React from 'react';

const EnrollmentProof = ({ data }) => {
  return (
    <div className="card">
      <div className="card-header">
        Comprovante de Inscrição
      </div>
      <div className="card-body">
        <p><strong>Nome:</strong> {data?.fullName}</p>
        <p><strong>Matrícula:</strong> {data?.ufcaEnrollmentCode}</p>
        <p><strong>E-mail:</strong> {data?.email}</p>
        <p><strong>Código de Verificação:</strong> {data?.proofCode}</p>
      </div>
    </div>
  );
};

export default EnrollmentProof;
