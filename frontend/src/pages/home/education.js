import PageSubTitle from "../../components/PageSubTitle";

const Education = ({ disciplines }) => {
    return (
        <>
            <PageSubTitle title='Ensino' />
            {
                !!disciplines && (
                    <ul>
                        {disciplines.map(item => (<li>{item}</li>))}
                    </ul>
                )
            }
        </>
    );
}

export default Education;