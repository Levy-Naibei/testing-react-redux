import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAtrr, checkProps } from '../../utils'
import GlobalButton from './index'

describe('GlobalButton button', () => {
    describe('Check props', () => {
        it('Should not throw warning', () => {
            const expectedProps = {
                buttonText: 'button text',
                emitEvent: () => {

                }
            };
            const propsErr = checkProps(GlobalButton, expectedProps);
            expect(propsErr).toBeUndefined();
        });
    });

    describe('Has props', () => {
        let wrapper;
        const setUp = (props={}) => {
            const component = shallow(<GlobalButton {...props}/>);
            return component;
        };

        beforeEach(() => {
            const props = {
                buttonText: 'Text',
                emitEvent: () => {}
            };
            wrapper = setUp(props);
        });

        it('Should render a button', () => {
            const button = findByTestAtrr(wrapper, 'btn');
            expect(button.length).toBe(1);
        });
    });
});