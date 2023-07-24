import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import pageApi from '../../services/page.js';
import EducationTabs from './education_tabs.js';

const Education = () => {

    let { slug } = useParams();
    const [educationData, setEducationData] = useState({});

    useEffect(() => {
        if (!slug){
            return;
        }

        pageApi.getDiscipline(slug)
            .then(response=> setEducationData(response.data))
            .catch((err) => {
                setEducationData([]);
                console.error("ops! ocorreu um erro" + err);
            });

    },[slug]);

    return (
        <>
            <h2>{educationData?.name}</h2>
            <EducationTabs data={educationData}/>
        </>
    );
}

export default Education;