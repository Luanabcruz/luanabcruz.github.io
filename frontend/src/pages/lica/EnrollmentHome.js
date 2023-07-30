import EnrollmentForm from "./EnrollmentForm";

const EnrollmentHome = () => {
    return (
    <>
        <h4>
            Projeto de Pesquisa: Detecção de COVID-19 em Imagens de Raio-X utilizando Inteligência Computacional
        </h4>
        <p>Este projeto tem como objetivo aplicar técnicas de inteligência computacional para o desenvolvimento de um sistema capaz de detectar a presença do COVID-19 em imagens de raio-X. Através da análise automatizada de radiografias torácicas, almejamos contribuir para o diagnóstico precoce e preciso da doença, agilizando o processo de triagem e auxiliando os profissionais de saúde no enfrentamento da pandemia. <a href ='' >Saiba mais...</a>
        </p>
        <br/>
        <EnrollmentForm />
        <br/>
        <br/>
    </>
    );
};

export default EnrollmentHome;
