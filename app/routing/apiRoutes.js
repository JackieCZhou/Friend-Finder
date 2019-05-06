var path = require("path");

var dataFriends = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(dataFriends);
    });

    app.post("/api/friends", function (req, res) {
        console.log(req.body);


        // looping over entire character arr. just in scores
        var newFriend = req.body
        var totalScore = [];

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






        // var scoresArray = [];
        // for (var i = 0; i < req.body.scores.length; i++) {
        //     scoresArray.push(parseInt(req.body.scores[i]))

        // }

        // newFriend.scores = scoresArray;



        // var compareFriends = [];
        // for (var i = 0; i < dataFriends.length; i++) {
        //     var currentAdd = 0;
        //     currentAdd += Math.abs(newFriend.scores[i] - dataFriends[i].scores[i]);

        // }

        // compareFriends.push(currentAdd);


        // var newBestFriend = 0;
        // for (var i = 1; i < compareFriends.length; i++) {

        //     if (compareFriends[i] <= compareFriends[newBestFriend]) {
        //         bestFriendMatch = i;
        //     }
        // }

        // var bestFriendMatch = dataFriends[bestFriendMatch];


        // dataFriends.push(newBestFriend);
        // console.log(bestFriendMatch);
        // console.log(newBestFriend);
        // console.log(dataFriends[0]);

        res.json(dataFriends[0]);

    })

};

