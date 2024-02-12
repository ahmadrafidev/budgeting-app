import { StorybookConfig } from '@storybook/react-native';

const main: StorybookConfig = {
  stories: ['./stories/**/*.stories.?(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/addon-ondevice-controls', 
    '@storybook/addon-ondevice-actions', 
    '@storybook/addon-a11y', 
    '@storybook/addon-storysource',
    '@storybook/addon-designs',
    'storybook-dark-mode',
    '@storybook/addon-actions',
    '@storybook/addon-controls',
    '@storybook/addon-backgrounds',
    '@storybook/addon-measure',
    '@storybook/addon-outline'
  ],
};

export default main;
