import Form from "@pankajpatel/rjsf-tailwind";
import type { RJSFSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import "./App.css";
import "@pankajpatel/rjsf-tailwind/styles.css";

const ctaSchema: RJSFSchema = {
  title: "CTA",
  type: "object",
  properties: {
    label: {
      title: "Label",
      type: "string",
    },
    link: {
      title: "Link",
      type: "string",
    },
  },
  required: ["label", "link"],
};

const linkSchema: RJSFSchema = {
  title: "Link",
  type: "object",
  properties: {
    cta: ctaSchema,
  },
  required: ["cta"],
};

const imageSchema: RJSFSchema = {
  title: "Image",
  type: "object",
  properties: {
    asset: {
      title: "Asset",
      type: "object",
      properties: {
        url: {
          title: "URL",
          type: "string",
        },
      },
      required: ["url"],
    },
  },
  required: ["asset"],
};

const cardSchema: RJSFSchema = {
  title: "Card",
  type: "object",
  properties: {
    title: {
      title: "Title",
      type: "string",
    },
    cta: ctaSchema,
    image: imageSchema,
  },
  required: ["title", "cta", "image"],
};

const columnSchema: RJSFSchema = {
  title: "Column",
  type: "object",
  properties: {
    title: {
      title: "Title",
      type: "string",
    },
    links: {
      title: "Links",
      type: "array",
      items: linkSchema,
    },
  },
  required: ["links"],
};

const megaMenuSchema: RJSFSchema = {
  title: "Mega Menu",
  type: "object",
  properties: {
    title: {
      title: "Title",
      type: "string",
    },
    columns: {
      title: "Columns",
      type: "array",
      items: columnSchema,
    },
    cards: {
      title: "Cards",
      type: "array",
      items: cardSchema,
    },
  },
  required: ["columns", "cards"],
};

const mainFormSchema: RJSFSchema = {
  title: "Menu",
  type: "array",
  items: {
    oneOf: [megaMenuSchema, linkSchema],
  },
};

const uiSchema = {
  description: {
    "ui:widget": "textarea",
    "ui:options": {
      rows: 5,
    },
  },
  tags: {
    "ui:options": {
      addable: true,
      orderable: true,
      removable: true,
    },
  },
};

function App() {
  const handleSubmit = ({ formData }) => {
    console.log("Form submitted:", formData);
  };

  return (
    <div className="">
      <Form
        schema={mainFormSchema}
        validator={validator}
        uiSchema={uiSchema}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
