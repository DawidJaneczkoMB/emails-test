import { importedTheme } from "@/importedTheme";
import { Head as REHead } from "@react-email/components";

export function Head() {
  return (
    <REHead>
      <style>{`html { font-size: 10px; } body { margin: 0; padding-top: 40px; color: ${importedTheme.color.pickledBluewood}; }`}</style>
    </REHead>
  );
}
