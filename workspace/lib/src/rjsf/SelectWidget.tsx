import React from "react";
import {
  ariaDescribedByIds,
  enumOptionsIndexForValue,
  enumOptionsValueForIndex,
  type FormContextType,
  type RJSFSchema,
  type StrictRJSFSchema,
  type WidgetProps,
} from "@rjsf/utils";
import type { ChangeEvent, FocusEvent } from "react";
import clsx from "clsx";

export default function SelectWidget<
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  F extends FormContextType = any
>({
  schema,
  id,
  options,
  required,
  disabled,
  readonly,
  value,
  multiple,
  autofocus,
  onChange,
  onBlur,
  onFocus,
  placeholder,
  rawErrors = [],
}: WidgetProps<T, S, F>) {
  const { enumOptions, enumDisabled, emptyValue: optEmptyValue } = options;

  const emptyValue = multiple ? [] : "";

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  function getValue(event: FocusEvent | ChangeEvent | any, multiple?: boolean) {
    if (multiple) {
      return (
        [].slice
          // biome-ignore lint/suspicious/noExplicitAny: <explanation>
          .call(event.target.options as any)
          // biome-ignore lint/suspicious/noExplicitAny: <explanation>
          .filter((o: any) => o.selected)
          // biome-ignore lint/suspicious/noExplicitAny: <explanation>
          .map((o: any) => o.value)
      );
    }
    return event.target.value;
  }
  const selectedIndexes = enumOptionsIndexForValue<S>(
    value,
    enumOptions,
    multiple
  );

  return (
    <select
      id={id}
      name={id}
      value={
        typeof selectedIndexes === "undefined" ? emptyValue : selectedIndexes
      }
      required={required}
      multiple={multiple}
      disabled={disabled || readonly}
      autoFocus={autofocus}
      className={clsx(
        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
        rawErrors.length > 0 && "border-red-500"
      )}
      onBlur={
        onBlur &&
        ((event: FocusEvent) => {
          const newValue = getValue(event, multiple);
          onBlur(
            id,
            enumOptionsValueForIndex<S>(newValue, enumOptions, optEmptyValue)
          );
        })
      }
      onFocus={
        onFocus &&
        ((event: FocusEvent) => {
          const newValue = getValue(event, multiple);
          onFocus(
            id,
            enumOptionsValueForIndex<S>(newValue, enumOptions, optEmptyValue)
          );
        })
      }
      onChange={(event: ChangeEvent) => {
        const newValue = getValue(event, multiple);
        onChange(
          enumOptionsValueForIndex<S>(newValue, enumOptions, optEmptyValue)
        );
      }}
      aria-describedby={ariaDescribedByIds<T>(id)}
    >
      {!multiple && schema.default === undefined && (
        <option value="" className="bg-muted">
          {placeholder}
        </option>
      )}
      {(enumOptions as any).map(({ value, label }: any, i: number) => {
        const disabled: any =
          Array.isArray(enumDisabled) &&
          (enumDisabled as any).indexOf(value) != -1;
        return (
          <option
            key={i}
            id={label}
            value={String(i)}
            disabled={disabled}
            className="bg-muted"
          >
            {label}
          </option>
        );
      })}
    </select>
  );
}
