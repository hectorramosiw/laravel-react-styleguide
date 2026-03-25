import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from './textarea';
import { Field, FieldLabel, FieldDescription, FieldContent } from './field';

const meta: Meta<typeof Textarea> = {
  title: 'Form Fields/Textarea',
  component: Textarea,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: 'Type your message here.',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Type your message here.',
  },
};

export const WithField: Story = {
  render: (args) => (
    <Field>
      <FieldLabel>Bio</FieldLabel>
      <FieldDescription>Write a few sentences about yourself.</FieldDescription>
      <FieldContent>
        <Textarea {...args} />
      </FieldContent>
    </Field>
  ),
  args: {
    placeholder: 'I am a software engineer...',
  },
};
