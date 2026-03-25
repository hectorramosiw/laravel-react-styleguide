import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
} from './input-group';
import { Search, Mail, Copy } from 'lucide-react';
import { Kbd } from './kbd';

const meta: Meta<typeof InputGroup> = {
  title: 'Form Fields/InputGroup',
  component: InputGroup,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof InputGroup>;

export const WithIcon: Story = {
  render: () => (
    <InputGroup>
      <InputGroupAddon>
        <Search className="text-muted-foreground" />
      </InputGroupAddon>
      <InputGroupInput placeholder="Search..." />
    </InputGroup>
  ),
};

export const WithButton: Story = {
  render: () => (
    <InputGroup className="max-w-sm">
      <InputGroupInput placeholder="Email address" />
      <InputGroupAddon align="inline-end">
        <InputGroupButton variant="secondary" size="xs">
          Subscribe
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
};

export const WithKbd: Story = {
  render: () => (
    <InputGroup className="max-w-sm">
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
      <InputGroupInput placeholder="Search documentation" />
      <InputGroupAddon align="inline-end">
        <Kbd>⌘K</Kbd>
      </InputGroupAddon>
    </InputGroup>
  ),
};

export const WithCopyButton: Story = {
  render: () => (
    <InputGroup className="max-w-sm">
      <InputGroupInput readOnly value="https://example.com/share-link" />
      <InputGroupAddon align="inline-end">
        <InputGroupButton variant="ghost" size="icon-xs">
          <Copy className="size-4" />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
};
