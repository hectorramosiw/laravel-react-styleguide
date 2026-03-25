import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from './checkbox';
import { Field, FieldLabel, FieldDescription, FieldContent } from './field';

const meta: Meta<typeof Checkbox> = {
  title: 'Form Fields/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    defaultChecked: true,
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
      <Checkbox id="terms" {...args} />
      <div className="grid gap-1.5 leading-none">
        <FieldLabel htmlFor="terms">Accept terms and conditions</FieldLabel>
        <FieldDescription>
          You agree to our Terms of Service and Privacy Policy.
        </FieldDescription>
      </div>
    </Field>
  ),
};
