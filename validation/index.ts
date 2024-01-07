export * from './email'

export function clearValidation<T>(form: {[Property in keyof T]: { valid: boolean, warning: string } }) {
  for (const p in form) {
    form[p].valid = true,
    form[p].warning = ""
  }
}