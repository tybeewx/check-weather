import React from "react";

const Titles = () => (
    <div>
        <h1 className="title-container__title"> Weather Finder</h1>
        <h2 className="title-container__subtitle"></h2>
        <marquee behavior="scroll" direction="left" scrollamount="5">
            <h3> Current temperature</h3> </marquee>
            <marquee behavior="scroll" direction="left" scrollamount="4">
                <h4> Weather conditions</h4></marquee>
                <marquee behavior="scroll" direction="left" scrollamount="3">
                    <h5> Wind Speed </h5></marquee>
    </div>
);
export default Titles;


