'use strict';

import apmLogger from '../../js/middleware/ActionsPerMinuteLogger'

describe('ActionsPerMinuteLogger', () => {

    let logger, store, next, action;

    beforeEach(() => {
        logger = {log: sinon.stub()}
        store = {getState: sinon.stub()}

        store.getState.returns("some state 1")

        action = {type: 'a', payload: 1}

        next = (action) => {
            store.getState.returns("some state 2")
            return action;
        }
    })

    it("logs 12 as actions per minute when 1 action is dispatched", () => {
        apmLogger(logger)(store)(next)(action)
        expect(logger.log).to.have.been.calledWith(
            "Actions per minute: ", 12
        )
    })

    it("logs 24 as actions per minute when 2 actions are dispatched", () => {
        apmLogger(logger)(store)(next)(action)
        expect(logger.log).to.have.been.calledWith(
            "Actions per minute: ", 24
        )
    })

    it("logs 36 as actions per minute when 3 action are dispatched", () => {
        apmLogger(logger)(store)(next)(action)
        expect(logger.log).to.have.been.calledWith(
            "Actions per minute: ", 36
        )
    })


})
