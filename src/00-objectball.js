function gameObject() {
    const gameObject = {
        home: {
            teamname: "Brooklyn Nets",
            colors: ["Black", "White"],
             players: {
                "Alan Anderson": {
                    "number": 0,
                    "shoe": 16,
                    "points": 22,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 1,
                },
                "Reggie Evans": {
                    "number": 30,
                    "shoe": 14,
                    "points": 12,
                    "rebounds":	12,
                    "assists": 12,
                    "steals": 12,
                    "blocks": 12,
                    "slamDunks": 7,
                },
                "Brook Lopez": {
                    "number": 11,
                    "shoe":	17,
                    "points": 17,
                    "rebounds": 19,
                    "assists": 10,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 15,
                },
                "Mason Plumlee": {
                    "number": 1,
                    "shoe":	19,
                    "points": 26,
                    "rebounds":	12,
                    "assists": 6,
                    "steals": 3,
                    "blocks": 8,
                    "slamDunks": 5,
                },
                "Jason Terry": {
                    "number": 31,
                    "shoe":	15,
                    "points": 19,
                    "rebounds":	2,
                    "assists": 2,
                    "steals": 4,
                    "blocks": 11,
                    "slamDunks": 1,
                }
             },
    },
        away: {
            teamname: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    "number": 4,
                    "shoe":	18,
                    "points": 10,
                    "rebounds":	1,
                    "assists": 1,
                    "steals": 2,
                    "blocks": 7,
                    "slamDunks": 2,
                },
                "Bismak Biyombo": {
                    "number": 0,
                    "shoe":	16,
                    "points": 12,
                    "rebounds":	4,
                    "assists": 7,
                    "steals": 7,
                    "blocks": 15,
                    "slamDunks": 10,
                },
                "DeSagna Diop": {
                    "number": 2,
                    "shoe":	14,
                    "points": 24,
                    "rebounds":	12,
                    "assists": 12,
                    "steals": 4,
                    "blocks": 5,
                    "slamDunks": 5,
                },        
                "Ben Gordon": {
                    "number": 8,
                    "shoe":	15,
                    "points": 33,
                    "rebounds":	3,
                    "assists": 2,
                    "steals": 1,
                    "blocks": 1,
                    "slamDunks": 0,
                },
                "Brendan Haywood": {
                    "number": 33,
                    "shoe":	15,
                    "points": 6,
                    "rebounds":	12,
                    "assists": 12,
                    "steals": 22,
                    "blocks": 5,
                    "slamDunks": 12,
                }
             }
    
        }    

    }   
    return gameObject

}

//these are arrays of each team's players and their data
const homePlayers = gameObject().home.players
const awayPlayers = gameObject().away.players


function numPointsScored(name) {

    if (homePlayers[`${name}`]) {
        return homePlayers[`${name}`].points
    } else if (awayPlayers[`${name}`]){
        return awayPlayers[`${name}`].points
    } else {
        console.log("Player not found")
    }
}

// this function takes in a player's name, and returns shoe size
function shoeSize(name) {

    if (homePlayers[`${name}`]) {
        return homePlayers[`${name}`].shoe
    } else if (awayPlayers[`${name}`]) {
        return awayPlayers[`${name}`].shoe
    } else {
        console.log("Player not found")
    }
}


//this function takes in the team name, and returns an array containing the team colors
function teamColors(teamName) {

    if (teamName === gameObject().home.teamname) {
        let homeName = []
        homeName = gameObject().home.colors
        return homeName
    } else if (teamName === gameObject().away.teamname) {
        let awayName = []
        awayName = gameObject().away.colors
        return awayName
    } else {
        console.log("Team not found")
    }
}

//this functions takes a team name as an argument and returns all jersey numbers on the team
function playerNumbers(teamName) {

    if (teamName === gameObject().home.teamname) {
    //this is an array of unnamed objects, each with each player's data
        const homePlayerStatsOnly = Object.values(homePlayers)
        console.log(Object.values(homePlayers))
    //this is an array of player numbers only from the given team
        return homePlayerStatsOnly.map((element) => {
            return (element.number)
        })
    } else {
        const awayPlayerStatsOnly = Object.values(awayPlayers)
        return awayPlayerStatsOnly.map((element) => {
            return (element.number)
        })
}
}


//this function takes in a player's name as an argument and returns their individual stats as an object
function playerStats(playerName) {
    const homePlayerStats = homePlayers[`${playerName}`]
    const awayPlayerStats = awayPlayers[`${playerName}`]

    if (homePlayerStats) {
        return homePlayerStats
    } else if (awayPlayerStats) {
        return awayPlayerStats
    } else {
        console.log("Player not found")
    }
}

//this function finds the player with the largest shoe size, and returns their number of rebounds
function bigShoeRebounds() {

    const homePlayerNames = Object.entries(homePlayers)
    const awayPlayerNames = Object.entries(awayPlayers)
    const newArray = [...homePlayerNames, awayPlayerNames[0], awayPlayerNames[1], awayPlayerNames[2], awayPlayerNames[3], awayPlayerNames[4] ]
    const shoeArray = []

for (const key in newArray) {
    const addShoe = (newArray[`${key}`]["1"]["shoe"])
    shoeArray.push(addShoe)
}

const largestShoe = (shoeArray.sort())[shoeArray.length - 1]
let largestShoePlayerRebounds


for (i=0; i < 9; i++) {
    const checkShoe = (newArray[i]["1"]["shoe"])
    if (checkShoe === largestShoe) {
     const largestShoePlayer = (newArray[i]["0"])
     largestShoePlayerRebounds = (newArray[i]["1"].rebounds)

    } 
}

console.log(largestShoePlayerRebounds)
return largestShoePlayerRebounds

}

bigShoeRebounds()



























  