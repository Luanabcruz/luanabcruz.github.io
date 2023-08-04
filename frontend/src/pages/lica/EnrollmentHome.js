import Enrollment from "./Enrollment";
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import pageApi from "../../services/page";

const EnrollmentHome = () => {

    let { id } = useParams();
    const [selectionProcess, setSelectionProcess] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {

        if (!id) {
            return;
        }

        pageApi
            .getSelectionProcesses(id)
            .then(response => setSelectionProcess(response.data))
            .catch((err) => {
                setSelectionProcess([]);
                // console.error("ops! ocorreu um erro" + err);
                navigate('/404');
            })
    }, []);
    console.log(selectionProcess)

    const handleSave = async (data) => {
        try {
            const response =  await pageApi.submitSelectionProcesses(selectionProcess.id, data)
            return response?.data?.proofCode;
        } catch (error) {
            // Handle validation errors and other errors here
            throw error; // Rethrow the error so it can be caught in the onSubmit function in EnrollmentForm
        }
    }

    return (
        <>
            <h4>
                {selectionProcess?.title}
            </h4>
            <div style={{paddingTop:'15px', paddingBottom: '15px'}} dangerouslySetInnerHTML={{ __html: selectionProcess?.description }} />
            {
                selectionProcess.openEnrollment &&  <Enrollment handleSubmit={handleSave} />
            }
            <br />
        </>
    );
};

export default EnrollmentHome;
