import React from "react";
import {
  type ArrayFieldTemplateItemType,
  type ArrayFieldTemplateProps,
  type FormContextType,
  getTemplate,
  getUiOptions,
  type RJSFSchema,
  type StrictRJSFSchema,
} from "@rjsf/utils";

export default function ArrayFieldTemplate<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any
>(props: ArrayFieldTemplateProps<T, S, F>) {
  const {
    canAdd,
    disabled,
    idSchema,
    uiSchema,
    items,
    onAddClick,
    readonly,
    registry,
    required,
    schema,
    title,
  } = props;
  const uiOptions = getUiOptions<T, S, F>(uiSchema);
  const ArrayFieldDescriptionTemplate = getTemplate<
    "ArrayFieldDescriptionTemplate",
    T,
    S,
    F
  >("ArrayFieldDescriptionTemplate", registry, uiOptions);
  const ArrayFieldItemTemplate = getTemplate<"ArrayFieldItemTemplate", T, S, F>(
    "ArrayFieldItemTemplate",
    registry,
    uiOptions
  );
  const ArrayFieldTitleTemplate = getTemplate<
    "ArrayFieldTitleTemplate",
    T,
    S,
    F
  >("ArrayFieldTitleTemplate", registry, uiOptions);
  // Button templates are not overridden in the uiSchema
  const {
    ButtonTemplates: { AddButton },
  } = registry.templates;

  return (
    <div className="w-full">
      <div className="flex flex-row justify-between gap-6 border-b border-gray-200 border-dashed pb-2">
        <div>
          <ArrayFieldTitleTemplate
            idSchema={idSchema}
            title={uiOptions.title || title}
            schema={schema}
            uiSchema={uiSchema}
            required={required}
            registry={registry}
          />
          <ArrayFieldDescriptionTemplate
            idSchema={idSchema}
            description={uiOptions.description || schema.description}
            schema={schema}
            uiSchema={uiSchema}
            registry={registry}
          />
        </div>
        <div className="flex items-center">
          {canAdd && (
            <AddButton
              className="array-item-add"
              onClick={onAddClick}
              disabled={disabled || readonly}
              uiSchema={uiSchema}
              registry={registry}
            />
          )}
        </div>
      </div>
      <div className="flex flex-col w-full gap-4">
        {(items || []).map(
          (
            { key, ...itemProps }: ArrayFieldTemplateItemType<T, S, F>,
            index
          ) => (
            <ArrayFieldItemTemplate key={key} {...itemProps} index={index} />
          )
        )}
      </div>
    </div>
  );
}
