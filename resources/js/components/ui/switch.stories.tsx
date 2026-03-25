import type { Meta, StoryObj } from '@storybook/react-vite';
import { Switch } from './switch';
import { Field, FieldLabel, FieldDescription, FieldContent } from './field';

const meta: Meta<typeof Switch> = {
  title: 'Form Fields/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['default', 'sm'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithField: Story = {
  render: (args) => (
    <Field orientation="horizontal">
      <div className="grid flex-1 gap-1.5 leading-none">
        <FieldLabel htmlFor="airplane-mode">Airplane Mode</FieldLabel>
        <FieldDescription>
          Disable all wireless communications.
        </FieldDescription>
      </div>
      <Switch id="airplane-mode" {...args} />
    </Field>
  ),
};
