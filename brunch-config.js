exports.config = {
  files: {
    javascripts: {
      joinTo: 'js/app.js',
      order: {
        before: [
          /^web\/static\/vendor/
        ]
      }
    },
    stylesheets: {
      defaultExtension: "scss",
      joinTo: "css/app.css"
    },
    templates: {
      joinTo: "js/app.js"
    }
  },

  conventions: {
    assets: /^(web\/static\/assets)/,
    vendor: /^(web\/static\/vendor)/
  },

  paths: {
    watched: ["web/static", "test/static"],
    public: "priv/static"
  },

  plugins: {
    babel: {
      nonStandard: true,
      ignore: [/^(web\/static\/vendor)/, /bower_components/],
      pattern: /\.(es6|jsx|js)$/
    }
  }
};
