export const getLastUpdate = async (): Promise<string> => {
  try {
    const response = await fetch(
      'https://api.github.com/repos/stocktaking-inc/site-policies/commits?per_page=1'
    )
    const data = await response.json()

    if (data && data.length > 0) {
      const lastCommitDate = new Date(data[0].commit.author.date)
      return lastCommitDate.toLocaleDateString('ru-RU', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      })
    }
    return 'Ошибка при получении даты'
  } catch (error) {
    console.error('Ошибка при получении даты последнего коммита:', error)
    return 'Ошибка при получении даты'
  }
}
