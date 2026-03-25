import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './input';
import { Field, FieldLabel, FieldDescription, FieldError, FieldContent } from './field';

const meta: Meta<typeof Input> = {
  title: 'Form Fields/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Enter something...',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password...',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'Disabled input',
  },
};

export const WithField: Story = {
  render: (args) => (
    <Field>
      <FieldLabel>Username</FieldLabel>
      <FieldDescription>Choose a unique username.</FieldDescription>
      <FieldContent>
        <Input {...args} />
      </FieldContent>
    </Field>
  ),
  args: {
    placeholder: 'johndoe',
  },
};

export const WithError: Story = {
  render: (args) => (
    <Field data-invalid="true">
      <FieldLabel>Email</FieldLabel>
      <FieldContent>
        <Input {...args} aria-invalid="true" />
      </FieldContent>
      <FieldError errors={[{ message: 'Please enter a valid email address.' }]} />
    </Field>
  ),
  args: {
    type: 'email',
    defaultValue: 'invalid-email',
  },
};
