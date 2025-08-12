import { useEffect } from 'react';

const KBPage = () => {
  useEffect(() => {
    // Redirect to external chat
    window.location.href = 'https://palaboi.app.n8n.cloud/webhook/e985d15f-b2f6-456d-be15-97e0b1544a40/chat';
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <p className="text-foreground">Redirecting to Knowledge Base...</p>
      </div>
    </div>
  );
};

export default KBPage;