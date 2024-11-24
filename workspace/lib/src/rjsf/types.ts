import type { ThemeProps } from "@rjsf/core";

import type {
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
  TemplatesType,
  WidgetProps,
  FieldTemplateProps,
  ArrayFieldTemplateProps,
  ObjectFieldTemplateProps,
  BaseInputTemplateProps,
  TitleFieldProps,
  DescriptionFieldProps,
  ErrorListProps,
  IconButtonProps,
  SubmitButtonProps,
  WrapIfAdditionalTemplateProps,
  RegistryFieldsType,
  RegistryWidgetsType,
  UiSchema,
  ValidatorType,
  CustomValidator,
  ErrorSchema,
  ErrorTransformer,
  TranslatableString,
} from "@rjsf/utils";

import type { ComponentType } from "react";

export interface RJSFTailwindTheme<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any
> {
  templates: Partial<TemplatesType<T, S, F>>;
  widgets: ThemeProps<T, S, F>["widgets"];
}

export type {
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
  TemplatesType,
  WidgetProps,
  FieldTemplateProps,
  ArrayFieldTemplateProps,
  ObjectFieldTemplateProps,
  BaseInputTemplateProps,
  TitleFieldProps,
  DescriptionFieldProps,
  ErrorListProps,
  IconButtonProps,
  SubmitButtonProps,
  WrapIfAdditionalTemplateProps,
  RegistryFieldsType,
  RegistryWidgetsType,
  UiSchema,
  ValidatorType,
  CustomValidator,
  ErrorSchema,
  ErrorTransformer,
  TranslatableString,
  ComponentType,
};
