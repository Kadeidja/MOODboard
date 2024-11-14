//import logo from './logo.svg';
import './App.css';
//import TestComp from './components/testComp';
import { RouterProvider } from "react-router-dom";
import { allroutersfront } from './frontroutes/allroutes';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <>
      <Toaster position='bottom-right' toastOptions={{duration:3000}}/>
    <RouterProvider router={allroutersfront}></RouterProvider>
    </>
  );
}

export default App;
