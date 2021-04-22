import React from "react";
import renderer from "react-test-renderer";
import AppText from "./components/AppText";
import AppCard from "./components/AppCard";

test("trivially true", () =>{
	expect(1).toBe(1);
});

test("trivially false", () => {
	expect(2).toBe(2);
});

test("AppText will render", () => {
	const json = renderer.create(<AppText />).toJSON();
	//console.log(json);
	expect(json.props.style[0].fontSize).toBe(20);
	expect(json.props.style[0].fontFamily).toBe("Avenir-Roman");
	
});

test("AppText contain text", () => {
	const json = renderer.create(<AppText>There is something here</AppText>).toJSON();
	expect(json.props.style[0].fontSize).toBe(20);
	expect(json.props.style[0].fontFamily).toBe("Avenir-Roman");
	expect(json.children.includes("There is something here"));
});

test("AppCard will render", () => {
    const json = renderer.create(<AppCard/>).toJSON();
    //console.log(json.props);
    expect(json.props.style.borderRadius).toBe(20);
});

test('renders correctly', () => {
  const tree = renderer.create(<AppCard />).toJSON();
  expect(tree).toMatchSnapshot();
});