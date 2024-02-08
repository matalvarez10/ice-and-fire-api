import type { Meta, StoryObj } from "@storybook/react";
import CustomLinkComponent from "../components/customLinkComponent";
import { withRouter } from "storybook-addon-react-router-v6";
import "../index.css";

const meta: Meta<typeof CustomLinkComponent> = {
  title: "Components/Link",
  component: CustomLinkComponent,
  decorators: [withRouter],
};

type Story = StoryObj<typeof CustomLinkComponent>;

export const LinkText: Story = {
  args: {
    text: "Category",
    toRoute: "/",
  },
};

export default meta;
