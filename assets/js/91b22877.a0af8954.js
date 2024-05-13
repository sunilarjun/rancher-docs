"use strict";
(self["webpackChunkrancher_docs"] = self["webpackChunkrancher_docs"] || []).push([[45837],{

/***/ 3905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Zo: () => (/* binding */ MDXProvider),
/* harmony export */   kt: () => (/* binding */ createElement)
/* harmony export */ });
/* unused harmony exports MDXContext, useMDXComponents, withMDXComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

var MDXContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
var withMDXComponents = function withMDXComponents(Component) {
  return function (props) {
    var allComponents = useMDXComponents(props.components);
    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      components: allComponents
    }));
  };
};
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);
  }

  return allComponents;
};
var MDXProvider = function MDXProvider(props) {
  var allComponents = useMDXComponents(props.components);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider, {
    value: allComponents
  }, props.children);
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, children);
  }
};
var MDXCreateElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2(_objectSpread2({
      ref: ref
    }, etc), {}, {
      components: propComponents
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2({
    ref: ref
  }, etc));
});
MDXCreateElement.displayName = 'MDXCreateElement';
function createElement (type, props) {
  var args = arguments;
  var mdxType = props && props.mdxType;

  if (typeof type === 'string' || mdxType) {
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = MDXCreateElement;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps.originalType = type;
    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, createElementArgArray);
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, args);
}




/***/ }),

/***/ 49311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* binding */ metadata),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);
/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */ function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}


const frontMatter = {
    title: 'Managing HPAs with kubectl'
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/manage-hpas-with-kubectl",
    "id": "version-2.6/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/manage-hpas-with-kubectl",
    "title": "Managing HPAs with kubectl",
    "description": "This section describes HPA management with kubectl. This document has instructions for how to:",
    "source": "@site/versioned_docs/version-2.6/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/manage-hpas-with-kubectl.md",
    "sourceDirName": "how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler",
    "slug": "/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/manage-hpas-with-kubectl",
    "permalink": "/v2.6/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/manage-hpas-with-kubectl",
    "draft": false,
    "editUrl": "https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/manage-hpas-with-kubectl.md",
    "tags": [],
    "version": "2.6",
    "lastUpdatedAt": 1692045299,
    "formattedLastUpdatedAt": "Aug 14, 2023",
    "frontMatter": {
        "title": "Managing HPAs with kubectl"
    },
    "sidebar": "tutorialSidebar",
    "previous": {
        "title": "Managing HPAs with the Rancher UI",
        "permalink": "/v2.6/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/manage-hpas-with-ui"
    },
    "next": {
        "title": "Testing HPAs with kubectl",
        "permalink": "/v2.6/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/test-hpas-with-kubectl"
    }
};
const assets = {};
const toc = [
    {
        value: 'Basic kubectl Command for Managing HPAs',
        id: 'basic-kubectl-command-for-managing-hpas',
        level: 2
    },
    {
        value: 'HPA Manifest Definition Example',
        id: 'hpa-manifest-definition-example',
        level: 2
    },
    {
        value: 'Configuring HPA to Scale Using Resource Metrics (CPU and Memory)',
        id: 'configuring-hpa-to-scale-using-resource-metrics-cpu-and-memory',
        level: 2
    },
    {
        value: 'Configuring HPA to Scale Using Custom Metrics with Prometheus',
        id: 'configuring-hpa-to-scale-using-custom-metrics-with-prometheus',
        level: 2
    }
];
const layoutProps = {
    toc
};
const MDXLayout = "wrapper";
function MDXContent(_param) {
    var { components } = _param, props = _object_without_properties(_param, [
        "components"
    ]);
    return /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout, _object_spread_props(_object_spread({}, layoutProps, props), {
        components: components,
        mdxType: "MDXLayout"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("head", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("link", {
        rel: "canonical",
        href: "https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/manage-hpas-with-kubectl"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `This section describes HPA management with `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `kubectl`), `. This document has instructions for how to:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `Create an HPA`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `Get information on HPAs`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `Delete an HPA`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `Configure your HPAs to scale with CPU or memory utilization`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `Configure your HPAs to scale using custom metrics, if you use a third-party tool such as Prometheus for metrics`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `You can create, view, and delete HPAs from the Rancher UI. You can also configure them to scale based on CPU or memory usage from the Rancher UI. For more information, refer to `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/v2.6/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/manage-hpas-with-ui"
    }, `Managing HPAs with the Rancher UI`), `. For scaling HPAs based on other metrics than CPU or memory, you still need `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `kubectl`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "basic-kubectl-command-for-managing-hpas"
    }, `Basic kubectl Command for Managing HPAs`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `If you have an HPA manifest file, you can create, manage, and delete HPAs using `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `kubectl`), `:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `Creating HPA`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `With manifest: `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `kubectl create -f <HPA_MANIFEST>`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `Without manifest (Just support CPU): `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `kubectl autoscale deployment hello-world --min=2 --max=5 --cpu-percent=50`))))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `Getting HPA info`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `Basic: `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `kubectl get hpa hello-world`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `Detailed description: `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `kubectl describe hpa hello-world`))))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `Deleting HPA`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "li"
    }, `kubectl delete hpa hello-world`))))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "hpa-manifest-definition-example"
    }, `HPA Manifest Definition Example`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `The HPA manifest is the config file used for managing an HPA with `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `kubectl`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `The following snippet demonstrates use of different directives in an HPA manifest. See the list below the sample to understand the purpose of each directive.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-yml"
    }, `apiVersion: autoscaling/v2beta1
