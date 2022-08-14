function getComponentTestTemplate(name, path, options) {
  if (options.test) {
    const template = `
      import { act } from 'react-dom/test-utils';
      import { render } from 'utils/test-utils';

      import ${name} from '../${name}';

      describe('<${name} />', () => {
        it('should mount', async () => {
          const { container } = await act(async () => render(<${name} />));

          expect(container).toBeInTheDocument();
        });
      });

    `;

    return {
      outputPath: `${path}/__tests__/${name}.test.js`,
      template,
    };
  }
  return false;
}

export default getComponentTestTemplate;
