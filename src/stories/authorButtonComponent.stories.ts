import type { Meta, StoryObj } from "@storybook/react";
import AuthorButtonComponent from "../components/authorButtonComponent";
import { withRouter } from "storybook-addon-react-router-v6";
import "../index.css";

const meta: Meta<typeof AuthorButtonComponent> = {
  title: "Components/Author Button",
  component: AuthorButtonComponent,
  decorators: [withRouter],
  argTypes: {
    onClick: {
      action: "handleClick",
    },
  },
};

type Story = StoryObj<typeof AuthorButtonComponent>;

export const TodosLosDatos: Story = {
  args: {
    author: "George R R Martin",
  },
};

export default meta;
