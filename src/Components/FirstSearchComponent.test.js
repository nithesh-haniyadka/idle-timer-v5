import { render, fireEvent, screen } from "@testing-library/react";
import FirstSearchComponent from "../../src/Components/FirstSearchComponent";
import SecondSearchComponent from "../Components/SecondSearchComponent";
import LoginNew from "./LoginPageNew";


import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('renders <FirstSearchComponent />', () => {
  it('should pass shallow snapshot test', () => {
    const wrapper = shallow(<FirstSearchComponent />);
    expect(wrapper).toMatchSnapshot();
  });
  it('renders SecondSearchComponent', () => {
    const wrapper = shallow(<SecondSearchComponent />);
    expect(wrapper).toMatchSnapshot();
  });




});

//test block
test("Test FirstSearchComponent", () => {
// render the component on virtual dom
render(<FirstSearchComponent />);



// //select the elements you want to interact with
// // const counter = screen.getByTestId("counter");
// // const incrementBtn = screen.getByTestId("increment");

// // //interact with those elements
// // fireEvent.click(incrementBtn);

// // //assert the expected result
// // expect(counter).toHaveTextContent("1");
});