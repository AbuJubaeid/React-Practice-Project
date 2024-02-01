import { json, useLoaderData } from 'react-router-dom';

import EventsNavigation from '../components/EventNavigation';
import EventsList from '../components/EventsList';

function EventsPage() {
  const data = useLoaderData()
  // const events = data.events;

  return (
    <>
    <EventsNavigation/>
    <EventsList events={data.events} />
    </>
     
  );
}

export default EventsPage;

export async function loader() {
  const response = await fetch('http://localhost:8080/events');

      if (!response.ok) {
        //...
        // throw new Response (JSON.stringify({message:'could not fetch events'}, {status:500}))
        return json({message:'could not fetch events'}, {status:500})
        //json hook response object toiri kore jetir vitore data pass kora jay
      } else {
        const resData = await response.json();
        return resData;
      }
}