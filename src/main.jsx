import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/ErrorPage.jsx";
import Home from "./routes/Home.jsx";
import Community from "./routes/Community.jsx";
import Login from "./routes/Login.jsx";
import UserProfile from "./routes/User-profile.jsx";
import CommunityName from "./routes/create-community/community-name.jsx";
import CommunityDescription from "./routes/create-community/community-description.jsx";
import CommunityInterest from "./routes/create-community/community-interrest.jsx";
import CommunityReview from "./routes/create-community/community-review.jsx";
import CommunityAvatar from "./routes/create-community/community-avatar.jsx";
import SignUp from "./routes/SignUp.jsx";
import Feed from "./routes/Feed.jsx";
import Profile from "./routes/Profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/user-profile",
        element: <UserProfile />,
      },
      {
        path: "/create-community-name",
        element: <CommunityName />,
      },
      {
        path: "/create-community-description",
        element: <CommunityDescription />,
      },
      {
        path: "/create-community-interest",
        element: <CommunityInterest />,
      },
      {
        path: "/create-community-review",
        element: <CommunityReview />,
      },
      {
        path: "/create-community-avatar",
        element: <CommunityAvatar />,
        // element: <CommunityReview />,
      },
      {
        path: "/feed",
        element: <Feed />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/community",
        element: <Community />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
