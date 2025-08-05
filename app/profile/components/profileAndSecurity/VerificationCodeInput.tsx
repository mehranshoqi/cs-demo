import { ChangeEvent, useRef, useState } from "react";
import styles from "../../Profile.module.scss";

interface VerificationCodeInputProps {
  length: number;
  onComplete: (code: string) => void;
  onChange: (code: string) => void;
}

const VerificationCodeInput: React.FC<VerificationCodeInputProps> = ({
  length,
  onComplete,
  onChange,
}) => {
  const [code, setCode] = useState(new Array(length).fill(""));
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (/[^0-9]/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    onChange(newCode.join(""));

    if (value && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }

    if (newCode.every((digit) => digit !== "")) {
      onComplete(newCode.join(""));
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className={styles.codeInputContainer}>
      {code.map((digit, index) => {
        const isLast = index == 5;
        return (
          <div key={index} className={styles.inputWrapper}>
            <input
              ref={(el) => {
                inputRefs.current[index] = el!;
              }}
              type="text"
              maxLength={1}
              value={digit}
              placeholder="0"
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={styles.codeInput}
            />
            {!isLast && <div className={styles.rightBorder}></div>}
          </div>
        );
      })}
    </div>
  );
};


export default VerificationCodeInput;