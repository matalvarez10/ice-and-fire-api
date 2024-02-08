import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import "../index.css";
import LoadingComponent from "../components/loadingComponent";

const meta: Meta<typeof LoadingComponent> = {
  title: "Components/Loading",
  component: LoadingComponent,
  decorators: [withRouter],
};

type Story = StoryObj<typeof LoadingComponent>;

export const LoadingAnimation: Story = {
  args: {},
};

export default meta;
