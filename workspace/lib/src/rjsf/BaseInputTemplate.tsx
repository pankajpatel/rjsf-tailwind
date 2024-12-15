import React from "react";
import {
  ariaDescribedByIds,
  type BaseInputTemplateProps,
  examplesId,
  type FormContextType,
  getInputProps,
  type RJSFSchema,
  type StrictRJSFSchema,
} from "@rjsf/utils";
import type { ChangeEvent, FocusEvent } from "react";
import clsx from "clsx";

export default function BaseInputTemplate<
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  F extends FormContextType = any
>({
  id,
  placeholder,
  required,
  readonly,
  disabled,
  type,
  value,
  onChange,
  onChangeOverride,
  onBlur,
  onFocus,
  autofocus,
  options,
  schema,
  rawErrors = [],
  children,
  extraProps,
}: BaseInputTemplateProps<T, S, F>) {
  const inputProps = {
    ...extraProps,
    ...getInputProps<T, S, F>(schema, type, options),
  };
  const _onChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
    onChange(value === "" ? options.emptyValue : value);
  const _onBlur = ({ target: { value } }: FocusEvent<HTMLInputElement>) =>
    onBlur(id, value);
  const _onFocus = ({ target: { value } }: FocusEvent<HTMLInputElement>) =>
    onFocus(id, value);

  const inputClass = clsx(
    "block p-2.5 w-full text-sm text-gray-900 rounded-lg bg-transparent border-1 border-gray-300 appearance-none dark:text-white dark:bg-gray-700 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
    rawErrors.length > 0 ? "border-red-500" : "border-muted-foreground"
  );

  return (
    <>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        // biome-ignore lint/a11y/noAutofocus: <explanation>
        autoFocus={autofocus}
        required={required}
        disabled={disabled}
        readOnly={readonly}
        className={inputClass}
        list={schema.examples ? examplesId<T>(id) : undefined}
        {...inputProps}
        value={value || value === 0 ? value : ""}
        onChange={onChangeOverride || _onChange}
        onBlur={_onBlur}
        onFocus={_onFocus}
        aria-describedby={ariaDescribedByIds<T>(id, !!schema.examples)}
      />
      {children}
      {Array.isArray(schema.examples) ? (
        <datalist id={examplesId<T>(id)}>
          {(schema.examples as string[])
            .concat(
              schema.default && !schema.examples.includes(schema.default)
                ? ([schema.default] as string[])
                : []
            )
            // biome-ignore lint/suspicious/noExplicitAny: <explanation>
            .map((example: any) => {
              return <option key={example} value={example} />;
            })}
        </datalist>
      ) : null}
    </>
  );
}
