import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import RootLayout from "./layout/RootLayout";
import ContactLayout from "./layout/ContactLayout";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import NotFound from "./components/NotFound";
import JobLayout from "./layout/JobLayout";
import Jobs from "./pages/Jobs";
import { JobDetailsLoader, jobsLoader } from "./utilis/loadData";
import JobDetails from "./components/JobDetails";
import Error from "./components/Error";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout></RootLayout>}>
        <Route index element={<Home></Home>} />
        <Route path="products" element={<Product></Product>} />
        <Route path="about" element={<About></About>} />
        <Route path="contact" element={<ContactLayout />}>
          <Route path="info" element={<ContactInfo></ContactInfo>}></Route>
          <Route path="form" element={<ContactForm></ContactForm>}></Route>
        </Route>
        <Route
          path="jobs"
          element={<JobLayout></JobLayout>}
          errorElement={<Error></Error>}
        >
          <Route index element={<Jobs></Jobs>} loader={jobsLoader}></Route>
          <Route
            path=":id"
            element={<JobDetails></JobDetails>}
            loader={JobDetailsLoader}
          ></Route>
        </Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Route>
    )
  );
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
