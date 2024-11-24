import { withTheme } from "@rjsf/core";
import type { FormProps } from "@rjsf/core";
import type { FormContextType, RJSFSchema, StrictRJSFSchema } from "./types";
import type { ComponentType } from "react";
import { generateTheme } from "./Theme";

export function generateForm<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any
>(): ComponentType<FormProps<T, S, F>> {
  return withTheme<T, S, F>(generateTheme<T, S, F>());
}

export default generateForm();
