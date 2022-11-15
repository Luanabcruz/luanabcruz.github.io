import React, { useState } from "react";
import pageApi from '../../services/page';

const Home = () => {
    const [home, setHome] = useState({});

    pageApi
        .home()
        .then((response) => setHome(response.data))
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
    });

    return (
        <div>
            <h1>This is the home page</h1>
            <p>About: {home?.about}</p>
        </div>
    );
}

export default Home;