import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div
                        className={
                            toggleState === 1
                                ? "qualification__button qualification__active button--flex"
                                : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
                        Education
                    </div>

                    <div
                        className={
                            toggleState === 2
                                ? "qualification__button qualification__active button--flex"
                                : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-users-alt qualification__icon"></i>{" "}
                        Organization
                    </div>

                    <div
                        className={
                            toggleState === 3
                                ? "qualification__button qualification__active button--flex"
                                : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(3)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div
                        className={
                            toggleState === 1
                                ? "qualification__content qualification__content-active"
                                : "qualification__content"
                        }
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    SMPN 1 Subang
                                </h3>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>{" "}
                                    2014 - 2017
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">
                                    SMAN 1 Subang
                                </h3>
                                <span className="qualification__subtitle">
                                    Science
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>{" "}
                                    2017 - 2020
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    Institut Teknologi Nasional Bandung
                                </h3>
                                <span className="qualification__subtitle">
                                    Informatics
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>{" "}
                                    2020 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="qualification__sections">
                    <div
                        className={
                            toggleState === 2
                                ? "qualification__content qualification__content-active"
                                : "qualification__content"
                        }
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    Musyawarah Besar Committee
                                </h3>
                                <span className="qualification__subtitle">
                                    Bawaslu
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>{" "}
                                    January 2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">
                                    Wisuda 1 Comittee
                                </h3>
                                <span className="qualification__subtitle">
                                    Public Relation
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>{" "}
                                    March 2021
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    Penerimaan Mahasiswa Baru Comittee
                                </h3>
                                <span className="qualification__subtitle">
                                    Public Relation
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>{" "}
                                    September 2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">
                                    Wisuda 2 Comittee
                                </h3>
                                <span className="qualification__subtitle">
                                    Fundraising
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>{" "}
                                    November 2021
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    Peningkatan Kualitas Keorganisasian
                                    Mahasiswa Comittee
                                </h3>
                                <span className="qualification__subtitle">
                                    Public Relation
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>{" "}
                                    March 2022
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">
                                    Pengabdian Pada Masyarakat Comittee
                                </h3>
                                <span className="qualification__subtitle">
                                    Head of Logistics
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 23
                                    - 24 January 2023
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    Peningkatan Kualitas Keorganisaasian
                                    Mahasiswa Comittee
                                </h3>
                                <span className="qualification__subtitle">
                                    Consumption
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>{" "}
                                    February 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="qualification__sections">
                    <div
                        className={
                            toggleState === 3
                                ? "qualification__content qualification__content-active"
                                : "qualification__content"
                        }
                    >
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    Object Oriented Programming Laboraty
                                    Assistant
                                </h3>
                                <span className="qualification__subtitle">
                                    IF - ITENAS
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>{" "}
                                    March - June 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;
