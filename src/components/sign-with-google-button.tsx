import type { ComponentProps } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button.tsx';
import { auth } from '@/lib/firebase';

type ButtonProps = ComponentProps<typeof Button>;
type SignWithGoogleButtonProps = Omit<ButtonProps, 'onClick'>;

export function SignWithGoogleButton({ children, ...props }: SignWithGoogleButtonProps) {
  const onClick: ButtonProps['onClick'] = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider).catch((error) => {
      toast.error(error.message);
    });
  };

  return (
    <Button {...props} onClick={onClick}>
      {children}
    </Button>
  );
}
