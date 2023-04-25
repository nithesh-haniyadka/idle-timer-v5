import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import FirstSearchComponent from "../../src/Components/FirstSearchComponent";
import LoginNew from "./LoginPageNew";
// import { render, waitFor, screen } from "@testing-library/react";
// import axios from 'axios';


import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('renders <FirstSearchComponent />', () => {

  it('should pass shallow snapshot test', () => {
    const wrapper = shallow(<FirstSearchComponent />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should pass shallow snapshot test1',async () => {
    render(<FirstSearchComponent/>);
    await waitFor(()=>{
      screen.getByText("blue pant")
    })
  });

  it('should pass shallow snapshot test2',async () => {
    render(<FirstSearchComponent/>);
    await waitFor(()=>{
      screen.getByText("blue shirt")
    })
  });

  it('should pass shallow snapshot test3',async () => {
    render(<FirstSearchComponent/>);
    await waitFor(()=>{
      screen.getByText("black shoes")
    })
  });

  it('should pass shallow snapshot test4',async () => {
    render(<FirstSearchComponent/>);
    await waitFor(()=>{
      screen.getByText("brown shoes")
    })
  });

  it('should pass shallow snapshot test5',async () => {
    render(<FirstSearchComponent/>);
    await waitFor(()=>{
      screen.getByText("white pant")
    })
  });
  it('should pass shallow snapshot test6',async () => {
    render(<FirstSearchComponent/>);
    await waitFor(()=>{
      screen.getByText("white shoes")
    })
  });



});

//test block


