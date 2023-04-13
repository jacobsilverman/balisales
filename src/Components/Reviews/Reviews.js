import "./Reviews.scss";
import {Col, Row} from "react-bootstrap";

import { Rating } from "@mui/material";

const Review = ({ name, id, message, date, rating }) => {
    return (
        <article className="review">
            <a className="review-author" href={"/profile?id="+id}>{name}</a>
            <Rating name="read-only" value={rating} readOnly />
            <div className="review-date">{date.toDateString()}</div>
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
                name={review.author.name}
                id={review.author.id}
                message={review.message}
                date={review.date}
                rating={review.rating}
                />
        ))}
        </div>
    );
};

const Reviews = (userData) => {
    const reviews = [
        {
            author: {
                name: "Jacob",
                id: "YrVu0gSQWIdyGPaWl25wgZNw9Jj1"
            },
            message: "He was excellent with communication and helping to ensure the product was delivered",
            date: new Date(),
            rating: 5,
            id: 0
        },
        {
            author: {
                name: "Jacob",
                id: "YrVu0gSQWIdyGPaWl25wgZNw9Jj1"
            },
            message: "did what was needed but not the best",
            date: new Date(),
            rating: 4,
            id: 1
        },
        {
            author: {
                name: "Jacob",
                id: "YrVu0gSQWIdyGPaWl25wgZNw9Jj1"
            },
            message: "slow and unresponsive",
            date: new Date(),
            rating: 3,
            id: 12
        },
        {
            author: {
                name: "Jacob",
                id: "YrVu0gSQWIdyGPaWl25wgZNw9Jj1"
            },
            message: "slow and unresponsive",
            date: new Date(),
            rating: 3,
            id: 20
        },
        {
            author: {
                name: "Jacob",
                id: "YrVu0gSQWIdyGPaWl25wgZNw9Jj1"
            },
            message: "slow and unresponsive",
            date: new Date(),
            rating: 3,
            id: 21
        },
    ];

    return (<Row className="reviews-container">
        <Col xs={12}>
            <h3>Reviews</h3>
            {ReviewsList(reviews)}
        </Col>
    </Row>);
}
export default Reviews;