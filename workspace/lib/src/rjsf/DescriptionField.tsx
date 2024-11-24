import React from "react";
import type {
  DescriptionFieldProps,
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
} from "@rjsf/utils";

export default function DescriptionField<
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  F extends FormContextType = any
>({ id, description }: DescriptionFieldProps<T, S, F>) {
  if (description) {
    return (
      <div>
        <div id={id} className="mb-4">
          {description}
        </div>
      </div>
    );
  }

  return null;
}
