import { clientEnv, clientSchema } from './schema'

const _clientEnv = clientSchema.safeParse(clientEnv)

type ValueWithErrors = Record<string, [string, {
  _errors: string[]
}]>[]

export const formatErrors = (errors: ValueWithErrors) =>
  Object.entries(errors)
    .map((error) => {
      const [name, value] = error
      if (value && '_errors' in value) {
        return `${name}: ${value._errors.join(', ')}\n`
      }
    })
    .filter(Boolean)

if (!_clientEnv.success) {
  console.error(
    '❌ Invalid environment variables:\n',
    ...formatErrors(_clientEnv.error.format() as unknown as ValueWithErrors)
  )
  throw new Error('Invalid environment variables')
}

for (const key of Object.keys(_clientEnv.data)) {
  if (!key.startsWith('VITE_')) {
    console.warn(
      `❌ Invalid public environment variable name: ${key}. It must begin with 'VITE_'`
    )

    throw new Error('Invalid public environment variable name')
  }
}

export const env = _clientEnv.data
