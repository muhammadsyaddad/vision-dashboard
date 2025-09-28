"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@vision_dashboard/ui/select";
import { taxTypes } from "@vision_dashboard/utils/tax";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export function SelectTaxType({ value, onChange }: Props) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger>
        <SelectValue placeholder="Select a tax type" />
      </SelectTrigger>
      <SelectContent>
        {taxTypes.map((taxType) => (
          <SelectItem key={taxType.value} value={taxType.value}>
            {taxType.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
