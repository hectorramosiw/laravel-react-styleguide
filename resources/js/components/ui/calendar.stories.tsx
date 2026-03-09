import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Calendar } from "./calendar"
import { addDays } from "date-fns"

const meta: Meta<typeof Calendar> = {
  title: "UI/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
}

export default meta
type Story = StoryObj<typeof Calendar>

export const Default: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow-sm"
      />
    )
  },
}

export const Multiple: Story = {
  render: () => {
    const [dates, setDates] = React.useState<Date[] | undefined>([new Date()])
    return (
      <Calendar
        mode="multiple"
        selected={dates}
        onSelect={setDates}
        className="rounded-md border shadow-sm"
      />
    )
  },
}

export const Range: Story = {
  render: () => {
    const [range, setRange] = React.useState<{ from: Date | undefined; to: Date | undefined } | undefined>({
      from: new Date(),
      to: addDays(new Date(), 7),
    })
    return (
      <Calendar
        mode="range"
        selected={range}
        onSelect={setRange}
        className="rounded-md border shadow-sm"
      />
    )
  },
}

export const WithOutsideDays: Story = {
  args: {
    showOutsideDays: true,
    className: "rounded-md border shadow-sm",
  },
  render: (args) => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return (
      <Calendar
        {...args}
        mode="single"
        selected={date}
        onSelect={setDate}
      />
    )
  },
}

export const HideOutsideDays: Story = {
  args: {
    showOutsideDays: false,
    className: "rounded-md border shadow-sm",
  },
  render: (args) => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return (
      <Calendar
        {...args}
        mode="single"
        selected={date}
        onSelect={setDate}
      />
    )
  },
}
