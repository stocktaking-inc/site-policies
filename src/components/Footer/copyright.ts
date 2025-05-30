export const getCopyright = (year: number = new Date().getFullYear()): string => {
  return `\u00A9 ${year} Система инвентаризации. Все права защищены.`
}
