import React from "react";
import {
  ErrorListProps,
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
  TranslatableString,
} from "@rjsf/utils";

export default function ErrorList<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any,
>({ errors, registry }: ErrorListProps<T, S, F>) {
  const { translateString } = registry;

  return (
    <div className="mb-4 rounded border border-red-700">
      <div className="rounded-t bg-red-100 p-3 text-red-950">
        {translateString(TranslatableString.ErrorsLabel)}
      </div>
      <div className="p-3">
        <ul className="list-disc pl-5">
          {errors.map((error, i: number) => (
            <li key={i} className="mb-1 text-red-600">
              {error.stack}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
