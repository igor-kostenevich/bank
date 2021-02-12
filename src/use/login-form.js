import { computed, watch } from 'vue'
import * as yup from 'yup'
import { useField, useForm } from 'vee-validate'

export function useLoginForm () {
  const { handleSubmit, isSubmitting, submitCount } = useForm()

  const {
    value: email,
    errorMessage: eError,
    handleBlur: eBlur
  } = useField(
    'email',
    yup
      .string()
      .trim()
      .required('Поле не может быть пустым')
      .email('Введите корректный email')
  )

  const {
    value: password,
    errorMessage: pError,
    handleBlur: pBlur
  } = useField(
    'password',
    yup
      .string()
      .trim()
      .required('Поле не может быть пустым')
      .min(6, 'Пароль не может быть меньше 6 символов')
  )

  const isTooManyAttempts = computed(() => submitCount.value >= 3)

  watch(isTooManyAttempts, val => {
    if (val) {
      setTimeout(() => {
        submitCount.value = 0
      }, 4500)
    }
  })

  const onSubmit = handleSubmit(values => {
    console.log(values)
  })

  return {
    email,
    password,
    eError,
    pError,
    eBlur,
    pBlur,
    onSubmit,
    isSubmitting,
    isTooManyAttempts
  }
}
