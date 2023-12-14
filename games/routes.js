import Database from "../Database/index.js";
import axios from "axios";

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

    //search games
    app.get("/api/games/s/:search", (req, res) => {
        const { search } = req.params;
        const options = {
            method: 'POST',
            url: 'https://api.igdb.com/v4/games/',
            headers: {
                cookie: '__cf_bm=0mzQFpobpkhPPOAWajOMtzbWYhefEENN4dZpZqVawmc-1702534182-1-AeDoqR8J37XqCT1d6oTiCX2FwK2AEok1T6J0VPFEeP7J7EW0AJYXRfyaZh56Y8ZVEWuFUASPR3pnpVVM81%2FeY3E%3D',
                'Content-Type': 'text/plain',
                'User-Agent': 'insomnia/8.4.5',
                'Client-ID': 'caz1k3iyna0frvcdf2vuupurrnf1el',
                Authorization: 'Bearer ihyg0hixxny2sxzmz8x1lhh4itdjrp'
            },
            data: `fields name,summary;\nsearch "${search}";\nlimit 51;`
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            res.send(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    });

    app.get("/api/games/img/:id", (req, res) => {
        const { id } = req.params;
        const options = {
            method: 'POST',
            url: 'https://api.igdb.com/v4/covers',
            headers: {
                cookie: '__cf_bm=HDsUB2w5rOSoZIS9rLH25Vxd2X8IJuUZYVlFor8eYjA-1702527850-1-AZ3DGZy49cUGZ%2BVWtfzyM1ubBCuZW5VLorfrQm1CO2pbeHGK1OFXnNfxKXLbUgrVz2MvvDJpWprMd3nwRnbsb%2Fk%3D',
                'Content-Type': 'text/plain',
                'User-Agent': 'insomnia/8.4.5',
                'Client-ID': 'caz1k3iyna0frvcdf2vuupurrnf1el',
                Authorization: 'Bearer ihyg0hixxny2sxzmz8x1lhh4itdjrp'
            },
            data: `fields url;\nwhere game = ${id};`
        };

        axios.request(options).then(function (response) {
            const data = response.data;
            res.send(data);
        }).catch(function (error) {
            console.error(error);
        });
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
        const allGameOptions = {
            method: 'POST',
            url: 'https://api.igdb.com/v4/games/',
            headers: {
                cookie: '__cf_bm=YAJTzfOP9HVZPDDKmOpD0suZMczF.xiWwtROysk.eQs-1702526360-1-AQ7qN%2B9D%2FSfGg%2FBjtFJzN0yCRB3YCOf4FObhD0RHgfaRRwvxCOAFoZ8irdQQX9muEedZNft78Nk%2FbD6PTFMOB%2Bs%3D',
                'Content-Type': 'text/plain',
                'User-Agent': 'insomnia/8.4.5',
                'Client-ID': 'caz1k3iyna0frvcdf2vuupurrnf1el',
                Authorization: 'Bearer ihyg0hixxny2sxzmz8x1lhh4itdjrp'
            },
            data: 'fields name,summary;\nlimit 30;\nsort rating desc;'
        };

        axios.request(allGameOptions).then(function (response) {
            const games = response.data;
            //console.log(games);
            res.send(games);
        }).catch(function (error) {
            console.error(error);
        });

    });
}
export default GameRoutes;