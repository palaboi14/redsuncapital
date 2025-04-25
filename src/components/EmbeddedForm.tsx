
import React from 'react';

const EmbeddedForm: React.FC<{ formId?: string }> = ({ formId = "iwN5fvztXH1ScqN2mx9h" }) => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  
  return (
    <div className="w-full">
      <iframe
        src={`https://api.leadconnectorhq.com/widget/form/${formId}`}
        style={{ width: '100%', height: '432px', border: 'none', borderRadius: '3px' }}
        id={`inline-${formId}`}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Contact Form"
        data-height="432"
        data-layout-iframe-id={`inline-${formId}`}
        data-form-id={formId}
        title="Contact Form"
      />
    </div>
  );
};

export default EmbeddedForm;
