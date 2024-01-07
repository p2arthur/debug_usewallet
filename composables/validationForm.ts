export const useValidationForm = <T> (form: T) => {
  type validForm = Ref<{[Property in keyof T]: { valid: boolean, warning: string } }>

  const validForm: Ref<{[Property in keyof T]: { valid: boolean, warning: string } }> = ref({}) as validForm

  for (const p in form) {
    validForm.value[p] = {
      valid: true,
      warning: "",
    }
  }

  return validForm
}