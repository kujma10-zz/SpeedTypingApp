import { currentGame }from '../../js/reducers/CurrentGame'

describe('currentGame', () => {
  context("START_WORD_FETCH", () => {
    it("sets wordFetchInProgress to true", () => {
      const result = currentGame({}, {
        type: 'START_WORD_FETCH'
      });
      expect(result.wordFetchInProgress).to.eq(true);
    })
  });

  context("STOP_WORD_FETCH", () => {
    it("sets wordFetchInProgress to false", () => {
      const result = currentGame({}, {
        type: 'STOP_WORD_FETCH'
      });
      expect(result.wordFetchInProgress).to.eq(false);
    })
  });

  context("SET_CURRENT_INPUT", () => {
    it('should append key to current input', () => {
      const result = currentGame({currentInput: "skyri", pastInput: []}, {
        type: 'SET_CURRENT_INPUT',
        payload: { key: "m" }
      })
      expect(result.currentInput).to.eq("skyrim")
      expect(result.pastInput).to.deep.eq([])
    })

    it('should set word to past input when word ending with space given', () => {
      const result = currentGame({ currentInput: "Skyrim", pastInput: [] }, {
        type: 'SET_CURRENT_INPUT',
        payload: { key: " " }
      })
      expect(result.currentInput).to.eq("")
      expect(result.pastInput).to.deep.eq(["Skyrim"])
    })

    it('should put space into current input when space given', () => {
      const result = currentGame({currentInput: "", pastInput: []}, {
        type: 'SET_CURRENT_INPUT',
        payload: { key: " " }
      })
      expect(result.currentInput).to.eq(" ")
      expect(result.pastInput).to.deep.eq([])
    })
  });

  context("START_GAME", () => {
    it("sets the new game attributes", () => {
      const result = currentGame({}, {
        type: 'START_GAME',
        payload: {
          startTime: "now",
          words: ["some", "words"]
        }
      });
      expect(result.startTime).to.eq("now");
      expect(result.currentInput).to.eq('');
      expect(result.pastInput).to.deep.eq([]);
      expect(result.words).to.deep.eq(["some", "words"]);
    })
  });

  context("END_GAME", () => {
    it("clears start time and current input", () => {
      const result = currentGame({}, {
        type: 'END_GAME'
      });
      expect(result.startTime).to.eq(undefined);
      expect(result.currentInput).to.eq('');
    })
  });
});

