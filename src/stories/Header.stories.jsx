import React from 'react';

import { Header } from './Header';

export default {
  
  backgroundColor: 'blue',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const blue = Template.bind({});
blue.args = {
  
  backgroundColor:'blue'
};
export const pink = Template.bind({});
pink.args = {
  
  backgroundColor:'pink'
};
export const yellow = Template.bind({});
yellow.args = {
 
  backgroundColor:'yellow'
};


