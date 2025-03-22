import { useEffect, useRef, useState } from "react";

enum Operator {
  add = "+",
  subtract = "-",
  multiply = "*",
  divide = "÷",
}

export const useCalculator = () => {
  const [formula, setFormula] = useState("");
  const [number, setNumber] = useState("0");
  const [prevNumber, setPrevNumber] = useState("");

  const lastOperation = useRef<Operator>();

  useEffect(() => {
    setFormula(number);
  }, [number])

  const buildNumber = (numberString: string) => {
    // Verificar si ya existe un punto
    if (number.includes(".") && numberString === ".") return;

    // Verificar si el número es 0
    if (number.startsWith('0') || number.startsWith('-0')) {
      if (numberString === '.') {
        return setNumber(number + numberString);
      }
    
      // Evaluar si es otro cero y no hay un punto
      if (numberString === '0' && !number.includes('.')) {
        return setNumber(number);
      }

      // Evaluar si es diferente de cero, no hay punto y es el primer número
      if (numberString !== '0' && !number.includes('.')) {
        return setNumber(numberString);
      }

      // Evitar el 0000.0
      if (numberString === '0' && number.includes('.')) {
        return setNumber(number + numberString);
      }
    }

    setNumber(number + numberString);
  };

  return {
    // Props
    formula,
    number,
    prevNumber,

    // Methods
    buildNumber,
  };
};
