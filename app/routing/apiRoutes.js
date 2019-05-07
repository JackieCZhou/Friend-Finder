var path = require("path");

var dataFriends = require("../data/friends.js");
var matchName = null;
var matchImage = null;


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
        console.log(totalScore);


        for (var i = 0; i < totalScore.length; i++) {
            if (totalScore[i] < minDifference) {
                minDifference = totalDifference;
                matchName = dataFriends[i].name;
                matchImage = dataFriends[i].photo;
                console.log('********\n', matchName, matchImage, '\n********')
            }
        }

        // Add new user
        dataFriends.push(newFriend);

        // response
        console.log(matchName, matchImage)
        // console.log(totalScore)
        res.json({ status: 'OK', matchName: matchName, matchImage: matchImage });

    })

};
