import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'

export function useRequestForm (fn) {
  const { isSubmitting, handleSubmit } = useForm({
    initialValues: {
      status: 'active'
    }
  })

  const fioRegExp = /^[a-zA-Zа-яА-Я ]+$/
  const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{2}\)?)?$/

  const { value: fio, errorMessage: fError, handleBlur: fBlur } = useField(
    'fio',
    yup
      .string()
      .matches(fioRegExp, 'ФИО не может содержать цифр и знаков')
      .trim()
      .required('Пожалуйста, введите Ваше ФИО')
  )
  const { value: phone, errorMessage: pError, handleBlur: pBlur } = useField(
    'phone',
    yup
      .string()
      .matches(phoneRegExp, 'Неверный формат номера телефона. Пожалуйста, введите формата +380YYXXXXXXX')
      .min(13, 'Неверный формат номера телефона. Пожалуйста, введите формата +380YYXXXXXXX')
      .max(13, 'Номер телефона не может содержать больше 13 символов')
      .trim()
      .required('Телефон не может быть пустым')
  )
  const { value: amount, errorMessage: aError, handleBlur: aBlur } = useField(
    'amount',
    yup
      .number()
      .typeError('Введите сумму')
      .min(1, 'Сумма не может быть меньше 0')
      .max(10000000, 'Сумма не может быть больше 10 000 000')
      .required('Введите сумму')
  )
  const { value: status } = useField('status')

  const onSubmit = handleSubmit(fn)

  return {
    status,
    isSubmitting,
    onSubmit,
    fio,
    fError,
    fBlur,
    phone,
    pError,
    pBlur,
    amount,
    aError,
    aBlur
  }
}
