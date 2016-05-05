/**
 * Created by Kote on 5/5/2016.
 */
import {keyPressed} from '../../js/actions/GlobalKeys'


describe('setCurrentInput', () => {
    it('should create SET_CURRENT_INPUT action', () => {
        expect(keyPressed('u')).to.deep.eq({
            type: 'SET_CURRENT_INPUT',
            payload: {key: "u"}
        })
    })
})