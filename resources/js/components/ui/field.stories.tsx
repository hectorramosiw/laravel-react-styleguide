import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldContent,
  FieldSet,
  FieldLegend,
  FieldGroup,
} from './field';
import { Input } from './input';
import { Checkbox } from './checkbox';
import { Switch } from './switch';
import { Button } from './button';

const meta: Meta<typeof Field> = {
  title: 'Form Fields/Field',
  component: Field,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Field>;

export const Vertical: Story = {
  render: () => (
    <Field>
      <FieldLabel>Email Address</FieldLabel>
      <FieldDescription>We'll never share your email.</FieldDescription>
      <FieldContent>
        <Input type="email" placeholder="you@example.com" />
      </FieldContent>
    </Field>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <Field orientation="horizontal">
      <FieldLabel>Notifications</FieldLabel>
      <Switch />
    </Field>
  ),
};

export const Invalid: Story = {
  render: () => (
    <Field data-invalid="true">
      <FieldLabel>Username</FieldLabel>
      <FieldContent>
        <Input defaultValue="bad-user" aria-invalid="true" />
      </FieldContent>
      <FieldError errors={[{ message: 'This username is already taken.' }]} />
    </Field>
  ),
};

export const Grouped: Story = {
  render: () => (
    <FieldSet>
      <FieldLegend>Account Settings</FieldLegend>
      <FieldGroup>
        <Field>
          <FieldLabel>Username</FieldLabel>
          <FieldContent>
            <Input placeholder="Username" />
          </FieldContent>
        </Field>
        <Field>
          <FieldLabel>Email</FieldLabel>
          <FieldContent>
            <Input type="email" placeholder="Email" />
          </FieldContent>
        </Field>
      </FieldGroup>
      <Button className="w-fit">Save Changes</Button>
    </FieldSet>
  ),
};