kind: HorizontalPodAutoscaler
metadata:
  name: hello-world
spec:
  scaleTargetRef:
    apiVersion: extensions/v1beta1
    kind: Deployment
    name: hello-world
  minReplicas: 1
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      targetAverageUtilization: 50
  - type: Resource
    resource:
      name: memory
      targetAverageValue: 100Mi
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("table", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("thead", {
        parentName: "table"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "thead"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": null
    }, `Directive`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": null
    }, `Description`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tbody", {
        parentName: "table"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "td"
    }, `apiVersion: autoscaling/v2beta1`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `The version of the Kubernetes `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "td"
    }, `autoscaling`), ` API group in use. This example manifest uses the beta version, so scaling by CPU and memory is enabled.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "td"
    }, `name: hello-world`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `Indicates that HPA is performing autoscaling for the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "td"
    }, `hello-word`), ` deployment.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "td"
    }, `minReplicas: 1`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `Indicates that the minimum number of replicas running can't go below 1.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "td"
    }, `maxReplicas: 10`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `Indicates the maximum number of replicas in the deployment can't go above 10.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "td"
    }, `targetAverageUtilization: 50`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `Indicates the deployment will scale pods up when the average running pod uses more than 50% of its requested CPU.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "td"
    }, `targetAverageValue: 100Mi`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": null
    }, `Indicates the deployment will scale pods up when the average running pod uses more that 100Mi of memory.`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("br", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "configuring-hpa-to-scale-using-resource-metrics-cpu-and-memory"
    }, `Configuring HPA to Scale Using Resource Metrics (CPU and Memory)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Clusters created in Rancher v2.0.7 and higher have all the requirements needed (metrics-server and Kubernetes cluster configuration) to use Horizontal Pod Autoscaler.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Run the following commands to check if metrics are available in your installation:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre"
    }, `$ kubectl top nodes
