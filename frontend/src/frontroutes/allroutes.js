import { createBrowserRouter } from 'react-router-dom';
//import TestComp from '../components/testComp';
import LayoutComp from '../components/layoutcomponent';
import TestCompScnd from '../components/testscndComp';
import Homepages from '../components/homecomponent';
//import LandingComp from '../components/landingcomponent';
import SubscriptionComp from '../components/subscriptioncomponent';
//import { Toaster } from 'react-hot-toast';
import LogInComp from '../components/logingIncomponent';
//import LogInComp from '../components/logingIncomponent';
export const allroutersfront = createBrowserRouter([
    {
      path: '/',
      element: <SubscriptionComp />,//its for the navbar and the logo
      children: [
    {
    index: true, 
    element: 
    <>
    <LayoutComp/>
    </>,
  },{
    path: '/home',
    element: <Homepages />    }
    ,{
        path: '/test',
        element: <TestCompScnd />  },
    {
          path: '/login',
          element: <LogInComp />  }


]

},
]);