import type { Meta, StoryObj } from '@storybook/react';
import { BookCardComponent } from "../components/bookCardComponent";
import { withRouter } from 'storybook-addon-react-router-v6';



const meta: Meta<typeof BookCardComponent> = {
    title: 'Components/Book Card',
    component: BookCardComponent,
    decorators: [withRouter],
  };

  type Story = StoryObj<typeof BookCardComponent>;
  
export const asd: Story = {

  args:{
    book: {
        name: 'Example Book',
        isbn: '1234567890',
        imgUrl: 'https://example.com/book-cover.jpg',
        numberOfPages: 300,
        publisher: 'Publisher Name',
        authors: ['Author 1', 'Author 2'],
        country: 'Country',
        povCharacters: ['Character 1', 'Character 2'],
        characters: ['Character 3', 'Character 4'],
        mediaType: "book",
        released: new Date(),        
      }
  }

};


      
  export default meta;