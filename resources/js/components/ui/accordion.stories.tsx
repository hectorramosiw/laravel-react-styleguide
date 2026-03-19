import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './accordion';
import { Badge } from './badge';
import { InfoIcon, SettingsIcon, UserIcon } from 'lucide-react';

const meta: Meta<typeof Accordion> = {
  title: 'UI/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'multiple'],
      description: 'Determines whether one or multiple items can be opened at the same time.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Single: Story = {
  args: {
    type: 'single',
    collapsible: true,
  },
  render: (args) => (
    <Accordion {...args} className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiple: Story = {
  args: {
    type: 'multiple',
  },
  render: (args) => (
    <Accordion {...args} className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
        <AccordionContent>
          Yes, by setting the <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">type</code> prop to <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">&quot;multiple&quot;</code>.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Why would I use this?</AccordionTrigger>
        <AccordionContent>
          It&apos;s useful when you want the user to be able to see multiple pieces of information simultaneously.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Disabled: Story = {
  args: {
    type: 'single',
    collapsible: true,
  },
  render: (args) => (
    <Accordion {...args} className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Active Item</AccordionTrigger>
        <AccordionContent>
          This item is active and can be toggled normally.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" disabled>
        <AccordionTrigger>Disabled Item</AccordionTrigger>
        <AccordionContent>
          This content will never be seen.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const CustomTrigger: Story = {
  args: {
    type: 'single',
    collapsible: true,
  },
  render: (args) => (
    <Accordion {...args} className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="hover:no-underline">
          <div className="flex items-center gap-3">
            <UserIcon className="size-4 text-primary" />
            <span>Profile Settings</span>
            <Badge variant="outline" className="ml-2">New</Badge>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          Manage your public profile and account settings here.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="hover:no-underline">
          <div className="flex items-center gap-3">
            <SettingsIcon className="size-4 text-primary" />
            <span>Security</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          Configure your password and two-factor authentication.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="hover:no-underline">
          <div className="flex items-center gap-3">
            <InfoIcon className="size-4 text-primary" />
            <span>Help Center</span>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          Get help with your account and find answers to common questions.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
