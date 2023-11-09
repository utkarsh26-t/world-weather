import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import Footer from './components/Footer';
import { createBrowserRouter } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import CountryList from './components/CountryList';
import Weather from './components/Weather';
import HomePage from './components/HomePage';

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Body/>,
        children: [
          {
            path: "",
            element: <HomePage/>
          },
          {
            path: "countries",
            element: <CountryList/>
          },
          {
            path: "weather",
            element: <Weather/>
          }
        ]
      }
    ]
  }
])




function App() {
  return (
    <div className="App">
      {/* <Head/> */}
      <Outlet/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
