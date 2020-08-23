import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import RootReducer from '../reducers'

const middlewares = ReduxThunk;
const createStoreWithMiddleWare = applyMiddleware(...middlewares)(createStore);
export const store = createStoreWithMiddleWare(RootReducer);