import commentsReducer from 'reducers/comments'
import { SAVE_COMMENT} from "actions/types"

it('should handel actions of type SAVE_COMMENT', function () {
  const action = {
    type: SAVE_COMMENT,
    payload: "New Comment"
  }

  const newState = commentsReducer([], action)

  expect(newState).toEqual(['New Comment'])
});

it('should handle action of unknown type', function () {
  const newState = commentsReducer([], {})

  expect(newState).toEqual([])
});