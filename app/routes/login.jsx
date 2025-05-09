import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate, useLocation, Navigate } from "react-router";
import FloatingInput from "../components/FloatingInput";
import { useAuth } from "../context/AuthContext";

const loginSchema = z.object({
  email: z.string().email("Geçerli bir email adresi giriniz"),
  password: z.string().min(6, "Şifre en az 6 karakter olmalıdır"),
});

export default function Login() {
  const { login, isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  if (loading) return null;
  if (isAuthenticated) return <Navigate to="/dashboard" replace />;

  const onSubmit = async (data) => {
    try {
      // TODO: Burada API çağrısı yapılacak
      // Şimdilik direkt login yapıyoruz
      login({ email: data.email });

      // Kullanıcıyı önceki sayfaya veya ana sayfaya yönlendir
      navigate("/dashboard", { replace: true });
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e0e0e0]">
      <div className="max-w-md w-full space-y-8 p-8 rounded-[24px] bg-[#e0e0e0] shadow-[8px_8px_24px_#bebebe,-8px_-8px_24px_#ffffff] border border-[#d1d9e6]">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-800">
            Hesabınıza giriş yapın
          </h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          <div className="space-y-4">
            <FloatingInput
              label="Email"
              type="email"
              error={errors.email?.message}
              {...register("email")}
            />

            <FloatingInput
              label="Şifre"
              type="password"
              error={errors.password?.message}
              {...register("password")}
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border-none rounded-[16px] text-base font-semibold text-gray-700 bg-[#e0e0e0] shadow-[4px_4px_12px_#bebebe,-4px_-4px_12px_#ffffff] hover:shadow-[inset_2px_2px_6px_#bebebe,inset_-2px_-2px_6px_#ffffff] transition-all duration-200"
            >
              Giriş Yap
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