NAME                              CPU(cores)   CPU%      MEMORY(bytes)   MEMORY%
node-controlplane   196m         9%        1623Mi          42%
node-etcd           80m          4%        1090Mi          28%
node-worker         64m          3%        1146Mi          29%
$ kubectl -n kube-system top pods
NAME                                   CPU(cores)   MEMORY(bytes)
canal-pgldr                            18m          46Mi
canal-vhkgr                            20m          45Mi
canal-x5q5v                            17m          37Mi
canal-xknnz                            20m          37Mi
kube-dns-7588d5b5f5-298j2              0m           22Mi
kube-dns-autoscaler-5db9bbb766-t24hw   0m           5Mi
metrics-server-97bc649d5-jxrlt         0m           12Mi
$ kubectl -n kube-system logs -l k8s-app=metrics-server
I1002 12:55:32.172841       1 heapster.go:71] /metrics-server --source=kubernetes.summary_api:https://kubernetes.default.svc?kubeletHttps=true&kubeletPort=10250&useServiceAccount=true&insecure=true
I1002 12:55:32.172994       1 heapster.go:72] Metrics Server version v0.2.1
I1002 12:55:32.173378       1 configs.go:61] Using Kubernetes client with master "https://kubernetes.default.svc" and version
I1002 12:55:32.173401       1 configs.go:62] Using kubelet port 10250
I1002 12:55:32.173946       1 heapster.go:128] Starting with Metric Sink
I1002 12:55:32.592703       1 serving.go:308] Generated self-signed cert (apiserver.local.config/certificates/apiserver.crt, apiserver.local.config/certificates/apiserver.key)
I1002 12:55:32.925630       1 heapster.go:101] Starting Heapster API server...
[restful] 2018/10/02 12:55:32 log.go:33: [restful/swagger] listing is available at https:///swaggerapi
[restful] 2018/10/02 12:55:32 log.go:33: [restful/swagger] https:///swaggerui/ is mapped to folder /swagger-ui/
I1002 12:55:32.928597       1 serve.go:85] Serving securely on 0.0.0.0:443
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "configuring-hpa-to-scale-using-custom-metrics-with-prometheus"
    }, `Configuring HPA to Scale Using Custom Metrics with Prometheus`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `You can configure HPA to autoscale based on custom metrics provided by third-party software. The most common use case for autoscaling using third-party software is based on application-level metrics (i.e., HTTP requests per second). HPA uses the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `custom.metrics.k8s.io`), ` API to consume these metrics. This API is enabled by deploying a custom metrics adapter for the metrics collection solution.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `For this example, we are going to use `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://prometheus.io/"
    }, `Prometheus`), `. We are beginning with the following assumptions:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `Prometheus is deployed in the cluster.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `Prometheus is configured correctly and collecting proper metrics from pods, nodes, namespaces, etc.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `Prometheus is exposed at the following URL and port: `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "li"
    }, `http://prometheus.mycompany.io:80`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Prometheus is available for deployment in the Rancher v2.0 catalog. Deploy it from Rancher catalog if it isn't already running in your cluster.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `For HPA to use custom metrics from Prometheus, package `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://github.com/DirectXMan12/k8s-prometheus-adapter"
    }, `k8s-prometheus-adapter`), ` is required in the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `kube-system`), ` namespace of your cluster. To install `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `k8s-prometheus-adapter`), `, we are using the Helm chart available at `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://github.com/banzaicloud/banzai-charts"
    }, `banzai-charts`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `Initialize Helm in your cluster.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre"
    }, `# kubectl -n kube-system create serviceaccount tiller
kubectl create clusterrolebinding tiller --clusterrole cluster-admin --serviceaccount=kube-system:tiller
helm init --service-account tiller
`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `Clone the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `banzai-charts`), ` repo from GitHub:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre"
    }, `# git clone https://github.com/banzaicloud/banzai-charts
`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `Install the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `prometheus-adapter`), ` chart, specifying the Prometheus URL and port number.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre"
    }, `# helm install --name prometheus-adapter banzai-charts/prometheus-adapter --set prometheus.url="http://prometheus.mycompany.io",prometheus.port="80" --namespace kube-system
`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `Check that `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `prometheus-adapter`), ` is running properly. Check the service pod and logs in the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `kube-system`), ` namespace.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `Check that the service pod is `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `Running`), `. Enter the following command.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre"
    }, `# kubectl get pods -n kube-system
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `From the resulting output, look for a status of `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `Running`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre"
    }, `NAME                                  READY     STATUS    RESTARTS   AGE
...
prometheus-adapter-prometheus-adapter-568674d97f-hbzfx   1/1       Running   0          7h
...
`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `Check the service logs to make sure the service is running correctly by entering the command that follows.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre"
    }, `# kubectl logs prometheus-adapter-prometheus-adapter-568674d97f-hbzfx -n kube-system
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `Then review the log output to confirm the service is running.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("details", {
        id: "prometheus-logs"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("summary", null, "Prometheus Adaptor Logs"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `...
I0724 10:18:45.696679       1 round_trippers.go:436] GET `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://10.43.0.1:443/api/v1/namespaces/default/pods?labelSelector=app%3Dhello-world"
    }, `https://10.43.0.1:443/api/v1/namespaces/default/pods?labelSelector=app%3Dhello-world`), ` 200 OK in 2 milliseconds
