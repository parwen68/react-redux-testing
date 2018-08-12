import { saveComment} from "actions";
import { SAVE_COMMENT} from "actions/types";

describe('saveComment', function () {
  it('should have the correct type', function () {
    const action = saveComment()

    expect(action.type).toEqual(SAVE_COMMENT)
  });

  it('should have correct payload', function () {
    const action = saveComment("New Comment")

    expect(action.payload).toEqual("New Comment")
  });
});