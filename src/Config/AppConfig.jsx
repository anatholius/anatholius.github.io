import React from 'react';
import RouteConfig from "./RouteConfig";

export default class AppConfig {
    root = '#app';
    theme = 'auto';
    name = 'Anatholius Programowanie - biuro';
    id = 'pl.anatholius.biuro';
    data = {};

    masterDetailBreakpoint = 800;
    routes = [];

    popup = {
        closeOnEscape: true,
    };
    sheet = {
        closeOnEscape: true,
    };
    popover = {
        closeOnEscape: true,
    };
    actions = {
        closeOnEscape: true,
    };
    on = {
        init: (app) => {
            console.log('F7 init');
            // console.log('this', this);
        },

    };
    serviceWorker = {
        path: 'anatholius-gh-sw.js',
        scope: '/',
    };
    methods = {};

    /**
     * Tworzy i dodaje konfigurację routa z komponentem
     *
     * @param {string} name - nazwa trasy
     * @param {string} path - ścieżka trasy
     * @param {Object} config - nazwa komponentu strony
     * @param {Object} [options] - opcje trasy
     */
    addRoute = (name, path, config, options) => {
        const route = this.createSimpleRoute(name, path, config, options);
        this.routes.push(route);
    };
    /**
     * Tworzy i zwraca konfigurację routa z komponentem
     *
     * @param {string} name - nazwa trasy
     * @param {string} path - ścieżka trasy
     * @param {Object} config - nazwa komponentu strony
     * @param {Object} [options] - opcje trasy
     */
    createSimpleRoute = (name, path, config, options) => {
        let route = new RouteConfig(name, path);

        config.options = options;
        for (let key in config) {
            if (config.hasOwnProperty(key) && config[key]) {
                if (key === 'options') {
                    route[key] = Object.assign(route[key], config[key]);
                } else {
                    route[key] = config[key];
                }
            }
        }
        route.options = Object.assign(route.options, {...options});

        return route;
    };

    /**
     * Tworzy i dodaje konfigurację trasy kart
     *
     * @param {string} name - nazwa trasy
     * @param {string} path - ścieżka trasy
     * @param {Array} tabs - nazwa komponentu strony
     * @param {Object} config - nazwa komponentu strony
     * @param {Object} [options] - opcje trasy
     */
    addTabsRoute = (name, path, tabs, config, options) => {
        let route = new RouteConfig(name, path);

        const tabsArray = [];
        for (let tabRoute of tabs) {
            if (tabRoute instanceof RouteConfig) {
                console.log('tabRoute', tabRoute);
                tabsArray.push(tabRoute.getConfig());
            } else {
                const newTabRoute = new RouteConfig(tabRoute.name, tabRoute.path);
                for (let key in tabRoute) {
                    if (tabRoute.hasOwnProperty(key) && tabRoute[key]) {
                        if (key === 'options') {
                            newTabRoute[key] = Object.assign(newTabRoute[key], tabRoute[key]);
                        } else {
                            newTabRoute[key] = tabRoute[key];
                        }
                    }
                }
                tabsArray.push(newTabRoute.getConfig());
            }
        }
        route.tabs = tabsArray;

        for (let key in config) {
            if (config.hasOwnProperty(key) && config[key]) {
                route[key] = config[key];
            }
        }

        route.options = Object.assign(route.options, {...options});

        this.routes.push(route.getConfig());
    };


    /**
     * Tworzy i dodaje konfigurację trasy złożonej z podrzędnych subtras
     *
     * @param name - nazwa trasy
     * @param path - ścieżka trasy
     * @param {Array} detailRoutes - tablica routów z detalami
     * @param options - opcje trasy
     */
    addDetailsRoute = (name, path, detailRoutes, options) => {
        let route = new RouteConfig(name, path);

        const tabs = [];
        for (let routeDetail of detailRoutes) {
            if (routeDetail instanceof RouteConfig) {
                tabs.push(routeDetail);
            } else {
                const detailRoute = new RouteConfig(name, path);
                detailRoute.component = routeDetail.component;
                tabs.push(detailRoute);
            }
        }
        route.detailRoutes = tabs;
        route.options = Object.assign(route.options, {...options});

        this.routes.push(route);
    };

    /**
     * Tworzy i dodaje konfigurację routa asynchronicznego
     *
     * @param name - nazwa trasy
     * @param path - ścieżka trasy
     * @param config - nazwa komponentu strony
     * @param options - opcje trasy
     */
    addAsyncRoute = (name, path, config, options) => {
        let route = this.createAsyncRoute(name, path, config, options);
        this.routes.push(route);
    };

    createAsyncRoute(name, path, config, options) {
        let route = new RouteConfig(name, path);

        if (!options.props) {
            options.props = {};
        }
        if (config.type) {
            options = Object.assign(options, {
                type: config.type,
            });
        }
        route.options = Object.assign(route.options, options);
        route.async = this._getAsync(config, options);

        return route;
    }

    _getAsync(config, options) {
        return (routeTo, routeFrom, resolve, reject) => {
            config.component.contextType = React.createContext(options.context);

            const configResolve = {
                config: {},
                options: options,
            };
            if (!config.hasOwnProperty('type')) {
                configResolve.config.component = config.component;
            } else {
                configResolve.config[config.type] = {
                    component: config.component,
                };
            }
            configResolve.options.props = routeTo.params;

            resolve(configResolve.config, configResolve.options);
        };
    }

    getConfig() {
        return {
            id: this.id,
            root: this.root,
            theme: this.theme,
            name: this.name,
            data: this.data,
            routes: this.routes,
            serviceWorker: this.serviceWorker,
            methods: this.methods,
            on: this.on,
        };
    }

}
