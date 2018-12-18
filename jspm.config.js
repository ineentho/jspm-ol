SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "jspm-ol/": "src/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.25"
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "jspm-ol": {
      "main": "jspm-ol.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "buffer": "npm:jspm-nodelibs-buffer@0.2.3",
    "fs": "npm:jspm-nodelibs-fs@0.2.1",
    "ol": "npm:ol@5.3.0",
    "path": "npm:jspm-nodelibs-path@0.2.3",
    "process": "npm:jspm-nodelibs-process@0.2.1"
  },
  packages: {
    "npm:ol@5.3.0": {
      "map": {
        "pixelworks": "npm:pixelworks@1.1.0",
        "rbush": "npm:rbush@2.0.2",
        "pbf": "npm:pbf@3.1.0"
      }
    },
    "npm:rbush@2.0.2": {
      "map": {
        "quickselect": "npm:quickselect@1.1.1"
      }
    },
    "npm:pbf@3.1.0": {
      "map": {
        "resolve-protobuf-schema": "npm:resolve-protobuf-schema@2.1.0",
        "ieee754": "npm:ieee754@1.1.12"
      }
    },
    "npm:resolve-protobuf-schema@2.1.0": {
      "map": {
        "protocol-buffers-schema": "npm:protocol-buffers-schema@3.3.2"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.3": {
      "map": {
        "buffer": "npm:buffer@5.2.1"
      }
    },
    "npm:buffer@5.2.1": {
      "map": {
        "ieee754": "npm:ieee754@1.1.12",
        "base64-js": "npm:base64-js@1.3.0"
      }
    }
  }
});
