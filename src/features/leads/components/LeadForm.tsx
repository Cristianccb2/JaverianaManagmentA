import { z } from 'zod'

import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { v4 as uuid } from 'uuid'

import { useAppDispatch } from '../../../hooks/redux'

import { addLead } from '../leadsSlice'

import { normalizeText } from '../../../utils/normalize'

const schema = z.object({
  fullName: z
    .string()
    .min(3, 'El nombre es obligatorio'),

  email: z
    .string()
    .email('Correo inválido')
    .refine(
      email => email.endsWith('@javeriana.edu.co'),
      'Debe usar dominio @javeriana.edu.co',
    ),
})

type FormData = z.infer<typeof schema>

interface Props {
  program: string
  onClose: () => void
}

export default function LeadForm({
  program,
  onClose,
}: Props) {
  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: FormData) => {
    dispatch(
      addLead({
        id: uuid(),

        fullName: normalizeText(data.fullName),

        email: data.email.trim().toLowerCase(),

        program,

        createdAt: new Date().toISOString(),
      }),
    )

    alert('Lead registrado exitosamente')

    onClose()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
    >
      <h2 className="text-2xl font-bold text-gray-800">
        Inscripción
      </h2>

      <div>
        <input
          type="text"
          placeholder="Nombre completo"
          {...register('fullName')}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
        />

        {errors.fullName && (
          <p className="mt-1 text-sm text-red-500">
            {errors.fullName.message}
          </p>
        )}
      </div>

      <div>
        <input
          type="email"
          placeholder="Correo institucional"
          {...register('email')}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
        />

        {errors.email && (
          <p className="mt-1 text-sm text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        Registrarme
      </button>
    </form>
  )
}