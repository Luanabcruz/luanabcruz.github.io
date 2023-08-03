import React, { useState } from 'react';
import EnrollmentForm from './EnrollmentForm';
import EnrollmentProof from './EnrollmentProof';
import Loader from '../../components/Loader';

const Enrollment = ({ handleSubmit }) => {

  const [isLoading, setLoading] = useState(false); // Estado para controlar o loader
  const [successAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [data, setData] = useState({});
  const [proofData, setProofData] = useState({});

  const courses = [
    { value: '', label: '-- Selecione um curso --' },
    { value: 'matematica_computacional', label: 'Matemática Computacional' },
    { value: 'ciencia_computacao', label: 'Ciência da Computação' },
  ];

  const applicationTypes = [
    { value: '', label: '-- Selecione um tipo --' },
    { value: 'volunteer', label: 'Voluntário' },
    { value: 'scholarship', label: 'Bolsista' }
  ];

  const [validationErrors, setValidationErrors] = useState({}); // State to store validation errors

  const onSubmit = async (data) => {
    try {
      setLoading(true); // Inicia o loader quando a submissão é iniciada
      setSuccessAlert(false);
      setErrorAlert(false);
      const proofCode = await handleSubmit(data);

      setSuccessAlert(true);
      setErrorAlert(false);
      setProofData({ ...data, ...{ proofCode } });
      setData({
        fullName: '',
        ufcaEnrollmentCode: '',
        email: '',
        course: '',
        applicationType: '',
        proofOfEnrollment: null,
        projectTheme: null
      });
      setValidationErrors({});
    } catch (error) {

      setErrorAlert(true);
      setSuccessAlert(false);

      if (error.response && error.response.status === 400 && error.response.data.validationErrors) {
        setValidationErrors(error.response.data.validationErrors);
      } else {
        setErrorAlert('Um erro interno aconteceu');
        console.error('Error submitting form:', error);
      }
    } finally {
      setLoading(false); // Para o loader independentemente da resposta (sucesso ou erro)
    }
  };

  return (
    <div className="container">
      <h2 className="pb-4">Formulário de Inscrição</h2>
      {successAlert && (
        <div className="alert alert-success" role="alert">
          Seu formulário foi enviado com sucesso!
        </div>
      )}

      {errorAlert && (
        <div className="alert alert-danger" role="alert">
          Houve um erro ao enviar o formulário. Por favor, tente novamente.
        </div>
      )}

      {/* Mostrar o loader enquanto isLoading é true */}
      {isLoading ? (
        <div style={{paddingTop: '40px'}} >
          <Loader text={'Enviando...'} />
        </div>

      ) : (
        successAlert ? (
          <EnrollmentProof
            data={proofData} />
        ) : (
          <EnrollmentForm
            onSubmit={onSubmit}
            formData={data}
            setFormData={setData}
            validationErrors={validationErrors}
            courses={courses}
            applicationTypes={applicationTypes}
          />
        )
      )}
    </div>
  );
};

export default Enrollment;
