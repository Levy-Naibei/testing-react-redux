import React from 'react';
import { shallow } from 'enzyme'
import Headline from './index';
import { findByTestAtrr, checkProps } from '../../utils'

const setUp = (props = {}) => {
    const component = shallow(<Headline {...props}/>);
    return component;
}

describe('Headeline component', () => {
    describe('Checking PropTypes', ()=> {
        it('Should not throw a warning', () => {
            const expectedProps = {
                header: 'Test header',
                desc: 'Test desc'
            };

            const propsErr = checkProps(Headline, expectedProps);
            expect(propsErr).toBeUndefined();
        });
    });

    describe('Has props', () => {
        let wrapper;

        beforeEach(() => {
            const props = {
                header: 'Test header',
                desc: 'Test description'
            };
            wrapper = setUp(props);
        });

        it('Should render without errors', () => {
            const component = findByTestAtrr(wrapper, 'app-headline');
            expect(component.length).toBe(1);
        });

        it('Should render h3', () => {
            const h3 = findByTestAtrr(wrapper, 'header');
            expect(h3.length).toBe(1);
        });

        it('Should render description', () => {
            const par = findByTestAtrr(wrapper, 'desc');
            expect(par.length).toBe(1);
        });
    });

    describe('Has no props', () => {

        let wrapper;

        beforeEach(() => {
            wrapper = setUp();
        });

        it('Should not render a component', () => {
            const component = findByTestAtrr(wrapper, 'app-headline');
            expect(component.length).toBe(0);
        });
    });
});