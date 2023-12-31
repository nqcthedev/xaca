import { Meta, StoryObj } from '@storybook/react';

import Button from '.';

const meta = {
  title: 'Components/atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    children: ''
  }
};
