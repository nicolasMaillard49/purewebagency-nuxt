// Composable pour les animations de compteur
export const useAnimatedCounter = () => {
  const animateCounter = (element: HTMLElement, target: number, duration: number = 2000) => {
    let startTime: number | null = null
    const startValue = 0
    
    const easeOutQuart = (t: number): number => {
      return 1 - Math.pow(1 - t, 4)
    }
    
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const easedProgress = easeOutQuart(progress)
      const currentValue = Math.floor(easedProgress * (target - startValue) + startValue)
      
      element.textContent = currentValue.toString()
      
      if (progress < 1) {
        window.requestAnimationFrame(step)
      } else {
        element.textContent = target.toString()
      }
    }
    
    window.requestAnimationFrame(step)
  }
  
  const initCounters = () => {
    if (process.client) {
      const counters = document.querySelectorAll('[data-counter]')
      
      const observerCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const target = parseInt(entry.target.getAttribute('data-counter') || '0')
            animateCounter(entry.target as HTMLElement, target)
            observer.unobserve(entry.target)
          }
        })
      }
      
      const observer = new IntersectionObserver(observerCallback, {
        threshold: 0.5
      })
      
      counters.forEach(counter => observer.observe(counter))
      
      return () => observer.disconnect()
    }
  }
  
  return {
    initCounters,
    animateCounter
  }
}