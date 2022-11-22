import Applicaion from "./RKS_test/Applicaion";
import Dashboard from "./RKS_test/Dashboard";

import {
  BrowserRouter ,
  Route,
  Routes,
} from "react-router-dom";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/"element={<Applicaion/>}></Route>
      <Route path="/Dashboard"element={<Dashboard/>}>
        </Route>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App;
