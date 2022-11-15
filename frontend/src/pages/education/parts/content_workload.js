import Table from 'react-bootstrap/Table';

const ContentWorkload = ({ data }) => {
    return !!data && (
        <div className='pt-3'>
            <h4>Conteúdo Programático</h4>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Conteúdo</th>
                        <th>Carga Horária</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(item => (
                            <tr>
                                <td>{item?.content}</td>
                                <td style={{textAlign:'center'}}>{item?.workload}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default ContentWorkload;