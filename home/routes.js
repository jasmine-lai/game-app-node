import axios from "axios";
import rateLimit from 'axios-rate-limit';

function HomeRoutes(app) {
    const http = rateLimit(axios.create(), { maxRequests: 4, perMilliseconds: 1000, maxRPS: 4 })

    app.get("/api/home/featured", (req, res) => {
    const options = {
                method: 'POST',
                url: 'https://api.igdb.com/v4/games/?fields=name,summary,cover.url,rating&order=rating:desc',
                headers: {
                    cookie: '__cf_bm=YAJTzfOP9HVZPDDKmOpD0suZMczF.xiWwtROysk.eQs-1702526360-1-AQ7qN%2B9D%2FSfGg%2FBjtFJzN0yCRB3YCOf4FObhD0RHgfaRRwvxCOAFoZ8irdQQX9muEedZNft78Nk%2FbD6PTFMOB%2Bs%3D',
                    'Content-Type': 'text/plain',
                    'User-Agent': 'insomnia/8.4.5',
                    'Client-ID': 'caz1k3iyna0frvcdf2vuupurrnf1el',
                    Authorization: 'Bearer ihyg0hixxny2sxzmz8x1lhh4itdjrp'
                },
            };   
        http.request(options).then(function (response) {
                    const games = response.data;
                    console.log(games);
                    res.send(games);
                }).catch(function (error) {
                    console.error(error);
                });
});
app.get("/api/home/newreleases", (req, res) => {
    const options = {
                method: 'POST',
                url: 'https://api.igdb.com/v4/games/?fields=name,summary,cover.url,first_release_date&filter[first_release_date][lt]=1702506107&order=first_release_date:desc',
                headers: {
                    cookie: '__cf_bm=YAJTzfOP9HVZPDDKmOpD0suZMczF.xiWwtROysk.eQs-1702526360-1-AQ7qN%2B9D%2FSfGg%2FBjtFJzN0yCRB3YCOf4FObhD0RHgfaRRwvxCOAFoZ8irdQQX9muEedZNft78Nk%2FbD6PTFMOB%2Bs%3D',
                    'Content-Type': 'text/plain',
                    'User-Agent': 'insomnia/8.4.5',
                    'Client-ID': 'caz1k3iyna0frvcdf2vuupurrnf1el',
                    Authorization: 'Bearer ihyg0hixxny2sxzmz8x1lhh4itdjrp'
                },
            };   
        http.request(options).then(function (response) {
                    const games = response.data;
                    console.log(games);
                    res.send(games);
                }).catch(function (error) {
                    console.error(error);
                });
});
}
export default HomeRoutes;