"use strict";
(self["webpackChunkrancher_docs"] = self["webpackChunkrancher_docs"] || []).push([[2578],{

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

/***/ 62:
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
    title: '在 vSphere 环境中安装 Rancher'
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "reference-guides/best-practices/rancher-server/on-premises-rancher-in-vsphere",
    "id": "version-2.8/reference-guides/best-practices/rancher-server/on-premises-rancher-in-vsphere",
    "title": "在 vSphere 环境中安装 Rancher",
    "description": "本指南概述了在 vSphere 环境中在 RKE Kubernetes 集群上安装 Rancher 的参考架构，以及 VMware 记录的标准 vSphere 最佳实践。",
    "source": "@site/i18n/zh/docusaurus-plugin-content-docs/version-2.8/reference-guides/best-practices/rancher-server/on-premises-rancher-in-vsphere.md",
    "sourceDirName": "reference-guides/best-practices/rancher-server",
    "slug": "/reference-guides/best-practices/rancher-server/on-premises-rancher-in-vsphere",
    "permalink": "/zh/v2.8/reference-guides/best-practices/rancher-server/on-premises-rancher-in-vsphere",
    "draft": false,
    "editUrl": "https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.8/reference-guides/best-practices/rancher-server/on-premises-rancher-in-vsphere.md",
    "tags": [],
    "version": "2.8",
    "lastUpdatedAt": 1696627994,
    "formattedLastUpdatedAt": "2023年10月6日",
    "frontMatter": {
        "title": "在 vSphere 环境中安装 Rancher"
    },
    "sidebar": "tutorialSidebar",
    "previous": {
        "title": "Rancher Server 的最佳实践",
        "permalink": "/zh/v2.8/reference-guides/best-practices/rancher-server/"
    },
    "next": {
        "title": "Rancher 部署策略",
        "permalink": "/zh/v2.8/reference-guides/best-practices/rancher-server/rancher-deployment-strategy"
    }
};
const assets = {};
const toc = [
    {
        value: '1. 负载均衡器注意事项',
        id: '1-负载均衡器注意事项',
        level: 2
    },
    {
        value: '利用容错和高可用性',
        id: '利用容错和高可用性',
        level: 3
    },
    {
        value: '备份负载均衡器配置',
        id: '备份负载均衡器配置',
        level: 3
    },
    {
        value: '配置健康检查',
        id: '配置健康检查',
        level: 3
    },
    {
        value: '利用外部负载均衡器',
        id: '利用外部负载均衡器',
        level: 3
    },
    {
        value: '安全访问 Rancher',
        id: '安全访问-rancher',
        level: 3
    },
    {
        value: '2. 虚拟机注意事项',
        id: '2-虚拟机注意事项',
        level: 2
    },
    {
        value: '根据 Rancher 文档确定虚拟机的大小',
        id: '根据-rancher-文档确定虚拟机的大小',
        level: 3
    },
    {
        value: '利用虚拟机模板来构建环境',
        id: '利用虚拟机模板来构建环境',
        level: 3
    },
    {
        value: '利用 DRS 反亲和规则（可能的话）在 ESXi 主机上分离 Rancher 集群节点',
        id: '利用-drs-反亲和规则可能的话在-esxi-主机上分离-rancher-集群节点',
        level: 3
    },
    {
        value: '利用 DRS 反亲和规则（可能的话）在 Datastore 上分离 Rancher 集群节点',
        id: '利用-drs-反亲和规则可能的话在-datastore-上分离-rancher-集群节点',
        level: 3
    },
    {
        value: '为 Kubernetes 配置合适的虚拟机',
        id: '为-kubernetes-配置合适的虚拟机',
        level: 3
    },
    {
        value: '3. 网络注意事项',
        id: '3-网络注意事项',
        level: 2
    },
    {
        value: '利用 ETCD 节点之间的低延迟和高带宽连接',
        id: '利用-etcd-节点之间的低延迟和高带宽连接',
        level: 3
    },
    {
        value: '为虚拟机提供固定的 IP 地址',
        id: '为虚拟机提供固定的-ip-地址',
        level: 3
    },
    {
        value: '4. 存储注意事项',
        id: '4-存储注意事项',
        level: 2
    },
    {
        value: '在 ETCD 节点上使用 SSD 磁盘',
        id: '在-etcd-节点上使用-ssd-磁盘',
        level: 3
    },
    {
        value: '5. 备份和灾难恢复',
        id: '5-备份和灾难恢复',
        level: 2
    },
    {
        value: '定期备份管理集群',
        id: '定期备份管理集群',
        level: 3
    },
    {
        value: '备份 Rancher 集群节点虚拟机',
        id: '备份-rancher-集群节点虚拟机',
        level: 3
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
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `本指南概述了在 vSphere 环境中在 RKE Kubernetes 集群上安装 Rancher 的参考架构，以及 VMware 记录的标准 vSphere 最佳实践。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("figcaption", null, "解决方案概述"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "解决方案概述",
        src: (__webpack_require__(92990)/* ["default"] */ .Z),
        width: "576",
        height: "482"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "1-负载均衡器注意事项"
    }, `1. 负载均衡器注意事项`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `你需要使用一个负载均衡器将流量转发到 RKE 节点上的 Rancher 工作负载。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "利用容错和高可用性"
    }, `利用容错和高可用性`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `请充分利用具有继承高可用功能的外部（硬件或软件）负载均衡器（如：F5、NSX-T、Keepalived 等）。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "备份负载均衡器配置"
    }, `备份负载均衡器配置`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `在灾难恢复时，可用的负载均衡器配置可以加快恢复过程。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "配置健康检查"
    }, `配置健康检查`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `让负载均衡器在健康检查失败时自动将节点标记为不可用。例如，NGINX 可以通过以下配置来实现这一功能：`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `max_fails=3 fail_timeout=5s`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "利用外部负载均衡器"
    }, `利用外部负载均衡器`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `避免在管理集群内使用软件负载均衡器。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "安全访问-rancher"
    }, `安全访问 Rancher`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `将防火墙/ACL 规则配置为只允许 Rancher 访问。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "2-虚拟机注意事项"
    }, `2. 虚拟机注意事项`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "根据-rancher-文档确定虚拟机的大小"
    }, `根据 Rancher 文档确定虚拟机的大小`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `请参阅`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "../../../pages-for-subheaders/installation-requirements.md"
    }, `安装要求`), `。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "利用虚拟机模板来构建环境"
    }, `利用虚拟机模板来构建环境`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `为了保证跨环境部署的虚拟机的一致性，你可以考虑使用虚拟机模板形式的黄金镜像（golden image）。你可以使用 Packer 来实现，从而增加更多自定义选项。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "利用-drs-反亲和规则可能的话在-esxi-主机上分离-rancher-集群节点"
    }, `利用 DRS 反亲和规则（可能的话）在 ESXi 主机上分离 Rancher 集群节点`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `这样可以确保节点虚拟机分布在多台 ESXi 主机上，从而防止主机级别的单点故障。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "利用-drs-反亲和规则可能的话在-datastore-上分离-rancher-集群节点"
    }, `利用 DRS 反亲和规则（可能的话）在 Datastore 上分离 Rancher 集群节点`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `这样可以确保节点虚拟机分布在多个 Datastore 上，从而防止 Datastore 级别的单点故障。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "为-kubernetes-配置合适的虚拟机"
    }, `为 Kubernetes 配置合适的虚拟机`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `在部署节点时，请遵循 K8s 和 etcd 的最佳实践，其中包括禁用 swap，检查集群中的所有主机之间是否有良好的网络连接，为每个节点使用唯一的主机名、MAC 地址和 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `product_uuids`), `。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "3-网络注意事项"
    }, `3. 网络注意事项`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "利用-etcd-节点之间的低延迟和高带宽连接"
    }, `利用 ETCD 节点之间的低延迟和高带宽连接`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `尽可能在单个数据中心内部署 etcd 成员，来避免延迟开销并减少网络分区的可能性。大多数情况下，1Gb 的连接就足够了。对于大型集群，10Gb 的连接可以缩短恢复备份所需的时间。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "为虚拟机提供固定的-ip-地址"
    }, `为虚拟机提供固定的 IP 地址`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `你可以为使用的所有节点都配置一个静态 IP。如果使用 DHCP，则每个节点都应该有一个 DHCP 预留，以确保节点分配到相同的 IP 地址。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "4-存储注意事项"
    }, `4. 存储注意事项`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "在-etcd-节点上使用-ssd-磁盘"
    }, `在 ETCD 节点上使用 SSD 磁盘`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `ETCD 对写入延迟非常敏感。因此，你可以尽量使用 SSD 磁盘来提高写入性能。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "5-备份和灾难恢复"
    }, `5. 备份和灾难恢复`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "定期备份管理集群"
    }, `定期备份管理集群`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Rancher 将数据存储在它所在的 Kubernetes 集群的 ETCD datastore 中。与其它 Kubernetes 集群一样，你需要对该集群进行频繁且经过测试的备份。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "备份-rancher-集群节点虚拟机"
    }, `备份 Rancher 集群节点虚拟机`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `将 Rancher 管理节点的虚拟机纳入标准的虚拟机备份策略中。`));
}
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 92990:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/rancher-on-prem-vsphere-8d50429a21f63cdfeaf22e0e26639255.svg");

/***/ })

}]);