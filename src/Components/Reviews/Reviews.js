import "./Reviews.scss";
import {Col, Row} from "react-bootstrap";

import { Rating } from "@mui/material";

const Review = ({ name, id, message, date, rating }) => {
    return (
        <article className="review">
            <a className="review-author" href={"/profile?id="+id}>{name}</a>
            <Rating name="read-only" value={rating} readOnly />
            <div className="review-date">{new Date(date).toDateString()}</div>
            <div className="review-message">{message}</div>
        </article>
    );
};

const ReviewsList = (reviews) => {
    return (
        <div className="reviews-list">
        {reviews.map((review) => (
            <Review
                key={review.id}
                name={review.author.displayName}
                id={review.author.id}
                message={review.message}
                date={review.date}
                rating={review.rating}
                />
        ))}
        </div>
    );
};

const Reviews = ({userData}) => {
    return userData?.reviews?.length > 0 && (<>
    <Row className="reviews-title-container">
        <Col xs={12}>
            <h2>Reviews</h2>
        </Col>
    </Row>
    <Row className="reviews-container">
        <Col xs={12}>
            {ReviewsList([...(userData?.reviews || []), ...(userData?.reports || [])])}
        </Col>
    </Row>
    </>);
}
export default Reviews;