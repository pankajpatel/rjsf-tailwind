import React from "react";
import {
  type FormContextType,
  getUiOptions,
  type RJSFSchema,
  type StrictRJSFSchema,
  type TitleFieldProps,
} from "@rjsf/utils";

export default function TitleField<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any
>({ id, title, uiSchema }: TitleFieldProps<T, S, F>) {
  const uiOptions = getUiOptions<T, S, F>(uiSchema);

  return (
    <h5 id={id} className="mt-0 mb-4 text-lg font-medium leading-tight">
      {uiOptions.title || title}
    </h5>
  );
}
