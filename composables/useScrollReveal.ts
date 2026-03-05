// Composable pour les animations au scroll
// Inspiré des meilleures agences web

export const useScrollReveal = () => {
  const initScrollReveal = () => {
    if (process.client) {
      const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
      
      const revealOnScroll = () => {
        reveals.forEach((element) => {
          const windowHeight = window.innerHeight
          const elementTop = element.getBoundingClientRect().top
          const revealPoint = 150
          
          if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active')
          }
        })
      }
      
      window.addEventListener('scroll', revealOnScroll)
      revealOnScroll() // Trigger once on mount
      
      return () => {
        window.removeEventListener('scroll', revealOnScroll)
      }
    }
  }
  
  return {
    initScrollReveal
  }
}
