import React from 'react'
import { shallow } from 'enzyme'
import ListPost from './index'
import { checkProps, findByTestAtrr } from '../../utils';

describe('ListPost component', () => {

    describe('Check prop types', () => {
        it('Should render without warning', () => {
            const expectedProps = {
                title: 'Some title',
                desc: 'Some text'
            }
            const propsErr = checkProps(ListPost, expectedProps);
            expect(propsErr).toBeUndefined();
        });
    });

    describe('Should render', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                title: 'Some title',
                desc: 'Some desc'
            }
            wrapper = shallow(<ListPost {...props}/>);
        });

        it('Should render without errors', () => {
            const component = findByTestAtrr(wrapper, 'list-item');
            expect(component.length).toBe(1);
        });

        it('Should render title', () => {
            const component = findByTestAtrr(wrapper, 'title');
            expect(component.length).toBe(1);
        });

        it('Should render description', () => {
            const component = findByTestAtrr(wrapper, 'postDesc');
            expect(component.length).toBe(1);
        });
    });

    describe('Has no props', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                desc: 'Some desc'
            }
            wrapper = shallow(<ListPost {...props}/>);
        });

        it('Should not render', () => {
            const component = findByTestAtrr(wrapper, 'list-item');
            expect(component.length).toBe(0);
        });
    });

});