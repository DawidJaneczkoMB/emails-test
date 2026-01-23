import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { sendEmail } from "@/server/sendEmail";
import { cn } from "@/utils/cn";
import { SendEmailForm } from "./SendEmailForm";

type SendEmailProps = {
  templateName: string;
  variant: string;
};

type SendEmailVariables = {
  templateName: string;
  variant: string;
  recipientEmail: string;
  apiKey: string;
};

type SendEmailResponse = {
  success: boolean;
  message: string;
};

type FormData = {
  recipientEmail: string;
  apiKey: string;
};

export function SendEmail({ templateName, variant }: SendEmailProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const { isPending, mutate } = useMutation<
    SendEmailResponse,
    Error,
    SendEmailVariables
  >({
    mutationFn: (data) => sendEmail({ data }),
    onSuccess: () => {
      setIsOpen(false);
      setApiError(null);
    },
    onError: (error) => {
      setApiError(error.message || "Failed to send email");
    },
  });

  const handleSubmit = (data: FormData) => {
    setApiError(null);
    mutate({
      templateName,
      variant,
      recipientEmail: data.recipientEmail,
      apiKey: data.apiKey,
    });
  };

  const handleOpen = () => {
    setIsOpen(true);
    setApiError(null);
  };

  const handleClose = () => {
    if (!isPending) {
      setIsOpen(false);
      setApiError(null);
    }
  };

  // Handle ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen && !isPending) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen, isPending]);

  return (
    <div className="relative">
      <button
        onClick={handleOpen}
        disabled={isPending}
        className={cn(
          "h-40 px-12 rounded flex items-center justify-center cursor-pointer transition-colors font-medium text-sm bg-gray-800 hover:bg-gray-700 text-white",
          "disabled:opacity-50 disabled:cursor-not-allowed"
        )}
      >
        Send email
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={handleClose}
            className={cn(
              "fixed inset-0 bg-black z-40",
              isPending ? "cursor-not-allowed" : "cursor-default"
            )}
            style={{ opacity: 0.4 }}
          />

          {/* Drawer */}
          <div className="absolute top-full right-0 mt-8 z-50 bg-white rounded shadow-lg p-16 min-w-400 min-h-300 flex flex-col gap-16">
            <h3 className="text-lg font-semibold text-gray-900">
              Send Email
            </h3>

            <SendEmailForm
              onSubmit={handleSubmit}
              isPending={isPending}
              apiError={apiError}
            />
          </div>
        </>
      )}
    </div>
  );
}
