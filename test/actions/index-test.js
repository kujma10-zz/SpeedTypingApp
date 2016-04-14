/**
 * Created by Kote on 4/14/2016.
 */
import * as actions from '../../js/actions'

describe('actions', () => {
    it('should create MOVE_TO_NEXT_WORD action', () => {
        const text = 'something'
        const expectedAction = {
            type: "MOVE_TO_NEXT_WORD",
            payload: text
        }
        expect(actions.moveToNextWord(text)).to.eql(expectedAction)
    })

    it('should create UPDATE_CURRENT_INPUT action', () => {
        const text = 'something'
        const expectedAction = {
            type: "UPDATE_CURRENT_INPUT",
            payload: text
        }
        expect(actions.updateCurrentInput(text)).to.eql(expectedAction)
    })
})