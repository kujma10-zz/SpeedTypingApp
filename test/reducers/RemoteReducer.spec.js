/**
 * Created by Kote on 4/28/2016.
 */
'use strict';

import reduce from '../../js/reducers/RemoteReducer'

describe('RemoteReducer', () => {

    const mockGame = {
        pastInput: ["w1","w2"],
        words: ["w1", "w2", "w3"],
        gameInProgress: true,
        bestWordsPerMinute: 0,
        bestAccuracy: 0
    }

    it('returns initial game object', () => {
        const initialState = reduce(undefined, {})
        expect(initialState).to.eql({
            game: {
                pastInput: [],
                words: [],
                gameInProgress: false,
                bestWordsPerMinute: 0,
                bestAccuracy: 0,
            }
        })
    })

    describe('RECEIVED_REMOTE_PLAYER_GAME', () => {
        it('sets received game object', () => {
            let action = {type: 'RECEIVED_REMOTE_PLAYER_GAME', payload: {game: mockGame}}
            const newState = reduce(undefined, action)
            expect(newState.game).to.deep.equal(mockGame)
        });
    });


});
