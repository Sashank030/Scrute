import { Button } from "./ui/SignupButton";
import { Input } from "./ui/SignupInput";
import { Label } from "./ui/SignUpLabel";
import ScruteLightLogo from "../assets/Scrute Favicon Light (1).svg";
import { Link } from "react-router-dom";

export default function SignupForm({ onSignup }: { onSignup: () => void }) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignup();
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      <div className="flex flex-col items-center gap-2 text-center">
        <img src={ScruteLightLogo} alt="Scrute Logo" className="h-16 w-16" />
        <h1 className="text-2xl font-bold">Sign Up to Scrute!</h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Enter your email below to create an account.
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" className="rounded-none w-full">
          Sign Up
        </Button>
        <div className="text-center text-sm">
          Already have an account?{" "}
          <Link to="/" className="underline underline-offset-4">
            Sign in
          </Link>
        </div>
      </div>
    </form>
  );
}
