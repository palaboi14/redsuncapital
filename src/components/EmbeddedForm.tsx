
import React from 'react';

const EmbeddedForm: React.FC = () => {
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
        src="https://api.leadconnectorhq.com/widget/form/9m5t5VyR2hZDwq0NUnya"
        style={{ width: '100%', height: '432px', border: 'none', borderRadius: '3px' }}
        id="inline-9m5t5VyR2hZDwq0NUnya" 
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="RSC Do you have a live deal?"
        data-height="432"
        data-layout-iframe-id="inline-9m5t5VyR2hZDwq0NUnya"
        data-form-id="9m5t5VyR2hZDwq0NUnya"
        title="RSC Do you have a live deal?"
      />
    </div>
  );
};

export default EmbeddedForm;
