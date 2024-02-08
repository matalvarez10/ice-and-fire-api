import type { Meta, StoryObj } from "@storybook/react";
import { BookCardComponent } from "../components/bookCardComponent";
import { withRouter } from "storybook-addon-react-router-v6";
import "../index.css";

const meta: Meta<typeof BookCardComponent> = {
  title: "Components/Book Card",
  component: BookCardComponent,
  decorators: [withRouter],
};

type Story = StoryObj<typeof BookCardComponent>;

export const TodosLosDatos: Story = {
  args: {
    book: {
      name: "Example Book",
      isbn: "1234567890",
      imgUrl:
        "https://m.media-amazon.com/images/I/71Jzezm8CBL._AC_UF1000,1000_QL80_.jpg",
      numberOfPages: 300,
      publisher: "Publisher Name",
      authors: ["Author 1", "Author 2"],
      country: "Country",
      povCharacters: ["Character 1", "Character 2"],
      characters: ["Character 3", "Character 4"],
      mediaType: "book",
      released: new Date(),
      favorite: false,
    },
  },
};

export default meta;
