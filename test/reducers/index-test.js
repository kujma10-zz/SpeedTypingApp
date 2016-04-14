/**
 * Created by Kote on 4/14/2016.
 */
import {calculateAccuracy, calculateWordsPerMinute, speedTyperReducer} from '../../js/reducers/index'

describe('state change', () => {
    const initialState = {
        pastInput: [],
        words: ["it", "can", "be", "any", "words"],
        currentInput: '',
        startTime: Math.floor(Date.now() / 1000)
    }

    it('should provide the initial state', () => {
        const state = speedTyperReducer(undefined, {});
        expect(state.currentInput).to.eq(initialState.currentInput)
        expect(state.pastInput).to.eql(initialState.pastInput)
        expect(state.startTime).to.eql(initialState.startTime)
        expect(state.words).to.not.be.null;
    })

    it('should handle MOVE_TO_NEXT_WORD action', () => {
        const state = speedTyperReducer(initialState, { type: 'MOVE_TO_NEXT_WORD', payload: "bla "});
        expect(state.currentInput).to.eq('');
        expect(state.pastInput).to.eql(["bla"]);
    })

    it('should handle UPDATE_CURRENT_INPUT action', () => {
        const state = speedTyperReducer(initialState, { type: 'UPDATE_CURRENT_INPUT', payload: "bla"});
        expect(state.currentInput).to.eq('bla');
        expect(state.pastInput).to.eql(initialState.pastInput);
    })

})

describe('stats', () => {
    describe('calculate accuracy', () => {
        it('should return 50 if half of input is correct', () => {
            const state = {
                pastInput: ["word1", "word3"],
                words: ["word1", "word2", "word3"]
            }
            expect(calculateAccuracy(state)).to.eq('50')
        })
    })

    describe('calculate wpm', () => {
        it('should return 8 if half minute has passed and 4 words are in input', () => {
            const state = {
                startTime: Math.floor((Date.now() - 1000*30) / 1000),
                pastInput: ["word1", "word2", "word3", "word4"]
            }
            expect(calculateWordsPerMinute(state)).to.eq('8.00')
        })
    })

})


