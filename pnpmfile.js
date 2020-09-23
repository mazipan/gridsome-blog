function readPackage(pkg, context) {
  switch(pkg.name) {
    case "gridsome":
      pkg.dependencies = Object.assign({}, pkg.dependencies, {
        "core-js": "^2.6.9",
      });
      break;
  }
  return pkg;
}

module.exports = {
  hooks: {
    readPackage,
  },
};
