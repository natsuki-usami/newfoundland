import type {Meta, StoryObj} from '@storybook/react';
import DigHeaderNotice from "./DigHeaderNotice";

const meta = {
  title: 'DigHeaderNotice',
  component: DigHeaderNotice,
  parameters:{
    layout: 'centred'
  },
  tags:['autodocs'],
}satisfies Meta<typeof DigHeaderNotice>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};