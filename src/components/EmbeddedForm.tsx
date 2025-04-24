
import React from 'react';

const EmbeddedForm: React.FC = () => {
  React.useEffect(() => {
    // Load the external script for the form embed
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
        src="https://api.leadconnectorhq.com/widget/form/UoWdaRsFtIFeeCkD0uCE"
        style={{ width: '100%', height: '432px', border: 'none', borderRadius: '3px' }}
        id="inline-UoWdaRsFtIFeeCkD0uCE" 
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Do you have a live deal? - RSC"
        data-height="432"
        data-layout-iframe-id="inline-UoWdaRsFtIFeeCkD0uCE"
        data-form-id="UoWdaRsFtIFeeCkD0uCE"
        title="Do you have a live deal? - RSC"
      ></iframe>
    </div>
  );
};

export default EmbeddedForm;
