import { Meta, StoryObj } from "@storybook/react";
import Navbar from "@/components/Navbar";
import { Logo } from "@/templates/Logo";

const meta: Meta<typeof Navbar> = {
  title: "components/Navbar",
  component: Navbar,
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {
    items: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "About",
        href: "/about",
      },
      {
        label: "Contact",
        href: "/contact",
      },
    ],
    logo: <Logo xl color="text-white" siteName="site!" />,
  },
};

export const Empty: Story = {
  args: {},
};
