// Intersection Observer for scroll animations
export const initScrollAnimations = () => {
  // Create intersection observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add animation class when element comes into view
          entry.target.classList.add('animate');
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of element is visible
      rootMargin: '0px 0px -50px 0px' // Trigger 50px before element is fully visible
    }
  );

  // Observe all elements with animation classes
  const animatedElements = document.querySelectorAll(
    '.left-animation, .right-animation, .project-popup-animation'
  );
  
  animatedElements.forEach((el) => {
    observer.observe(el);
  });
};
