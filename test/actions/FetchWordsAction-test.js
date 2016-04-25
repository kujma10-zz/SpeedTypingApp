import {fetchWords, stopWordsFetch} from '../../js/actions'

let xhr, requests;

describe('fetchPost', () => {
  beforeEach(() => {
    global.XMLHttpRequest = xhr = sinon.useFakeXMLHttpRequest();

    requests = [];
    xhr.onCreate = (xhr) => requests.push(xhr)
  })
  afterEach(() => {
    xhr.restore()
  })

  it('adds words when fetched and fetching in progress', () => {
    let dispatch = sinon.stub()
    let getState = () => {
      return { fetching: {wordsFetchInProgress: true}}
    }
    fetchWords()(dispatch, getState)
    requests[0].respond(200, {}, '["word1", "word2"]')

    expect(dispatch).to.have.been.calledWith({
      type: 'ADD_WORDS',
      payload: {
        words: ["word1", "word2"]
      }
    })
  })

  it('does not add words when fetching not in progress', () => {
    let dispatch = sinon.stub()
    let getState = () => {
      return { fetching: {wordsFetchInProgress: false}}
    }
    fetchWords()(dispatch, getState)
    requests[0].respond(200, {}, '["word1", "word2"]')

    expect(dispatch).not.to.have.been.calledWith(sinon.match({type: 'ADD_WORDS'}))
  })

})
