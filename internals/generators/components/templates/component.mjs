import { toCamelize } from '../../utils.mjs';

function getCssData(name, cssOption) {
  const camelName = toCamelize(name);

  switch (cssOption) {
    case 'module':
      return {
        import: `import styles from './${name}.module.scss';`,
        className: `className={styles.${camelName}}`,
      };
    case 'scss':
      return {
        import: `import './${name}.scss';`,
        className: `className="${name}"`,
      };
    case 'js': {
      const tag = `${name}Styled`;
      return {
        import: `import styled from 'styled-components';`,
        var: `const ${tag} = styled.div\`\`;`,
        tag,
      };
    }
    default:
      return {};
  }
}

function getMemoData(name, memoOption) {
  return {
    import: memoOption ? `import { memo } from 'react';` : '',
    export: `export default ${memoOption ? `memo(${name});` : `${name};`}`,
  };
}

function getI18nData(name, i18nOption) {
  return {
    import: i18nOption ? `import { useIntl } from 'react-intl';` : '',
    use: i18nOption ? `const { formatMessage } = useIntl();` : '',
    content: i18nOption
      ? `{formatMessage({
      defaultMessage: '${name} Component',
    })}`
      : name,
  };
}

function getComponentTemplate(name, path, options) {
  const cssData = getCssData(name, options.css);
  const memoData = getMemoData(name, options.memo);
  const i18nData = getI18nData(name, options.memo);
  // Template
  const template = `
    ${memoData.import}
    ${i18nData.import}

    ${cssData.import ?? ''}

    ${cssData.var ?? ''}

    const ${name} = () => {
      ${i18nData.use}

      return (
        <${cssData.tag ?? 'div'} ${cssData.className ?? ''}>
          ${i18nData.content}
        </${cssData.tag ?? 'div'}>
      );
    };

    ${memoData.export}

  `;

  return {
    outputPath: `${path}/${name}.jsx`,
    template,
  };
}

// module.exports = component;
export default getComponentTemplate;
