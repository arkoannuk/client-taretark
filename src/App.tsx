import MantineThemeProvider from './theme';

import messages_en from "../compiled-lang/en.json";
import messages_fr from "../compiled-lang/fr.json";
import { IntlProvider } from 'react-intl';
import { useLanguageContext } from './contexts/LanguageContext';
import LandingPage from './routes/landingPage';
import RoomsPage from './routes/roomsPage';
import ErrorPage from './routes/errorPage';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import ContactFaqPage from './routes/contactFaqPage';
import BookingPage from './routes/bookingPage';

const router = createBrowserRouter([
  {
    path: "/en",
    element: <LandingPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/fr",
    element: <LandingPage />,
  },
  {
    path: "/en/rooms",
    element: <RoomsPage />,
  },
  {
    path: "/fr/rooms",
    element: <RoomsPage />,
  },
  {
    path: "/en/booking",
    element: <BookingPage />,
  },
  {
    path: "/fr/booking",
    element: <BookingPage />,
  },
  {
    path: "/en/contact-faq",
    element: <ContactFaqPage />,
  },
  {
    path: "/fr/contact-faq",
    element: <ContactFaqPage />,
  },
]);

const messages = {
  'En': messages_en,
  'Fr': messages_fr
};

function App() {
  const { selectedLabel } = useLanguageContext();
  const translatedMessages = messages[selectedLabel as 'En' | 'Fr'];

  return (
    <IntlProvider locale={navigator.language} messages={translatedMessages}>
      <MantineThemeProvider>
        <RouterProvider router={router} />
      </MantineThemeProvider>
    </IntlProvider>
  );
}

export default App;

