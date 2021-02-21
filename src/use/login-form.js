import { computed, watch } from 'vue'
import * as yup from 'yup'
import { useField, useForm } from 'vee-validate'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export function useLoginForm () {
  const store = useStore()
  const router = useRouter()
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
    console.log(val)
    if (val) {
      setTimeout(() => {
        submitCount.value = 0
      }, 4500)
    }
  })

  const onSubmit = handleSubmit(async values => {
    try {
      await store.dispatch('auth/login', values)
      router.push('/')
    } catch (e) {}
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
