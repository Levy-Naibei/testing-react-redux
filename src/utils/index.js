import checkPropTypes from 'check-prop-types'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/index'
import { middlewares } from './../store/store'

export const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
}

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(
        component.PropTypes,
        expectedProps,
        'props',
        component.name
    )
    return propsErr;
}

export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(rootReducer, initialState);
}