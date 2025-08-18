// Meta Pixel event tracking utility
declare global {
  interface Window {
    fbq: (track: string, event: string, parameters?: Record<string, any>) => void;
  }
}

export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters);
    console.log('Meta Pixel Event:', eventName, parameters);
  }
};

// Standard Facebook events
export const trackPageView = () => {
  trackEvent('PageView');
};

export const trackViewContent = (contentName?: string, contentCategory?: string) => {
  trackEvent('ViewContent', {
    content_name: contentName,
    content_category: contentCategory,
  });
};

export const trackLead = (contentName?: string, value?: number) => {
  trackEvent('Lead', {
    content_name: contentName,
    value: value,
    currency: 'USD'
  });
};

export const trackInitiateCheckout = (contentName?: string, value?: number) => {
  trackEvent('InitiateCheckout', {
    content_name: contentName,
    value: value,
    currency: 'USD'
  });
};

// Custom events for loan business
export const trackLoanCalculation = (loanType: string, loanAmount: number, loanTerm: number) => {
  trackEvent('LoanCalculation', {
    loan_type: loanType,
    loan_amount: loanAmount,
    loan_term: loanTerm,
    content_category: 'loan_calculator'
  });
};

export const trackContactFormSubmit = (formType: string) => {
  trackEvent('Contact', {
    content_name: formType,
    content_category: 'contact_form'
  });
};

export const trackPhoneClick = (phoneNumber: string) => {
  trackEvent('Contact', {
    content_name: 'phone_click',
    phone_number: phoneNumber,
    content_category: 'phone_contact'
  });
};

export const trackEmailClick = (email: string) => {
  trackEvent('Contact', {
    content_name: 'email_click',
    email: email,
    content_category: 'email_contact'
  });
};

export const trackLogin = (loginType: string) => {
  trackEvent('CompleteRegistration', {
    content_name: loginType,
    content_category: 'user_login'
  });
};

export const trackLoanProductView = (productType: string) => {
  trackEvent('ViewContent', {
    content_name: productType,
    content_category: 'loan_product'
  });
};

export const trackDocumentRequirementsView = (loanType: string) => {
  trackEvent('ViewContent', {
    content_name: 'document_requirements',
    content_category: loanType
  });
};

export const trackGetStartedClick = (source: string, loanType?: string) => {
  trackEvent('InitiateCheckout', {
    content_name: 'get_started',
    content_category: loanType || 'general',
    source: source
  });
};