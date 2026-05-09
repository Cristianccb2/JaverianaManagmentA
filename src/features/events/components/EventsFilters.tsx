import { useAppDispatch, useAppSelector } from '../../../hooks/redux'

import {
  setCategory,
  setFaculty,
  setModality,
  setSearch,
} from '../eventsSlice'

export default function EventsFilters() {
  const dispatch = useAppDispatch()

  const {
    search,
    category,
    modality,
    faculty,
    items,
  } = useAppSelector(state => state.events)

  const faculties = [
    ...new Set(items.map(item => item.faculty)),
  ]

  return (
    <div className="mb-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {/* SEARCH */}
      <input
        type="text"
        placeholder="Buscar evento..."
        value={search}
        onChange={e => dispatch(setSearch(e.target.value))}
        className="
          rounded-lg
          border border-gray-300
          bg-white
          dark:bg-[#0B1224]
          text-gray-800
          dark:text-gray-200
          px-4 py-3
          outline-none
          transition
          focus:border-blue-500
        "
      />

      {/* CATEGORY */}
      <select
        value={category}
        onChange={e => dispatch(setCategory(e.target.value))}
        className="
          rounded-lg
          border border-gray-300
          bg-white
          dark:bg-[#0B1224]
          text-gray-800
          dark:text-gray-200
          px-4 py-3
          outline-none
          transition
          focus:border-blue-500
        "
      >
        <option value="Todos">Todas las categorías</option>
        <option value="Pregrado">Pregrado</option>
        <option value="Posgrado">Posgrado</option>
        <option value="Educación Continua">
          Educación Continua
        </option>
      </select>

      {/* MODALITY */}
      <select
        value={modality}
        onChange={e => dispatch(setModality(e.target.value))}
        className="
          rounded-lg
          border border-gray-300
          bg-white
          dark:bg-[#0B1224]
          text-gray-800
          dark:text-gray-200
          px-4 py-3
          outline-none
          transition
          focus:border-blue-500
        "
      >
        <option value="Todas">Todas las modalidades</option>
        <option value="Presencial">Presencial</option>
        <option value="Virtual">Virtual</option>
        <option value="Híbrido">Híbrido</option>
      </select>

      {/* FACULTY */}
      <select
        value={faculty}
        onChange={e => dispatch(setFaculty(e.target.value))}
        className="
          rounded-lg
          border border-gray-300
          bg-white
          dark:bg-[#0B1224]
          text-gray-800
          dark:text-gray-200
          px-4 py-3
          outline-none
          transition
          focus:border-blue-500
        "
      >
        <option value="Todas">Todas las facultades</option>

        {faculties.map(faculty => (
          <option
            key={faculty}
            value={faculty}
          >
            {faculty}
          </option>
        ))}
      </select>
    </div>
  )
}