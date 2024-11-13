import { createBrowserRouter } from 'react-router-dom';
import TestComp from '../components/testComp';
import LayoutComp from '../components/layoutcomponent';
export const allroutersfront = createBrowserRouter([
    {
      path: '/',
      element: <LayoutComp />,//its for the navbar and the logo
      children: [
    {
    index: true, 
    element: <LayoutComp/>,
  },{
    path: '/test',
    element: <TestComp />    }]

},
]);