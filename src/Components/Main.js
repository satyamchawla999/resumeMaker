import { BrowserRouter as Router,Routes,Route,Navigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import LogIn from "./LogIn";
import DashBoard from "./DashBoard";
import { Form,Otp } from "./subComponents";

const Page404 = ()=> {
  return <h1>404 not found</h1>
}

const publicRoutes = [
  {
    element:<LogIn/>,
    path:"/"
  }
];

const privateRoutes = [
  {
    element:<DashBoard/>,
    path:"/dashboard"
  },
  {
    element:<Otp/>,
    path:"/Otp"
  },
  {
    element:<Form/>,
    path:"/form"
  }
];

function PrivateRoute({children}) {
  const user = useSelector((state)=>state.user);
  return user ? <>{children}</> : <Navigate to="/"/>
}


const Main = ()=> {

  
  return (
    <div className="main">

      <Router>
        <Routes>
          {publicRoutes.map((route,index)=>(<Route key={index} path={route.path} element={route.element} />))},
          {privateRoutes.map((route,index)=>(<Route key={index} path={route.path} element={<PrivateRoute>{route.element}</PrivateRoute>} />))},
          <Route path="*" element={<Page404/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default Main;
