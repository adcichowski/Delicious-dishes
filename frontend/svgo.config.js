module.exports = {
  multipass: true, // boolean. false by default
  js2svg: {
    indent: 0, // string with spaces or number of spaces. 4 by default
    pretty: false, // boolean, false by default
  },
  plugins: [
    "removeDoctype",
    "removeXMLProcInst",
    "removeComments",
    "removeMetadata",
    // "removeXMLNS",
    "removeEditorsNSData",
    "cleanupAttrs",
    "inlineStyles",
    "minifyStyles",
    "convertStyleToAttrs",
    "cleanupIDs",
    "removeRasterImages",
    "removeUselessDefs",
    "cleanupNumericValues",
    "cleanupListOfValues",
    "convertColors",
    "removeUnknownsAndDefaults",
    "removeNonInheritableGroupAttrs",
    "removeUselessStrokeAndFill",
    "removeViewBox",
    "cleanupEnableBackground",
    "removeHiddenElems",
    "removeEmptyText",
    "convertShapeToPath",
    "moveElemsAttrsToGroup",
    "moveGroupAttrsToElems",
    "collapseGroups",
    "convertPathData",
    "convertEllipseToCircle",
    "convertTransform",
    "removeEmptyAttrs",
    "removeEmptyContainers",
    "mergePaths",
    "removeUnusedNS",
    "reusePaths",
    "sortAttrs",
    "sortDefsChildren",
    "removeTitle",
    "removeDesc",
    "removeDimensions",
    "removeStyleElement",
    "removeScriptElement",
  ],
};
