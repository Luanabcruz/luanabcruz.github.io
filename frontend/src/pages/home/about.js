import PageSubTitle from "../../components/PageSubTitle";

const About = ({ about }) => {
    return (
        <>
            <PageSubTitle title='Sobre' />
            {
                !!about && (
                    <ul>
                        {about.map(item => (<li>{item}</li>))}
                    </ul>
                )
            }
            <p>Mais informações: <a href='http://lattes.cnpq.br/2392497569843711' target='_blank' rel="noreferrer">CV Lattes</a></p>
        </>
    );
}

export default About;