import { useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';

const KBPage = () => {
  useEffect(() => {
    // Load n8n chat CSS
    const link = document.createElement('link');
    link.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Load and initialize n8n chat
    const script = document.createElement('script');
    script.type = 'module';
    script.textContent = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
      
      createChat({
        webhookUrl: 'https://redsuncapital.com/kb'
      });
    `;
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <MainLayout>
      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8 text-foreground">Knowledge Base</h1>
            <div className="bg-card rounded-lg shadow-lg overflow-hidden p-8">
              <div id="n8n-chat" className="min-h-[600px]"></div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default KBPage;