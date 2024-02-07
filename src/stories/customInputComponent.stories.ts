import type { Meta, StoryObj } from "@storybook/react";
import CustomInputComponent from "../components/customInputComponent";
import { withRouter } from "storybook-addon-react-router-v6";
import "../index.css";

const meta: Meta<typeof CustomInputComponent> = {
  title: "Components/Inputs para Form",
  component: CustomInputComponent,
  decorators: [withRouter],
};

type Story = StoryObj<typeof CustomInputComponent>;

export const DateInput: Story = {
  args: {
    type: "date",
    labelText: "Released",
    name:"released",
    required : true
  },
};
export const TextInput: Story = {
  args: {
    type: "text",
    labelText: "Example",
    name:"name",
    required : true
  },
};

export default meta;
