import { createBrowserRouter } from 'react-router-dom';
//import TestComp from '../components/testComp';
import LayoutComp from '../components/layoutcomponent';
import TestCompScnd from '../components/testscndComp';
import LogInComp from '../components/logingIncomponent';
export const allroutersfront = createBrowserRouter([
    {
      path: '/',
      element: <LogInComp />,//its for the navbar and the logo
      children: [
    {
    index: true, 
    element: <LayoutComp/>,
  },{
    path: '/home',
    element: <LogInComp />    }
    ,{
        path: '/test',
        element: <TestCompScnd />  }


]

},
]);