import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import ErrorComponent from "../components/errorComponent";
import "../index.css";

const meta: Meta<typeof ErrorComponent> = {
  title: "Components/Error",
  component: ErrorComponent,
  decorators: [withRouter],
};

type Story = StoryObj<typeof ErrorComponent>;

export const ErrorMessage: Story = {
  args: {},
};

export default meta;
