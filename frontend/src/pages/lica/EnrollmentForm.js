import React, { useState } from 'react';
import ValidationError from '../../components/ValidationError';

const EnrollmentForm = ({ onSubmit, formData, setFormData, courses, applicationTypes, validationErrors }) => {

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    const selectedFile = files[0];

    const maxSizeInBytes = 20 * 1024 * 1024;
    if (selectedFile.size > maxSizeInBytes) {
      alert('O tamanho do arquivo deve ser no máximo 20 MB.');
      return;
    }

    // Validar o tipo de arquivo (apenas PDF neste exemplo)
    if (selectedFile.type !== 'application/pdf') {
      alert('O arquivo deve ser do tipo PDF.');
      return;
    }

    setFormData({
      ...formData,
      [name]: selectedFile,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3 mt-3">
        <label htmlFor="fullName" className="form-label">
          Nome completo<span className='text-danger'>*</span>
        </label>
        <input
          type="text"
          className="form-control"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          required
        >
        </input>
        {
          validationErrors &&
          <ValidationError errors={validationErrors?.fullName} />
        }
      </div>

      <div className="mb-3">
        <label htmlFor="ufcaEnrollmentCode" className="form-label">
          Matrícula<span className='text-danger'>*</span>
        </label>
        <input
          type="text"
          className="form-control"
          id="ufcaEnrollmentCode"
          name="ufcaEnrollmentCode"
          value={formData.ufcaEnrollmentCode}
          onChange={handleInputChange}
          pattern=".{10}"
          title="A matrícula deve conter exatamente 10 caracteres."
          required
        >
        </input>
        {
          validationErrors &&
          <ValidationError errors={validationErrors?.ufcaEnrollmentCode} />
        }
      </div>
      <div className="mb-3">
        <label htmlFor="course" className="form-label">
          Curso<span className='text-danger'>*</span>
        </label>
        <select
          className="form-select"
          id="course"
          name="course"
          value={formData.course}
          onChange={handleInputChange}
          required
        >
          {courses.map((course) => (
            <option key={course.value} value={course.value}>
              {course.label}
            </option>
          ))}
        </select>
        {
          validationErrors &&
          <ValidationError errors={validationErrors?.course} />
        }
      </div>
      <div className="mb-3">
        <label htmlFor="applicationType" className="form-label">
          Tipo de inscrição<span className='text-danger'>*</span>
        </label>
        <select
          className="form-select"
          id="applicationType"
          name="applicationType"
          value={formData.applicationType}
          onChange={handleInputChange}
          required
        >
          {applicationTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
        {
          validationErrors &&
          <ValidationError errors={validationErrors?.applicationType} />
        }
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          E-mail<span className='text-danger'>*</span>
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        >
        </input>
        {
          validationErrors &&
          <ValidationError errors={validationErrors?.email} />
        }
      </div>

      <div className="mb-3">
        <label htmlFor="proofOfEnrollment" className="form-label">
          Histórico escolar (PDF)<span className='text-danger'>*</span>
        </label>
        <input
          type="file"
          className="form-control"
          id="proofOfEnrollment"
          name="proofOfEnrollment"
          onChange={handleFileChange}
          accept="application/pdf"
          required
        >
        </input>
        {
          validationErrors &&
          <ValidationError errors={validationErrors?.proofOfEnrollment} />
        }
      </div>

      <div className="mb-3">
        <label htmlFor="projectTheme" className="form-label">
          Projeto (PDF)<span className='text-danger'>*</span>
        </label>
        <input
          type="file"
          className="form-control"
          id="projectTheme"
          name="projectTheme"
          onChange={handleFileChange}
          accept="application/pdf"
          required
        >
        </input>
        {
          validationErrors &&
          <ValidationError errors={validationErrors?.projectTheme} />
        }
      </div>
      <br />
      <button type="submit" className="btn btn-primary">
        Enviar inscrição
      </button>
    </form>
  );
};

export default EnrollmentForm;
