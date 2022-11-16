import PageSubTitle from "../../components/PageSubTitle";

const FieldsOfInterest = ({ fields }) => {
    return (
        <>
            <PageSubTitle title='Áreas de Interesse' />
            {
                !!fields && (
                    <ul>
                        {fields.map(item => (<li>{item}</li>))}
                    </ul>
                )
            }
        </>
    );
}

export default FieldsOfInterest;