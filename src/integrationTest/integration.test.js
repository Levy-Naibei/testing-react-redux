import moxios from 'moxios'
import { fetchPosts } from './../actions/index'
import { testStore } from './../utils/index'

describe('fetchPosts action', () => {
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test('Should update correctly', () => {
        const expectedState = [
            {
                title: 'Title 1',
                body: 'Description 1'
            },
            {
                title: 'Title 2',
                body: 'Description 2'
            },
        ];

        const store = testStore();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                respond: expectedState
            });
        });
        return store.dispatch(fetchPosts())
        .then(() => {
            const newState = store.getState();
            expectedState(newState.posts).toBe(expectedState);
        })
        .catch(err => {
            console.log(err);
        })
    });
});