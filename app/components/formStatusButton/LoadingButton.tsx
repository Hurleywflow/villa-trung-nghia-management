import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LoadingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pending: boolean;
}

export default function LoadingButton({
  children,
  pending,
  ...props
}: LoadingButtonProps) {
  return (
    <Button {...props} disabled={props.disabled ?? pending}>
      <span className="flex items-center justify-center gap-1">
        {pending && <Loader2 size={16} className="animate-spin" />}
        {children}
      </span>
    </Button>
  );
}
