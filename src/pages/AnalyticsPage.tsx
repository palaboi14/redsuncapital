import MainLayout from '@/layouts/MainLayout';

const AnalyticsPage = () => {
  return (
    <MainLayout>
      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold">Analytics Dashboard</h1>
          <p>This is a test page to verify routing works.</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default AnalyticsPage;