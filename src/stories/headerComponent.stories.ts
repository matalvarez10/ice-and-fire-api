import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import HeaderComponent from "../components/headerComponent";
import "../index.css";

const meta: Meta<typeof HeaderComponent> = {
  title: "Components/Header",
  component: HeaderComponent,
  decorators: [withRouter],
};

type Story = StoryObj<typeof HeaderComponent>;

export const CompleteHeader: Story = {
  args: {},
};

export default meta;
