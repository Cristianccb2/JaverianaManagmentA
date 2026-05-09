import { useAppDispatch, useAppSelector } from '../../../hooks/redux'

import {
  setCategory,
  setSearch,
} from '../eventsSlice'

export default function EventsFilters() {
  const dispatch = useAppDispatch()

  const search = useAppSelector(state => state.events.search)

  const category = useAppSelector(state => state.events.category)

  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row">
      <input
        type="text"
        placeholder="Buscar programa..."
        value={search}
        onChange={e => dispatch(setSearch(e.target.value))}
        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500"
      />

      <select
        value={category}
        onChange={e => dispatch(setCategory(e.target.value))}
        className="rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500"
      >
        <option value="Todos">Todos</option>
        <option value="Pregrado">Pregrado</option>
        <option value="Posgrado">Posgrado</option>
        <option value="Educación Continua">
          Educación Continua
        </option>
      </select>
    </div>
  )
}