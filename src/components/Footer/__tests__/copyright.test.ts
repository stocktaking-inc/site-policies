import { getCopyright } from '../copyright'

describe('getCopyright', () => {
  const currentYear = new Date().getFullYear()

  test('должен возвращать копирайт с текущим годом по умолчанию', () => {
    const result = getCopyright()
    expect(result).toBe(`\u00A9 ${currentYear} Система инвентаризации. Все права защищены.`)
  })

  test('должен возвращать копирайт с указанным годом', () => {
    const result = getCopyright(2023)
    expect(result).toBe(`\u00A9 2023 Система инвентаризации. Все права защищены.`)
  })

  test('должен содержать правильный символ копирайта', () => {
    const result = getCopyright(2024)
    expect(result).toContain('\u00A9')
  })
})
