import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing pages for routing.
import NotFound from "pages/NotFound";

// Lazy loading other components for better performance.
const AccountforPitch = React.lazy(() => import("pages/AccountforPitch"));
const Imprint = React.lazy(() => import("pages/Imprint"));
const Product = React.lazy(() => import("pages/Product"));
const FloorPlan = React.lazy(() => import("pages/FloorPlan"));
const AboutUs = React.lazy(() => import("pages/AboutUs"));
const Workflow = React.lazy(() => import("pages/Workflow"));
const Home = React.lazy(() => import("pages/Home"));

// ProjectRoutes component sets up the routing for the application using React Router.
const ProjectRoutes = () => {
  return (

    // React.Suspense is used to wrap lazy-loaded components. The fallback is displayed while the components are being loaded.
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
         {/* Routes component to define various routes */}
        <Routes>
          {/* Route for home page */}
          <Route path="/" element={<Home />} />
          {/* Route for NotFound page, '*' is a wildcard for any path that is not defined */}
          <Route path="*" element={<NotFound />} /> 
          {/* Routes for other pages in the application */}      
          <Route path="/workflow" element={<Workflow />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/floorplan" element={<FloorPlan />} />
          <Route path="/product" element={<Product />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="/accountforpitch" element={<AccountforPitch />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes; // Exporting ProjectRoutes for use in the application.
