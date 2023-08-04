function formatDate(dataOriginal) {
  const dataSemTime = dataOriginal.split('T')[0];
  const partesData = dataSemTime.split('-');

  if (partesData.length !== 3) {
    return 'Data inválida';
  }

  const [ano, mes, dia] = partesData;

  return `${dia}/${mes}/${ano}`;
}

export default formatDate;