I0724 10:18:45.696695       1 round_trippers.go:442] Response Headers:
I0724 10:18:45.696699       1 round_trippers.go:445]     Date: Tue, 24 Jul 2018 10:18:45 GMT
I0724 10:18:45.696703       1 round_trippers.go:445]     Content-Type: application/json
I0724 10:18:45.696706       1 round_trippers.go:445]     Content-Length: 2581
I0724 10:18:45.696766       1 request.go:836] Response Body: {"kind":"PodList","apiVersion":"v1","metadata":{"selfLink":"/api/v1/namespaces/default/pods","resourceVersion":"6237"},"items":[{"metadata":{"name":"hello-world-54764dfbf8-q6l82","generateName":"hello-world-54764dfbf8-","namespace":"default","selfLink":"/api/v1/namespaces/default/pods/hello-world-54764dfbf8-q6l82","uid":"484cb929-8f29-11e8-99d2-067cac34e79c","resourceVersion":"4066","creationTimestamp":"2018-07-24T10:06:50Z","labels":{"app":"hello-world","pod-template-hash":"1032089694"},"annotations":{"cni.projectcalico.org/podIP":"10.42.0.7/32"},"ownerReferences":`, `[{"apiVersion":"extensions/v1beta1","kind":"ReplicaSet","name":"hello-world-54764dfbf8","uid":"4849b9b1-8f29-11e8-99d2-067cac34e79c","controller":true,"blockOwnerDeletion":true}]`, `},"spec":{"volumes":`, `[{"name":"default-token-ncvts","secret":{"secretName":"default-token-ncvts","defaultMode":420}}]`, `,"containers":[{"name":"hello-world","image":"rancher/hello-world","ports":`, `[{"containerPort":80,"protocol":"TCP"}]`, `,"resources":{"requests":{"cpu":"500m","memory":"64Mi"}},"volumeMounts":`, `[{"name":"default-token-ncvts","readOnly":true,"mountPath":"/var/run/secrets/kubernetes.io/serviceaccount"}]`, `,"terminationMessagePath":"/dev/termination-log","terminationMessagePolicy":"File","imagePullPolicy":"Always"}],"restartPolicy":"Always","terminationGracePeriodSeconds":30,"dnsPolicy":"ClusterFirst","serviceAccountName":"default","serviceAccount":"default","nodeName":"34.220.18.140","securityContext":{},"schedulerName":"default-scheduler","tolerations":`, `[{"key":"node.kubernetes.io/not-ready","operator":"Exists","effect":"NoExecute","tolerationSeconds":300},{"key":"node.kubernetes.io/unreachable","operator":"Exists","effect":"NoExecute","tolerationSeconds":300}]`, `},"status":{"phase":"Running","conditions":`, `[{"type":"Initialized","status":"True","lastProbeTime":null,"lastTransitionTime":"2018-07-24T10:06:50Z"},{"type":"Ready","status":"True","lastProbeTime":null,"lastTransitionTime":"2018-07-24T10:06:54Z"},{"type":"PodScheduled","status":"True","lastProbeTime":null,"lastTransitionTime":"2018-07-24T10:06:50Z"}]`, `,"hostIP":"34.220.18.140","podIP":"10.42.0.7","startTime":"2018-07-24T10:06:50Z","containerStatuses":`, `[{"name":"hello-world","state":{"running":{"startedAt":"2018-07-24T10:06:54Z"}},"lastState":{},"ready":true,"restartCount":0,"image":"rancher/hello-world:latest","imageID":"docker-pullable://rancher/hello-world@sha256:4b1559cb4b57ca36fa2b313a3c7dde774801aa3a2047930d94e11a45168bc053","containerID":"docker://cce4df5fc0408f03d4adf82c90de222f64c302bf7a04be1c82d584ec31530773"}]`, `,"qosClass":"Burstable"}}]}
I0724 10:18:45.699525       1 api.go:74] GET `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "http://prometheus-server.prometheus.34.220.18.140.xip.io/api/v1/query?query=sum%28rate%28container_fs_read_seconds_total%7Bpod_name%3D%22hello-world-54764dfbf8-q6l82%22%2Ccontainer_name%21%3D%22POD%22%2Cnamespace%3D%22default%22%7D%5B5m%5D%29%29+by+%28pod_name%29&time=1532427525.697"
    }, `http://prometheus-server.prometheus.34.220.18.140.xip.io/api/v1/query?query=sum%28rate%28container_fs_read_seconds_total%7Bpod_name%3D%22hello-world-54764dfbf8-q6l82%22%2Ccontainer_name%21%3D%22POD%22%2Cnamespace%3D%22default%22%7D%5B5m%5D%29%29+by+%28pod_name%29&time=1532427525.697`), ` 200 OK
