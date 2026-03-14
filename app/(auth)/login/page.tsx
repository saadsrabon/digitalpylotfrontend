import LoginForm from "@/components/forms/login-form";

export default function LoginPage() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-100 p-6 shadow rounded">
        <LoginForm />
      </div>
    </div>
  );
}
