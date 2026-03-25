import type { Meta, StoryObj } from '@storybook/react-vite';
import { RadioGroup, RadioGroupItem } from './radio-group';
import { Field, FieldLabel, FieldDescription, FieldContent } from './field';

const meta: Meta<typeof RadioGroup> = {
  title: 'Form Fields/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: (args) => (
    <RadioGroup defaultValue="comfortable" {...args}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <FieldLabel htmlFor="r1">Default</FieldLabel>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <FieldLabel htmlFor="r2">Comfortable</FieldLabel>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <FieldLabel htmlFor="r3">Compact</FieldLabel>
      </div>
    </RadioGroup>
  ),
};

export const WithField: Story = {
  render: (args) => (
    <Field>
      <FieldLabel>Density</FieldLabel>
      <FieldDescription>Choose how tight the layout should be.</FieldDescription>
      <FieldContent>
        <RadioGroup defaultValue="comfortable" {...args}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="q1" />
            <FieldLabel htmlFor="q1">Default</FieldLabel>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="comfortable" id="q2" />
            <FieldLabel htmlFor="q2">Comfortable</FieldLabel>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="compact" id="q3" />
            <FieldLabel htmlFor="q3">Compact</FieldLabel>
          </div>
        </RadioGroup>
      </FieldContent>
    </Field>
  ),
};
