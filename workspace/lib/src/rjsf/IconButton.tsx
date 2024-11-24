import React from "react";
import { AiOutlineArrowDown } from "@react-icons/all-files/ai/AiOutlineArrowDown";
import { AiOutlineArrowUp } from "@react-icons/all-files/ai/AiOutlineArrowUp";
import { IoIosCopy } from "@react-icons/all-files/io/IoIosCopy";
import { IoIosRemove } from "@react-icons/all-files/io/IoIosRemove";
import {
  type FormContextType,
  type IconButtonProps,
  type RJSFSchema,
  type StrictRJSFSchema,
  TranslatableString,
} from "@rjsf/utils";
import clsx from "clsx";
import Button, { ButtonVariant } from "./Button";

export default function IconButton<
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  F extends FormContextType = any
>(
  props: IconButtonProps<T, S, F> & {
    variant?: ButtonVariant;
  }
) {
  const {
    icon,
    iconType,
    className,
    uiSchema,
    registry,
    disabled,
    ...otherProps
  } = props;

  return (
    <Button
      size="xs"
      className={clsx(
        "rounded-none first-of-type:rounded-l-lg last-of-type:rounded-r-lg",
        { "w-full": iconType === "block" },
        { "cursor-not-allowed opacity-50": disabled },
        className
      )}
      {...otherProps}
    >
      {icon}
    </Button>
  );
}

export function CopyButton<
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  F extends FormContextType = any
>(props: IconButtonProps<T, S, F>) {
  const {
    registry: { translateString },
  } = props;
  return (
    <IconButton
      title={translateString(TranslatableString.CopyButton)}
      {...props}
      icon={<IoIosCopy />}
    />
  );
}

export function MoveDownButton<
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  F extends FormContextType = any
>(props: IconButtonProps<T, S, F>) {
  const {
    registry: { translateString },
  } = props;
  return (
    <IconButton
      title={translateString(TranslatableString.MoveDownButton)}
      {...props}
      icon={<AiOutlineArrowDown />}
    />
  );
}

export function MoveUpButton<
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  F extends FormContextType = any
>(props: IconButtonProps<T, S, F>) {
  const {
    registry: { translateString },
  } = props;
  return (
    <IconButton
      title={translateString(TranslatableString.MoveUpButton)}
      {...props}
      icon={<AiOutlineArrowUp />}
    />
  );
}

export function RemoveButton<
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  F extends FormContextType = any
>(props: IconButtonProps<T, S, F>) {
  const {
    registry: { translateString },
  } = props;
  return (
    <IconButton
      title={translateString(TranslatableString.RemoveButton)}
      {...props}
      variant="red"
      icon={<IoIosRemove />}
    />
  );
}
