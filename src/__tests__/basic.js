import React from 'react';
import {shallow} from 'enzyme';
import App from '../App';
describe("Project",()=>{
    it("should run this test",()=>{
        expect(true).toEqual(true);
    })
});

describe("App",()=>{
    it("should render",()=>{
        var wrapper = shallow(<App/>);
        expect(wrapper).not.toBeNull();
    });
});