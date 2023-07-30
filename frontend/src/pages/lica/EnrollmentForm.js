import React, { useState } from 'react';

const EnrollmentForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    enrollmentNumber: '',
    email: '',
    proofOfEnrollment: null,
    projectTheme: null,
  });

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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode enviar os dados para o servidor ou realizar outras ações necessárias
    console.log(formData);
  };

  return (
    <div className="container">
      <h2>Formulário de Inscrição</h2>
      <form onSubmit={handleSubmit}>
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
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="enrollmentNumber" className="form-label">
            Matrícula
          </label>
          <input
            type="text"
            className="form-control"
            id="enrollmentNumber"
            name="enrollmentNumber"
            value={formData.enrollmentNumber}
            onChange={handleInputChange}
            required
          />
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
            required
          >
            <option value="Matemática Computacional">Matemática Computacional</option>
            <option value="Ciência da Computação">Ciência da Computação</option>
          </select>
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
            required
          >
            <option value="Voluntario">Voluntário</option>
            <option value="Bolsa">Bolsista</option>
          </select>
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
            required
          />
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
            required
          />
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
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Enviar inscrição
        </button>
      </form>
    </div>
  );
};

export default EnrollmentForm;
