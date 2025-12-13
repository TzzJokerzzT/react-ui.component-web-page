import { FadeContainer } from "@/components/AnimatedContainer";
import { Button } from "@/components/Button";
import { useShowCode } from "@/components/Switch/hook/useShowCode";
import { ReactNode } from "react";

export const ShowCodeButton = ({ codeBlock }: { codeBlock: ReactNode }) => {
  const { showCode, toggleCodeVisibility } = useShowCode();

  return (
    <div className="mt-4 flex flex-col">
      <Button
        className="w-28"
        onClick={toggleCodeVisibility}
        variant="outline"
        size="sm"
      >
        Show Code
      </Button>
      {showCode && (
        <div className="grid md:grid-cols-2 gap-6">
          <FadeContainer trigger="inView" duration={0.8} blur blurAmount={5}>
            {codeBlock}
          </FadeContainer>
        </div>
      )}
    </div>
  );
};
