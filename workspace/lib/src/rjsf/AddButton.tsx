import React from "react";
import { BsPlus } from "@react-icons/all-files/bs/BsPlus";
import {
  FormContextType,
  IconButtonProps,
  RJSFSchema,
  StrictRJSFSchema,
  TranslatableString,
} from "@rjsf/utils";
import { clsx } from "clsx";
import Button from "./Button";

export default function AddButton<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any
>({ uiSchema, registry, ...props }: IconButtonProps<T, S, F>) {
  const { translateString } = registry;
  return (
    <Button
      variant="default"
      size="sm"
      {...props}
      className={clsx(props.className)}
      title={translateString(TranslatableString.AddItemButton)}
    >
      <BsPlus />
    </Button>
  );
}