I0724 10:18:45.699620       1 api.go:93] Response Body: {"status":"success","data":{"resultType":"vector","result":[{"metric":{"pod_name":"hello-world-54764dfbf8-q6l82"},"value":`, `[1532427525.697,"0"]`, `}]}}
I0724 10:18:45.699939       1 wrap.go:42] GET /apis/custom.metrics.k8s.io/v1beta1/namespaces/default/pods/%2A/fs_read?labelSelector=app%3Dhello-world: (12.431262ms) 200 [`, `[kube-controller-manager/v1.10.1 (linux/amd64) kubernetes/d4ab475/system:serviceaccount:kube-system:horizontal-pod-autoscaler]`, ` 10.42.0.0:24268]
I0724 10:18:51.727845       1 request.go:836] Request Body: {"kind":"SubjectAccessReview","apiVersion":"authorization.k8s.io/v1beta1","metadata":{"creationTimestamp":null},"spec":{"nonResourceAttributes":{"path":"/","verb":"get"},"user":"system:anonymous","group":`, `["system:unauthenticated"]`, `},"status":{"allowed":false}}
...`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, `Check that the metrics API is accessible from kubectl.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `If you are accessing the cluster directly, enter your Server URL in the kubectl config in the following format: `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `https://<Kubernetes_URL>:6443`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre"
    }, `# kubectl get --raw /apis/custom.metrics.k8s.io/v1beta1
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `If the API is accessible, you should receive output that's similar to what follows.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("details", {
        id: "custom-metrics-api-response"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("summary", null, "API Response"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `{"kind":"APIResourceList","apiVersion":"v1","groupVersion":"custom.metrics.k8s.io/v1beta1","resources":[{"name":"pods/fs_usage_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/memory_rss","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/spec_cpu_period","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/cpu_cfs_throttled","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/fs_io_time","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/fs_read","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/fs_sector_writes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/cpu_user","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/last_seen","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/tasks_state","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/spec_cpu_quota","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/start_time_seconds","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/fs_limit_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/fs_write","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/memory_cache","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/memory_usage_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/cpu_cfs_periods","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/cpu_cfs_throttled_periods","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/fs_reads_merged","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/memory_working_set_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/network_udp_usage","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/fs_inodes_free","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/fs_inodes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/fs_io_time_weighted","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/memory_failures","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/memory_swap","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/spec_cpu_shares","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/spec_memory_swap_limit_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/cpu_usage","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/fs_io_current","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/fs_writes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/memory_failcnt","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/fs_reads","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/fs_writes_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/fs_writes_merged","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/network_tcp_usage","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/memory_max_usage_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/spec_memory_limit_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/spec_memory_reservation_limit_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/cpu_load_average_10s","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/cpu_system","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/fs_reads_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/fs_sector_reads","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `}]}`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `If you are accessing the cluster through Rancher, enter your Server URL in the kubectl config in the following format: `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `https://<RANCHER_URL>/k8s/clusters/<CLUSTER_ID>`), `. Add the suffix `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `/k8s/clusters/<CLUSTER_ID>`), ` to API path.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre"
    }, `# kubectl get --raw /k8s/clusters/<CLUSTER_ID>/apis/custom.metrics.k8s.io/v1beta1
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `If the API is accessible, you should receive output that's similar to what follows.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("details", {
        id: "custom-metrics-api-response-rancher"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("summary", null, "API Response"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `{"kind":"APIResourceList","apiVersion":"v1","groupVersion":"custom.metrics.k8s.io/v1beta1","resources":[{"name":"pods/fs_usage_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/memory_rss","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/spec_cpu_period","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/cpu_cfs_throttled","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/fs_io_time","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/fs_read","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/fs_sector_writes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/cpu_user","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/last_seen","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/tasks_state","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/spec_cpu_quota","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/start_time_seconds","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/fs_limit_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/fs_write","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/memory_cache","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/memory_usage_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/cpu_cfs_periods","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/cpu_cfs_throttled_periods","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/fs_reads_merged","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/memory_working_set_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/network_udp_usage","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/fs_inodes_free","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/fs_inodes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/fs_io_time_weighted","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/memory_failures","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/memory_swap","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/spec_cpu_shares","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/spec_memory_swap_limit_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/cpu_usage","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/fs_io_current","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/fs_writes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/memory_failcnt","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/fs_reads","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/fs_writes_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/fs_writes_merged","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/network_tcp_usage","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/memory_max_usage_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/spec_memory_limit_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/spec_memory_reservation_limit_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/cpu_load_average_10s","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/cpu_system","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/fs_reads_bytes","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `},{"name":"pods/fs_sector_reads","singularName":"","namespaced":true,"kind":"MetricValueList","verbs":`, `["get"]`, `}]}`)))));
}
MDXContent.isMDXComponent = true;


/***/ })

}]);