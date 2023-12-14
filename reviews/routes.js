import Database from "../Database/index.js";
import * as dao from "./dao.js";

function ReviewRoutes(app) {
    const findAllReviews = async (req, res) => {
        const reviews = await dao.findAllReviews();
        res.json(reviews);
    };

    const findReviewByGameId = async (req, res) => {
        const reviews = await dao.findReviewByGameId(req.params.gameId);
        try {
            res.json(reviews);
        } catch (error) {
            console.log(req.params);
        }
    };

    const findReviewById = async (req, res) => {
        const review = await dao.findReviewById(req.params._id);
        res.json(review);
    };

    const findReviewByUserId = async (req, res) => {
        const reviews = await dao.findReviewByUserId(req.params.userId);
        res.json(reviews);
    };

    const createReview = async (req, res) => {
        try {
            console.log(req.body);
            const Review = await dao.createReview(req.body);
            res.json(Review);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteReview = async (req, res) => {
        const status = await dao.deleteReview(req.params._id);
        res.json(status);
    };

    const updateReview = async (req, res) => {
        const { reviewId } = req.params;
        const status = await dao.updateReview(reviewId, req.body);
        currentReview = await dao.findReviewByReviewId(reviewId);
        res.json(status);
    };
    
    app.get("/api/reviews", findAllReviews);
    app.get("/api/reviews/gid/:gameId", findReviewByGameId);
    app.get("/api/reviews/rid/:reviewId", findReviewById);
    app.get("/api/reviews/uid/:userId", findReviewByUserId);
    app.post("/api/reviews", createReview);
    app.delete("/api/reviews/rid/:reviewId", deleteReview);
    app.put("/api/reviews/rid/:reviewId", updateReview);

    //get reviews based on game
    /*
    app.get("/api/reviews/:id", (req, res) => {
        const { id } = req.params;
        const reviews = Database.reviews
            .filter((r) => r.gameID === Number(id));
        if (!reviews) {
            res.status(404).send("No reviews");
            return;
        }
        res.send(reviews);
    });

    app.put("/api/reviews/:id", (req, res) => {
        const { id } = req.params;
        const review = req.body;
        Database.reviews = Database.reviews.map((c) =>
            c.reviewID === reviewID ? { c, ...review } : c
        );
        res.sendStatus(204);
    });

    app.delete("/api/reviews/:id", (req, res) => {
        const { id } = req.params;
        Database.courses = Database.courses
            .filter((c) => c.reviewID !== id);
        res.sendStatus(204);
    });

    app.post("/api/reviews", (req, res) => {
        const reviews = {
            ...req.body,
            _id: new Date().getTime().toString()
        };
        Database.reviews.push(review);
        res.send(review);
    });

    app.get("/api/reviews", (req, res) => {
        const reviews = Database.reviews;
        res.send(reviews);
    });
    */
}
export default ReviewRoutes;