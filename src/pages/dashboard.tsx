import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../hooks/redux'

import { fetchEvents } from '../features/events/eventsSlice'

import { selectFilteredEvents } from '../features/events/eventsSelector'
import EventsFilters from '../features/events/components/EventsFilters'
import EventsGrid from '../features/events/components/EventsGrid'
import EventsLoader from '../features/events/components/EventsLoader'

export default function Dashboard() {
  const dispatch = useAppDispatch()

  const events = useAppSelector(selectFilteredEvents)

  const loading = useAppSelector(state => state.events.loading)

  useEffect(() => {
    dispatch(fetchEvents())
  }, [dispatch])

  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-7xl px-4 py-10">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-blue-950 dark:text-gray-400 flex justify-center mb-6">
            GESTOR DE EVENTOS Y LEADS
          </h1>

          <p className="mt-2 text-gray-600 flex justify-center dark:text-gray-400">
            Eventos y prospectos academicos a un solo click
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