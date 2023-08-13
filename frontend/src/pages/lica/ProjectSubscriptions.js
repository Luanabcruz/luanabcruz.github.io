import React, { useState, useEffect } from 'react';
import pageApi from "../../services/page";
import ProjectList from "./ProjectList";

const ProjectSubscriptions = () => {
    const [projectsData, setProjectsData] = useState([]);
    const [openEnrollmentProjects, setOpenEnrollmentProjects] = useState([]);
    const [closedEnrollmentProjects, setClosedEnrollmentProjects] = useState([]);

    useEffect(() => {
        pageApi
        .listSelectionProcesses()
        .then(response => {
            setProjectsData(response.data);
        })
        .catch((err) => {
            setProjectsData([]);
            console.error("Ops! Ocorreu um erro: " + err);
        });
    }, []);

    useEffect(() => {
        setOpenEnrollmentProjects(projectsData.filter(project => project.openEnrollment));
        setClosedEnrollmentProjects(projectsData.filter(project => !project.openEnrollment));
    }, [projectsData]);

    return (
        <>
            {openEnrollmentProjects.length > 0 && (
                <>
                    <h2>Inscrições em aberto</h2>
                    <ProjectList projectsData={openEnrollmentProjects} />
                </>
            )}
            {closedEnrollmentProjects.length > 0 && (
                <>
                    <h2>Inscrições encerradas</h2>
                    <ProjectList projectsData={closedEnrollmentProjects} />
                </>
            )}
            {(openEnrollmentProjects.length === 0 && closedEnrollmentProjects.length === 0) && (
                <p>Não há inscrições disponíveis no momento.</p>
            )}
        </>
    );
}

export default ProjectSubscriptions;
