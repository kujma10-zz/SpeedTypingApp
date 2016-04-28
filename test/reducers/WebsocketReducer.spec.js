/**
 * Created by Kote on 4/28/2016.
 */
'use strict';

import reduce from '../../js/reducers/WebsocketReducer'

describe('WebsocketReducer', () => {

    it('is not conencted initially', () => {
        const initialState = reduce(undefined, {})
        expect(initialState).to.eql({
            connected: false
        })
    })

    describe('WEBSOCKET_CONNECTION_ESTABLISHED', () => {
        it('sets connected to true', () => {
            let action = {type: 'WEBSOCKET_CONNECTION_ESTABLISHED', payload: {}}
            const newState = reduce(undefined, action)
            expect(newState.connected).to.eq(true)
        });
    });

    describe('WEBSOCKET_CONNECTION_DROPPED', () => {
        it('sets connected to false', () => {
            let action = {type: 'WEBSOCKET_CONNECTION_DROPPED', payload: {}}
            const newState = reduce({connected: true}, action)
            expect(newState.connected).to.eq(false)
        });
    });

    describe('WEBSOCKET_CONNECTION_UNAVAILABLE', () => {
        it('sets connected to false', () => {
            let action = {type: 'WEBSOCKET_CONNECTION_UNAVAILABLE', payload: {}}
            const newState = reduce({connected: true}, action)
            expect(newState.connected).to.eq(false)
        });
    });

});
