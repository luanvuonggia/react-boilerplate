function getStoryTemplate(name, path, options) {
  if (options.story) {
    const template = `
      import ${name} from './${name}';

      export default {
        title: '${name}',
        component: ${name},
      };

      const Template = (args) => <${name} {...args} />;

      export const FirstStory = {
        args: {},
      };

    `;

    return {
      outputPath: `${path}/${name}.stories.js`,
      template,
    };
  }
  return false;
}

export default getStoryTemplate;
