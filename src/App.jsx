import "./App.css";
import Body from "./components/Body";
import MainContainer from "./components/MainContainer";
import { Provider } from "react-redux";
import store from "./store/Store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchVideoPage from "./components/WatchVideoPage";
import ResultsVideoPage from "./components/ResultsVideoPage";
import PageNotFound from "./components/PageNotFound";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchVideoPage />,
      },
      {
        path: "results",
        element: <ResultsVideoPage />,
      },
    ],
    // This children will go to Outlet under Body's component
    // We will display MainContainer or WatchVideoPage based on a condition
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
