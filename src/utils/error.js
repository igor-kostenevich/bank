const TOO_MANY_ATTEMPTS_TRY_LATER = 'TOO_MANY_ATTEMPTS_TRY_LATER : Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.'

const ERROR_CODES = {
  EMAIL_NOT_FOUND: 'Пользователь с таким email не был найден',
  INVALID_PASSWORD: 'Пароль неверный',
  [TOO_MANY_ATTEMPTS_TRY_LATER]: 'Пожалуйста, введите логин или пароль через 5 секунд',
  auth: 'Пожалуйста войдите в систему'
}

export function error (code) {
  return ERROR_CODES[code] ? ERROR_CODES[code] : 'Неизвестная ошибка'
}
