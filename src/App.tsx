import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Leaves = lazy(() => import("./pages/Leaves"));
const Customers = lazy(() => import("./pages/Customers"));



const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={<Dashboard />}
          />

          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/customer" element={<Customers />} />
          <Route path="/admin/Leaves" element={<Leaves />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
