import { Col, Container, Row } from 'react-bootstrap';
import './AboutUs.scss';

import assrock from '../../Data/Images/assrock.svg';
 
var AboutUs = () => {
    return (
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
            <Row>
                <Col>
                    Please check out the <a href="/contactUs">Contact Us Page</a> to offer suggestions, advise, help contribute to the growth of this website, or for any reason you might see fit!
                </Col>
            </Row>
            <Row>
                <Col>
                    Our mission is to enable balisong enthusiasts to buy, sell and trade off the market balisongs. The ultimate goal is to 
                    reduce the risk involved and cut out all potential scammers or potential sour transactions. This website is an ongoing effort that 
                    utilizes user feedback to continuously improve.
                </Col>
            </Row>
            <Row>
                <Col>
                We want to thank you for using this website and hope you are actively enjoying it, along with finding/making deals with ease. Anyways, were hope you have a wonderful day and take care. <span className="waving-hand">👋</span>
                </Col>
            </Row>
           <img src={assrock} className="rocket" />
        </Container>
    );
};

export default AboutUs;