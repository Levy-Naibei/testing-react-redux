import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import { findByTestAtrr, testStore } from './utils'

const setUp = (initialState) => {
    const store = testStore(initialState);
    const component = shallow(<App store={store} />).childAt(0).dive();
    //console.log(component.debug());
    return component;
};

describe('App component', () => {
    let wrapper;

    beforeEach(() => {
        const initialState = [
            {title: 'Some title 1', body: 'Some text 1' },
            {title: 'Some title 2', body: 'Some text 3' } 
        ];

        wrapper = setUp(initialState);
    });

    it('Should render without errors', () => {
        const rendererdComp = findByTestAtrr(wrapper, 'app');
        expect(rendererdComp.length).toBe(1);
    });

});

