import React from 'react';
import Button from './Button';

export default {
	title: 'Button',
	component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	variant: 'primary',
	children: 'Primary Button',
};

Primary.args = {
	variant: 'secondary',
	children: 'Secondary Button',
};
