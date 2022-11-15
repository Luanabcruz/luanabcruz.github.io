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
                </div>
            </div>
        </>
    );
}

export default Profile;