import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Columns, ColumnsProps } from './components/Columns/Columns';
import * as ColumnStories from './Column.stories';

export default {
  title: 'Example/Columns',
  component: Columns,
} as Meta;

const Template: Story<ColumnsProps> = (args: any) => <Columns {...args} />;

export const BasicColumns = Template.bind({});
BasicColumns.args = {
  ...ColumnStories.BasicColumn.args
}