import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { action as manipulateAction } from './components/EventForm.js';
import EditEventPage from './pages/EditEvent';
import ErrorPage from './pages/Error';
import EventsPage, { loader as eventsLoader } from './pages/Event';
import EventDetailPage, {
  action as eventDeleteAction,
  loader as eventDetailLoader
} from './pages/EventDetail';
import HomePage from './pages/Home';
import NewEventPage from './pages/NewEvent';
import Root from './pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        // element: <RootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action:eventDeleteAction,
              },
              { path: 'edit', 
              element: <EditEventPage />, 
              action:manipulateAction },
            ],
          },
          {path: 'new', 
          element: <NewEventPage />, 
          action: manipulateAction },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;