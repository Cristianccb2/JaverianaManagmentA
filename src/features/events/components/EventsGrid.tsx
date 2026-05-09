import type { EventItem } from '../types'
import EventCard from './EventCard'

interface Props {
  events: EventItem[]
}

export default function EventsGrid({ events }: Props) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {events.map(event => (
        <EventCard
          key={event.id}
          event={event}
        />
      ))}
    </div>
  )
}