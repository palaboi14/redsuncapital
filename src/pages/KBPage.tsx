import MainLayout from '@/layouts/MainLayout';

const KBPage = () => {
  return (
    <MainLayout>
      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8 text-foreground">Knowledge Base</h1>
            <div className="bg-card rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://palaboi.app.n8n.cloud/webhook/e985d15f-b2f6-456d-be15-97e0b1544a40/chat"
                style={{ width: '100%', height: '600px', border: 'none' }}
                title="Knowledge Base Chat"
                allow="microphone; camera"
              />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default KBPage;