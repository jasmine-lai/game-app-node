import Database from "../Database/index.js";

function GameRoutes(app) {

    const options = {
        method: 'POST',
        url: 'https://api.igdb.com/v4/games/',
        headers: {
            cookie: '__cf_bm=YAJTzfOP9HVZPDDKmOpD0suZMczF.xiWwtROysk.eQs-1702526360-1-AQ7qN%2B9D%2FSfGg%2FBjtFJzN0yCRB3YCOf4FObhD0RHgfaRRwvxCOAFoZ8irdQQX9muEedZNft78Nk%2FbD6PTFMOB%2Bs%3D',
            'Content-Type': 'text/plain',
            'User-Agent': 'insomnia/8.4.5',
            'Client-ID': 'caz1k3iyna0frvcdf2vuupurrnf1el',
            Authorization: 'Bearer ihyg0hixxny2sxzmz8x1lhh4itdjrp'
        },
        data: 'fields name,summary;\nlimit 10;'
    };

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

        axios.request(options).then(function (response) {
            const games = response.data;
            console.log(games);
            res.send(games);
        }).catch(function (error) {
            console.error(error);
        });

    });
}
export default GameRoutes;