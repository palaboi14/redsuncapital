import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Download, Calendar, TrendingUp, Users, Eye } from 'lucide-react';
import MainLayout from '@/layouts/MainLayout';

const AnalyticsPage = () => {
  const [startDate, setStartDate] = useState('2024-01-01');
  const [endDate, setEndDate] = useState('2024-12-31');
  const [analyticsData, setAnalyticsData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const fetchAnalytics = async () => {
    setLoading(true);
    try {
      // Note: This would need to be connected to the actual analytics API
      // For now, showing the structure
      const mockData = {
        totalVisitors: 0,
        pageViews: 0,
        sessions: 0,
        dailyData: []
      };
      setAnalyticsData(mockData);
    } catch (error) {
      console.error('Failed to fetch analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  const exportToCSV = () => {
    if (!analyticsData) return;

    const csvContent = [
      ['Date', 'Visitors', 'Page Views', 'Sessions'],
      ...analyticsData.dailyData.map((day: any) => [
        day.date,
        day.visitors || 0,
        day.pageViews || 0,
        day.sessions || 0
      ])
    ];

    const csvString = csvContent.map(row => row.join(',')).join('\n');
    const blob = new Blob([csvString], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `analytics_${startDate}_to_${endDate}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const exportToJSON = () => {
    if (!analyticsData) return;

    const jsonString = JSON.stringify(analyticsData, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `analytics_${startDate}_to_${endDate}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const accessFacebookPixel = () => {
    window.open('https://business.facebook.com/events_manager', '_blank');
  };

  useEffect(() => {
    fetchAnalytics();
  }, []);

  return (
    <MainLayout>
      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-foreground mb-4">Analytics Dashboard</h1>
              <p className="text-muted-foreground">Export and analyze your website traffic data</p>
            </div>

            {/* Date Range Selection */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Date Range
                </CardTitle>
                <CardDescription>Select the date range for analytics data</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4 items-end">
                  <div>
                    <Label htmlFor="startDate">Start Date</Label>
                    <Input
                      id="startDate"
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="endDate">End Date</Label>
                    <Input
                      id="endDate"
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                    />
                  </div>
                  <Button onClick={fetchAnalytics} disabled={loading}>
                    {loading ? 'Loading...' : 'Fetch Data'}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Analytics Overview */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Total Visitors</p>
                      <p className="text-2xl font-bold">{analyticsData?.totalVisitors || 0}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Eye className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Page Views</p>
                      <p className="text-2xl font-bold">{analyticsData?.pageViews || 0}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Sessions</p>
                      <p className="text-2xl font-bold">{analyticsData?.sessions || 0}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Export Options */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Download className="h-5 w-5" />
                    Lovable Analytics Export
                  </CardTitle>
                  <CardDescription>Export built-in Lovable analytics data</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-3">
                    <Button onClick={exportToCSV} disabled={!analyticsData} className="flex-1">
                      Export as CSV
                    </Button>
                    <Button onClick={exportToJSON} disabled={!analyticsData} variant="outline" className="flex-1">
                      Export as JSON
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Includes visitor counts, page views, and session data from your published app.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Facebook Meta Pixel</CardTitle>
                  <CardDescription>Access detailed Facebook analytics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button onClick={accessFacebookPixel} className="w-full">
                    Open Facebook Events Manager
                  </Button>
                  <div className="text-sm text-muted-foreground space-y-2">
                    <p><strong>Pixel ID:</strong> 24512840728340649</p>
                    <p>View detailed user behavior, conversions, and custom events in Facebook's Events Manager.</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Instructions */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>How to Access Your Analytics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Lovable Analytics (Built-in)</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Available only for published apps</li>
                    <li>Tracks basic visitor metrics and page views</li>
                    <li>Data can be exported as CSV or JSON</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Facebook Meta Pixel</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Tracks user behavior, conversions, and custom events</li>
                    <li>Access detailed reports in Facebook Events Manager</li>
                    <li>Export data directly from Facebook's interface</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Additional Options</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Consider adding Google Analytics for more comprehensive tracking</li>
                    <li>Use Google Search Console for SEO insights</li>
                    <li>Implement custom tracking for loan application conversions</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AnalyticsPage;