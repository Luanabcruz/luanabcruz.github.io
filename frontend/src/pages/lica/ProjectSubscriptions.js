import pageApi from "../../services/page";
import ProjectList from "./ProjectList";
import { useState, useEffect } from 'react';


const ProjectSubscriptions = ({ data }) => {

    const [projectsData, setProjectsData] = useState([]);
    
    useEffect(() => {
        pageApi
        .listSelectionProcesses()
        .then(response=> setProjectsData(response.data))
        .catch((err) => {
            setProjectsData([]);
            console.error("ops! ocorreu um erro" + err);
        });
    }, []);

    return (
        <>
            <h3>Inscrições em aberto</h3>
            <br />
            <ProjectList projectsData={projectsData}/>
        </>
    );
}

export default ProjectSubscriptions;
