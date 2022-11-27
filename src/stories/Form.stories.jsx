import React from "react";

import {Forms} from "./Form";

export default {
  title: "Example/Forms",
  component: Forms,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};


const Template = () => <Forms />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: "Form",
};