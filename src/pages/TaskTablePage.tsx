import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ChevronDown, ChevronRight, CheckSquare } from 'lucide-react';

const CREDENTIALS = {
  username: 'RSC',
  password: '#TeamRedSun'
};

const TaskTablePage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if user is already authenticated
    const authStatus = localStorage.getItem('taskTableAuth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === CREDENTIALS.username && password === CREDENTIALS.password) {
      setIsAuthenticated(true);
      localStorage.setItem('taskTableAuth', 'true');
      setError('');
    } else {
      setError('Invalid credentials');
    }
  };

  const TaskRow = ({ 
    task, 
    details, 
    purchase = false,
    delayedPurchase = false,
    refiRT = false,
    refiCO = false,
    midCon = false,
    processor, 
    loanOfficer 
  }: { 
    task: string; 
    details?: string[]; 
    purchase?: boolean;
    delayedPurchase?: boolean;
    refiRT?: boolean;
    refiCO?: boolean;
    midCon?: boolean;
    processor: boolean; 
    loanOfficer: boolean; 
  }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <TableRow>
        <TableCell>
          {details ? (
            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
              <CollapsibleTrigger className="flex items-center gap-3 w-full text-left p-2 rounded-md hover:bg-heritage-50 transition-colors">
                <div className={`p-1 rounded-full ${isOpen ? 'bg-heritage-500 text-white' : 'bg-heritage-200 text-heritage-700'}`}>
                  {isOpen ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                </div>
                <span className="font-medium text-heritage-800">{task}</span>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-3 ml-2">
                <div className="space-y-2 pl-8 border-l-2 border-heritage-300">
                  {details.map((detail, index) => (
                    <div key={index} className="flex items-start gap-3 text-sm">
                      <CheckSquare className="h-4 w-4 text-heritage-500 mt-0.5 flex-shrink-0" />
                      <span className="text-heritage-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          ) : (
            task
          )}
        </TableCell>
        <TableCell className="text-center">
          {purchase && <span className="text-heritage-500 text-lg font-bold">✔</span>}
        </TableCell>
        <TableCell className="text-center">
          {delayedPurchase && <span className="text-heritage-500 text-lg font-bold">✔</span>}
        </TableCell>
        <TableCell className="text-center">
          {refiRT && <span className="text-heritage-500 text-lg font-bold">✔</span>}
        </TableCell>
        <TableCell className="text-center">
          {refiCO && <span className="text-heritage-500 text-lg font-bold">✔</span>}
        </TableCell>
        <TableCell className="text-center">
          {midCon && <span className="text-heritage-500 text-lg font-bold">✔</span>}
        </TableCell>
        <TableCell className="text-center">
          {processor && <span className="text-heritage-500 text-lg font-bold">✔</span>}
        </TableCell>
        <TableCell className="text-center">
          {loanOfficer && <span className="text-heritage-500 text-lg font-bold">✔</span>}
        </TableCell>
      </TableRow>
    );
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-heritage-50 to-heritage-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md border-2 border-heritage-200 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-heritage-500 to-heritage-600 text-white rounded-t-lg">
            <CardTitle className="text-center text-xl">Login Required</CardTitle>
          </CardHeader>
          <CardContent className="p-6 bg-white">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-heritage-800 font-medium">Username</Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="border-heritage-300 focus:border-heritage-500 focus:ring-heritage-500"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-heritage-800 font-medium">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-heritage-300 focus:border-heritage-500 focus:ring-heritage-500"
                  required
                />
              </div>
              {error && (
                <p className="text-heritage-600 text-sm bg-heritage-50 p-2 rounded">{error}</p>
              )}
              <Button type="submit" className="w-full bg-heritage-500 hover:bg-heritage-600 text-white">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  const CategorySection = ({ 
    title, 
    children 
  }: { 
    title: string; 
    children: React.ReactNode; 
  }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Card className="mb-6 shadow-lg border-0 bg-gradient-to-r from-heritage-50 to-heritage-100 border border-heritage-200">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger className="flex items-center gap-4 w-full text-left p-8 hover:bg-heritage-100/70 transition-all duration-200 rounded-lg">
            <div className={`p-3 rounded-full transition-all duration-200 ${isOpen ? 'bg-heritage-500 text-white shadow-lg' : 'bg-heritage-200 text-heritage-700'}`}>
              {isOpen ? <ChevronDown className="h-6 w-6" /> : <ChevronRight className="h-6 w-6" />}
            </div>
            <h2 className="text-2xl font-bold text-heritage-800">{title}</h2>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent className="pt-0 pb-8 px-8">
              <div className="mt-4">
                {children}
              </div>
            </CardContent>
          </CollapsibleContent>
        </Collapsible>
      </Card>
    );
  };

  const SubcategoryItem = ({ title }: { title: string }) => (
    <div className="p-6 border-2 border-heritage-200 rounded-xl bg-gradient-to-br from-heritage-50 to-heritage-100 mb-4 shadow-sm hover:shadow-md hover:border-heritage-300 transition-all duration-200">
      <h3 className="text-lg font-semibold text-heritage-800 mb-2">{title}</h3>
      <p className="text-sm text-heritage-600">Content coming soon...</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-heritage-50 to-heritage-100 p-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex justify-between items-center mb-8">
          <div className="w-20"></div> {/* Spacer for centering */}
          <h1 className="text-4xl font-bold text-center text-heritage-800">Delegation Workflows</h1>
          <Button
            variant="outline"
            className="border-heritage-300 text-heritage-700 hover:bg-heritage-100 hover:border-heritage-400"
            onClick={() => {
              localStorage.removeItem('taskTableAuth');
              setIsAuthenticated(false);
            }}
          >
            Logout
          </Button>
        </div>
        
        <div className="space-y-6 max-w-6xl mx-auto">{/* Centered content with max width */}
          <CategorySection title="1. General Workflow">
            <Card className="shadow-md border-2 border-heritage-200 bg-heritage-50">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-heritage-200/50">
                      <TableHead className="font-semibold py-4 px-6 text-heritage-800">Task</TableHead>
                      <TableHead className="text-center font-semibold py-4 px-4 text-heritage-800">Purchase</TableHead>
                      <TableHead className="text-center font-semibold py-4 px-4 text-heritage-800">Delayed Purchase</TableHead>
                      <TableHead className="text-center font-semibold py-4 px-4 text-heritage-800">Refi - R/T</TableHead>
                      <TableHead className="text-center font-semibold py-4 px-4 text-heritage-800">Refi - C/O</TableHead>
                      <TableHead className="text-center font-semibold py-4 px-4 text-heritage-800">Mid Con</TableHead>
                      <TableHead className="text-center font-semibold py-4 px-4 text-heritage-800">Processor</TableHead>
                      <TableHead className="text-center font-semibold py-4 px-4 text-heritage-800">Loan Officer</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TaskRow
                      task="Initial Borrower Intake / Discovery Call"
                      details={[
                        "LO Calls borrower to confirm loan terms / funding needs",
                        "Get LLC information and borrower contact details"
                      ]}
                      processor={false}
                      loanOfficer={true}
                    />
                    <TaskRow
                      task="Gather Basic Deal Info"
                      details={[
                        "Get Subject Property Address",
                        "Get accurate funding needs - Loan Amount, Existing Liens, Rental Income, Rehab Cost/budget, Construction Budget, etc."
                      ]}
                      processor={false}
                      loanOfficer={true}
                    />
                    <TaskRow
                      task="Gather Track Record Data From Borrower"
                      details={[
                        "Collect last 10-15 closed and sold rehab projects from the last 3 years",
                        "Collect last 10-15 sold construction projects from the last 3 years",
                        "Collect the LLC name it sold as, sold price, rehab cost, original purchase price, construction budget"
                      ]}
                      processor={false}
                      loanOfficer={true}
                    />
                    <TaskRow
                      task="Gather Scope of Work/Rehab/Construction Data"
                      processor={false}
                      loanOfficer={true}
                    />
                    <TaskRow
                      task="Loan Program Matching / Advising Client"
                      processor={false}
                      loanOfficer={true}
                    />
                    <TaskRow
                      task="Preliminary Loan Approval / Commitment Communication"
                      processor={false}
                      loanOfficer={true}
                    />
                    <TaskRow
                      task="Borrower Relationship Management / Frontline Communication"
                      processor={false}
                      loanOfficer={true}
                    />
                    <TaskRow
                      task="Provide Mortgage Statement (for Payoff/VOM)"
                      processor={false}
                      loanOfficer={true}
                    />
                    <TaskRow
                      task="Follow Up for Signed LOI / Term Sheet"
                      processor={true}
                      loanOfficer={true}
                    />
                    <TaskRow
                      task="Monitor LA (Loan Agreement) Signing"
                      processor={true}
                      loanOfficer={true}
                    />
                    <TaskRow
                      task="Follow up on Missing Documents (Title, Insurance, Appraisal)"
                      processor={true}
                      loanOfficer={true}
                    />
                    <TaskRow
                      task="Ensure Scope Matches Rehab Budget in Term Sheet"
                      processor={true}
                      loanOfficer={false}
                    />
                    <TaskRow
                      task="Review Track Record Data"
                      processor={true}
                      loanOfficer={false}
                    />
                    <TaskRow
                      task="Send LOI / Term Sheet to Borrower"
                      processor={true}
                      loanOfficer={false}
                    />
                    <TaskRow
                      task="Escalate / Prioritize Urgent Files"
                      processor={true}
                      loanOfficer={false}
                    />
                    <TaskRow
                      task="Appraisal Ordering / Follow Up"
                      processor={true}
                      loanOfficer={false}
                    />
                    <TaskRow
                      task="Title Ordering / Status Follow Up"
                      processor={true}
                      loanOfficer={false}
                    />
                    <TaskRow
                      task="Insurance Coordination / Collection"
                      processor={true}
                      loanOfficer={false}
                    />
                    <TaskRow
                      task="Payoff Ordering / Coordination"
                      processor={true}
                      loanOfficer={false}
                    />
                    <TaskRow
                      task="Tracking Submission Status / Internal Status Updates"
                      processor={true}
                      loanOfficer={false}
                    />
                    <TaskRow
                      task="Document Review / Quality Check for Submissions"
                      processor={true}
                      loanOfficer={false}
                    />
                    <TaskRow
                      task="System Updates & Internal Notes for Team Visibility"
                      processor={true}
                      loanOfficer={false}
                    />
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </CategorySection>

          <CategorySection title="2. TVC Workflow">
            <div className="space-y-3">
              <SubcategoryItem title="2.1 TVC - RTL" />
              <SubcategoryItem title="2.2 TVC - Bridge" />
              <SubcategoryItem title="2.3 TVC - DSCR" />
              <SubcategoryItem title="2.4 TVC - GUC" />
            </div>
          </CategorySection>

          <CategorySection title="3. IceCap Workflow">
            <div className="space-y-3">
              <SubcategoryItem title="3.1 DSCR" />
            </div>
          </CategorySection>

          <CategorySection title="4. Funding Door Workflow">
            <div className="space-y-3">
              <SubcategoryItem title="4.1 FD - RTL/Rehab" />
              <SubcategoryItem title="4.2 FD - Bridge" />
              <SubcategoryItem title="4.3 FD - DSCR" />
              <SubcategoryItem title="4.4 FD - GUC" />
            </div>
          </CategorySection>

          <CategorySection title="5. Archwest Workflow">
            <div className="space-y-3">
              <SubcategoryItem title="5.1 ARCH - RTL" />
              <SubcategoryItem title="5.2 ARCH - Bridge" />
            </div>
          </CategorySection>
        </div>
      </div>
    </div>
  );
};

export default TaskTablePage;