import {test, expect} from "vitest"
import timeConverter from "./timeConverter.js";

//Test FILE

//You are given one number as an input. this number is in seconds. 
//your function should convert the seconds to the corrresponding days,hours,minutes
//HOWEVER your output should ONLY return relevent the values . eg 
//an input of 42 should output "42 seconds"
//an input of 140 should output "2 minutes and 20 seconds"
//your output is to be a string as shown in the tests.
//Good Luck!


test("Time Converter Conundrum!", () => {
    expect(timeConverter(42)).toEqual("42 seconds");
    expect(timeConverter(140)).toEqual("2 minutes and 20 seconds");
    expect(timeConverter(1000)).toEqual("16 minutes and 40 seconds");
    expect(timeConverter(1532)).toEqual("25 minutes and 32 seconds");
    expect(timeConverter(62562)).toEqual("17 hours, 22 minutes and 42 seconds");
    expect(timeConverter(250000)).toEqual("2 days, 21 hours, 26 minutes and 40 seconds");
    expect(timeConverter(1000000)).toEqual("11 days, 13 hours, 46 minutes and 40 seconds");
    expect(timeConverter(2500000)).toEqual("28 days, 22 hours, 26 minutes and 40 seconds");
});

