import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Column, ColumnProps } from './components/Column/Column';

export default {
  title: 'Example/Column',
  component: Column,
} as Meta;

const Template: Story<ColumnProps> = (args: any) => <Column {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    children: "test",
    size: "full",
    border: {
        borderType: 'solid',
        borderColor: "black",
        borderSize: "1px"
    }
}