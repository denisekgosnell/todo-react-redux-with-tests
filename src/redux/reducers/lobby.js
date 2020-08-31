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