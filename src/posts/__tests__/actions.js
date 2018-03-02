import * as fromActions from '../actions';

describe('posts actions', () => {
  it('should create VOTE_POST.REQUEST action', () => {
    const postId = 4525;
    const weight = 525;

    const expected = { type: fromActions.VOTE_POST.REQUEST, meta: { postId, weight } };
    const actual = fromActions.votePost(postId, weight);

    expect(actual).toEqual(expected);
  });

  it('should create VOTE_POST.REQUEST action with default weight', () => {
    const postId = 4525;

    const expected = { type: fromActions.VOTE_POST.REQUEST, meta: { postId, weight: 10000 } };
    const actual = fromActions.votePost(postId);

    expect(actual).toEqual(expected);
  });

  it('should create GET_POST_REQUEST action', () => {
    const author = 'sekhmet';
    const permlink = 'my-post';

    const expected = {
      type: fromActions.GET_POST.REQUEST,
      meta: { author, permlink, refresh: false },
    };
    const actual = fromActions.getPost(author, permlink);

    expect(actual).toEqual(expected);
  });

  it('should create GET_POST_SUCCESS action', () => {
    const author = 'sekhmet';
    const permlink = 'my-post';
    const payload = {
      id: 4214,
      body: 'Hello!',
    };

    const expected = {
      type: fromActions.GET_POST.SUCCESS,
      payload,
      meta: { author, permlink, refresh: false },
    };
    const actual = fromActions.getPostSuccess(payload, author, permlink);

    expect(actual).toEqual(expected);
  });
});