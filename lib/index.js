/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.customerStore = {
    extend: 'Ext.data.Store',
    storeId: 'testStore',
    alias: ['store.teststore'],
    data: [
        { firstName: 'Peter', lastName: 'Venkman' },
        { firstName: 'Egon', lastName: 'Spengler' },
        { firstName: 'Ray', lastName: 'Stantz' },
        { firstName: 'Winston', lastName: 'Zeddemore' }
    ]
};
exports.default = Ext.define('MyApp.store.testStore', exports.customerStore);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = __webpack_require__(0);
exports.customerStore = store_1.customerStore;
var model_1 = __webpack_require__(2);
exports.default = model_1.default;
var view_1 = __webpack_require__(3);
var appOptions = {
    name: 'Fiddle',
    views: ['MyApp.view.MainView'],
    stores: [],
    launch: function () {
        Ext.Msg.alert('Fiddle', 'Welcome to Sencha Fiddle!');
        Ext.create('Ext.panel.Panel', {
            layout: 'fit',
            renderTo: Ext.get('root'),
            items: [
                view_1.default
            ]
        });
        return true;
    }
};
Ext.application(appOptions);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.mainViewModel = {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',
    data: {
        title: 'AppStub',
        buttonText: 'Alert',
        boundText: ''
    },
    formulas: {}
};
exports.default = Ext.define('MyApp.view.MainViewModel', exports.mainViewModel);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = __webpack_require__(0);
var grid = {
    xtype: 'grid',
    title: 'Sample Grid',
    store: store_1.customerStore,
    layout: 'fit',
    columns: [
        { text: "First Name", flex: .3, dataIndex: "firstName", editor: 'textfield' },
        {
            text: "Last Name",
            flex: .7,
            dataIndex: "lastName",
            editable: true,
            editor: {
                xtype: 'textfield',
                allowBlank: false
            },
            renderer: function (value, metaData) {
                metaData.style = "border: 1px gray solid;";
                return value;
            }
        }
    ]
};
var textInput = {
    xtype: 'textfield',
    fieldLabel: 'Button Text',
    bind: {
        value: '{boundText}'
    }
};
var fieldset = {
    xtype: 'fieldset',
    title: 'Fieldset',
    bind: {
        title: '{boundText}'
    },
    defaults: {
        labelWidth: 150
    },
    items: [
        textInput
    ]
};
var button = {
    xtype: 'button',
    text: 'start',
    handler: function () {
        console.log('First Button Clicked.');
    }
};
var viewOptions = {
    xtype: 'panel',
    extend: 'Ext.panel.Panel',
    items: [
        fieldset,
        button,
        grid
    ],
    viewModel: { type: 'main' }
};
var view = Ext.define('MyApp.view.MainView', viewOptions);
exports.default = view;


/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map