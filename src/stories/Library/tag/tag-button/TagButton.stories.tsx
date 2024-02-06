import { ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";

import { TagButton as TagComp } from "./TagButton";

type TagProps = typeof TagComp;

export default {
  title: "Library / Tag / Tag button",
  component: TagComp,
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Zx9GrkFA3l4ISvyZD2q0Qi/Designsystem?node-id=836%3A5757",
    },
    layout: "centered",
  },
  argTypes: {
    hasBackground: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    showCloseIcon: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    isClickable: {
      control: { type: "boolean" },
      defaultValue: true,
    },
  },
};

export const Tag: ComponentStory<TagProps> = (args) => (
  <TagComp {...args}>Vi anbefaler</TagComp>
);
Tag.args = {
  size: "large",
  hasBackground: true,
};

export const TagRemovable: ComponentStory<TagProps> = (args) => (
  <TagComp {...args}>Litteratur</TagComp>
);
TagRemovable.args = {
  showCloseIcon: true,
  hasBackground: true,
};

export const facet: ComponentStory<TagProps> = (args) => (
  <TagComp {...args}>Skønlitteratur (96)</TagComp>
);
facet.args = {
  hasBackground: false,
};
