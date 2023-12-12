import Database from "../Database/index.js";

function ReviewRoutes(app) {

    //get reviews based on game
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
}
export default ReviewRoutes;