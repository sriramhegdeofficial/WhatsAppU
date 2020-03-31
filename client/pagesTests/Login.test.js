import React from 'react';
import {shallow} from 'enzyme';
import Login from './../pages/Login';


describe("Login page tests", () => {

    it("should render properly", () => {
        const component = shallow(<Login />);
        const wrapper = component.find('.container');
        expect(wrapper.length).toBe(1);
    });
    
});


