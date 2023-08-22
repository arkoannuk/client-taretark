import MantineThemeProvider from './theme';

import messages_en from "../compiled-lang/en.json";
import messages_ee from "../compiled-lang/ee.json";
import { IntlProvider } from 'react-intl';
import { useLanguageContext } from './contexts/LanguageContext';
import LandingPage from './routes/landingPage';
import RoomsPage from './routes/roomsPage';
import ErrorPage from './routes/errorPage';
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import ContactFaqPage from './routes/contactFaqPage';
import BookingPage from './routes/bookingPage';


const router = createBrowserRouter([
  {
    path: "/*",
    element: <Navigate to="/ee" replace />,
    errorElement: <ErrorPage />
  },
  {
    path: "/ee",
    element: <LandingPage />,
  },
  {
    path: "/en",
    element: <LandingPage />,
  },
  {
    path: "/ee/broneeri",
    element: <RoomsPage />,
  },
  {
    path: "/en/broneeri",
    element: <RoomsPage />,
  },
  {
    path: "/ee/puhkemaja",
    element: <BookingPage />,
  },
  {
    path: "/en/puhkemaja",
    element: <BookingPage />,
  },
  {
    path: "/ee/stuudio-korter",
    element: <ContactFaqPage />,
  },
  {
    path: "/en/stuudio-korter",
    element: <ContactFaqPage />,
  },
  {
    path: "/ee/kamping",
    element: <BookingPage />,
  },
  {
    path: "/en/kamping",
    element: <BookingPage />,
  },
  {
    path: "/ee/kontakt-kkk",
    element: <ContactFaqPage />,
  },
  {
    path: "/en/kontakt-kkk",
    element: <ContactFaqPage />,
  },
]);

const messages = {
  'Ee': messages_ee,
  'En': messages_en
};

function App() {
  const { selectedLabel } = useLanguageContext();
  const translatedMessages = messages[selectedLabel as 'Ee' | 'En'];

  return (
    <IntlProvider locale={navigator.language} messages={translatedMessages}>
      <MantineThemeProvider>
        <RouterProvider router={router} />
      </MantineThemeProvider>
    </IntlProvider>
  );
}

export default App;

