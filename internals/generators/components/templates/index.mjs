function getIndexTemplate(name, path, options) {
  const defaultTemplate = `
  import ${name} from './${name}';

  export default ${name};

  `;

  const lazyTemplate = `
  import { lazy } from 'react';
  import Loadable from 'components/Loadable';

  const Lazy${name} = lazy(() => import('./${name}'));

  const ${name} = props => (
    <Loadable>
      <Lazy${name} {...props} />
    </Loadable>
  );

  export default ${name};

  `;

  return {
    outputPath: `${path}/index.js`,
    template: options.lazy ? lazyTemplate : defaultTemplate,
  };
}

export default getIndexTemplate;
