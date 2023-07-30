const LicaPage = ({ data }) => {

    const imgUrl = `${process.env.PUBLIC_URL}/logo_lica_no_background.png`

    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
        paddingBottom: '20px'
    };

    const imgStyle = {
        width: '164px',
        marginRight: '10px',
    };

    return (
        <div >
            <div style={containerStyle}>
                <img src={imgUrl} alt="LICA" className="img-thumbnail" style={imgStyle} />
                <div style={{textAlign:'justify'}}>
                    O Laboratório de Inteligência Computacional Aplicada <b>(LICA)</b> é um centro de pesquisa que tem como objetivo aplicar técnicas de inteligência artificial, como aprendizado de máquina, processamento de linguagem natural e visão computacional para solucionar problemas em diferentes áreas, como medicina, finanças, logística e automação industrial. Para realizar as pesquisas e desenvolver soluções inteligentes e personalizadas, o LICA conta com uma equipe formada por alunos e professores dos cursos de ciência da computação e matemática computacional da Universidade Federal do Cariri <b>(UFCA)</b>.
                </div>
            </div>
            <h4>Discentes</h4>
            <hr />
            <ul>
                <li>Seya de pegasus (seya@gmail.com)</li>
                <li>Shun de Andromedra (shun@gmail.com)</li>
                <li>Ikki de Fenix (ikki@gmail.com)</li>
                <li> Saori Kido (saori@gmail.com)</li>
            </ul>

            <h4>Orientadores</h4>
            <hr />
            <ul>
                <li>Luana Batista da Cruz</li>
                <li>Saci Perere</li>
            </ul>
            <br />
            <br />
        </div>);
}


export default LicaPage;
