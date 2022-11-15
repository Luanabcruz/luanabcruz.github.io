import React, { useState, useEffect } from "react";
import pageApi from '../../services/page';
import Education from "./education";
import About from './about';
import FieldsOfInterest from './fields_interest';
import Profile from './profile';

const Home = () => {
    const [home, setHome] = useState({});

    useEffect(() => {
        pageApi
        .home()
        .then((response) => setHome(response.data))
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    }, [])
    

    const { about, fields_interest, disciplines } = home;

    return (
        <>
            <div style={{display: 'flex', alignItems: 'stretch'}}>
                <Profile />            
            </div>
            <div className="pt-3">
                <About about={about} />
            </div>
            <div className="pt-3">
                <FieldsOfInterest fields={fields_interest} />
            </div>
            <div className="pt-3">
                <Education disciplines={disciplines} />
            </div>
            <div className="pb-5" />
        </>
    );
}

export default Home;