import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { useState } from 'react';
import MainLayout from './layout.jsx/MainLayout';
import LoadingSpinner from './components/spinner/LoadingSpinner';
import Home from '../src/pages/Home';
import ErrorPage from '../src/pages/ErrorPage';
import About from './pages/About';
import Classes from './pages/Classes';
import Blog from './pages/Blog';
import Contact from './pages/Contacts';
import {MyProvider} from './contexts/MyContext';
import './App.css';
import Kindargaten from './pages/Kindargaten';
import Primary from './pages/Primary';
import Admission from './pages/Admission';
import Portal from './pages/Portal';
import ApplicationForm from './pages/ApplicationForm';
import Activities from './pages/Activities';
import Facilities from './pages/Facilities';
import Hostel from './pages/Hostel';
import Secondary from './pages/Secondary';
import Faq from './pages/Faq';
import Contacts from './pages/Contacts';
import PostDetail from './pages/PostDetail';
import Payment from './pages/Payment';
import Login from './pages/Payment';
import DownloadForm from './pages/DownloadForm';
import { useEffect } from 'react';

function App() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(()=>{
    const allImage = document.images;
    const totalImages = allImage.length;
    let imageLoaded = 0;

    const checkImageLoaded = () =>{
      imageLoaded++;
      if(imageLoaded == allImage){
        setIsPageLoaded(true)
      }
    }
    
    //if there are images, check if each one is loaded
    if(totalImages > 0){
       for(let i = 0; i < totalImages; i++){
         if(allImage[i].complete){
           imageLoaded++
         }else{
            allImage[i].addEventListener('load', checkImageLoaded)
            allImage[i].addEventListener('error', checkImageLoaded)
         }
       }
    }else{
       //if no images exist, mark page as loaded immediately
       setIsPageLoaded(true)
    }

    //cleanup: remove event listeners when the component unmounts

    return () =>{
      for(let i = 0; i < totalImages; i++){
        allImage[i].removeEventListener('load', checkImageLoaded);
        allImage[i].removeEventListener('load', checkImageLoaded);
      }
    }

  }, [])
 const router = createBrowserRouter([
  {
    path :"/",
    element: <MainLayout/>,
    errorElement: <ErrorPage/>,
    children:[
      {index: true, element: <Home/>},
      {path: 'about', element: <About/>},
      {path: 'classes', element: <Classes/>},
      {path: 'blog', element: <Blog/>},
      {path: 'kindagarten', element: <Kindargaten/>},
      {path: 'primary', element: <Primary/>},
      {path: 'secondary', element: <Secondary/>},
      {path: 'admission', element: <Admission/>},
      {path: 'portal', element: <Portal/>},
      {path: 'application', element: <ApplicationForm/>},
      {path: 'activities', element: <Activities/>},
      {path: 'facilities', element: <Facilities/>},
      {path: 'hostel', element: <Hostel/>}, 
      {path: 'faq', element: <Faq/>},
      {path: 'form', element: <ApplicationForm/>},
      {path: 'contacts', element: <Contacts/>},
      {path: '/blog/:id', element: <PostDetail/>},
      {path: '/payment', element: <Payment/>},
      {path: '/login', element: <Login/>},
      {path: '/download_form', element: <DownloadForm/>},
       
    ] 
  }
 ])

  return (
    <MyProvider>
      {!isPageLoaded && <LoadingSpinner/>}
      {isPageLoaded && <RouterProvider router ={router}/> }
    </MyProvider>
  )
}
export default App;
