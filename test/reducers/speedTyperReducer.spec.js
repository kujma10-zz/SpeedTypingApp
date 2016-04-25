import speedTyperReducer from '../../js/reducers/SpeedTyperReducer'

describe('speedTyperReducer', () => {

  describe('SET_CURRENT_INPUT', () => {

    it('should set word as current input when word given', () => {
      const result = speedTyperReducer({currentInput: "", pastInput: []}, {
        type: 'SET_CURRENT_INPUT',
        payload: { currentInput: "Skyrim" }
      })
      expect(result.currentInput).to.eq("Skyrim")
      expect(result.pastInput).to.deep.eq([])
    })

    it('should set word to past input when word ending with space given', () => {
      const result = speedTyperReducer({currentInput: "", pastInput: []}, {
        type: 'SET_CURRENT_INPUT',
        payload: { currentInput: "Skyrim " }
      })
      expect(result.currentInput).to.eq("")
      expect(result.pastInput).to.deep.eq(["Skyrim"])
    })

    it('should put space into current input when space given', () => {
      const result = speedTyperReducer({currentInput: "", pastInput: []}, {
        type: 'SET_CURRENT_INPUT',
        payload: { currentInput: " " }
      })
      expect(result.currentInput).to.eq(" ")
      expect(result.pastInput).to.deep.eq([])
    })
  });

  describe('START_GAME', () => {

    it('should set timer id', () => {
      const result = speedTyperReducer({timerId: null}, {
        type: 'START_GAME',
        payload: { timerId: "1" }
      })
      expect(result.timerId).to.eq("1")
    })

    it('should reset previous game (currentInput, pastInput i.e stats, timer) but not high scores and words', () => {
      const result = speedTyperReducer({currentInput: "text", pastInput: ["word1", "word2"], elapsed: 20, bestAccuracy: 10, bestWordsPerMinute: 20, words: ["a", "b"]}, {
        type: 'START_GAME',
        payload: { timerId: "1" }
      })
      expect(result.currentInput).to.eq('')
      expect(result.pastInput).to.eql([])
      expect(result.elapsed).to.eq(0)
      expect(result.bestAccuracy).to.eq(10)
      expect(result.bestWordsPerMinute).to.eq(20)
      expect(result.words).to.eql(["a", "b"])
    })

  });

  describe('STOP_GAME', () => {

    describe('Accuracy high score', () => {

      it('should update best accuracy if current accuracy is higher than previous one', () => {
        const result = speedTyperReducer({words: ["word1", "word2"], pastInput: ["word1", "word3"], bestAccuracy: 30}, {
          type: 'STOP_GAME',
          payload: { timerId: null }
        })
        expect(result.bestAccuracy).to.eq(50)
      })

      it('should not update best accuracy if current accuracy is lower than previous one', () => {
        const result = speedTyperReducer({words: ["word1", "word2"], pastInput: ["word1", "word3"], bestAccuracy: 60}, {
          type: 'STOP_GAME',
          payload: { timerId: null }
        })
        expect(result.bestAccuracy).to.eq(60)
      })
    });

    describe('Words per minute high score', () => {

      it('should update best wpm if current wpm is higher than previous one', () => {
        const result = speedTyperReducer({words: ["word1", "word2"], elapsed: 2, pastInput: ["word1", "word2"], bestWordsPerMinute: 30}, {
          type: 'STOP_GAME',
          payload: { timerId: null }
        })
        expect(result.bestWordsPerMinute).to.eq(60)
      })

      it('should not update best wpm if current wpm is lower than previous one', () => {
        const result = speedTyperReducer({words: ["word1", "word2"], elapsed: 2, pastInput: ["word1", "word3"], bestWordsPerMinute: 70}, {
          type: 'STOP_GAME',
          payload: { timerId: null }
        })
        expect(result.bestWordsPerMinute).to.eq(70)
      })
    });

    describe('Timer', () => {
      it('should remove id of the timer', () => {
        const result = speedTyperReducer({words: ["word1", "word2"], pastInput: ["word1", "word3"], bestAccuracy: 60}, {
          type: 'STOP_GAME',
          payload: { timerId: null }
        })
        expect(result.timerId).to.be.a.null
      })
    });

  });

  describe('TICK', () => {
    it('should update elapsed time by one second', () => {
      const result = speedTyperReducer({elapsed: 15}, {
        type: 'TICK',
      })
      expect(result.elapsed).to.eq(16)
    })

  });

  describe('ADD_WORDS', () => {
    it('should change words', () => {
      const result = speedTyperReducer({words: []}, {
        type: 'ADD_WORDS',
        payload: { words: ["a1", "a2"] }
      })
      expect(result.words).to.eql(["a1", "a2"])
    })
  });

});


