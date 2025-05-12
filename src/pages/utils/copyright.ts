export const getCopyright = (year: number = new Date().getFullYear()): string => {
  return `© ${year} Система инвентаризации. Все права защищены.`
}
