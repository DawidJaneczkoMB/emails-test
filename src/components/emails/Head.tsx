import { importedTheme } from "@/importedTheme";
import { Head as REHead } from "@react-email/components";

export function Head() {
  return (
    <REHead>
      <style>{`html { font-size: 10px; } body { margin: 0; padding-top: 40px; color: ${importedTheme.color.pickledBluewood}; }`}</style>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500&display=swap"
      />
    </REHead>
  );
}
