
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Layout } from './Layout';

export default {
    title: 'Pages/LeftNavBar',
    component: Layout,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = () => <Layout />;
export const LeftNavBar = Template.bind({});