import React, { useState } from "react";
import pageApi from '../../services/page';
import Education from "./education";
import About from './about';
import FieldsOfInterest from './fields_interest';

const Home = () => {
    const [home, setHome] = useState({});

    pageApi
        .home()
        .then((response) => setHome(response.data))
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });

    const { about, fields_interest, disciplines } = home;

    return (
        <>
            <div className="pt-5">
                <About about={about} />
            </div>
            <div className="pt-3">
                <FieldsOfInterest fields={fields_interest} />
            </div>
            <div className="pt-3">
                <Education disciplines={disciplines} />
            </div>
        </>
    );
}

export default Home;