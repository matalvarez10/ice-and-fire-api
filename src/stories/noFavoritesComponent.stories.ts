import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import NoFavoritesComponent from "../components/noFavoritesComponent";
import "../index.css";

const meta: Meta<typeof NoFavoritesComponent> = {
  title: "Components/No Favorites Found",
  component: NoFavoritesComponent,
  decorators: [withRouter],
};

type Story = StoryObj<typeof NoFavoritesComponent>;

export const MainMessage: Story = {
  args: {},
};

export default meta;
