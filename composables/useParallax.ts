// Composable pour l'effet de parallaxe au scroll
export const useParallax = () => {
  const initParallax = () => {
    if (process.client) {
      const parallaxElements = document.querySelectorAll('[data-parallax]')
      
      const handleScroll = () => {
        const scrolled = window.pageYOffset
        
        parallaxElements.forEach((element) => {
          const speed = parseFloat(element.getAttribute('data-parallax') || '0.5')
          const yPos = -(scrolled * speed)
          ;(element as HTMLElement).style.transform = `translateY(${yPos}px)`
        })
      }
      
      window.addEventListener('scroll', handleScroll, { passive: true })
      
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }
  
  return {
    initParallax
  }
}