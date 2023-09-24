/*
npm run create-component ComponentName => It creates a regular component
npm run create-component-props ComponentName => It creates a component with props
*/

const fs = require("fs");
const path = require("path");

function camelToKebab(str) {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const generateProps = process.argv[2] === "--props";
const componentName = generateProps ? process.argv[3] : process.argv[2];

if (!componentName) {
  console.error(
    "You must include the name of the component. Eg: npm run create-component MiComponent"
  );
  process.exit(1);
}

const kebabCaseName = camelToKebab(componentName); // Convert to kebab case
const capitalizedComponentName = capitalize(componentName); // Capitalize the first letter
const componentDirectory = path.join(
  "app",
  "components",
  capitalizedComponentName
);

// Create componente directory
fs.mkdirSync(componentDirectory);

// Create file .tsx
fs.writeFileSync(
  path.join(componentDirectory, `${capitalizedComponentName}.tsx`),
  `import "./${capitalizedComponentName}.scss";
${
  generateProps
    ? `
interface ${capitalizedComponentName}Props {
  // Your props here
}
`
    : ""
}
export default function ${capitalizedComponentName}(${
    generateProps ? `props: ${capitalizedComponentName}Props` : ""
  }) {
  return (
    <div className="${kebabCaseName}">
      
    </div>
  );
}
`
);

// Create file .scss
fs.writeFileSync(
  path.join(componentDirectory, `${capitalizedComponentName}.scss`),
  `@import "@styles/styles";

.${kebabCaseName} {
  position: relative;
}
`
);

console.log(
  `Component ${capitalizedComponentName} was created in ${componentDirectory}`
);
