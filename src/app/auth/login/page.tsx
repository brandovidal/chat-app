import LoginForm from "@/components/LoginForm";

export default function AuthPage() {
  return (
    <div className="flex items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <LoginForm />
    </div>
  );
}