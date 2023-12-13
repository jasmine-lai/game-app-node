import Database from "../Database/index.js";

function GameRoutes(app) {

    //get games based on id
    app.get("/api/games/:id", (req, res) => {
        const { id } = req.params;
        const games = Database.games
            .find((r) => r.gameID === Number(id));
        if (!games) {
            res.status(404).send("No games");
            return;
        }
        res.send(games);
    });

    app.put("/api/games/:id", (req, res) => {
        const { id } = req.params;
        const game = req.body;
        Database.games = Database.games.map((c) =>
            c.gameID === gameID ? { c, ...game } : c
        );
        res.sendStatus(204);
    });

    app.delete("/api/games/:id", (req, res) => {
        const { id } = req.params;
        Database.courses = Database.courses
            .filter((c) => c.gameID !== id);
        res.sendStatus(204);
    });

    app.post("/api/games", (req, res) => {
        const games = {
            ...req.body,
            _id: new Date().getTime().toString()
        };
        Database.games.push(game);
        res.send(game);
    });

    app.get("/api/games", (req, res) => {
        const games = Database.games;
        res.send(games);
    });
}
export default GameRoutes;