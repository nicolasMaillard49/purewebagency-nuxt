// Composable pour l'effet tilt 3D au hover
export const useTiltEffect = () => {
  const initTilt = () => {
    if (process.client) {
      const tiltElements = document.querySelectorAll('[data-tilt]')
      
      tiltElements.forEach((element) => {
        const el = element as HTMLElement
        
        const handleMouseMove = (e: MouseEvent) => {
          const rect = el.getBoundingClientRect()
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top
          
          const centerX = rect.width / 2
          const centerY = rect.height / 2
          
          const rotateX = (y - centerY) / 10
          const rotateY = (centerX - x) / 10
          
          el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
        }
        
        const handleMouseLeave = () => {
          el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)'
        }
        
        el.addEventListener('mousemove', handleMouseMove)
        el.addEventListener('mouseleave', handleMouseLeave)
      })
    }
  }
  
  return {
    initTilt
  }
}