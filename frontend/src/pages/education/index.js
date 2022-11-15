import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EducationTabs from './education_tabs.js';

const Education = () => {

    let { slug } = useParams();

    return (
        <>
            <h1>This is the education page  {slug}</h1>
            <EducationTabs />

        </>
    );
}

export default Education;