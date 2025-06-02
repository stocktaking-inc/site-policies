export function initScrollToTop() {
  document.addEventListener('scroll', () => {
    const button = document.getElementById('back-to-top')
    if (button) {
      if (window.scrollY > 300) {
        button.classList.add('visible')
      } else {
        button.classList.remove('visible')
      }
    }
  })

  const backToTopButton = document.getElementById('back-to-top')
  if (backToTopButton) {
    backToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    })
  }
}

if (typeof window !== 'undefined') {
  initScrollToTop()
}
