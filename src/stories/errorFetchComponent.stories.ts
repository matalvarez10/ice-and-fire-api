import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import ErrorFetchComponent from "../components/errorFetchComponent";
import "../index.css";

const meta: Meta<typeof ErrorFetchComponent> = {
  title: "Components/Error Fetch",
  component: ErrorFetchComponent,
  decorators: [withRouter],
};

type Story = StoryObj<typeof ErrorFetchComponent>;

export const ErrorWhenFetchingData: Story = {
  args: {
  },
};

export default meta;
