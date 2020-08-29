import * as actions from '../src/redux/actions'
import * as types from '../src/redux/actionTypes'

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'Finish docs'
    const expectedAction = {
    "payload": {
      "content": text,
      "id": 1,
    },
    "type": "ADD_TODO"
    }
    expect(actions.addTodo(text)).toEqual(expectedAction)
  })
})