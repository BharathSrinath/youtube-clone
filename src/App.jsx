import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import MainContainer from './components/MainContainer';
import { Provider } from 'react-redux';
import store from './store/Store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WatchVideoPage from './components/WatchVideoPage';

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {
      path: "/",
      element: <MainContainer />
    },
    {
      path: "watch",
      element: <WatchVideoPage/>
    }
  ]
  // This children will go to Outlet under Body's component
  // We will display MainContainer or WatchVideoPage based on a condition
}])

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
