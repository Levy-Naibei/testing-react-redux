import React from 'react'
import { shallow } from 'enzyme'
import Header from './index'
import { findByTestAtrr } from '../../utils'

const setUp = (props = {}) => {
    const component = shallow(<Header {...props} />);
    return component;
}

describe('Header Component', () => {

    beforeEach(() => {
        component = setUp();
    })

    let component;
    
    it('Should render without errors', () => {
        const wrapper = findByTestAtrr(component, 'app-header');
        expect(wrapper.length).toBe(1);
        // expect(wrapper).toMatchSnapshot();
    });
});