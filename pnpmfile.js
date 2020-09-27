function readPackage(pkg, context) {
  switch(pkg.name) {
    case "gridsome":
      pkg.dependencies = Object.assign({}, pkg.dependencies, {
        "core-js": "^3.6.5",
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
