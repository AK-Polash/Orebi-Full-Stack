import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import MatchOtp from "./pages/MatchOtp";
import ResetPassword from "./pages/ResetPassword";
import UserVerification from "./pages/UserVerification";

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/matchOtp" element={<MatchOtp />} />
      <Route path="/resetPassword" element={<ResetPassword />} />
      <Route path="/verify" element={<UserVerification />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
