import { Envelope, Phone } from 'react-bootstrap-icons';


const Footer = () => {
    return (
        <footer id="footer" className="footer-top" style={{marginTop:'auto'}}>
            <div className="footer-top">
                <div className="container">
                    <div className="footer-info">
                        <address>
                            <strong>Departamento de Computação&nbsp;|&nbsp; Universidade Federal do Cariri</strong><br />
                            Campus Universitário Juazeiro do Norte &nbsp;|&nbsp;
                            CEP 63048-080 &nbsp;|&nbsp;Juazeiro do Norte - CE, Brasil
                        </address>
                        <p>
                        </p>
                        <div style={{ float: 'left', paddingRight: '20px' }}>
                            <Phone /> +55 (88) 3221-9200<br />
                            <Envelope /> luana.batista@ufca.edu.br
                        </div>
                    </div>
                </div>
            </div>
            <div className="credits">
                <div className="container">
                    <p><span>
                        Copyright ©  2022. Todos os direitos reservados.&nbsp;&nbsp;&nbsp;
                    </span></p>
                </div>
            </div>
        </footer>
    );
}
export default Footer;