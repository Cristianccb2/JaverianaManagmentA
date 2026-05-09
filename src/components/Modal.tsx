import type { ReactNode } from 'react'

interface Props {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

export default function Modal({
  isOpen,
  onClose,
  children,
}: Props) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
        <div className="mb-4 flex justify-end">
          <button
            onClick={onClose}
            className="text-2xl text-gray-500"
          >
            ×
          </button>
        </div>

        {children}
      </div>
    </div>
  )
}