const comments = `
/**
 * This file is auto-generated by svgr-cli using the svg-template.cjs source.
 * Before updating, ensure:
 * 1. Run 'npm run icons:create' to regenerate with the latest changes
 */
`;
const defaultTemplate = (variables, { tpl }) => {
  const componentName = (variables.componentName + 'Icon').replace(/^Svg/, '');
  return tpl`
${comments}
${variables.imports};
${variables.interfaces};
export const ${componentName} = (${variables.props}) => (
  ${variables.jsx}
)`;
};

module.exports = defaultTemplate;
