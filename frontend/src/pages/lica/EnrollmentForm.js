import React, { useState } from 'react';
import ValidationError from '../../components/ValidationError';

const EnrollmentForm = ({handleSubmit}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    ufcaEnrollmentCode: '',
    email: '',
    proofOfEnrollment: null,
    projectTheme: null,
  });

  const [validationErrors, setValidationErrors] = useState(null); // State to store validation errors

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    // handleSubmit(formData);

    try {
      // Call the handleSubmit function and handle validation errors if any
      await handleSubmit(formData);
      setValidationErrors([]);
    } catch (error) {
      if (error.response && error.response.status === 400 && error.response.data.validationErrors) {
        setValidationErrors(error.response.data.validationErrors);
      } else {
        // Handle other errors (e.g., server error)
        console.error('Error submitting form:', error);
      }
    }
  };

  return (
    <div className="container">
      <h2>Formulário de Inscrição</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">
            Nome completo
          </label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
          />
          {
            validationErrors &&
            <ValidationError errors={validationErrors?.fullName } />
          }
        </div>

        <div className="mb-3">
          <label htmlFor="ufcaEnrollmentCode" className="form-label">
            Matrícula
          </label>  
          <input
            type="text"
            className="form-control"
            id="ufcaEnrollmentCode"
            name="ufcaEnrollmentCode"
            value={formData.ufcaEnrollmentCode}
            onChange={handleInputChange}
          />
          {
            validationErrors &&
            <ValidationError errors={validationErrors?.ufcaEnrollmentCode } />
          }
        </div>
        <div className="mb-3">
          <label htmlFor="course" className="form-label">
            Curso
          </label>
          <select
            className="form-select"
            id="course"
            name="course"
            value={formData.course}
            onChange={handleInputChange}
          >
            <option value="Matemática Computacional">Matemática Computacional</option>
            <option value="Ciência da Computação">Ciência da Computação</option>
          </select>
          {
            validationErrors &&
            <ValidationError errors={validationErrors?.course } />
          }
        </div>
        <div className="mb-3">
          <label htmlFor="applicationType" className="form-label">
            Tipo de inscrição
          </label>
          <select
            className="form-select"
            id="applicationType"
            name="applicationType"
            value={formData.applicationType}
            onChange={handleInputChange}
          >
            <option value="Voluntario">Voluntário</option>
            <option value="Bolsa">Bolsista</option>
          </select>
          {
            validationErrors &&
            <ValidationError errors={validationErrors?.applicationType } />
          }
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            E-mail
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {
            validationErrors &&
            <ValidationError errors={validationErrors?.email } />
          }
        </div>

        <div className="mb-3">
          <label htmlFor="proofOfEnrollment" className="form-label">
            Comprovante de matrícula (PDF)
          </label>
          <input
            type="file"
            className="form-control"
            id="proofOfEnrollment"
            name="proofOfEnrollment"
            onChange={handleFileChange} 
          />
          {
            validationErrors &&
            <ValidationError errors={validationErrors?.proofOfEnrollment } />
          }
        </div>

        <div className="mb-3">
          <label htmlFor="projectTheme" className="form-label">
            Projeto (PDF)
          </label>
          <input
            type="file"
            className="form-control"
            id="projectTheme"
            name="projectTheme"
            onChange={handleFileChange}
            
          />
          {
            validationErrors &&
            <ValidationError errors={validationErrors?.projectTheme } />
          }
        </div>

        <button type="submit" className="btn btn-primary">
          Enviar inscrição
        </button>
      </form>
    </div>
  );
};

export default EnrollmentForm;
