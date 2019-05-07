var path = require("path");

var dataFriends = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(dataFriends);
    });

    app.post("/api/friends", function (req, res) {
        console.log(req.body);


        // looping over entire character arr. in scores
        var newFriend = req.body
        var totalScore = [];
        var minDifference = 40;

        for (var i = 0; i < dataFriends.length; i++) {
            console.log("Current Friend " + dataFriends[i].name);
            // pulling ind. scores for each character

            var totalDifference = 0;

            for (var j = 0; j < dataFriends[i].scores.length; j++) {
                console.log("Friends score" + dataFriends[i].scores[j])
                console.log("User Score" + newFriend.scores[j])
                totalDifference += Math.abs(parseInt(newFriend.scores[j]) - dataFriends[i].scores[j])

            }

            totalScore.push(totalDifference)
            


            console.log(totalDifference);
    
        }
        // done with math
        console.log(totalScore);

                // if total score array is smaller than minimum, replace min, 

                // totalScore, compare to minDifference, if less than min difference,  minDifference becomes 

            for (var i = 0; i < totalScore.length; i++);
                // if totalDifference is - or = data.friends[i], make newBestFriend
                // else, dataFriends++
                
            // comparing user score to totalScore arr. pulling smallest difference, making newBF var 

        // dataFriends.push(newBestFriend);
        // console.log(bestFriendMatch);
        // console.log(newBestFriend);
        // console.log(dataFriends[0]);

        res.json(dataFriends[i]);

    })

};

