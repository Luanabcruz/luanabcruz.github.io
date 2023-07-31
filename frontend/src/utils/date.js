const formatDate = (dataISO) => {

   
        const data = new Date(dataISO);
      
        if (!(data instanceof Date) || isNaN(data)) {
          throw new Error('O parâmetro fornecido não é uma data válida.');
        }
      
        const dia = data.getDate().toString().padStart(2, '0');
        const mes = (data.getMonth() + 1).toString().padStart(2, '0'); // Mês é baseado em zero, por isso adicionamos +1.
        const ano = data.getFullYear().toString();
      
        return `${dia}/${mes}/${ano}`;

}

export default formatDate;
