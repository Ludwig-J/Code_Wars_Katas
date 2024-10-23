import {test, expect} from "vitest"
import reArrange from "./reArrange.js";


//TEST FILE

//You are given a string containing numbers and letters 
//Your task is to re-arrange the string so that the letters are sorted alphabetically and the numbers are sorted numerically
//The resulting string should contain the letters first and the numbers last
//Good Luck!

test("Arrange this!", () => {
    expect(reArrange('a,3,f,t,r,6,7,23,f,y,56,p,12,z')).toEqual("a,f,f,p,r,t,y,z,3,6,7,12,23,56")
    expect(reArrange('45,2,f,t,67,104,d,v,f,s,3,w,12')).toEqual("d,f,f,s,t,v,w,2,3,12,45,67,104");
})