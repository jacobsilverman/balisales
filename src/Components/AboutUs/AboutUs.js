import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import './AboutUs.scss';

import Map from "../Map";

// import assrock from '../../Data/Images/assrock.svg';
import defaultProfile from '../../Data/Images/default-profile.jpg';
import andrina from '../../Data/Images/andrina.jpg';
import jacob from '../../Data/Images/jacob.jpg';
import nathan from '../../Data/Images/nathan.jpg';
import { useTranslation } from 'react-i18next';

import { getUsersMapQuery } from '../../Data/Services/MapInfo';
 
var AboutUs = () => {
    const { t } = useTranslation();
    const [addresses, setAddresses] = useState([])

    useEffect(() => {
        getUsersMapQuery().then((res) => {
            setAddresses(res)
        }).catch((er) => {
            console.log("hit:",er)
        })
    }, [])

    const address = {
        address: "2 new york",
        city: " new york",
        state: " new york",
        userInfo: {
            displayName: "",
            id: "",
            icon: "",
        }
    }

    const address2 = {
        address: "571 hidden ridge court",
        city: " encinitas",
        state: " california",
        userInfo: {
            displayName: "Jacob Silv",
            id: "",
            icon: "",
        }
    }

    return (
        <>
        <Container className="about-header-container">
            <Row>
                <Col className="about-header">
                    <h2>{t("Mission")}</h2>
                </Col>
            </Row>
        </Container>
        <Container className="about-container">
            {/* <Row>
                <Col>
                    Hello User, my name is Jacob Silverman and I am the sole developer of this website. A bit about my history and creditials: I grew up in San Diego, California and later moved to NYC when I attended
                    NYU for my degree in Computer science with minors in Business & Psychology year of 2016. After college I was employed by E*Trade (now Morgan Stanley) as a Front End Web Developer where I have spent the last 6 years
                    refining my web development skills. Roughly three years ago I became intrigued with balisongs, and since I spent my entire schooling practicing finger dexterity with pencil swirling it was something that came naturally to me. 
                    At first I had no idea the second hand market existed and was very disappointed to find that the vast majority of balisongs were sold out of discontinued and the very few that were available from retailers were 
                    not to my liking. Roughly a year later I discovered the facebook market and immediately started monitoring it constantly then also later the instragram market. For the past two years I have continuously improved my 
                    flipping while growing my collection by buy, selling and trading balisongs with the aim of trying all varieties while occassionally making slight profits. I find this niche hobby has provided infinite entertainment
                    for myself and I only wish to become more involved with the community/spread awareness of this wonderful hobby.
                </Col>
            </Row> 
                                With recent dilemmas on the instagram sales channel I thought it would be a wonderful opporunity to start this project. Even though there are already plenty of alternative markets for Balisongs I find they dont satisfy 
                    all the possible areas of contention when it comes to balisong deals. Whether it be surcharges, unknown identities/potential scams, difficulties with filtering to find your desired balisongs, or any issues a user can face 
                    my aim is to completely eliminate these problems by actively enhancing this website based on the communities preferences and ideas.*/}
            {/* <Row>
                <Col>
                    <h2>Mission</h2>
                </Col>
           </Row> */}
            <Row>
                <Col>
                    Please check out the <a href="/contactUs">Contact Us Page</a> to offer suggestions, advise, help contribute to the growth of this website, or for any reason you might see fit!
                </Col>
            </Row>
            <Row>
                <Col>
                    Our mission is to enable balisong enthusiasts to buy, sell and trade their balisongs. The ultimate goal is to 
                    reduce the risk involved and cut out all potential scammers or potential sour transactions. This website is an ongoing effort that 
                    utilizes user feedback to continuously improve.
                </Col>
            </Row>
            <Row>
                <Col>
                    To access all aspects of this website please make sure to log in or sign up. Once you are logged in you will be able to create posts
                    and write reviews on other peoples accounts.
                </Col>
            </Row>
            <Row>
                <Col>
                We want to thank you for using this website and hope you are actively enjoying it, along with finding/making deals with ease. Anyways, we hope you have a wonderful day and take care. <span className="waving-hand">👋</span>
                </Col>
            </Row>
           {/* <img src={assrock} className="rocket" /> */}

           <Row className="team-container">
                <Col>
                    <h3>{t("Meet the Team")}</h3>
                </Col>
           </Row>
           <Row>
                <Col>
                    <Card>
                        <div className="full-center">
                            <CardMedia
                                sx={{ height: 200, width:"100%" }}
                                image={jacob}
                                title="Jacob's Image"
                                />
                        </div>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className="full-center">
                                Jacob
                            </Typography>
                            <Typography variant="body2" color="text.secondary" className="full-center">
                                {t("Web Developer")}
                            </Typography>
                        </CardContent>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <div className="full-center">
                            <CardMedia
                                sx={{ height: 200, width:"100%" }}
                                image={andrina}
                                title="Andrina's Image"
                                />
                        </div>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className="full-center">
                                Andrina
                            </Typography>
                            <Typography variant="body2" color="text.secondary" className="full-center">
                                {t("Project Manager")}
                            </Typography>
                        </CardContent>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <div className="full-center">
                            <CardMedia
                                sx={{ height: 200, width:"100%" }}
                                image={nathan}
                                title="Nathan's Image"
                                />
                        </div>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className="full-center">
                                Nathan
                            </Typography>
                            <Typography variant="body2" color="text.secondary" className="full-center">
                                {t("Designer")}
                            </Typography>
                        </CardContent>
                    </Card>
                </Col>
            </Row>
            
            <Row>
                <Col xs={12}>
                    <Row className="team-container">
                        <Col>
                            <h3>{t("Meet our Users")}</h3>
                        </Col>
                    </Row>   
                    <Map addresses={addresses} height="400px" width="100%" zoom={4} border="5px solid black" />
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default AboutUs;