import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/utils/cn";

const formSchema = z.object({
  recipientEmail: z.email("Invalid email address"),
  apiKey: z.string().min(1, "API key is required"),
});

type FormData = z.infer<typeof formSchema>;

type SendEmailFormProps = {
  onSubmit: (data: FormData) => void;
  isPending: boolean;
  apiError: string | null;
};

export function SendEmailForm({
  onSubmit,
  isPending,
  apiError,
}: SendEmailFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-16 grow">
      <div className="grow flex flex-col gap-16">
        <div>
          <label
            htmlFor="recipientEmail"
            className="block text-sm font-medium text-gray-700 mb-4"
          >
            Recipient
          </label>
          <input
            id="recipientEmail"
            type="email"
            {...register("recipientEmail")}
            disabled={isPending}
            className={cn(
              "w-full px-12 py-8 rounded border text-sm",
              "focus:outline-none focus:ring-2 focus:ring-mystic",
              errors.recipientEmail
                ? "border-parsimmon"
                : "border-mystic",
              isPending && "opacity-50 cursor-not-allowed"
            )}
            placeholder="email@example.com"
            data-1p-ignore
          />
          {errors.recipientEmail && (
            <p className="mt-4 text-sm text-parsimmon">
              {errors.recipientEmail.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="apiKey"
            className="block text-sm font-medium text-gray-700 mb-4"
          >
            API key
          </label>
          <input
            id="apiKey"
            type="password"
            {...register("apiKey")}
            disabled={isPending}
            className={cn(
              "w-full px-12 py-8 rounded border text-sm",
              "focus:outline-none focus:ring-2 focus:ring-mystic",
              errors.apiKey ? "border-parsimmon" : "border-mystic",
              isPending && "opacity-50 cursor-not-allowed"
            )}
            placeholder="Enter API key"
            data-1p-ignore
          />
          {errors.apiKey && (
            <p className="mt-4 text-sm text-parsimmon">
              {errors.apiKey.message}
            </p>
          )}
        </div>
      </div>

      {apiError && (
        <div className="text-sm text-parsimmon bg-red-50 p-12 rounded">
          {apiError}
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className={cn(
          "w-full h-40 px-12 rounded flex items-center justify-center",
          "font-medium text-sm bg-gray-800 hover:bg-gray-700 text-white",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          "transition-colors"
        )}
      >
        {isPending ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
