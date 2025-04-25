
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface FundingDialogProps {
  className?: string;
  buttonText?: string;
}

const FundingDialog = ({ className, buttonText = "GET MY FUNDING" }: FundingDialogProps) => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
  const handleClick = () => {
    if (isMobile) {
      navigate('/get-funded');
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={className} onClick={handleClick}>
          {buttonText}
          <ArrowRight className="ml-2" size={18} />
        </Button>
      </DialogTrigger>
      {!isMobile && (
        <DialogContent className="w-full max-w-3xl max-h-[90vh] p-0 overflow-hidden">
          <div className="w-full h-[90vh] overflow-auto">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/qTav4QsjvlzpIr4u06OK"
              style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px' }}
              id="inline-qTav4QsjvlzpIr4u06OK"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Get My Funding"
              data-height="100%"
              data-layout-iframe-id="inline-qTav4QsjvlzpIr4u06OK"
              data-form-id="qTav4QsjvlzpIr4u06OK"
              title="Get My Funding"
            />
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
};

export default FundingDialog;
