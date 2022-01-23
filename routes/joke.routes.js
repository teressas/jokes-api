const JokeController = require("../controllers/joke.controller");

module.exports = app => {
    console.log("server/routes")
    app.get("/", JokeController.index);
    app.get('/api/jokes', JokeController.allJokes);
    app.get("/api/jokes/:id", JokeController.oneJoke);
    app.get("/api/jokes/random", JokeController.oneRandomJoke);
    app.put("/api/jokes/update/:id", JokeController.updateJoke);
    app.post("/api/jokes/new", JokeController.createJoke);
    app.delete("/api/jokes/delete/:id", JokeController.deleteJoke);
};