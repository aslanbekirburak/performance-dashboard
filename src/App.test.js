import { shallow } from "enzyme";
import DrawGraphics from './components/drawGraphics';
import App from "./App";

it("renders without crashing App", () => {
  shallow(<App />);
});

describe('App', () => {
  it('should render App', () => {
    const component = shallow(<App />);
  
    expect(component).toMatchSnapshot();
  });
});

describe('DrawGraphics', () => {
  it('should render DrawGraphics', () => {
    const component = shallow(<DrawGraphics />);
  
    expect(component).toMatchSnapshot();
  });
});