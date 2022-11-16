import { Envelope, Linkedin, Google } from 'react-bootstrap-icons';

const Profile = () => {
    const imgUrl = `${process.env.PUBLIC_URL}profile-lua.jpg`
    return (
        <>
            <div>
                <img src={imgUrl} alt="luana" class="img-thumbnail" width="164" />
            </div>
            <div style={{ display: 'flex', paddingLeft: '10px', alignItems: 'stretch', flexDirection: 'column' }}>
                <h3>Luana Batista</h3>
                <div className="profile-details" style={{ display: 'flex', alignItems: 'stretch', flexDirection: 'column' }}>
                    <span style={{ fontWeight: '500', fontSize: '1.2em' }}>Universidade Federal do Cariri (UFCA)</span>
                    <span>Departamento de Computação - Bloco A, Sala 05</span>
                    <div className="profile-contact pt-3"  style={{ display: 'flex', alignItems: 'stretch', justifyContent:'space-around', maxWidth:'120px'}}>
                        <a style={{ textDecoration: 'none' }} href="mailto: luana.batista@ufca.edu.br" target='_blank'  rel="noreferrer">
                            <Envelope  className="ml-4"  color="black" size={24}/>
                        </a>
                        <a style={{ textDecoration: 'none' }} href="https://www.linkedin.com/in/luana-batista-623159207" target='_blank'  rel="noreferrer">
                            <Linkedin  className="ml-4"  color="royalblue"  size={24}/>
                        </a>
                        <a style={{ textDecoration: 'none' }} href="https://scholar.google.com.br/citations?user=JIURebIAAAAJ&hl=pt-BR" target='_blank'  rel="noreferrer">
                            <Google  className="ml-4"  color="red"  size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;