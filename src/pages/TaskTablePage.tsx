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
    processor, 
    loanOfficer 
  }: { 
    task: string; 
    details?: string[]; 
    processor: boolean; 
    loanOfficer: boolean; 
  }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <TableRow>
        <TableCell>
          {details ? (
            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
              <CollapsibleTrigger className="flex items-center gap-3 w-full text-left p-2 rounded-md hover:bg-muted/50 transition-colors">
                <div className={`p-1 rounded-full ${isOpen ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                  {isOpen ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                </div>
                <span className="font-medium">{task}</span>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-3 ml-2">
                <div className="space-y-2 pl-8 border-l-2 border-muted">
                  {details.map((detail, index) => (
                    <div key={index} className="flex items-start gap-3 text-sm">
                      <CheckSquare className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{detail}</span>
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
          {processor && <span className="text-green-600 text-lg">✔</span>}
        </TableCell>
        <TableCell className="text-center">
          {loanOfficer && <span className="text-green-600 text-lg">✔</span>}
        </TableCell>
      </TableRow>
    );
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center">Login Required</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && (
                <p className="text-destructive text-sm">{error}</p>
              )}
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">WHO</h1>
          <Button
            variant="outline"
            onClick={() => {
              localStorage.removeItem('taskTableAuth');
              setIsAuthenticated(false);
            }}
          >
            Logout
          </Button>
        </div>
        
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Task</TableHead>
                  <TableHead className="text-center">Processor</TableHead>
                  <TableHead className="text-center">Loan Officer</TableHead>
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
      </div>
    </div>
  );
};

export default TaskTablePage;