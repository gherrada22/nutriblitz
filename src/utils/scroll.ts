// Utility for smooth scrolling to page sections

// Register smooth scrolling for all links with hash
export const initSmoothScrolling = () => {
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const link = target.closest('a');
    
    if (link && link.hash && link.hash.length > 1) {
      e.preventDefault();
      
      // Find the target element by ID
      const targetId = link.hash.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Get any fixed headers to offset the scroll position
        const header = document.querySelector('nav');
        const headerOffset = header ? header.offsetHeight : 0;
        
        // Calculate the target position with offset
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset - 20;
        
        // Smooth scroll to target
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  });
};

// Scroll to a specific element by ID
export const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  
  if (element) {
    const header = document.querySelector('nav');
    const headerOffset = header ? header.offsetHeight : 0;
    
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset - 20;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

export default { initSmoothScrolling, scrollToElement };