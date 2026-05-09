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
      <article className="rounded-2xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
        <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
          {event.category}
        </span>

        <h2 className="mt-4 text-xl font-semibold text-gray-800">
          {event.title}
        </h2>

        <p className="mt-3 text-gray-600">
          {event.body}
        </p>

        <button
          onClick={() => setOpen(true)}
          className="mt-6 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
        >
          Inscribirse
        </button>
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