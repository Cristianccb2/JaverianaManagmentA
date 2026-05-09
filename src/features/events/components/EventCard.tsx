import { useState } from 'react'
import type { EventItem } from '../types'
import Modal from '../../../components/Modal'
import LeadForm from '../../leads/components/LeadForm'

interface Props {
  event: EventItem
}

export default function EventCard({ event }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <article className="overflow-hidden rounded-2xl bg-white shadow-xl transition hover:-translate-y-1 hover:shadow-xl">
        <img
            src={event.image}
            alt={event.title}
            className="h-52 w-full object-cover"
        />

        <div className="p-6">
            <div className="flex items-center justify-between">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                {event.category}
            </span>

            <span className="text-sm text-gray-500">
                {event.modality}
            </span>
            </div>

            <h2 className="mt-4 text-xl font-semibold text-gray-800">
            {event.title}
            </h2>

            <p className="mt-3 text-gray-600">
            {event.description}
            </p>

            <div className="mt-4 space-y-1 text-sm text-gray-500">
            <p>
                <strong>Duración:</strong> {event.duration}
            </p>

            <p>
                <strong>Facultad:</strong> {event.faculty}
            </p>
            </div>

            <button
            onClick={() => setOpen(true)}
            className="mt-6 w-full rounded-lg bg-blue-600 px-4 py-3 font-medium text-white transition hover:bg-blue-950 cursor-pointer"
            >
            Inscribirse
            </button>
        </div>
    </article>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
      >
        <LeadForm
          program={event.title}
          onClose={() => setOpen(false)}
        />
      </Modal>
    </>
  )
}