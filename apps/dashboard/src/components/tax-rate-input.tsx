import { CurrencyInput } from "@vision_dashboard/ui/currency-input";
import { useState } from "react";
import { TaxRateAssistant } from "./tax-rate-assistant";

type Props = {
  name: string;
  onChange: (value: string) => void;
  onSelect: (vat: number) => void;
  value?: number | null;
};

export function TaxRateInput({
  name,
  onChange,
  onSelect,
  value: defaultValue,
}: Props) {
  const [value, setValue] = useState(defaultValue);

  const handleOnSelect = (vat: number) => {
    setValue(vat);
    onSelect(vat);
  };

  return (
    <div className="relative">
      <CurrencyInput
        suffix="%"
        autoComplete="off"
        value={value ?? ""}
        onValueChange={(values) => {
          setValue(values.floatValue);
          onChange(values.value);
        }}
        placeholder="Tax Rate"
        thousandSeparator={false}
        decimalScale={2}
        isAllowed={(values) => {
          const { floatValue } = values;
          return (
            floatValue === undefined || (floatValue >= 0 && floatValue <= 100)
          );
        }}
        allowNegative={false}
      />

      <TaxRateAssistant
        name={name}
        value={value?.toString() ?? ""}
        onSelect={handleOnSelect}
        onSuggestionReceived={(taxRate) => {
          setValue(taxRate);
          onChange(taxRate.toString());
        }}
      />
    </div>
  );
}
