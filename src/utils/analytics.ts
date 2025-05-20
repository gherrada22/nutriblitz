// Simple analytics service
export const analytics = {
  // Initialize analytics tracking
  init: () => {
    console.log('Analytics initialized');
    
    // Track page views
    trackPageView();
    
    // Setup event listeners for button clicks
    setupEventTracking();
  }
};

// Track page views
const trackPageView = () => {
  console.log(`Page viewed: ${window.location.pathname}`);
  
  // This would normally send data to an analytics service
  // Example: 
  // window.gtag('config', 'GA-TRACKING-ID', {
  //   page_path: window.location.pathname,
  // });
};

// Setup click event tracking
const setupEventTracking = () => {
  // Track CTA button clicks
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    
    // Track shopping button clicks
    if (target.closest('button') && target.textContent?.includes('Shop Now')) {
      trackEvent('cta_click', 'shop_now');
    }
    
    // Track newsletter subscriptions
    if (target.closest('form') && target.closest('button')?.textContent?.includes('Subscribe')) {
      trackEvent('newsletter', 'subscribe');
    }
  });
};

// Track custom events
const trackEvent = (category: string, action: string, label?: string, value?: number) => {
  console.log(`Event tracked: ${category} - ${action} ${label ? '- ' + label : ''} ${value ? '- ' + value : ''}`);
  
  // This would normally send event data to an analytics service
  // Example:
  // window.gtag('event', action, {
  //   event_category: category,
  //   event_label: label,
  //   value: value
  // });
};

export default analytics;