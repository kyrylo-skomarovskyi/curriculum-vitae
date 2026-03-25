import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx';
import { SignWithGoogleButton } from '@/components/sign-with-google-button.tsx';

export default function LoginPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Card>
          <CardHeader>
            <CardTitle>Create an account</CardTitle>
            <CardDescription>Enter your information below to create your account</CardDescription>
          </CardHeader>
          <CardContent>
            <SignWithGoogleButton type="button" variant="outline">
              Sign up with Google
            </SignWithGoogleButton>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
