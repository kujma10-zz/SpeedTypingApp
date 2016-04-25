import { calculateAccuracy, calculateWordsPerMinute } from '../../js/reducers/SpeedTyperReducer'

describe('stats selectors', () => {
  describe('calculateAccuracy', () => {
    it('calculates accuracy', () => {
      expect(calculateAccuracy({ words: ["a", "b"], pastInput: ["a", "b"]})).to.eq(100)
      expect(calculateAccuracy({ words: ["a", "b"], pastInput: ["a", "c"]})).to.eq(50)
      expect(calculateAccuracy({ words: ["a", "b"], pastInput: ["b", "c"]})).to.eq(0)
      expect(calculateAccuracy({ words: ["a", "b", "c"], pastInput: ["a"]})).to.eq(100)
    })
  });

  describe('calculateWordsPerMinute', () => {

    it('should calculate words per minute correctly', () => {
      expect(calculateWordsPerMinute({ pastInput: ["a"], elapsed: 60 })).to.eq(1.00)
      expect(calculateWordsPerMinute({ pastInput: ["a", "b"], elapsed: 60 })).to.eq(2.00)
      expect(calculateWordsPerMinute({ pastInput: ["b", "b", "c"], elapsed: 60 })).to.eq(3.00)
      expect(calculateWordsPerMinute({ pastInput: ["a"], elapsed: 1 })).to.eq(60.00)
      expect(calculateWordsPerMinute({ pastInput: ["a", "b"], elapsed: 1 })).to.eq(120.00)
      expect(calculateWordsPerMinute({ pastInput: ["b", "b", "c"], elapsed: 1 })).to.eq(180.00)
    })
  });
});

