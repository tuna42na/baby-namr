import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

export function setup() {
  Enzyme.configure({ adapter: new Adapter() });
}
