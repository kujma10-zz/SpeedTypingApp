/**
 * Created by Kote on 4/21/2016.
 */
'use strict';

import reduce from '../../js/reducers/WordsFetchReducer'

describe('FetchReducer', () => {

    it('is not in progress initially', () => {
        const initialState = reduce(undefined, {})
        expect(initialState).to.eql({
            wordsFetchInProgress: false
        })
    })

    describe('WORDS_FETCH_REQUESTED', () => {
        it('sets fetching to be in progress', () => {
            let action = {type: 'WORDS_FETCH_REQUESTED', payload: {}}
            const newState = reduce(undefined, action)
            expect(newState.wordsFetchInProgress).to.eq(true)
        });
    });

    describe('WORDS_FETCH_STOPPED', () => {
        it('sets fetching to be not in progress', () => {
            let action = {type: 'WORDS_FETCH_STOPPED', payload: {}}
            const newState = reduce({wordsFetchInProgress: true}, action)
            expect(newState.wordsFetchInProgress).to.eq(false)
        });
    });

});
