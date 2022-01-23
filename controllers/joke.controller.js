const Joke = require("../models/joke.model")

module.exports.index = (req, res) => {
    res.json("Hello")
}

// Retrieve all jokes
module.exports.allJokes = (req, res) => {
    Joke.find()
        .then(allJokes => {
            res.json({ jokes: allJokes })
        })
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

// Retrieve one jokes
module.exports.oneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(joke => {
            res.json({ joke: joke })
        })
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// Retrieve one random joke
module.exports.oneRandomJoke = (req, res) => {
    Joke.find()
        .then(allJokes => {
            function getRandomItem(arr) {
                // get random index value
                const randomIndex = Math.floor(Math.random() * arr.length);
                // get random item
                const item = arr[randomIndex];
                return item;
            }
            getRandomItem(allJokes)
            res.json({
                allJokes: allJokes,
                // item: item
                // getRandomItem(arr)
            })
            .catch(err => res.json({ message: "Something went wrong", error: err }));
            console.log("hello");
            // console.log(allJoke);
        })
};

// program to get a random item from an array
// function getRandomItem(arr) {
//     // get random index value
//     const randomIndex = Math.floor(Math.random() * arr.length);
//     // get random item
//     const item = arr[randomIndex];
//     return item;
// }
// const array = [1, 'hello', 5, 8];
// const result = getRandomItem(array);
// console.log(result);

// Create a new joke
module.exports.createJoke = (req, res) => {
    // create an instance of Joke and then passes in the attributes required to create the Joke from the req.body
    // req.body comes from a form
    // create is a method
    Joke.create(req.body)
        // will only execute upon successfully inserting data in the database
        .then(newJoke =>
            res.json({ result: newJoke })
        )
        // will execute only if there is an error.
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// create reminder 2 (alternative)
module.exports.createJoke2 = (req, res) => {
    const newJoke = new Joke(req.body) // instantiates a Joke according to model (locally, not in dbs)
    newJoke.save()
        .then(newJoke => res.json({ result: newJoke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }))

}

// Retrieve one jokes
module.exports.oneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(joke => res.json({ joke: joke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

// Update a joke
module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate(
        // need 3 things to update: id, req.body (what you are updating), validator
        { _id: req.params.id },
        req.body,
        // for validation
        { new: true, runValidators: true })
        .then(joke => res.json({ joke: joke }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};


// Delete a joke
module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};
