import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import VendorDetails from "./screens/Vendor/VendorDetails";
import ListingManagement from "./screens/Vendor/VendorListing";
import DashboardLayout from "./components/Layout/DashboardLayout";
import { ThemeProvider } from "./contexts/Theme";

function App() {
  const routes = [
    { path: "/login", element: <Login />, title: "Login" },
    { path: "/home", element: <Home />, title: "Home" },
    {
      path: "/listing-management",
      element: <ListingManagement />,
      title: "Vendor Listing",
    },
    {
      path: "/vendor/details/:id",
      element: <VendorDetails />,
      title: "Vendor Details",
    },
    { path: "*", element: <NotFound />, title: "Not Found" },
  ];

  return (
    <>
      <ThemeProvider>
        <Routes>
          {routes.map((route) => {
            return (
              <Route
                path={route.path}
                element={
                  <DashboardLayout title={route.title}>
                    {route.element}
                  </DashboardLayout>
                }
              />
            );
          })}
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
