
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FundingDialogProps {
  className?: string;
  buttonText?: string;
}

const FundingDialog = ({ className, buttonText = "GET MY FUNDING" }: FundingDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={className}>
          {buttonText}
          <ArrowRight className="ml-2" size={18} />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl p-0">
        <iframe
          src="https://api.leadconnectorhq.com/widget/form/qTav4QsjvlzpIr4u06OK"
          style={{ width: '100%', height: '600px', border: 'none', borderRadius: '8px' }}
          id="inline-qTav4QsjvlzpIr4u06OK"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Get My Funding"
          data-height="600"
          data-layout-iframe-id="inline-qTav4QsjvlzpIr4u06OK"
          data-form-id="qTav4QsjvlzpIr4u06OK"
          title="Get My Funding"
        />
      </DialogContent>
    </Dialog>
  );
};

export default FundingDialog;
