import { useEffect, useRef, useState } from "react";

enum Operator {
  add = "+",
  subtract = "-",
  multiply = "x",
  divide = "÷",
}

// Función pura: recibe la fórmula y devuelve el resultado.
// Vive fuera del hook porque no necesita ningún estado.
const calculate = (formula: string) => {
  const [firstValue, operation, secondValue] = formula.split(" ");

  const num1 = Number(firstValue);
  const num2 = Number(secondValue); // NaN

  if (isNaN(num2)) return num1;

  switch (operation) {
    case Operator.add:
      return num1 + num2;

    case Operator.subtract:
      return num1 - num2;

    case Operator.multiply:
      return num1 * num2;

    case Operator.divide:
      return num1 / num2;

    default:
      throw new Error(`Operation ${operation} not implemented`);
  }
};

export const useCalculator = () => {
  const [formula, setFormula] = useState("0");

  const [number, setNumber] = useState("0");

  // Se calcula a partir de la fórmula en cada render: no necesita su propio estado
  const prevNumber = `${calculate(formula)}`;

  const lastOperation = useRef<Operator | undefined>(undefined);

  useEffect(() => {
    if (lastOperation.current) {
      const operation = lastOperation.current;
      setFormula(
        (prevFormula) => `${prevFormula.split(" ").at(0)} ${operation} ${number}`,
      );
    } else {
      setFormula(number);
    }
  }, [number]);

  const clean = () => {
    setNumber("0");
    setFormula("0");

    lastOperation.current = undefined;
  };

  const toggleSign = () => {
    if (number.includes("-")) {
      return setNumber(number.replace("-", ""));
    }

    setNumber("-" + number);
  };

  const deleteLast = () => {
    let currentSign = "";
    let temporalNumber = number;

    if (number.includes("-")) {
      currentSign = "-";
      temporalNumber = number.substring(1);
    }

    if (temporalNumber.length > 1) {
      return setNumber(currentSign + temporalNumber.slice(0, -1));
    }

    setNumber("0");
  };

  const setLastNumber = () => {
    calculateResult();
    setNumber("0");
  };

  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.divide;
  };

  const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.multiply;
  };

  const subtractOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.subtract;
  };

  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.add;
  };

  const calculateSubResult = () => calculate(formula);

  const calculateResult = () => {
    const result = calculateSubResult();
    setFormula(`${result}`);

    lastOperation.current = undefined;
  };

  const buildNumber = (numberString: string) => {
    // Verificar si ya existe el punto decimal
    if (number.includes(".") && numberString === ".") return;

    if (number.startsWith("0") || number.startsWith("-0")) {
      if (numberString === ".") {
        return setNumber(number + numberString);
      }

      // Evaluar si es otro cero y no hay punto
      if (numberString === "0" && number.includes(".")) {
        return setNumber(number + numberString);
      }

      // Evaluar si es diferente de cero, no hay punto y es el primer número
      if (numberString !== "0" && !number.includes(".")) {
        return setNumber(numberString);
      }

      // Evitar el 0000000.00
      if (numberString === "0" && !number.includes(".")) {
        return;
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
    clean,
    toggleSign,
    deleteLast,

    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    calculateSubResult,
    calculateResult,
  };
};
