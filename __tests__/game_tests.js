// Game run spec
// - it should start a new game
// - it should add a vip
// - it should add players
// - it should start a game with at least 3 players
// - it should start a game with no more than 8 players
// - it should allow audience members
// - it should allow the game to start
// - it should move to the game tutorial
// - it should move to a question round
// - it should receive question responses from players
// - it should move to a voting round
// - it should receive votes from players
// - it should receive votes from the audience
// - it should update the leaderboard
// - it should move to the leaderboard
// - it should move to the end game screen
// - it should move to the start game screen
const initialState = {
  initialized: false,
  currentGame: {
    currentRound: 0,
    currentQuestion: 0,
    audienceSize: 0,
    players: [
      {
        name: "",
        vip: true,
        totalScore: 0,
      },
    ],
    rounds: [
      {
        id: 1,
        type: "",
        title: "Round One",
        scoreMultiplier: 1,
        questions: [
          {
            type: "",
            content: "",
            answers: [
              {
                name: "",
                answer: "",
                votes: [
                  {
                    name: "",
                  },
                ],
                audienceVotes: 0,
                score: 0,
              },
            ],
          },
        ],
      },
    ],
  },
};