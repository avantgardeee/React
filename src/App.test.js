import { render, screen } from '@testing-library/react';
import App from './App';
import SamuraiJSApp from "./App";
import ReactDOM from "react-dom";

it('renders without crashing',()=>{
  const div=document.createElement('div');
  render(<SamuraiJSApp />,div);
  ReactDOM.unmountComponentAtNode(div);
});