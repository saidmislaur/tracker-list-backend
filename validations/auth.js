import { body } from 'express-validator'

export const registerValidition = [
  body('email', 'неверный формат почты').isEmail(),
  body('password', 'пароль должен содержать не менее 5 знаков').isLength({ min: 5 }),
  body('fullName', 'Укажите имя полностью').isLength({ min: 2 })
]