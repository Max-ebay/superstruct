import { pick, object, string, number } from '../../..'

export const Struct = pick(
  object({
    name: string(),
    age: number(),
  }),
  ['age']
)

export const data = {
  age: 'invalid',
}

export const error = {
  value: 'invalid',
  type: 'number',
  path: ['age'],
  branch: [data, data.age],
}
