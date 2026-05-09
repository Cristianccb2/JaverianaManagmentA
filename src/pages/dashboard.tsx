import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../hooks/redux'

import { fetchEvents } from '../features/events/eventsSlice'

import { selectFilteredEvents } from '../features/events/eventsSelector'
import EventsFilters from '../features/events/components/EventsFilters'
import EventsGrid from '../features/events/components/eventsGrid'
import EventsLoader from '../features/events/components/EventsLoader'

export default function Dashboard() {
  const dispatch = useAppDispatch()

  const events = useAppSelector(selectFilteredEvents)

  const loading = useAppSelector(state => state.events.loading)

  useEffect(() => {
    dispatch(fetchEvents())
  }, [dispatch])

  return (
    <main className="min-h-screen bg-gray-100">
      <section className="mx-auto max-w-7xl px-4 py-10">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Javeriana Lead & Events Manager
          </h1>

          <p className="mt-2 text-gray-600">
            Gestión de programas y prospectos académicos
          </p>
        </header>

        <EventsFilters />

        {loading ? (
          <EventsLoader />
        ) : (
          <EventsGrid events={events} />
        )}
      </section>
    </main>
  )
}