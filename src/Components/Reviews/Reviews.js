import "./Reviews.scss";
import {Col, Row} from "react-bootstrap";

const Reviews = (userData) => {

    const reviews = [
        {
            author: "jacob",
            message: "He was excellent with communication and helping to ensure the product was delivered",
            date: new Date(),
            rating: 5,
            id: 0
        },
        {
            author: "jacob",
            message: "did what was needed but not the best",
            date: new Date(),
            rating: 4,
            id: 1
        },
        {
            author: "jacob",
            message: "slow and unresponsive",
            date: new Date(),
            rating: 3,
            id: 2
        },
    ];

    const allR = reviews.map((ele) => {
        return (
            <div key={ele?.id}>
                <div className="review-item">
                    <div>
                        {ele?.author}
                    </div>
                    <div className="center">
                        {ele?.message}
                    </div>
                </div>
                <hr style={{margin:"0"}} />
            </div>
        );
    });


    return (<Row className="reviews-container">
        {/* <Col xs={6}  className="right-border-md">
            <div className="center">
                <h4>Reports</h4>
            </div>
        </Col> */}
        <Col xs={(userData?.reports) ? 6 : 12}>
            <h3>Reviews</h3>
            <hr style={{margin:"0"}} />
            {allR}
        </Col>
    </Row>);
}
export default Reviews;