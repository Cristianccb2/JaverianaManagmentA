import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../hooks/redux'

import { fetchEvents } from '../features/events/eventsSlice'
import { selectFilteredEvents } from '../features/events/eventsSelector'

import EventsFilters from '../features/events/components/EventsFilters'
import EventsGrid from '../features/events/components/EventsGrid'
import EventsLoader from '../features/events/components/EventsLoader'

import { getLeadsFromStorage } from '../utils/localstorage'

export default function Dashboard() {
  const dispatch = useAppDispatch()

  const events = useAppSelector(selectFilteredEvents)
  const loading = useAppSelector(state => state.events.loading)

  const leads = getLeadsFromStorage()

  useEffect(() => {
    dispatch(fetchEvents())
  }, [dispatch])

  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-7xl px-4 py-10">

        {/* HEADER */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-blue-950 dark:text-gray-400 flex justify-center mb-6">
            GESTOR DE EVENTOS Y LEADS
          </h1>

          <p className="mt-2 text-gray-600 flex justify-center dark:text-gray-400">
            Eventos y prospectos académicos a un solo click
          </p>
        </header>

        {/* FILTERS */}
        <EventsFilters />

        {/* EVENTS */}
        {loading ? (
          <EventsLoader />
        ) : (
          <EventsGrid events={events} />
        )}

        {/* LEADS SECTION */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            Leads guardados
          </h2>

          {leads.length === 0 ? (
            <p className="text-gray-500">
              No hay leads registrados
            </p>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {leads.map((lead, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-[#0B1224]"
                >
                  <p>
                    <strong>Nombre:</strong> {lead.fullName}
                  </p>
                  <p>
                    <strong>Email:</strong> {lead.email}
                  </p>
                  <p>
                    <strong>Programa:</strong> {lead.program}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

      </section>
    </main>
  )
}