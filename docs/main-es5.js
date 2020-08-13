function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _landing_page_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./landing-page/landing-page/landing-page.component */
    "./src/app/landing-page/landing-page/landing-page.component.ts");
    /* harmony import */


    var _auth_auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth/auth.component */
    "./src/app/auth/auth.component.ts");

    var routes = [{
      path: '',
      component: _landing_page_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__["LandingPageComponent"]
    }, {
      path: 'auth',
      component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"]
    }, {
      path: 'auth/sign-in',
      component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"]
    }, {
      path: 'auth/sign-up',
      component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"]
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'home/store',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'home/chat',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'home/timer',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'home/tasks',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'home/calendar',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'home/settings',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'slumber-party';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _home_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/menu/menu.component */
    "./src/app/home/menu/menu.component.ts");
    /* harmony import */


    var _home_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home/header/header.component */
    "./src/app/home/header/header.component.ts");
    /* harmony import */


    var _home_activity_container_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./home/activity-container.component */
    "./src/app/home/activity-container.component.ts");
    /* harmony import */


    var _panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./panel-header/panel-header.component */
    "./src/app/panel-header/panel-header.component.ts");
    /* harmony import */


    var _home_activities_store_store_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./home/activities/store/store.component */
    "./src/app/home/activities/store/store.component.ts");
    /* harmony import */


    var _home_activities_chat_chat_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./home/activities/chat/chat.component */
    "./src/app/home/activities/chat/chat.component.ts");
    /* harmony import */


    var _home_activities_timer_timer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./home/activities/timer/timer.component */
    "./src/app/home/activities/timer/timer.component.ts");
    /* harmony import */


    var _home_activities_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./home/activities/tasks/tasks.component */
    "./src/app/home/activities/tasks/tasks.component.ts");
    /* harmony import */


    var _home_activities_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./home/activities/calendar/calendar.component */
    "./src/app/home/activities/calendar/calendar.component.ts");
    /* harmony import */


    var _landing_page_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./landing-page/landing-page/landing-page.component */
    "./src/app/landing-page/landing-page/landing-page.component.ts");
    /* harmony import */


    var _home_room_room_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./home/room/room.component */
    "./src/app/home/room/room.component.ts");
    /* harmony import */


    var _auth_goals_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./auth/goals/sign-in/sign-in.component */
    "./src/app/auth/goals/sign-in/sign-in.component.ts");
    /* harmony import */


    var _auth_goals_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./auth/goals/sign-up/sign-up.component */
    "./src/app/auth/goals/sign-up/sign-up.component.ts");
    /* harmony import */


    var _auth_auth_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./auth/auth.component */
    "./src/app/auth/auth.component.ts");
    /* harmony import */


    var _auth_goal_container_goal_container_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./auth/goal-container/goal-container.component */
    "./src/app/auth/goal-container/goal-container.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _home_activities_settings_settings_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./home/activities/settings/settings.component */
    "./src/app/home/activities/settings/settings.component.ts");
    /* harmony import */


    var _home_activities_settings_room_link_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./home/activities/settings/room-link.directive */
    "./src/app/home/activities/settings/room-link.directive.ts");
    /* harmony import */


    var _home_activities_settings_room_link_room_link_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./home/activities/settings/room-link/room-link.component */
    "./src/app/home/activities/settings/room-link/room-link.component.ts");
    /* harmony import */


    var _home_activities_chat_chat_message_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./home/activities/chat/chat-message.directive */
    "./src/app/home/activities/chat/chat-message.directive.ts");
    /* harmony import */


    var _home_activities_chat_chat_message_chat_message_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./home/activities/chat/chat-message/chat-message.component */
    "./src/app/home/activities/chat/chat-message/chat-message.component.ts");
    /* harmony import */


    var _home_activities_settings_room_invitation_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./home/activities/settings/room-invitation.directive */
    "./src/app/home/activities/settings/room-invitation.directive.ts");
    /* harmony import */


    var _home_activities_settings_room_invitation_room_invitation_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./home/activities/settings/room-invitation/room-invitation.component */
    "./src/app/home/activities/settings/room-invitation/room-invitation.component.ts");
    /* harmony import */


    var _join_room_join_room_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./join-room/join-room.component */
    "./src/app/join-room/join-room.component.ts");
    /* harmony import */


    var _home_activities_tasks_list_directive__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./home/activities/tasks/list.directive */
    "./src/app/home/activities/tasks/list.directive.ts");
    /* harmony import */


    var _home_activities_tasks_list_list_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./home/activities/tasks/list/list.component */
    "./src/app/home/activities/tasks/list/list.component.ts");
    /* harmony import */


    var _home_activities_tasks_list_task_task_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./home/activities/tasks/list/task/task.component */
    "./src/app/home/activities/tasks/list/task/task.component.ts");
    /* harmony import */


    var _home_activities_tasks_list_task_directive__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./home/activities/tasks/list/task.directive */
    "./src/app/home/activities/tasks/list/task.directive.ts");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_34__["DragDropModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _home_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"], _home_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _home_activity_container_component__WEBPACK_IMPORTED_MODULE_8__["ActivityContainerComponent"], _panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_9__["PanelHeaderComponent"], _home_activities_store_store_component__WEBPACK_IMPORTED_MODULE_10__["StoreComponent"], _home_activities_chat_chat_component__WEBPACK_IMPORTED_MODULE_11__["ChatComponent"], _home_activities_timer_timer_component__WEBPACK_IMPORTED_MODULE_12__["TimerComponent"], _home_activities_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_13__["TasksComponent"], _home_activities_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_14__["CalendarComponent"], _landing_page_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_15__["LandingPageComponent"], _home_room_room_component__WEBPACK_IMPORTED_MODULE_16__["RoomComponent"], _auth_goal_container_goal_container_component__WEBPACK_IMPORTED_MODULE_20__["GoalContainerComponent"], _auth_goals_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_17__["SignInComponent"], _auth_goals_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_18__["SignUpComponent"], _auth_auth_component__WEBPACK_IMPORTED_MODULE_19__["AuthComponent"], _home_activities_settings_settings_component__WEBPACK_IMPORTED_MODULE_22__["SettingsComponent"], _home_activities_settings_room_link_directive__WEBPACK_IMPORTED_MODULE_23__["RoomLinkDirective"], _home_activities_settings_room_link_room_link_component__WEBPACK_IMPORTED_MODULE_24__["RoomLinkComponent"], _home_activities_chat_chat_message_directive__WEBPACK_IMPORTED_MODULE_25__["ChatMessageDirective"], _home_activities_chat_chat_message_chat_message_component__WEBPACK_IMPORTED_MODULE_26__["ChatMessageComponent"], _home_activities_settings_room_invitation_directive__WEBPACK_IMPORTED_MODULE_27__["RoomInvitationDirective"], _home_activities_settings_room_invitation_room_invitation_component__WEBPACK_IMPORTED_MODULE_28__["RoomInvitationComponent"], _join_room_join_room_component__WEBPACK_IMPORTED_MODULE_29__["JoinRoomComponent"], _home_activities_tasks_list_directive__WEBPACK_IMPORTED_MODULE_30__["ListDirective"], _home_activities_tasks_list_list_component__WEBPACK_IMPORTED_MODULE_31__["ListComponent"], _home_activities_tasks_list_task_task_component__WEBPACK_IMPORTED_MODULE_32__["TaskComponent"], _home_activities_tasks_list_task_directive__WEBPACK_IMPORTED_MODULE_33__["TaskDirective"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_34__["DragDropModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _home_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"], _home_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _home_activity_container_component__WEBPACK_IMPORTED_MODULE_8__["ActivityContainerComponent"], _panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_9__["PanelHeaderComponent"], _home_activities_store_store_component__WEBPACK_IMPORTED_MODULE_10__["StoreComponent"], _home_activities_chat_chat_component__WEBPACK_IMPORTED_MODULE_11__["ChatComponent"], _home_activities_timer_timer_component__WEBPACK_IMPORTED_MODULE_12__["TimerComponent"], _home_activities_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_13__["TasksComponent"], _home_activities_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_14__["CalendarComponent"], _landing_page_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_15__["LandingPageComponent"], _home_room_room_component__WEBPACK_IMPORTED_MODULE_16__["RoomComponent"], _auth_goal_container_goal_container_component__WEBPACK_IMPORTED_MODULE_20__["GoalContainerComponent"], _auth_goals_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_17__["SignInComponent"], _auth_goals_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_18__["SignUpComponent"], _auth_auth_component__WEBPACK_IMPORTED_MODULE_19__["AuthComponent"], _home_activities_settings_settings_component__WEBPACK_IMPORTED_MODULE_22__["SettingsComponent"], _home_activities_settings_room_link_directive__WEBPACK_IMPORTED_MODULE_23__["RoomLinkDirective"], _home_activities_settings_room_link_room_link_component__WEBPACK_IMPORTED_MODULE_24__["RoomLinkComponent"], _home_activities_chat_chat_message_directive__WEBPACK_IMPORTED_MODULE_25__["ChatMessageDirective"], _home_activities_chat_chat_message_chat_message_component__WEBPACK_IMPORTED_MODULE_26__["ChatMessageComponent"], _home_activities_settings_room_invitation_directive__WEBPACK_IMPORTED_MODULE_27__["RoomInvitationDirective"], _home_activities_settings_room_invitation_room_invitation_component__WEBPACK_IMPORTED_MODULE_28__["RoomInvitationComponent"], _join_room_join_room_component__WEBPACK_IMPORTED_MODULE_29__["JoinRoomComponent"], _home_activities_tasks_list_directive__WEBPACK_IMPORTED_MODULE_30__["ListDirective"], _home_activities_tasks_list_list_component__WEBPACK_IMPORTED_MODULE_31__["ListComponent"], _home_activities_tasks_list_task_task_component__WEBPACK_IMPORTED_MODULE_32__["TaskComponent"], _home_activities_tasks_list_task_directive__WEBPACK_IMPORTED_MODULE_33__["TaskDirective"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_34__["DragDropModule"]],
          entryComponents: [_home_activities_settings_room_link_room_link_component__WEBPACK_IMPORTED_MODULE_24__["RoomLinkComponent"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/auth.component.ts":
  /*!****************************************!*\
    !*** ./src/app/auth/auth.component.ts ***!
    \****************************************/

  /*! exports provided: AuthComponent */

  /***/
  function srcAppAuthAuthComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthComponent", function () {
      return AuthComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _goal_container_goal_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./goal-container/goal-container.component */
    "./src/app/auth/goal-container/goal-container.component.ts");

    var AuthComponent = /*#__PURE__*/function () {
      function AuthComponent() {
        _classCallCheck(this, AuthComponent);
      }

      _createClass(AuthComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AuthComponent;
    }();

    AuthComponent.ɵfac = function AuthComponent_Factory(t) {
      return new (t || AuthComponent)();
    };

    AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AuthComponent,
      selectors: [["app-auth"]],
      decls: 2,
      vars: 0,
      consts: [[1, "goal-container-parent"]],
      template: function AuthComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-goal-container");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_goal_container_goal_container_component__WEBPACK_IMPORTED_MODULE_1__["GoalContainerComponent"]],
      styles: [".goal-container-parent[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    app-goal-container[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        height: 100%;\r\n    }\r\n    \r\n    .goal-container-parent[_ngcontent-%COMP%] {\r\n        align-items: flex-start;\r\n        justify-content: flex-start;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLFNBQVM7SUFLVCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJO1FBQ0ksV0FBVztRQUNYLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSx1QkFBdUI7UUFDdkIsMkJBQTJCO0lBQy9CO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2F1dGguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nb2FsLWNvbnRhaW5lci1wYXJlbnQge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIGFwcC1nb2FsLWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZ29hbC1jb250YWluZXItcGFyZW50IHtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICB9XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-auth',
          templateUrl: './auth.component.html',
          styleUrls: ['./auth.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/goal-container/goal-container.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/auth/goal-container/goal-container.component.ts ***!
    \*****************************************************************/

  /*! exports provided: GoalContainerComponent */

  /***/
  function srcAppAuthGoalContainerGoalContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoalContainerComponent", function () {
      return GoalContainerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _goals_goals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../goals/goals */
    "./src/app/auth/goals/goals.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _goals_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../goals/sign-in/sign-in.component */
    "./src/app/auth/goals/sign-in/sign-in.component.ts");
    /* harmony import */


    var _goals_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../goals/sign-up/sign-up.component */
    "./src/app/auth/goals/sign-up/sign-up.component.ts");

    var GoalContainerComponent = /*#__PURE__*/function () {
      function GoalContainerComponent(location) {
        _classCallCheck(this, GoalContainerComponent);

        this.location = location;
      }

      _createClass(GoalContainerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.location.path() == '/auth') {
            this.location.replaceState('/auth/sign-in');
          }

          this.updateGoal(this.location.path(), this.location.getState());
          this.location.onUrlChange(this.updateGoal);
        }
      }, {
        key: "onMsgReceived",
        value: function onMsgReceived(msg) {
          if (msg.has("error")) {
            console.log(msg["error"]);
          } else {}
        }
      }, {
        key: "updateGoal",
        value: function updateGoal(url, state) {
          var goal = url.replace('/auth', '');
          goal = goal.replace('/', '');
          var visibleGoals = document.getElementsByClassName("visible");
          var i = 0;

          for (var _i = 0; _i < visibleGoals.length; _i++) {
            var visibleGoal = document.getElementsByClassName("visible")[_i];

            visibleGoal.classList.remove("visible");
          }

          if (_goals_goals__WEBPACK_IMPORTED_MODULE_1__["goals"].includes(goal)) {
            var newVisibleGoal = document.getElementById(goal);
            newVisibleGoal.classList.add("visible");
          }
        }
      }]);

      return GoalContainerComponent;
    }();

    GoalContainerComponent.ɵfac = function GoalContainerComponent_Factory(t) {
      return new (t || GoalContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]));
    };

    GoalContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GoalContainerComponent,
      selectors: [["app-goal-container"]],
      decls: 6,
      vars: 0,
      consts: [[1, "header"], [1, "goals"], ["id", "sign-in", 1, "goal"], ["id", "sign-up", 1, "goal"]],
      template: function GoalContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\uD83D\uDCA4\uD83C\uDF89 Slumber Party");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-sign-in", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-sign-up", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_goals_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__["SignInComponent"], _goals_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"]],
      styles: [".goals[_ngcontent-%COMP%] {\r\n    min-width: 80ch;\r\n    min-height: 16em;\r\n    display: flex;\r\n    flex: 1 0 0;\r\n}\r\n\r\n.goal[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.visible[_ngcontent-%COMP%] {\r\n    flex: 1 0 0;\r\n    background-color: #F5F5FC;\r\n    display: block;\r\n}\r\n\r\n.header[_ngcontent-%COMP%] {\r\n    display: block;\r\n    text-align: center;\r\n    padding: 0.2em 0 0.2em 0;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    display: contents;\r\n    text-decoration: none;\r\n    color: #F5F5FC;\r\n    margin: 0;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .goals[_ngcontent-%COMP%] {\r\n        min-width: 0;\r\n        min-height: 0;\r\n        height: 100%;\r\n        width: 100%;\r\n    }\r\n\r\n    h1[_ngcontent-%COMP%] {\r\n        font-size: 1.5em;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9nb2FsLWNvbnRhaW5lci9nb2FsLWNvbnRhaW5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsU0FBUztBQUNiOztBQUVBO0lBQ0k7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLFlBQVk7UUFDWixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvZ29hbC1jb250YWluZXIvZ29hbC1jb250YWluZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nb2FscyB7XHJcbiAgICBtaW4td2lkdGg6IDgwY2g7XHJcbiAgICBtaW4taGVpZ2h0OiAxNmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXg6IDEgMCAwO1xyXG59XHJcblxyXG4uZ29hbCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4udmlzaWJsZSB7XHJcbiAgICBmbGV4OiAxIDAgMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RkM7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAuMmVtIDAgMC4yZW0gMDtcclxufVxyXG5cclxuaDEge1xyXG4gICAgZGlzcGxheTogY29udGVudHM7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogI0Y1RjVGQztcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmdvYWxzIHtcclxuICAgICAgICBtaW4td2lkdGg6IDA7XHJcbiAgICAgICAgbWluLWhlaWdodDogMDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICB9XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoalContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-goal-container',
          templateUrl: './goal-container.component.html',
          styleUrls: ['./goal-container.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/goals/goals.ts":
  /*!*************************************!*\
    !*** ./src/app/auth/goals/goals.ts ***!
    \*************************************/

  /*! exports provided: goals */

  /***/
  function srcAppAuthGoalsGoalsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "goals", function () {
      return goals;
    });

    var goals = ['sign-in', 'sign-up'];
    /***/
  },

  /***/
  "./src/app/auth/goals/sign-in/sign-in.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/auth/goals/sign-in/sign-in.component.ts ***!
    \*********************************************************/

  /*! exports provided: SignInComponent */

  /***/
  function srcAppAuthGoalsSignInSignInComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInComponent", function () {
      return SignInComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _socket_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../socket/socket.service */
    "./src/app/socket/socket.service.ts");
    /* harmony import */


    var _panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../panel-header/panel-header.component */
    "./src/app/panel-header/panel-header.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var SignInComponent = /*#__PURE__*/function () {
      function SignInComponent(location, socketService) {
        _classCallCheck(this, SignInComponent);

        this.header = "Sign in to continue";
        this.location = location;
        this.socketService = socketService;
      }

      _createClass(SignInComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.socketService.reply.subscribe(function (msg) {
            return _this.onResponseReceived(msg);
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(f) {
          var submission = {
            channel: "auth",
            type: "sign_in",
            username: f.value["username"],
            password: f.value["password"]
          };
          this.socketService.sendMessage(submission);
        }
      }, {
        key: "navigate",
        value: function navigate(s) {
          this.location.replaceState(s);
        }
      }, {
        key: "onResponseReceived",
        value: function onResponseReceived(msg) {
          if (msg["type"] == "sign_in") {
            if (msg["password_correct"]) {
              if (msg["password_correct"] == true) {
                document.location.href = "/home";
              }
            } else if (msg["error"]) {
              var error = document.getElementById("error");
              error.innerHTML = msg["error"];
              error.id = "visible-error";
            }
          }
        }
      }]);

      return SignInComponent;
    }();

    SignInComponent.ɵfac = function SignInComponent_Factory(t) {
      return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_socket_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"]));
    };

    SignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignInComponent,
      selectors: [["app-sign-in"]],
      decls: 19,
      vars: 1,
      consts: [[3, "header"], ["novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-element"], ["type", "text", "placeholder", "Email address", "name", "username", "ngModel", "", "required", ""], ["type", "password", "placeholder", "Password", "name", "password", "ngModel", "", "required", ""], ["id", "error", 1, "form-element"], ["type", "submit"], [1, "password"], [3, "click"]],
      template: function SignInComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-panel-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignInComponent_Template_form_ngSubmit_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            return ctx.onSubmit(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Sign in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInComponent_Template_a_click_14_listener() {
            return ctx.navigate("/auth/sign-up");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "New here? Create an account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInComponent_Template_a_click_17_listener() {
            return ctx.navigate("/auth/reset-password");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Reset your password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", ctx.header);
        }
      },
      directives: [_panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_3__["PanelHeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"]],
      styles: ["form[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-content: center;\r\n    padding: 0 4em 0 4em;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    color: #011638;\r\n    cursor: pointer;\r\n    text-decoration: underline;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n    font-size: 1.5em;\r\n}\r\n\r\n.form-element[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 0.5em 0 0.5em 0;\r\n    text-align: center;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    margin: 0.2em 0 0.2em 0;\r\n}\r\n\r\n#error[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n#visible-error[_ngcontent-%COMP%] {\r\n    color: #D64045;\r\n    display: inline;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    form[_ngcontent-%COMP%] {\r\n        padding: 0 0.5em 0 0.5em;\r\n    }\r\n\r\n    input[_ngcontent-%COMP%] {\r\n        font-size: 1em;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9nb2Fscy9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0k7UUFDSSx3QkFBd0I7SUFDNUI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2dvYWxzL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAgNGVtIDAgNGVtO1xyXG59XHJcblxyXG5hIHtcclxuICAgIGNvbG9yOiAjMDExNjM4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxuXHJcbi5mb3JtLWVsZW1lbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW46IDAuNWVtIDAgMC41ZW0gMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaDIge1xyXG4gICAgbWFyZ2luOiAwLjJlbSAwIDAuMmVtIDA7XHJcbn1cclxuXHJcbiNlcnJvciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4jdmlzaWJsZS1lcnJvciB7XHJcbiAgICBjb2xvcjogI0Q2NDA0NTtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgZm9ybSB7XHJcbiAgICAgICAgcGFkZGluZzogMCAwLjVlbSAwIDAuNWVtO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0IHtcclxuICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgIH1cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sign-in',
          templateUrl: './sign-in.component.html',
          styleUrls: ['./sign-in.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]
        }, {
          type: _socket_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/goals/sign-up/sign-up.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/auth/goals/sign-up/sign-up.component.ts ***!
    \*********************************************************/

  /*! exports provided: SignUpComponent */

  /***/
  function srcAppAuthGoalsSignUpSignUpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpComponent", function () {
      return SignUpComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _socket_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../socket/socket.service */
    "./src/app/socket/socket.service.ts");
    /* harmony import */


    var _panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../panel-header/panel-header.component */
    "./src/app/panel-header/panel-header.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var SignUpComponent = /*#__PURE__*/function () {
      function SignUpComponent(location, socketService) {
        _classCallCheck(this, SignUpComponent);

        this.header = "Sign up for an account";
        this.location = location;
        this.socketService = socketService;
      }

      _createClass(SignUpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.socketService.reply.subscribe(function (msg) {
            return _this2.onResponseReceived(msg);
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(f) {
          var submission = {
            channel: "auth",
            type: "sign_up",
            username: f.value["username"],
            password: f.value["password"]
          };
          this.socketService.sendMessage(submission);
        }
      }, {
        key: "navigate",
        value: function navigate(s) {
          this.location.replaceState(s);
        }
      }, {
        key: "onResponseReceived",
        value: function onResponseReceived(msg) {
          if (msg["type"] == "sign_up") {
            if (msg["password_correct"] || msg["account_creation_success"]) {
              if (msg["password_correct"] == true || msg["account_creation_success"] == true) {
                document.location.href = "/home";
              }
            } else if (msg["error"]) {
              var error = document.getElementById("error");
              error.innerHTML = msg["error"];
              error.id = "visible-error";
            }
          }
        }
      }]);

      return SignUpComponent;
    }();

    SignUpComponent.ɵfac = function SignUpComponent_Factory(t) {
      return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_socket_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"]));
    };

    SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignUpComponent,
      selectors: [["app-sign-up"]],
      decls: 16,
      vars: 1,
      consts: [[3, "header"], ["novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-element"], ["type", "text", "placeholder", "Email address", "name", "username", "ngModel", "", "required", ""], ["type", "password", "placeholder", "Password", "name", "password", "ngModel", "", "required", ""], ["id", "error", 1, "form-element"], ["type", "submit"], [1, "password"], [3, "click"]],
      template: function SignUpComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-panel-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignUpComponent_Template_form_ngSubmit_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            return ctx.onSubmit(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Sign up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignUpComponent_Template_a_click_14_listener() {
            return ctx.navigate("/auth/sign-in");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Already have an account? Sign in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", ctx.header);
        }
      },
      directives: [_panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_3__["PanelHeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"]],
      styles: ["form[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-content: center;\r\n    padding: 0 4em 0 4em;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    color: #011638;\r\n    cursor: pointer;\r\n    text-decoration: underline;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n    font-size: 1.5em;\r\n}\r\n\r\n.form-element[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 0.5em 0 0.5em 0;\r\n    text-align: center;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    margin: 0.2em 0 0.2em 0;\r\n}\r\n\r\n#error[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n#visible-error[_ngcontent-%COMP%] {\r\n    color: #D64045;\r\n    display: inline;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    form[_ngcontent-%COMP%] {\r\n        padding: 0 0.5em 0 0.5em;\r\n    }\r\n\r\n    input[_ngcontent-%COMP%] {\r\n        font-size: 1em;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9nb2Fscy9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0k7UUFDSSx3QkFBd0I7SUFDNUI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2dvYWxzL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAgNGVtIDAgNGVtO1xyXG59XHJcblxyXG5hIHtcclxuICAgIGNvbG9yOiAjMDExNjM4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxuXHJcbi5mb3JtLWVsZW1lbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW46IDAuNWVtIDAgMC41ZW0gMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaDIge1xyXG4gICAgbWFyZ2luOiAwLjJlbSAwIDAuMmVtIDA7XHJcbn1cclxuXHJcbiNlcnJvciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4jdmlzaWJsZS1lcnJvciB7XHJcbiAgICBjb2xvcjogI0Q2NDA0NTtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgZm9ybSB7XHJcbiAgICAgICAgcGFkZGluZzogMCAwLjVlbSAwIDAuNWVtO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0IHtcclxuICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgIH1cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sign-up',
          templateUrl: './sign-up.component.html',
          styleUrls: ['./sign-up.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]
        }, {
          type: _socket_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/activities/activities.ts":
  /*!***********************************************!*\
    !*** ./src/app/home/activities/activities.ts ***!
    \***********************************************/

  /*! exports provided: activities */

  /***/
  function srcAppHomeActivitiesActivitiesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "activities", function () {
      return activities;
    });

    var activities = ['store', 'chat', 'timer', 'tasks', 'calendar', 'settings'];
    /***/
  },

  /***/
  "./src/app/home/activities/calendar/calendar.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/home/activities/calendar/calendar.component.ts ***!
    \****************************************************************/

  /*! exports provided: CalendarComponent */

  /***/
  function srcAppHomeActivitiesCalendarCalendarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarComponent", function () {
      return CalendarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../panel-header/panel-header.component */
    "./src/app/panel-header/panel-header.component.ts");

    var CalendarComponent = /*#__PURE__*/function () {
      function CalendarComponent() {
        _classCallCheck(this, CalendarComponent);

        this.header = "Calendar";
      }

      _createClass(CalendarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CalendarComponent;
    }();

    CalendarComponent.ɵfac = function CalendarComponent_Factory(t) {
      return new (t || CalendarComponent)();
    };

    CalendarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CalendarComponent,
      selectors: [["app-calendar"]],
      decls: 3,
      vars: 1,
      consts: [[3, "header"]],
      template: function CalendarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-panel-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "calendar works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", ctx.header);
        }
      },
      directives: [_panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_1__["PanelHeaderComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYWN0aXZpdGllcy9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalendarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-calendar',
          templateUrl: './calendar.component.html',
          styleUrls: ['./calendar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/activities/chat/chat-message.directive.ts":
  /*!****************************************************************!*\
    !*** ./src/app/home/activities/chat/chat-message.directive.ts ***!
    \****************************************************************/

  /*! exports provided: ChatMessageDirective */

  /***/
  function srcAppHomeActivitiesChatChatMessageDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatMessageDirective", function () {
      return ChatMessageDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ChatMessageDirective = function ChatMessageDirective(viewContainerRef) {
      _classCallCheck(this, ChatMessageDirective);

      this.viewContainerRef = viewContainerRef;
    };

    ChatMessageDirective.ɵfac = function ChatMessageDirective_Factory(t) {
      return new (t || ChatMessageDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]));
    };

    ChatMessageDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ChatMessageDirective,
      selectors: [["", "appChatMessage", ""]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatMessageDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appChatMessage]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/activities/chat/chat-message/chat-message.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/home/activities/chat/chat-message/chat-message.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: ChatMessageComponent */

  /***/
  function srcAppHomeActivitiesChatChatMessageChatMessageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatMessageComponent", function () {
      return ChatMessageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/socket/socket.service */
    "./src/app/socket/socket.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var ChatMessageComponent = /*#__PURE__*/function () {
      function ChatMessageComponent(socketService) {
        _classCallCheck(this, ChatMessageComponent);

        this.socketService = socketService;
      }

      _createClass(ChatMessageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ChatMessageComponent;
    }();

    ChatMessageComponent.ɵfac = function ChatMessageComponent_Factory(t) {
      return new (t || ChatMessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]));
    };

    ChatMessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChatMessageComponent,
      selectors: [["app-chat-message"]],
      inputs: {
        data: "data"
      },
      decls: 10,
      vars: 6,
      consts: [[1, "chat-message"], [1, "item"], [1, "meta"], [1, "author"], ["value", "MM/dd/yyyy h:mm a", 1, "sent-date"], [1, "chat-contents"]],
      template: function ChatMessageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 3, ctx.data.sent_date, "MM/dd/yyyy h:mm a"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.contents);
        }
      },
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
      styles: [".chat-message[_ngcontent-%COMP%]:hover {\r\n    background-color: #D5D5DB;\r\n}\r\n\r\n.chat-message[_ngcontent-%COMP%] {\r\n    padding: 0.5em 2ch 0.5em 2ch;\r\n}\r\n\r\n.author[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n}\r\n\r\n.meta[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.sent-date[_ngcontent-%COMP%] {\r\n    padding-top: 0.25em;\r\n    font-size: smaller;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    margin: 0 0 0 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hY3Rpdml0aWVzL2NoYXQvY2hhdC1tZXNzYWdlL2NoYXQtbWVzc2FnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9hY3Rpdml0aWVzL2NoYXQvY2hhdC1tZXNzYWdlL2NoYXQtbWVzc2FnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXQtbWVzc2FnZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDVENURCO1xyXG59XHJcblxyXG4uY2hhdC1tZXNzYWdlIHtcclxuICAgIHBhZGRpbmc6IDAuNWVtIDJjaCAwLjVlbSAyY2g7XHJcbn1cclxuXHJcbi5hdXRob3Ige1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5tZXRhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5zZW50LWRhdGUge1xyXG4gICAgcGFkZGluZy10b3A6IDAuMjVlbTtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufVxyXG5cclxucCB7XHJcbiAgICBtYXJnaW46IDAgMCAwIDA7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatMessageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-chat-message',
          templateUrl: './chat-message.component.html',
          styleUrls: ['./chat-message.component.css']
        }]
      }], function () {
        return [{
          type: src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]
        }];
      }, {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/home/activities/chat/chat.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/home/activities/chat/chat.component.ts ***!
    \********************************************************/

  /*! exports provided: ChatComponent */

  /***/
  function srcAppHomeActivitiesChatChatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatComponent", function () {
      return ChatComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _chat_message_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./chat-message.directive */
    "./src/app/home/activities/chat/chat-message.directive.ts");
    /* harmony import */


    var _chat_message_chat_message_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./chat-message/chat-message.component */
    "./src/app/home/activities/chat/chat-message/chat-message.component.ts");
    /* harmony import */


    var src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/socket/socket.service */
    "./src/app/socket/socket.service.ts");
    /* harmony import */


    var _room_change_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../room-change.service */
    "./src/app/home/room-change.service.ts");
    /* harmony import */


    var _panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../panel-header/panel-header.component */
    "./src/app/panel-header/panel-header.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function ChatComponent_ng_template_3_Template(rf, ctx) {}

    var ChatComponent = /*#__PURE__*/function () {
      function ChatComponent(socketService, roomChangeService, componentFactoryResolver) {
        _classCallCheck(this, ChatComponent);

        this.header = "Chat";
        this.socketService = socketService;
        this.roomChangeService = roomChangeService;
        this.componentFactoryResolver = componentFactoryResolver;
      }

      _createClass(ChatComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.socketService.reply.subscribe(function (msg) {
            return _this3.onResponseReceived(msg);
          });
          this.roomChangeService.roomId.subscribe(function (msg) {
            return _this3.onRoomChange(msg);
          });
          this.textInChatField = false;
        }
      }, {
        key: "onRoomChange",
        value: function onRoomChange(roomId) {
          this.roomId = roomId;
          document.getElementById("retrieving").classList.remove("hidden");
          this.allChatsLoaded = false;
          var viewContainerRef = this.chatMessageHost.viewContainerRef;
          viewContainerRef.clear();
          if (roomId != null) this.socketService.sendMessage({
            channel: "chat",
            type: "request_initial_messages",
            room_id: roomId
          });
        }
      }, {
        key: "onResponseReceived",
        value: function onResponseReceived(msg) {
          var _this4 = this;

          if (msg["type"] == "request_messages") {
            if (msg["messages"].length < 10) {
              document.getElementById("retrieving").classList.add("hidden");
              this.allChatsLoaded = true;
            }

            document.getElementById("retrieving-now").classList.add("hidden");
            document.getElementById("load-more").classList.remove("hidden");
            msg["messages"].forEach(function (data) {
              _this4.loadChat(data, false);
            });
          } else if (msg["type"] == "send_message") {
            var data = {
              username: msg["username"],
              sent_date: msg["sent_date"],
              contents: msg["contents"],
              chat_id: msg["chat_id"]
            };
            this.loadChat(data, true);
          }
        }
      }, {
        key: "onSendChat",
        value: function onSendChat() {
          var chatBox = document.getElementById("chat-field");
          var contents = chatBox.innerHTML;
          this.socketService.sendMessage({
            channel: "chat",
            type: "send_message",
            room_id: sessionStorage.getItem("room_id"),
            contents: contents
          });
          chatBox.innerHTML = "Message the room";
          this.textInChatField = false;
        }
      }, {
        key: "onListScroll",
        value: function onListScroll() {
          var list = document.getElementById("list");
          document.getElementById("retrieving-now").classList.remove("hidden");
          document.getElementById("load-more").classList.add("hidden");

          if (list.scrollTop == 0 && !this.allChatsLoaded) {
            this.socketService.sendMessage({
              channel: "chat",
              type: "request_messages",
              room_id: this.roomId,
              before_chat_id: this.earliestChatId
            });
          }
        }
      }, {
        key: "loadChat",
        value: function loadChat(data, recent) {
          var componentFactory = this.componentFactoryResolver.resolveComponentFactory(_chat_message_chat_message_component__WEBPACK_IMPORTED_MODULE_2__["ChatMessageComponent"]);
          var viewContainerRef = this.chatMessageHost.viewContainerRef;
          var componentRef;

          if (recent) {
            componentRef = viewContainerRef.createComponent(componentFactory, 0);
          } else {
            componentRef = viewContainerRef.createComponent(componentFactory);
            this.earliestChatId = data["chat_id"];
          }

          componentRef.instance.data = data;
        }
      }, {
        key: "checkChatField",
        value: function checkChatField() {
          if (!this.textInChatField) {
            var chatField = document.getElementById("chat-field");
            chatField.innerHTML = "";
            this.textInChatField = true;
          }
        }
      }]);

      return ChatComponent;
    }();

    ChatComponent.ɵfac = function ChatComponent_Factory(t) {
      return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_room_change_service__WEBPACK_IMPORTED_MODULE_4__["RoomChangeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]));
    };

    ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChatComponent,
      selectors: [["app-chat"]],
      viewQuery: function ChatComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_chat_message_directive__WEBPACK_IMPORTED_MODULE_1__["ChatMessageDirective"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chatMessageHost = _t.first);
        }
      },
      decls: 17,
      vars: 1,
      consts: [[1, "scroll-container"], [3, "header"], ["id", "list", 3, "scroll"], ["appChatMessage", ""], ["id", "retrieving"], ["id", "load-more", 3, "click"], ["id", "retrieving-now", 1, "hidden"], ["id", "chat-box", "novalidate", "", 3, "ngSubmit"], ["c", "ngForm"], [1, "form-element"], ["id", "chat-field", "contenteditable", "plaintext-only", 1, "input", 3, "click"], ["type", "submit"]],
      template: function ChatComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-panel-header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ChatComponent_Template_div_scroll_2_listener() {
            return ctx.onListScroll();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatComponent_ng_template_3_Template, 0, 0, "ng-template", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_Template_a_click_5_listener() {
            return ctx.onListScroll();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Load more messages");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Retrieving more messages...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ChatComponent_Template_form_ngSubmit_9_listener() {
            return ctx.onSendChat();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_Template_div_click_12_listener() {
            return ctx.checkChatField();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Message the room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Send");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", ctx.header);
        }
      },
      directives: [_panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_5__["PanelHeaderComponent"], _chat_message_directive__WEBPACK_IMPORTED_MODULE_1__["ChatMessageDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"]],
      styles: [".scroll-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n}\r\n\r\n#list[_ngcontent-%COMP%] {\r\n    flex: 1 1 auto;\r\n    overflow-y: auto;\r\n    height: 70vh;\r\n    display: flex;\r\n    flex-direction: column-reverse;\r\n}\r\n\r\n#retrieving[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin: 0 0 0 0;\r\n    padding: 1em 0 1em 0;\r\n}\r\n\r\n#load-more[_ngcontent-%COMP%] {\r\n    color: #011638;\r\n    cursor: pointer;\r\n    text-decoration: underline;\r\n}\r\n\r\n.margin[_ngcontent-%COMP%] {\r\n    margin: 0.2em 2ch 0.2em 2ch;\r\n}\r\n\r\nform[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.form-element[_ngcontent-%COMP%] {\r\n    max-width: -webkit-fit-content;\r\n    max-width: -moz-fit-content;\r\n    max-width: fit-content;\r\n    flex: 1 0 0;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    width: 10ch;\r\n    margin-right: 2ch;\r\n    padding: 0.2em 2ch 0.2em 2ch;\r\n    font-size: large;\r\n}\r\n\r\n.form-label[_ngcontent-%COMP%] {\r\n    margin: 0 4ch 0 2ch;\r\n}\r\n\r\n.hidden[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n#chat-box[_ngcontent-%COMP%] {\r\n    padding: 1em 0 1em 0;\r\n    border-color: #011638;\r\n    border-top: solid;\r\n}\r\n\r\n#chat-field[_ngcontent-%COMP%] {\r\n    width: 20ch;\r\n    word-wrap: break-word;\r\n    overflow-wrap: break-word;\r\n    background-color: white;\r\n    -webkit-appearance: textfield;\r\n    color: grey;\r\n    border-color: grey;\r\n    border: solid;\r\n    border-width: 1px;\r\n    margin-left: 2ch;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .list[_ngcontent-%COMP%] {\r\n        height: 70vh;\r\n    }\r\n\r\n    #chat[_ngcontent-%COMP%] {\r\n        width: 70vh;\r\n        max-width: 70vw;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hY3Rpdml0aWVzL2NoYXQvY2hhdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksOEJBQXNCO0lBQXRCLDJCQUFzQjtJQUF0QixzQkFBc0I7SUFDdEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksV0FBVztRQUNYLGVBQWU7SUFDbkI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYWN0aXZpdGllcy9jaGF0L2NoYXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGwtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4jbGlzdCB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG59XHJcblxyXG4jcmV0cmlldmluZyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgMCAwIDA7XHJcbiAgICBwYWRkaW5nOiAxZW0gMCAxZW0gMDtcclxufVxyXG5cclxuI2xvYWQtbW9yZSB7XHJcbiAgICBjb2xvcjogIzAxMTYzODtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4ubWFyZ2luIHtcclxuICAgIG1hcmdpbjogMC4yZW0gMmNoIDAuMmVtIDJjaDtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uZm9ybS1lbGVtZW50IHtcclxuICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBmbGV4OiAxIDAgMDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMGNoO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyY2g7XHJcbiAgICBwYWRkaW5nOiAwLjJlbSAyY2ggMC4yZW0gMmNoO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwge1xyXG4gICAgbWFyZ2luOiAwIDRjaCAwIDJjaDtcclxufVxyXG5cclxuLmhpZGRlbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4jY2hhdC1ib3gge1xyXG4gICAgcGFkZGluZzogMWVtIDAgMWVtIDA7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMTE2Mzg7XHJcbiAgICBib3JkZXItdG9wOiBzb2xpZDtcclxufVxyXG5cclxuI2NoYXQtZmllbGQge1xyXG4gICAgd2lkdGg6IDIwY2g7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgYm9yZGVyLWNvbG9yOiBncmV5O1xyXG4gICAgYm9yZGVyOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJjaDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmxpc3Qge1xyXG4gICAgICAgIGhlaWdodDogNzB2aDtcclxuICAgIH1cclxuXHJcbiAgICAjY2hhdCB7XHJcbiAgICAgICAgd2lkdGg6IDcwdmg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA3MHZ3O1xyXG4gICAgfVxyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-chat',
          templateUrl: './chat.component.html',
          styleUrls: ['./chat.component.css']
        }]
      }], function () {
        return [{
          type: src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]
        }, {
          type: _room_change_service__WEBPACK_IMPORTED_MODULE_4__["RoomChangeService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }];
      }, {
        chatMessageHost: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_chat_message_directive__WEBPACK_IMPORTED_MODULE_1__["ChatMessageDirective"], {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/home/activities/settings/room-invitation.directive.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/home/activities/settings/room-invitation.directive.ts ***!
    \***********************************************************************/

  /*! exports provided: RoomInvitationDirective */

  /***/
  function srcAppHomeActivitiesSettingsRoomInvitationDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoomInvitationDirective", function () {
      return RoomInvitationDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var RoomInvitationDirective = function RoomInvitationDirective(viewContainerRef) {
      _classCallCheck(this, RoomInvitationDirective);

      this.viewContainerRef = viewContainerRef;
    };

    RoomInvitationDirective.ɵfac = function RoomInvitationDirective_Factory(t) {
      return new (t || RoomInvitationDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]));
    };

    RoomInvitationDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: RoomInvitationDirective,
      selectors: [["", "appRoomInvitation", ""]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoomInvitationDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appRoomInvitation]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/activities/settings/room-invitation/room-invitation.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/home/activities/settings/room-invitation/room-invitation.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: RoomInvitationComponent */

  /***/
  function srcAppHomeActivitiesSettingsRoomInvitationRoomInvitationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoomInvitationComponent", function () {
      return RoomInvitationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/socket/socket.service */
    "./src/app/socket/socket.service.ts");

    var RoomInvitationComponent = /*#__PURE__*/function () {
      function RoomInvitationComponent(socketService) {
        _classCallCheck(this, RoomInvitationComponent);

        this.socketService = socketService;
      }

      _createClass(RoomInvitationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "joinRoom",
        value: function joinRoom(roomId) {
          var submission = {
            channel: "settings",
            type: "join_room",
            room_id: roomId
          };
          this.socketService.sendMessage(submission);
        }
      }, {
        key: "declineInvitation",
        value: function declineInvitation(invitationId) {
          var submission = {
            channel: "settings",
            type: "decline_invitation",
            invitation_id: invitationId
          };
          this.socketService.sendMessage(submission);
        }
      }]);

      return RoomInvitationComponent;
    }();

    RoomInvitationComponent.ɵfac = function RoomInvitationComponent_Factory(t) {
      return new (t || RoomInvitationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]));
    };

    RoomInvitationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RoomInvitationComponent,
      selectors: [["app-room-invitation"]],
      decls: 10,
      vars: 1,
      consts: [[1, "invitation"], [1, "item"], [1, "room-label"], [3, "click"], [1, "button-label"]],
      template: function RoomInvitationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomInvitationComponent_Template_button_click_4_listener() {
            return ctx.declineInvitation(ctx.data.invitation_id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Decline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomInvitationComponent_Template_button_click_7_listener() {
            return ctx.joinRoom(ctx.data.room_id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Accept");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);
        }
      },
      styles: [".invitation[_ngcontent-%COMP%]:hover {\r\n    background-color: #D5D5DB;\r\n}\r\n\r\n.item[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    max-width: 10ch;\r\n    flex: 1 0 0;\r\n    margin-right: 2ch;\r\n}\r\n\r\n.button-label[_ngcontent-%COMP%] {\r\n    padding: 0.2em 0 0.2em 0;\r\n}\r\n\r\n.room-label[_ngcontent-%COMP%] {\r\n    flex: 1 0 0;\r\n    margin-left: 2ch;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hY3Rpdml0aWVzL3NldHRpbmdzL3Jvb20taW52aXRhdGlvbi9yb29tLWludml0YXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2FjdGl2aXRpZXMvc2V0dGluZ3Mvcm9vbS1pbnZpdGF0aW9uL3Jvb20taW52aXRhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmludml0YXRpb246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Q1RDVEQjtcclxufVxyXG5cclxuLml0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIG1heC13aWR0aDogMTBjaDtcclxuICAgIGZsZXg6IDEgMCAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyY2g7XHJcbn1cclxuXHJcbi5idXR0b24tbGFiZWwge1xyXG4gICAgcGFkZGluZzogMC4yZW0gMCAwLjJlbSAwO1xyXG59XHJcblxyXG4ucm9vbS1sYWJlbCB7XHJcbiAgICBmbGV4OiAxIDAgMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyY2g7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoomInvitationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-room-invitation',
          templateUrl: './room-invitation.component.html',
          styleUrls: ['./room-invitation.component.css']
        }]
      }], function () {
        return [{
          type: src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/activities/settings/room-link.directive.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/home/activities/settings/room-link.directive.ts ***!
    \*****************************************************************/

  /*! exports provided: RoomLinkDirective */

  /***/
  function srcAppHomeActivitiesSettingsRoomLinkDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoomLinkDirective", function () {
      return RoomLinkDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var RoomLinkDirective = function RoomLinkDirective(viewContainerRef) {
      _classCallCheck(this, RoomLinkDirective);

      this.viewContainerRef = viewContainerRef;
    };

    RoomLinkDirective.ɵfac = function RoomLinkDirective_Factory(t) {
      return new (t || RoomLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]));
    };

    RoomLinkDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: RoomLinkDirective,
      selectors: [["", "appRoomLink", ""]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoomLinkDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appRoomLink]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/activities/settings/room-link/room-link.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/home/activities/settings/room-link/room-link.component.ts ***!
    \***************************************************************************/

  /*! exports provided: RoomLinkComponent */

  /***/
  function srcAppHomeActivitiesSettingsRoomLinkRoomLinkComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoomLinkComponent", function () {
      return RoomLinkComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/socket/socket.service */
    "./src/app/socket/socket.service.ts");

    var RoomLinkComponent = /*#__PURE__*/function () {
      function RoomLinkComponent(socketService) {
        _classCallCheck(this, RoomLinkComponent);

        this.socketService = socketService;
      }

      _createClass(RoomLinkComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "enterRoom",
        value: function enterRoom(roomId, title) {
          this.socketService.sendMessage({
            channel: "settings",
            type: "enter_room",
            room_id: roomId,
            as_player: false
          });
          sessionStorage.setItem("room_id", roomId);
          sessionStorage.setItem("room_title", title);
        }
      }]);

      return RoomLinkComponent;
    }();

    RoomLinkComponent.ɵfac = function RoomLinkComponent_Factory(t) {
      return new (t || RoomLinkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]));
    };

    RoomLinkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RoomLinkComponent,
      selectors: [["app-room-link"]],
      inputs: {
        data: "data"
      },
      decls: 7,
      vars: 1,
      consts: [[1, "room-link"], [1, "item"], [1, "room-label"], [3, "click"], [1, "button-label"]],
      template: function RoomLinkComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomLinkComponent_Template_button_click_4_listener() {
            return ctx.enterRoom(ctx.data.room_id, ctx.data.title);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Enter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);
        }
      },
      styles: [".room-link[_ngcontent-%COMP%]:hover {\r\n    background-color: #D5D5DB;\r\n}\r\n\r\n.item[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    max-width: 10ch;\r\n    flex: 1 0 0;\r\n    margin-right: 2ch;\r\n}\r\n\r\n.button-label[_ngcontent-%COMP%] {\r\n    padding: 0.2em 2ch 0.2em 2ch;\r\n}\r\n\r\n.room-label[_ngcontent-%COMP%] {\r\n    flex: 1 0 0;\r\n    margin-left: 2ch;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hY3Rpdml0aWVzL3NldHRpbmdzL3Jvb20tbGluay9yb29tLWxpbmsuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2FjdGl2aXRpZXMvc2V0dGluZ3Mvcm9vbS1saW5rL3Jvb20tbGluay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvb20tbGluazpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDVENURCO1xyXG59XHJcblxyXG4uaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgbWF4LXdpZHRoOiAxMGNoO1xyXG4gICAgZmxleDogMSAwIDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJjaDtcclxufVxyXG5cclxuLmJ1dHRvbi1sYWJlbCB7XHJcbiAgICBwYWRkaW5nOiAwLjJlbSAyY2ggMC4yZW0gMmNoO1xyXG59XHJcblxyXG4ucm9vbS1sYWJlbCB7XHJcbiAgICBmbGV4OiAxIDAgMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyY2g7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoomLinkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-room-link',
          templateUrl: './room-link.component.html',
          styleUrls: ['./room-link.component.css']
        }]
      }], function () {
        return [{
          type: src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]
        }];
      }, {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/home/activities/settings/settings.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/home/activities/settings/settings.component.ts ***!
    \****************************************************************/

  /*! exports provided: SettingsComponent */

  /***/
  function srcAppHomeActivitiesSettingsSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsComponent", function () {
      return SettingsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _room_link_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./room-link.directive */
    "./src/app/home/activities/settings/room-link.directive.ts");
    /* harmony import */


    var _room_link_room_link_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./room-link/room-link.component */
    "./src/app/home/activities/settings/room-link/room-link.component.ts");
    /* harmony import */


    var _room_invitation_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./room-invitation.directive */
    "./src/app/home/activities/settings/room-invitation.directive.ts");
    /* harmony import */


    var _room_invitation_room_invitation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./room-invitation/room-invitation.component */
    "./src/app/home/activities/settings/room-invitation/room-invitation.component.ts");
    /* harmony import */


    var src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/socket/socket.service */
    "./src/app/socket/socket.service.ts");
    /* harmony import */


    var _room_change_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../room-change.service */
    "./src/app/home/room-change.service.ts");
    /* harmony import */


    var _panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../panel-header/panel-header.component */
    "./src/app/panel-header/panel-header.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function SettingsComponent_ng_template_42_Template(rf, ctx) {}

    function SettingsComponent_ng_template_50_Template(rf, ctx) {}

    var SettingsComponent = /*#__PURE__*/function () {
      function SettingsComponent(socketService, roomChangeService, componentFactoryResolver) {
        _classCallCheck(this, SettingsComponent);

        this.header = "Settings";
        this.roomPrivate = true;
        this.roomTitle = sessionStorage.getItem("room_title");
        this.socketService = socketService;
        this.roomChangeService = roomChangeService;
        this.componentFactoryResolver = componentFactoryResolver;
      }

      _createClass(SettingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.socketService.reply.subscribe(function (msg) {
            return _this5.onResponseReceived(msg);
          });
          this.roomChangeService.roomId.subscribe(function (msg) {
            return _this5.onRoomChange(msg);
          });
          this.socketService.sendMessage({
            channel: "settings",
            type: "request_rooms"
          });
          this.socketService.sendMessage({
            channel: "settings",
            type: "request_invitations"
          });
          console.log(sessionStorage.getItem("room_id"));

          if (sessionStorage.getItem("room_id") != undefined) {
            this.socketService.sendMessage({
              channel: "settings",
              type: "enter_room",
              room_id: sessionStorage.getItem("room_id"),
              as_player: false
            });
          }
        }
      }, {
        key: "onResponseReceived",
        value: function onResponseReceived(msg) {
          var _this6 = this;

          console.log("Incoming message of type: " + msg["type"]);

          if (msg["channel"] == "settings") {
            if (msg["type"] == "request_rooms") {
              var viewContainerRef = this.roomLinkHost.viewContainerRef;
              viewContainerRef.clear();
              var numRooms = Object.keys(msg["rooms"]).length;

              if (numRooms == 0) {
                document.getElementById("room-settings").classList.add("hidden");
                document.getElementById("enter-room").classList.add("hidden");
              } else if (numRooms == 1) {
                document.getElementById("room-settings").classList.remove("hidden");
                document.getElementById("enter-room").classList.add("hidden");
              } else {
                document.getElementById("room-settings").classList.remove("hidden");
                document.getElementById("enter-room").classList.remove("hidden");
              }

              for (var name in msg["rooms"]) {
                if (sessionStorage.getItem("room_id") == null || sessionStorage.getItem("room_title") == null) {
                  sessionStorage.setItem("room_id", msg["rooms"][name]);
                  sessionStorage.setItem("room_title", name);
                  this.socketService.sendMessage({
                    channel: "settings",
                    type: "enter_room",
                    room_id: msg["rooms"][name],
                    as_player: false
                  });
                }

                if (!(msg["rooms"][name] == sessionStorage.getItem("room_id"))) {
                  var data = {
                    title: name,
                    room_id: msg["rooms"][name]
                  };
                  this.loadRoomLink(data);
                }
              }
            } else if (msg["type"] == "request_room_privacy") {
              if (msg["private"] != this.roomPrivate) {
                this.roomPrivate = msg["private"];
                var privacyForms = document.getElementsByClassName("privacy-form");

                for (var index = 0; index < privacyForms.length; index++) {
                  var privacyForm = privacyForms[index];
                  privacyForm.classList.toggle("hidden");
                }
              }
            } else if (msg["type"] == "set_room_privacy") {
              if (msg["success"] == true) {
                this.roomPrivate = !this.roomPrivate;

                var _privacyForms = document.getElementsByClassName("privacy-form");

                for (var _index = 0; _index < _privacyForms.length; _index++) {
                  var _privacyForm = _privacyForms[_index];

                  _privacyForm.classList.toggle("hidden");
                }
              }
            } else if (msg["type"] == "enter_room") {
              if (msg["success"] == true) {
                console.log("Entered a room.");
                sessionStorage.setItem("room_title", msg["room_title"]);
                sessionStorage.setItem("room_id", msg["room_id"]);
                this.roomTitle = sessionStorage.getItem("room_title");
                this.roomChangeService.setRoom(msg["room_id"]);
              } else {
                console.error("Failed to enter the room.");
              }
            } else if (msg["type"] == "join_room") {
              this.reloadRooms();
            } else if (msg["type"] == "request_invitations") {
              var _viewContainerRef = this.roomInvitationHost.viewContainerRef;

              _viewContainerRef.clear();

              var invitations = msg["invitations"];

              if (invitations.length > 0) {
                document.getElementById("invitations").classList.remove("hidden");
                invitations.forEach(function (invitation) {
                  var data = {
                    title: invitation["room_title"],
                    room_id: invitation["room_id"],
                    username: invitation["username"],
                    invitation_id: invitation["invitation_id"]
                  };

                  _this6.loadInvitation(data);
                });
              } else {
                document.getElementById("invitations").classList.add("hidden");
              }
            } else if (msg["type"] == "decline_invitation") {
              this.reloadInvitations();
            } else if (msg["type"] == "create_room") {
              this.socketService.sendMessage({
                channel: "settings",
                type: "enter_room",
                room_id: msg["room_id"],
                as_player: false
              });
            } else if (msg["type"] == "leave_room") {
              if (msg["success"] == true) {
                sessionStorage.removeItem("room_title");
                sessionStorage.removeItem("room_id");
                console.log(sessionStorage.removeItem("room_title"));
                console.log(sessionStorage.removeItem("room_id"));
                this.reloadRooms();
              }
            }
          }
        }
      }, {
        key: "loadRoomLink",
        value: function loadRoomLink(data) {
          var componentFactory = this.componentFactoryResolver.resolveComponentFactory(_room_link_room_link_component__WEBPACK_IMPORTED_MODULE_2__["RoomLinkComponent"]);
          var viewContainerRef = this.roomLinkHost.viewContainerRef;
          var componentRef = viewContainerRef.createComponent(componentFactory);
          componentRef.instance.data = data;
        }
      }, {
        key: "reloadRooms",
        value: function reloadRooms() {
          this.socketService.sendMessage({
            channel: "settings",
            type: "request_rooms"
          });
        }
      }, {
        key: "loadInvitation",
        value: function loadInvitation(data) {
          var componentFactory = this.componentFactoryResolver.resolveComponentFactory(_room_invitation_room_invitation_component__WEBPACK_IMPORTED_MODULE_4__["RoomInvitationComponent"]);
          var viewContainerRef = this.roomInvitationHost.viewContainerRef;
          var componentRef = viewContainerRef.createComponent(componentFactory);
          componentRef.instance.data = data;
        }
      }, {
        key: "reloadInvitations",
        value: function reloadInvitations() {
          this.socketService.sendMessage({
            channel: "settings",
            type: "request_invitations"
          });
        }
      }, {
        key: "onRoomChange",
        value: function onRoomChange(roomId) {
          this.socketService.sendMessage({
            channel: "settings",
            type: "request_room_privacy",
            room_id: roomId
          });
          document.getElementById("room-title").innerHTML = sessionStorage.getItem("room_title");
          this.reloadRooms();
        }
      }, {
        key: "onSubmitInvite",
        value: function onSubmitInvite(f) {
          var submission = {
            channel: "settings",
            type: "create_invitation",
            room_id: sessionStorage.getItem("room_id"),
            invitee: f.value["username"]
          };
          this.socketService.sendMessage(submission);
        }
      }, {
        key: "onSubmitJoin",
        value: function onSubmitJoin(f) {
          var submission = {
            channel: "settings",
            type: "join_room",
            room_id: f.value["joinCode"]
          };
          this.socketService.sendMessage(submission);
        }
      }, {
        key: "onSubmitLeave",
        value: function onSubmitLeave() {
          var submission = {
            channel: "settings",
            type: "leave_room",
            room_id: sessionStorage.getItem("room_id")
          };
          this.socketService.sendMessage(submission);
        }
      }, {
        key: "onSubmitCreate",
        value: function onSubmitCreate(f) {
          var submission = {
            channel: "settings",
            type: "create_room",
            title: f.value["title"]
          };
          this.socketService.sendMessage(submission);
        }
      }, {
        key: "onToggleRoomPrivacy",
        value: function onToggleRoomPrivacy() {
          var submission = {
            channel: "settings",
            type: "set_room_privacy",
            room_id: sessionStorage.getItem("room_id"),
            "private": !this.roomPrivate
          };
          this.socketService.sendMessage(submission);
        }
      }]);

      return SettingsComponent;
    }();

    SettingsComponent.ɵfac = function SettingsComponent_Factory(t) {
      return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_room_change_service__WEBPACK_IMPORTED_MODULE_6__["RoomChangeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]));
    };

    SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SettingsComponent,
      selectors: [["app-settings"]],
      viewQuery: function SettingsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_room_link_directive__WEBPACK_IMPORTED_MODULE_1__["RoomLinkDirective"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_room_invitation_directive__WEBPACK_IMPORTED_MODULE_3__["RoomInvitationDirective"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.roomLinkHost = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.roomInvitationHost = _t.first);
        }
      },
      decls: 69,
      vars: 7,
      consts: [[1, "scroll-container"], [3, "header"], [1, "list"], [1, "margin"], ["id", "room-settings", 1, "hidden"], ["id", "room-title"], [1, "privacy-form", "hidden"], [1, "form-element"], [1, "form-label"], ["type", "submit", 3, "click"], [1, "privacy-form"], ["novalidate", "", 3, "ngSubmit"], ["i", "ngForm"], ["type", "text", "placeholder", "Username", "name", "username", "ngModel", "", "required", ""], ["type", "submit"], ["novalidate", ""], [3, "click"], ["id", "enter-room", 1, "hidden"], ["appRoomLink", ""], ["id", "invitations", 1, "hidden"], ["appRoomInvitation", ""], ["j", "ngForm"], ["type", "text", "placeholder", "Room code", "name", "joinCode", "ngModel", "", "required", ""], ["c", "ngForm"], ["type", "text", "placeholder", "Room name", "name", "title", "ngModel", "", "required", ""]],
      template: function SettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-panel-header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_12_listener() {
            return ctx.onToggleRoomPrivacy();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Make private");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_19_listener() {
            return ctx.onToggleRoomPrivacy();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Make public");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "form", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SettingsComponent_Template_form_ngSubmit_23_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

            return ctx.onSubmitInvite(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Invite");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "form", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_37_listener() {
            return ctx.onSubmitLeave();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Leave");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Enter Another Room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, SettingsComponent_ng_template_42_Template, 0, 0, "ng-template", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Join a Room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Any incoming invitations appear here. You can also join a public room!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Pending Invitations");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, SettingsComponent_ng_template_50_Template, 0, 0, "ng-template", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Join a Public Room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "form", 11, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SettingsComponent_Template_form_ngSubmit_53_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](54);

            return ctx.onSubmitJoin(_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Join");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Make a Room");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "form", 11, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SettingsComponent_Template_form_ngSubmit_62_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](63);

            return ctx.onSubmitCreate(_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Create");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", ctx.header);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.roomTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.roomTitle, " is currently public. Anyone with the link or room code (and a Slumber Party account) can join this room.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.roomTitle, " is currently private. No one can join this room without an invitation.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Invite Another User to ", ctx.roomTitle, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Leave ", ctx.roomTitle, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Leave ", ctx.roomTitle, "?");
        }
      },
      directives: [_panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_7__["PanelHeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _room_link_directive__WEBPACK_IMPORTED_MODULE_1__["RoomLinkDirective"], _room_invitation_directive__WEBPACK_IMPORTED_MODULE_3__["RoomInvitationDirective"]],
      styles: [".scroll-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n}\r\n\r\n.list[_ngcontent-%COMP%] {\r\n    flex: 1 1 auto;\r\n    overflow-y: auto;\r\n    height: 70vh;\r\n}\r\n\r\n.margin[_ngcontent-%COMP%] {\r\n    margin: 0.2em 2ch 0.2em 2ch;\r\n}\r\n\r\nform[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.form-element[_ngcontent-%COMP%] {\r\n    max-width: -webkit-fit-content;\r\n    max-width: -moz-fit-content;\r\n    max-width: fit-content;\r\n    flex: 1 0 0;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    width: 10ch;\r\n    margin-right: 2ch;\r\n    padding: 0.2em 2ch 0.2em 2ch;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n    margin-left: 2ch;\r\n}\r\n\r\n.hidden[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.form-label[_ngcontent-%COMP%] {\r\n    margin: 0 4ch 0 2ch;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .list[_ngcontent-%COMP%] {\r\n        height: 70vh;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hY3Rpdml0aWVzL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksOEJBQXNCO0lBQXRCLDJCQUFzQjtJQUF0QixzQkFBc0I7SUFDdEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2FjdGl2aXRpZXMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGwtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubGlzdCB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbn1cclxuXHJcbi5tYXJnaW4ge1xyXG4gICAgbWFyZ2luOiAwLjJlbSAyY2ggMC4yZW0gMmNoO1xyXG59XHJcblxyXG5mb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5mb3JtLWVsZW1lbnQge1xyXG4gICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGZsZXg6IDEgMCAwO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgd2lkdGg6IDEwY2g7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJjaDtcclxuICAgIHBhZGRpbmc6IDAuMmVtIDJjaCAwLjJlbSAyY2g7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyY2g7XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwge1xyXG4gICAgbWFyZ2luOiAwIDRjaCAwIDJjaDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmxpc3Qge1xyXG4gICAgICAgIGhlaWdodDogNzB2aDtcclxuICAgIH1cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-settings',
          templateUrl: './settings.component.html',
          styleUrls: ['./settings.component.css']
        }]
      }], function () {
        return [{
          type: src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"]
        }, {
          type: _room_change_service__WEBPACK_IMPORTED_MODULE_6__["RoomChangeService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }];
      }, {
        roomLinkHost: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_room_link_directive__WEBPACK_IMPORTED_MODULE_1__["RoomLinkDirective"], {
            "static": true
          }]
        }],
        roomInvitationHost: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_room_invitation_directive__WEBPACK_IMPORTED_MODULE_3__["RoomInvitationDirective"], {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/home/activities/store/store.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/home/activities/store/store.component.ts ***!
    \**********************************************************/

  /*! exports provided: StoreComponent */

  /***/
  function srcAppHomeActivitiesStoreStoreComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoreComponent", function () {
      return StoreComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../panel-header/panel-header.component */
    "./src/app/panel-header/panel-header.component.ts");

    var StoreComponent = /*#__PURE__*/function () {
      function StoreComponent() {
        _classCallCheck(this, StoreComponent);

        this.header = "Store";
      }

      _createClass(StoreComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StoreComponent;
    }();

    StoreComponent.ɵfac = function StoreComponent_Factory(t) {
      return new (t || StoreComponent)();
    };

    StoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StoreComponent,
      selectors: [["app-store"]],
      decls: 3,
      vars: 1,
      consts: [[3, "header"]],
      template: function StoreComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-panel-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "store works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", ctx.header);
        }
      },
      directives: [_panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_1__["PanelHeaderComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYWN0aXZpdGllcy9zdG9yZS9zdG9yZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-store',
          templateUrl: './store.component.html',
          styleUrls: ['./store.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/activities/tasks/list.directive.ts":
  /*!*********************************************************!*\
    !*** ./src/app/home/activities/tasks/list.directive.ts ***!
    \*********************************************************/

  /*! exports provided: ListDirective */

  /***/
  function srcAppHomeActivitiesTasksListDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListDirective", function () {
      return ListDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ListDirective = function ListDirective(viewContainerRef) {
      _classCallCheck(this, ListDirective);

      this.viewContainerRef = viewContainerRef;
    };

    ListDirective.ɵfac = function ListDirective_Factory(t) {
      return new (t || ListDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]));
    };

    ListDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ListDirective,
      selectors: [["", "appList", ""]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appList]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/activities/tasks/list/list.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/home/activities/tasks/list/list.component.ts ***!
    \**************************************************************/

  /*! exports provided: ListComponent */

  /***/
  function srcAppHomeActivitiesTasksListListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListComponent", function () {
      return ListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _task_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./task.directive */
    "./src/app/home/activities/tasks/list/task.directive.ts");
    /* harmony import */


    var _task_task_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./task/task.component */
    "./src/app/home/activities/tasks/list/task/task.component.ts");
    /* harmony import */


    var src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/socket/socket.service */
    "./src/app/socket/socket.service.ts");
    /* harmony import */


    var _lists_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../lists.service */
    "./src/app/home/activities/tasks/lists.service.ts");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");

    function ListComponent_ng_template_14_Template(rf, ctx) {}

    var ListComponent = /*#__PURE__*/function () {
      function ListComponent(socketService, listsService, componentFactoryResolver) {
        _classCallCheck(this, ListComponent);

        this.disabled = false;
        this.tasks = new Map();
        this.socketService = socketService;
        this.listsService = listsService;
        this.componentFactoryResolver = componentFactoryResolver;
      }

      _createClass(ListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.socketService.reply.subscribe(function (msg) {
            return _this7.onResponseReceived(msg);
          });
          this.socketService.sendMessage({
            channel: "tasks",
            type: "request_tasks_for_list",
            "list_id": this.data.list_id
          });
          this.listsService.disabledListId.subscribe(function (listId) {
            return _this7.disableIfThisIs(listId);
          });
          this.listsService.lists[this.data.list_id] = this;
        }
      }, {
        key: "dropTask",
        value: function dropTask(event) {
          if (event.previousContainer === event.container) {
            if (!(event.currentIndex == event.previousIndex)) {
              this.taskHost.viewContainerRef.move(this.taskHost.viewContainerRef.get(event.previousIndex), event.currentIndex);
              var taskId = event.item.data.task_id;
              var data = this.listsService.lists[event.previousContainer.id].tasks[taskId].data;
              this.socketService.sendMessage({
                channel: "tasks",
                type: "edit_listing",
                listing_id: data.listing_id,
                list_id: event.container.id,
                index: event.currentIndex
              });
              return;
            }
          } else {
            event.previousContainer.removeItem(event.item);
            var _taskId = event.item.data.task_id;
            var _data = this.listsService.lists[event.previousContainer.id].tasks[_taskId].data;
            _data.index = event.currentIndex;
            var previousViewContainerRef = this.listsService.lists[event.previousContainer.id].taskHost.viewContainerRef;
            previousViewContainerRef.remove(event.previousIndex);
            this.listsService.lists[event.container.id].loadTask(_data);
            this.socketService.sendMessage({
              channel: "tasks",
              type: "edit_listing",
              listing_id: _data.listing_id,
              list_id: event.container.id,
              index: event.currentIndex
            });
          }
        }
      }, {
        key: "onResponseReceived",
        value: function onResponseReceived(msg) {
          if (msg["channel"] == "tasks") {
            if (msg["type"] == "request_tasks_for_list") {
              this.onRequestTasksForList(msg);
            } else if (msg["type"] == "add_task") {
              this.onAddTask(msg);
            }
          }
        }
      }, {
        key: "disableIfThisIs",
        value: function disableIfThisIs(listId) {
          console.log(listId == this.data.list_id);
          this.disabled = listId == this.data.list_id;
        }
      }, {
        key: "toggleArrow",
        value: function toggleArrow() {
          var dropdownLabel = document.getElementById(this.data.list_id + "-label");

          if (dropdownLabel.innerHTML == "▲") {
            dropdownLabel.innerHTML = "▼";
          } else {
            dropdownLabel.innerHTML = "▲";
          }
        }
      }, {
        key: "onRequestTasksForList",
        value: function onRequestTasksForList(msg) {
          var _this8 = this;

          msg["tasks"].sort(function (a, b) {
            return a.index - b.index;
          });
          msg["tasks"].forEach(function (data) {
            if (data["list_id"] == _this8.data.list_id) {
              console.log(data);

              _this8.loadTask(data);
            }
          });
        }
      }, {
        key: "onAddTask",
        value: function onAddTask(msg) {
          if (msg["list_id"] == this.data.list_id) {
            this.loadTask(msg);
          }
        }
      }, {
        key: "loadTask",
        value: function loadTask(data) {
          var componentFactory = this.componentFactoryResolver.resolveComponentFactory(_task_task_component__WEBPACK_IMPORTED_MODULE_2__["TaskComponent"]);
          var viewContainerRef = this.taskHost.viewContainerRef;
          var componentRef;
          componentRef = viewContainerRef.createComponent(componentFactory, data.index);
          var instance = componentRef.instance;
          instance.data = data;
          this.tasks[data.task_id] = instance;
        }
      }, {
        key: "addTask",
        value: function addTask() {
          var newTaskTitleField = document.getElementById(this.data.list_id + "-new-task-title-field");
          var title = newTaskTitleField.value;
          this.socketService.sendMessage({
            channel: "tasks",
            type: "add_task",
            "public": true,
            active: false,
            title: title,
            contents: "",
            list_id: this.data.list_id,
            index: 0
          });
          newTaskTitleField.value = "";
        }
      }, {
        key: "deleteList",
        value: function deleteList() {
          this.socketService.sendMessage({
            channel: "tasks",
            type: "delete_list",
            list_id: this.data.list_id
          });
          this.listsService.lists["delete"](this.data.list_id);
        }
      }, {
        key: "editTitle",
        value: function editTitle() {
          var titleField = document.getElementById(this.data.list_id + "-title-field");
          var title = titleField.value;
          titleField.blur();
          this.socketService.sendMessage({
            channel: "tasks",
            type: "edit_list_title",
            list_id: this.data.list_id,
            title: title
          });
        }
      }, {
        key: "startDragging",
        value: function startDragging(event) {
          event.source.data = this.data;
        }
      }]);

      return ListComponent;
    }();

    ListComponent.ɵfac = function ListComponent_Factory(t) {
      return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_lists_service__WEBPACK_IMPORTED_MODULE_4__["ListsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]));
    };

    ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ListComponent,
      selectors: [["app-list"]],
      viewQuery: function ListComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_task_directive__WEBPACK_IMPORTED_MODULE_1__["TaskDirective"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.taskHost = _t.first);
        }
      },
      inputs: {
        data: "data",
        lists: "lists"
      },
      decls: 18,
      vars: 11,
      consts: [["cdkDrag", "", 1, "list", 3, "cdkDragDisabled", "cdkDragStarted"], ["type", "checkbox", 3, "id"], [1, "list-header"], ["type", "text", 1, "title-field", 3, "id", "value", "keydown.enter", "focusout"], [1, "dropdown-arrow", 3, "id", "for", "click"], [1, "tasks"], [1, "new-task"], [1, "center"], ["type", "text", "placeholder", "Add a new task...", 1, "title", 3, "id", "keydown.enter"], [1, "submit-button", 3, "for", "click"], ["cdkDropList", "", 1, "drop-area", 3, "id", "cdkDropListConnectedTo", "cdkDropListDropped"], ["appTask", ""], [1, "delete-row"], [1, "delete-list", 3, "click"]],
      template: function ListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDragStarted", function ListComponent_Template_div_cdkDragStarted_0_listener($event) {
            return ctx.startDragging($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function ListComponent_Template_input_keydown_enter_3_listener() {
            return ctx.editTitle();
          })("focusout", function ListComponent_Template_input_focusout_3_listener() {
            return ctx.editTitle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_Template_label_click_4_listener() {
            return ctx.toggleArrow();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u25B2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function ListComponent_Template_input_keydown_enter_10_listener() {
            return ctx.addTask();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_Template_label_click_11_listener() {
            return ctx.addTask();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u2713");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function ListComponent_Template_div_cdkDropListDropped_13_listener($event) {
            return ctx.dropTask($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ListComponent_ng_template_14_Template, 0, 0, "ng-template", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_Template_a_click_16_listener() {
            return ctx.deleteList();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDragDisabled", ctx.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", ctx.data.list_id, "-checkbox");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", ctx.data.list_id, "-title-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.data.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", ctx.data.list_id, "-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "", ctx.data.list_id, "-checkbox");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", ctx.data.list_id, "-new-task-checkbox");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", ctx.data.list_id, "-new-task-title-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "", ctx.data.list_id, "-new-list-checkbox");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.data.list_id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListConnectedTo", ctx.lists);
        }
      },
      directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["CdkDrag"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["CdkDropList"], _task_directive__WEBPACK_IMPORTED_MODULE_1__["TaskDirective"]],
      styles: [".list[_ngcontent-%COMP%] {\r\n    background-color: #C2BBDD;\r\n    padding: 0.4em 1ch 0.2em 1ch;\r\n    margin: 0 0 1em 0;\r\n  }\r\n  \r\n  input[type=checkbox][_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  \r\n  .tasks[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n  \r\n  .list-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n  }\r\n  \r\n  input[_ngcontent-%COMP%]:checked ~ .tasks[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  \r\n  .dropdown-arrow[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    font-size: 1.5em;\r\n  }\r\n  \r\n  .title-field[_ngcontent-%COMP%] {\r\n    font-size: 1.5em;\r\n    background-color: #C2BBDD;\r\n    cursor: pointer;\r\n    border: none;\r\n    flex: 1;\r\n  }\r\n  \r\n  .new-task[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    cursor: pointer;\r\n    justify-content: space-between;\r\n    background-color: #F5F5FC;\r\n    padding: 0.2em 1ch 0.2em 1ch;\r\n    margin: 0.5em 0 0.5em 0;\r\n    box-sizing: border-box;\r\n    border-radius: 4px;\r\n}\r\n  \r\n  .center[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n  \r\n  .title[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    font-size: 1.2em;\r\n    overflow-wrap: break-word;\r\n    background-color: #F5F5FC;\r\n    border: none;\r\n}\r\n  \r\n  .submit-button[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    font-size: 1.2em;\r\n}\r\n  \r\n  .delete-row[_ngcontent-%COMP%] {\r\n  display: block;\r\n  text-align: right;\r\n}\r\n  \r\n  .delete-list[_ngcontent-%COMP%] {\r\n  text-decoration: underline;\r\n  color: #D64045;\r\n  cursor: pointer;\r\n}\r\n  \r\n  .drop-area[_ngcontent-%COMP%] {\r\n    min-height: 1em;\r\n}\r\n  \r\n  .cdk-drag-preview[_ngcontent-%COMP%] {\r\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n                0 8px 10px 1px rgba(0, 0, 0, 0.14),\r\n                0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n  }\r\n  \r\n  .cdk-drag-placeholder[_ngcontent-%COMP%] {\r\n    opacity: 0;\r\n}\r\n  \r\n  .cdk-drag-animating[_ngcontent-%COMP%] {\r\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hY3Rpdml0aWVzL3Rhc2tzL2xpc3QvbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1QixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLFlBQVk7SUFDWixPQUFPO0VBQ1Q7O0VBRUY7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLDhCQUE4QjtJQUM5Qix5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztFQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7RUFFQTtJQUNJLE9BQU87SUFDUCxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztFQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7RUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0VBRUE7RUFDRSwwQkFBMEI7RUFDMUIsY0FBYztFQUNkLGVBQWU7QUFDakI7O0VBRUE7SUFDSSxlQUFlO0FBQ25COztFQUVBO0lBQ0k7O2tEQUU4QztFQUNoRDs7RUFFRjtJQUNJLFVBQVU7QUFDZDs7RUFFQTtJQUNJLHNEQUFzRDtBQUMxRCIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYWN0aXZpdGllcy90YXNrcy9saXN0L2xpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDMkJCREQ7XHJcbiAgICBwYWRkaW5nOiAwLjRlbSAxY2ggMC4yZW0gMWNoO1xyXG4gICAgbWFyZ2luOiAwIDAgMWVtIDA7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAudGFza3Mge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5saXN0LWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICBcclxuICBpbnB1dDpjaGVja2Vkfi50YXNrcyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICAuZHJvcGRvd24tYXJyb3cge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICB9XHJcbiAgXHJcbiAgLnRpdGxlLWZpZWxkIHtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzJCQkREO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcbiAgXHJcbi5uZXctdGFzayB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGQztcclxuICAgIHBhZGRpbmc6IDAuMmVtIDFjaCAwLjJlbSAxY2g7XHJcbiAgICBtYXJnaW46IDAuNWVtIDAgMC41ZW0gMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5jZW50ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4gIFxyXG4udGl0bGUge1xyXG4gICAgZmxleDogMTtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGQztcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLnN1Ym1pdC1idXR0b24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxufVxyXG5cclxuLmRlbGV0ZS1yb3cge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uZGVsZXRlLWxpc3Qge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGNvbG9yOiAjRDY0MDQ1O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmRyb3AtYXJlYSB7XHJcbiAgICBtaW4taGVpZ2h0OiAxZW07XHJcbn1cclxuXHJcbi5jZGstZHJhZy1wcmV2aWV3IHtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgICAgICAgICAgICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXHJcbiAgICAgICAgICAgICAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gIH1cclxuICBcclxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuICBcclxuLmNkay1kcmFnLWFuaW1hdGluZyB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-list',
          templateUrl: './list.component.html',
          styleUrls: ['./list.component.css']
        }]
      }], function () {
        return [{
          type: src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]
        }, {
          type: _lists_service__WEBPACK_IMPORTED_MODULE_4__["ListsService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }];
      }, {
        taskHost: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_task_directive__WEBPACK_IMPORTED_MODULE_1__["TaskDirective"], {
            "static": true
          }]
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        lists: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/home/activities/tasks/list/task.directive.ts":
  /*!**************************************************************!*\
    !*** ./src/app/home/activities/tasks/list/task.directive.ts ***!
    \**************************************************************/

  /*! exports provided: TaskDirective */

  /***/
  function srcAppHomeActivitiesTasksListTaskDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskDirective", function () {
      return TaskDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TaskDirective = function TaskDirective(viewContainerRef) {
      _classCallCheck(this, TaskDirective);

      this.viewContainerRef = viewContainerRef;
    };

    TaskDirective.ɵfac = function TaskDirective_Factory(t) {
      return new (t || TaskDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]));
    };

    TaskDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: TaskDirective,
      selectors: [["", "appTask", ""]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appTask]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/activities/tasks/list/task/task.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/home/activities/tasks/list/task/task.component.ts ***!
    \*******************************************************************/

  /*! exports provided: TaskComponent */

  /***/
  function srcAppHomeActivitiesTasksListTaskTaskComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskComponent", function () {
      return TaskComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/socket/socket.service */
    "./src/app/socket/socket.service.ts");
    /* harmony import */


    var _lists_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../lists.service */
    "./src/app/home/activities/tasks/lists.service.ts");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");

    var TaskComponent = /*#__PURE__*/function () {
      function TaskComponent(socketService, listsService) {
        _classCallCheck(this, TaskComponent);

        this.open = false;
        this.editVisible = false;
        this.socketService = socketService;
        this.listsService = listsService;
      }

      _createClass(TaskComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.socketService.reply.subscribe(function (msg) {
            return _this9.onResponseReceived(msg);
          });
        }
      }, {
        key: "onResponseReceived",
        value: function onResponseReceived(msg) {
          if (msg["channel"] == "tasks") {
            if (msg["type"] == "request_task") {
              this.onRequestTask(msg);
            }
          }
        }
      }, {
        key: "startDragging",
        value: function startDragging(event) {
          event.source.data = this.data;
        }
      }, {
        key: "toggleTask",
        value: function toggleTask() {
          if (!this.open) {
            this.socketService.sendMessage({
              channel: "tasks",
              type: "request_task",
              "task_id": this.data.task_id
            });
          } else {
            var task = document.getElementById(this.data.task_id);
            task.classList.remove("open");
            this.disabled = false;
            this.listsService.setDisabledList(null);
            var editButton = document.getElementById(this.data.task_id + "-edit");
            editButton.classList.toggle("not-displayed");
            var element = document.getElementById(this.data.task_id + "-full");
            var sectionHeight = element.scrollHeight; // temporarily disable all css transitions

            var elementTransition = element.style.transition;
            element.style.transition = ''; // on the next frame (as soon as the previous style change has taken effect),
            // explicitly set the element's height to its current pixel height, so we 
            // aren't transitioning out of 'auto'

            requestAnimationFrame(function () {
              element.style.height = sectionHeight + 'px';
              element.style.transition = elementTransition; // on the next frame (as soon as the previous style change has taken effect),
              // have the element transition to height: 0

              requestAnimationFrame(function () {
                element.style.height = 0 + 'px';
              });
            });
            this.open = false;
          }
        }
      }, {
        key: "toggleEditButton",
        value: function toggleEditButton() {
          var editButton = document.getElementById(this.data.task_id + "-edit");

          if (!this.open) {
            editButton.classList.toggle("hidden");
          }
        }
      }, {
        key: "onRequestTask",
        value: function onRequestTask(msg) {
          if (msg["task_id"] == this.data.task_id) {
            var task = document.getElementById(this.data.task_id);
            task.classList.add("open");
            this.disabled = true;
            this.listsService.setDisabledList(this.data.list_id);
            var editButton = document.getElementById(this.data.task_id + "-edit");
            editButton.classList.toggle("not-displayed");
            var contents = document.getElementById(this.data.task_id + "-contents");
            contents.innerHTML = msg["contents"];
            var element = document.getElementById(this.data.task_id + "-full");
            var sectionHeight = element.scrollHeight;
            element.style.height = sectionHeight + 'px';
          }
        }
      }]);

      return TaskComponent;
    }();

    TaskComponent.ɵfac = function TaskComponent_Factory(t) {
      return new (t || TaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_lists_service__WEBPACK_IMPORTED_MODULE_2__["ListsService"]));
    };

    TaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TaskComponent,
      selectors: [["app-task"]],
      inputs: {
        data: "data"
      },
      decls: 13,
      vars: 6,
      consts: [["cdkDrag", "", 1, "task", 3, "id", "cdkDragDisabled", "cdkDragStarted", "mouseover", "mouseout"], [1, "center"], [1, "tags"], [1, "title"], [1, "full", 3, "id"], [1, "contents", 3, "id"], [1, "extras"], [1, "edit", "hidden", 3, "id", "click"]],
      template: function TaskComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDragStarted", function TaskComponent_Template_div_cdkDragStarted_0_listener($event) {
            return ctx.startDragging($event);
          })("mouseover", function TaskComponent_Template_div_mouseover_0_listener() {
            return ctx.toggleEditButton();
          })("mouseout", function TaskComponent_Template_div_mouseout_0_listener() {
            return ctx.toggleEditButton();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " tags ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " extras ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_Template_div_click_11_listener() {
            return ctx.toggleTask();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u270E ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.data.task_id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDragDisabled", ctx.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", ctx.data.task_id, "-full");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", ctx.data.task_id, "-contents");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", ctx.data.task_id, "-edit");
        }
      },
      directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDrag"]],
      styles: [".task[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    cursor: -webkit-grab;\r\n    cursor: grab;\r\n    justify-content: space-between;\r\n    background-color: #F5F5FC;\r\n    padding: 0.2em 1ch 0.2em 1ch;\r\n    margin: 0.5em 0 0.5em 0;\r\n    box-sizing: border-box;\r\n    border-radius: 4px;\r\n  }\r\n  \r\n  .task[_ngcontent-%COMP%]:hover {\r\n    background-color: #D5D5DB;\r\n  }\r\n  \r\n  .task[_ngcontent-%COMP%]:focus {\r\n    outline: none;\r\n  }\r\n  \r\n  .center[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    height: auto;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n  }\r\n  \r\n  .title[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    font-size: 1.2em;\r\n    overflow-wrap: break-word;\r\n  }\r\n  \r\n  .full[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n    transition: height 0.2s ease-out;\r\n    height: 0;\r\n  }\r\n  \r\n  .open[_ngcontent-%COMP%] {\r\n    cursor: auto;\r\n    background-color: #D5D5DB;\r\n  }\r\n  \r\n  .edit[_ngcontent-%COMP%] {\r\n    align-self: center;\r\n    font-size:2em;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .hidden[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n  }\r\n  \r\n  .not-displayed[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  \r\n  .cdk-drag-preview[_ngcontent-%COMP%] {\r\n    box-sizing: border-box;\r\n    border-radius: 4px;\r\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n                0 8px 10px 1px rgba(0, 0, 0, 0.14),\r\n                0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n}\r\n  \r\n  .cdk-drag-placeholder[_ngcontent-%COMP%] {\r\n    opacity: 0;\r\n}\r\n  \r\n  .cdk-drag-animating[_ngcontent-%COMP%] {\r\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hY3Rpdml0aWVzL3Rhc2tzL2xpc3QvdGFzay90YXNrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isb0JBQVk7SUFBWixZQUFZO0lBQ1osOEJBQThCO0lBQzlCLHlCQUF5QjtJQUN6Qiw0QkFBNEI7SUFDNUIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUY7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHNCQUFzQjtJQUN0Qiw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSxPQUFPO0lBQ1AsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixnQ0FBZ0M7SUFDaEMsU0FBUztFQUNYOztFQUVBO0lBQ0UsWUFBWTtJQUNaLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFRjtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEI7O2tEQUU4QztBQUNsRDs7RUFFQTtJQUNJLFVBQVU7QUFDZDs7RUFFQTtJQUNJLHNEQUFzRDtBQUMxRCIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYWN0aXZpdGllcy90YXNrcy9saXN0L3Rhc2svdGFzay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhc2sge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGN1cnNvcjogZ3JhYjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RkM7XHJcbiAgICBwYWRkaW5nOiAwLjJlbSAxY2ggMC4yZW0gMWNoO1xyXG4gICAgbWFyZ2luOiAwLjVlbSAwIDAuNWVtIDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuICBcclxuICAudGFzazpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDVENURCO1xyXG4gIH1cclxuXHJcbiAgLnRhc2s6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcblxyXG4uY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuICBcclxuICAudGl0bGUge1xyXG4gICAgZmxleDogMTtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gIH1cclxuXHJcbiAgLmZ1bGwge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjJzIGVhc2Utb3V0O1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gIH1cclxuXHJcbiAgLm9wZW4ge1xyXG4gICAgY3Vyc29yOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Q1RDVEQjtcclxuICB9XHJcbiAgXHJcbiAgLmVkaXQge1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOjJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC5oaWRkZW4ge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgLm5vdC1kaXNwbGF5ZWQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4uY2RrLWRyYWctcHJldmlldyB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgICAgICAgICAgICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbn1cclxuICBcclxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuICBcclxuLmNkay1kcmFnLWFuaW1hdGluZyB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-task',
          templateUrl: './task.component.html',
          styleUrls: ['./task.component.css']
        }]
      }], function () {
        return [{
          type: src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]
        }, {
          type: _lists_service__WEBPACK_IMPORTED_MODULE_2__["ListsService"]
        }];
      }, {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/home/activities/tasks/lists.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/home/activities/tasks/lists.service.ts ***!
    \********************************************************/

  /*! exports provided: ListsService */

  /***/
  function srcAppHomeActivitiesTasksListsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListsService", function () {
      return ListsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ListsService = /*#__PURE__*/function () {
      function ListsService() {
        _classCallCheck(this, ListsService);

        this.lists = new Map();
        this.disabledListIdSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.disabledListId = this.disabledListIdSource.asObservable();
      }

      _createClass(ListsService, [{
        key: "setDisabledList",
        value: function setDisabledList(listId) {
          this.disabledListIdSource.next(listId);
        }
      }]);

      return ListsService;
    }();

    ListsService.ɵfac = function ListsService_Factory(t) {
      return new (t || ListsService)();
    };

    ListsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ListsService,
      factory: ListsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/activities/tasks/tasks.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/home/activities/tasks/tasks.component.ts ***!
    \**********************************************************/

  /*! exports provided: TasksComponent */

  /***/
  function srcAppHomeActivitiesTasksTasksComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TasksComponent", function () {
      return TasksComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _list_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./list.directive */
    "./src/app/home/activities/tasks/list.directive.ts");
    /* harmony import */


    var _list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./list/list.component */
    "./src/app/home/activities/tasks/list/list.component.ts");
    /* harmony import */


    var src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/socket/socket.service */
    "./src/app/socket/socket.service.ts");
    /* harmony import */


    var _lists_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./lists.service */
    "./src/app/home/activities/tasks/lists.service.ts");
    /* harmony import */


    var _panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../panel-header/panel-header.component */
    "./src/app/panel-header/panel-header.component.ts");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");

    function TasksComponent_ng_template_4_Template(rf, ctx) {}

    var TasksComponent = /*#__PURE__*/function () {
      function TasksComponent(socketService, listsService, componentFactoryResolver) {
        _classCallCheck(this, TasksComponent);

        this.header = "Tasks";
        this.lists = [];
        this.listViewRefs = new Map();
        this.socketService = socketService;
        this.listsService = listsService;
        this.componentFactoryResolver = componentFactoryResolver;
      }

      _createClass(TasksComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.socketService.reply.subscribe(function (msg) {
            return _this10.onResponseReceived(msg);
          });
          this.socketService.sendMessage({
            channel: "tasks",
            type: "request_lists"
          });
        }
      }, {
        key: "onResponseReceived",
        value: function onResponseReceived(msg) {
          if (msg["channel"] == "tasks") {
            if (msg["type"] == "request_lists") {
              this.onRequestLists(msg);
            } else if (msg["type"] == "add_list") {
              this.loadList({
                title: msg["title"],
                index: msg["index"],
                list_id: msg["list_id"]
              });
            } else if (msg["type"] == "delete_list") {
              this.deleteList(msg["list_id"]);
            }
          }
        }
      }, {
        key: "onRequestLists",
        value: function onRequestLists(msg) {
          var _this11 = this;

          msg["lists"].sort(function (a, b) {
            return a.index - b.index;
          });
          msg["lists"].forEach(function (data) {
            console.log(data);

            _this11.loadList(data);
          });
        }
      }, {
        key: "loadList",
        value: function loadList(data) {
          this.lists.push(data.list_id);
          var componentFactory = this.componentFactoryResolver.resolveComponentFactory(_list_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"]);
          var viewContainerRef = this.listHost.viewContainerRef;
          var componentRef = viewContainerRef.createComponent(componentFactory, data.index);
          var instance = componentRef.instance;
          instance.data = data;
          instance.lists = this.lists;
          this.listViewRefs.set(data.list_id, componentRef.hostView);
        }
      }, {
        key: "addList",
        value: function addList() {
          var newListTitleField = document.getElementById("new-list-title-field");
          var title = newListTitleField.value;
          this.socketService.sendMessage({
            channel: "tasks",
            type: "add_list",
            title: title,
            index: this.lists.length
          });
          newListTitleField.value = "";
        }
      }, {
        key: "deleteList",
        value: function deleteList(listId) {
          var index = this.listHost.viewContainerRef.indexOf(this.listViewRefs.get(listId));
          this.listHost.viewContainerRef.remove(index); // TODO: the below line is not working

          this.listsService.lists["delete"](listId);
        }
      }, {
        key: "dropList",
        value: function dropList(event) {
          if (event.previousContainer === event.container) {
            this.listHost.viewContainerRef.move(this.listHost.viewContainerRef.get(event.previousIndex), event.currentIndex);
            console.log(event.previousIndex);
            console.log(event.currentIndex);
            this.socketService.sendMessage({
              channel: "tasks",
              type: "move_list",
              list_id: event.item.data.list_id,
              index: event.currentIndex
            });
          }
        }
      }]);

      return TasksComponent;
    }();

    TasksComponent.ɵfac = function TasksComponent_Factory(t) {
      return new (t || TasksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_lists_service__WEBPACK_IMPORTED_MODULE_4__["ListsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]));
    };

    TasksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TasksComponent,
      selectors: [["app-tasks"]],
      viewQuery: function TasksComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_list_directive__WEBPACK_IMPORTED_MODULE_1__["ListDirective"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listHost = _t.first);
        }
      },
      decls: 10,
      vars: 1,
      consts: [[1, "scroll-container"], [3, "header"], ["id", "list"], ["cdkDropList", "", 3, "cdkDropListDropped"], ["appList", ""], [1, "new-list"], ["id", "new-list-checkbox", "type", "checkbox"], [1, "list-header"], ["id", "new-list-title-field", "type", "text", "placeholder", "Add a new list...", 3, "keydown.enter"], ["for", "new-list-checkbox", 1, "submit-button", 3, "click"]],
      template: function TasksComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-panel-header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function TasksComponent_Template_div_cdkDropListDropped_3_listener($event) {
            return ctx.dropList($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TasksComponent_ng_template_4_Template, 0, 0, "ng-template", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function TasksComponent_Template_input_keydown_enter_8_listener() {
            return ctx.addList();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TasksComponent_Template_label_click_9_listener() {
            return ctx.addList();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", ctx.header);
        }
      },
      directives: [_panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_5__["PanelHeaderComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["CdkDropList"], _list_directive__WEBPACK_IMPORTED_MODULE_1__["ListDirective"]],
      styles: [".scroll-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n    position: relative;\r\n}\r\n\r\n#list[_ngcontent-%COMP%] {\r\n    flex: 1 1 auto;\r\n    overflow-y: auto;\r\n    height: 70vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.new-list[_ngcontent-%COMP%] {\r\n    background-color: #C2BBDD;\r\n    padding: 0.4em 1ch 0.2em 1ch;\r\n    margin: 0 0 1em 0;\r\n}\r\n\r\ninput[type=checkbox][_ngcontent-%COMP%], .tasks[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.list-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:checked ~ .tasks[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\n.list-header[_ngcontent-%COMP%]::after {\r\n    font-size: 1.5em;\r\n    content: '\u2713';\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:checked ~ .list-header[_ngcontent-%COMP%]::after {\r\n    content: '\u2713';\r\n}\r\n\r\n.submit-button[_ngcontent-%COMP%] {\r\n    display: hidden;\r\n    cursor: pointer;\r\n    width: 2ch;\r\n    height: 1.5em;\r\n    position: absolute;\r\n    right: 1ch;\r\n}\r\n\r\n#new-list-title-field[_ngcontent-%COMP%] {\r\n    font-size: 1.5em;\r\n    background-color: #C2BBDD;\r\n    cursor: pointer;\r\n    border: none;\r\n    flex: 1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hY3Rpdml0aWVzL3Rhc2tzL3Rhc2tzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1QixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZixVQUFVO0lBQ1YsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixZQUFZO0lBQ1osT0FBTztBQUNYIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9hY3Rpdml0aWVzL3Rhc2tzL3Rhc2tzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nyb2xsLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuI2xpc3Qge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgaGVpZ2h0OiA3MHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5uZXctbGlzdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzJCQkREO1xyXG4gICAgcGFkZGluZzogMC40ZW0gMWNoIDAuMmVtIDFjaDtcclxuICAgIG1hcmdpbjogMCAwIDFlbSAwO1xyXG59XHJcbiAgXHJcbmlucHV0W3R5cGU9Y2hlY2tib3hdLFxyXG4udGFza3Mge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4gIFxyXG4ubGlzdC1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4gIFxyXG5pbnB1dDpjaGVja2Vkfi50YXNrcyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4gIFxyXG4ubGlzdC1oZWFkZXI6OmFmdGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBjb250ZW50OiAn4pyTJztcclxufVxyXG4gIFxyXG5pbnB1dDpjaGVja2Vkfi5saXN0LWhlYWRlcjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJ+Kckyc7XHJcbn1cclxuICBcclxuLnN1Ym1pdC1idXR0b24ge1xyXG4gICAgZGlzcGxheTogaGlkZGVuO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDJjaDtcclxuICAgIGhlaWdodDogMS41ZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMWNoO1xyXG59XHJcbiAgXHJcbiNuZXctbGlzdC10aXRsZS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0MyQkJERDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZsZXg6IDE7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TasksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-tasks',
          templateUrl: './tasks.component.html',
          styleUrls: ['./tasks.component.css']
        }]
      }], function () {
        return [{
          type: src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]
        }, {
          type: _lists_service__WEBPACK_IMPORTED_MODULE_4__["ListsService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }];
      }, {
        listHost: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_list_directive__WEBPACK_IMPORTED_MODULE_1__["ListDirective"], {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/home/activities/timer/timer.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/home/activities/timer/timer.component.ts ***!
    \**********************************************************/

  /*! exports provided: TimerComponent */

  /***/
  function srcAppHomeActivitiesTimerTimerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimerComponent", function () {
      return TimerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../panel-header/panel-header.component */
    "./src/app/panel-header/panel-header.component.ts");

    var TimerComponent = /*#__PURE__*/function () {
      function TimerComponent() {
        _classCallCheck(this, TimerComponent);

        this.header = "Timer";
      }

      _createClass(TimerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TimerComponent;
    }();

    TimerComponent.ɵfac = function TimerComponent_Factory(t) {
      return new (t || TimerComponent)();
    };

    TimerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TimerComponent,
      selectors: [["app-timer"]],
      decls: 3,
      vars: 1,
      consts: [[3, "header"]],
      template: function TimerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-panel-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "timer works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", ctx.header);
        }
      },
      directives: [_panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_1__["PanelHeaderComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYWN0aXZpdGllcy90aW1lci90aW1lci5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-timer',
          templateUrl: './timer.component.html',
          styleUrls: ['./timer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/activity-container.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/home/activity-container.component.ts ***!
    \******************************************************/

  /*! exports provided: ActivityContainerComponent */

  /***/
  function srcAppHomeActivityContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActivityContainerComponent", function () {
      return ActivityContainerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _activities_activities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./activities/activities */
    "./src/app/home/activities/activities.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _activities_store_store_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./activities/store/store.component */
    "./src/app/home/activities/store/store.component.ts");
    /* harmony import */


    var _activities_chat_chat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./activities/chat/chat.component */
    "./src/app/home/activities/chat/chat.component.ts");
    /* harmony import */


    var _activities_timer_timer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./activities/timer/timer.component */
    "./src/app/home/activities/timer/timer.component.ts");
    /* harmony import */


    var _activities_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./activities/tasks/tasks.component */
    "./src/app/home/activities/tasks/tasks.component.ts");
    /* harmony import */


    var _activities_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./activities/calendar/calendar.component */
    "./src/app/home/activities/calendar/calendar.component.ts");
    /* harmony import */


    var _activities_settings_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./activities/settings/settings.component */
    "./src/app/home/activities/settings/settings.component.ts");

    var ActivityContainerComponent = /*#__PURE__*/function () {
      function ActivityContainerComponent(location) {
        _classCallCheck(this, ActivityContainerComponent);

        this.activities = _activities_activities__WEBPACK_IMPORTED_MODULE_1__["activities"];
        this.location = location;
        this.updateActivity.bind(this);
        this.location.onUrlChange(this.updateActivity);
      }

      _createClass(ActivityContainerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.updateActivity(this.location.path(), this.location.getState());
        }
      }, {
        key: "updateActivity",
        value: function updateActivity(url, state) {
          // ALERT: REDUNDANCY
          var activity = url.replace('/home', '');
          activity = activity.replace('/', '');
          var visibleActivities = document.getElementsByClassName("visible");
          var i = 0;

          for (var _i2 = 0; _i2 < visibleActivities.length; _i2++) {
            var visibleActivity = document.getElementsByClassName("visible")[_i2];

            visibleActivity.classList.remove("visible");
          }

          if (_activities_activities__WEBPACK_IMPORTED_MODULE_1__["activities"].includes(activity)) {
            var newVisibleActivity = document.getElementById(activity);
            newVisibleActivity.classList.add("visible");
          }
        }
      }]);

      return ActivityContainerComponent;
    }();

    ActivityContainerComponent.ɵfac = function ActivityContainerComponent_Factory(t) {
      return new (t || ActivityContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]));
    };

    ActivityContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ActivityContainerComponent,
      selectors: [["app-activity-container"]],
      decls: 13,
      vars: 0,
      consts: [[1, "activities"], ["id", "store", 1, "activity"], ["id", "chat", 1, "activity"], ["id", "timer", 1, "activity"], ["id", "tasks", 1, "activity"], ["id", "calendar", 1, "activity"], ["id", "settings", 1, "activity"]],
      template: function ActivityContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-store");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-chat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-timer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-tasks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-calendar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_activities_store_store_component__WEBPACK_IMPORTED_MODULE_3__["StoreComponent"], _activities_chat_chat_component__WEBPACK_IMPORTED_MODULE_4__["ChatComponent"], _activities_timer_timer_component__WEBPACK_IMPORTED_MODULE_5__["TimerComponent"], _activities_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_6__["TasksComponent"], _activities_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_7__["CalendarComponent"], _activities_settings_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"]],
      styles: [".activities[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex: 1 0 0;\r\n    height: 100%;\r\n}\r\n\r\n.activity[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.visible[_ngcontent-%COMP%] {\r\n    flex: 1 0 0;\r\n    background-color: #F5F5FC;\r\n    display: block;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hY3Rpdml0eS1jb250YWluZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2FjdGl2aXR5LWNvbnRhaW5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2aXRpZXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXg6IDEgMCAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uYWN0aXZpdHkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnZpc2libGUge1xyXG4gICAgZmxleDogMSAwIDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUZDO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActivityContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-activity-container',
          templateUrl: './activity-container.component.html',
          styleUrls: ['./activity-container.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/header/header.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/home/header/header.component.ts ***!
    \*************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHomeHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _socket_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../socket/socket.service */
    "./src/app/socket/socket.service.ts");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(socketService) {
        _classCallCheck(this, HeaderComponent);

        this.socketService = socketService;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.socketService.reply.subscribe(function (msg) {
            return _this12.onResponseReceived(msg);
          });
        }
      }, {
        key: "onResponseReceived",
        value: function onResponseReceived(msg) {
          if (msg["password_correct"] != null) {
            if (msg["password_correct"] == false) {
              document.location.href = "/auth/sign-in";
            }
          }
        }
      }, {
        key: "signOut",
        value: function signOut() {
          var signOutMessage = {
            channel: "auth",
            type: "sign_out"
          };
          this.socketService.sendMessage(signOutMessage);
          sessionStorage.clear();
          document.location.href = "/";
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_socket_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 7,
      vars: 0,
      consts: [[1, "header"], ["href", "/", 1, "home"], [1, "options"], [3, "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\uD83D\uDCA4\uD83C\uDF89 Slumber Party");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_5_listener() {
            return ctx.signOut();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sign out");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 0.5em 0 0.5em 0;\r\n    background-color: #001e4e;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    color: #7B869A;\r\n    cursor: pointer;\r\n    text-decoration: underline;\r\n    padding: 0 0.5em 0 0.5em;\r\n}\r\n\r\n.home[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    display: contents;\r\n    color: #F5F5FC;\r\n    margin: 0;\r\n}\r\n\r\n.options[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 1.75em;\r\n    display: flex;\r\n    font-size: small;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n    color: #F5F5FC;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .header[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        align-items: left;\r\n        justify-content: left;\r\n    }\r\n\r\n    h1[_ngcontent-%COMP%] {\r\n        font-size: 1em;\r\n    }\r\n\r\n    .options[_ngcontent-%COMP%] {\r\n        top: 0.8em;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLGlCQUFpQjtRQUNqQixxQkFBcUI7SUFDekI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksVUFBVTtJQUNkO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAuNWVtIDAgMC41ZW0gMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDFlNGU7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgY29sb3I6ICM3Qjg2OUE7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIHBhZGRpbmc6IDAgMC41ZW0gMCAwLjVlbTtcclxufVxyXG5cclxuLmhvbWUge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBkaXNwbGF5OiBjb250ZW50cztcclxuICAgIGNvbG9yOiAjRjVGNUZDO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ub3B0aW9ucyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMS43NWVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuXHJcbmE6aG92ZXIge1xyXG4gICAgY29sb3I6ICNGNUY1RkM7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5oZWFkZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGxlZnQ7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgIH1cclxuXHJcbiAgICAub3B0aW9ucyB7XHJcbiAgICAgICAgdG9wOiAwLjhlbTtcclxuICAgIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [{
          type: _socket_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/home/header/header.component.ts");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./menu/menu.component */
    "./src/app/home/menu/menu.component.ts");
    /* harmony import */


    var _activity_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./activity-container.component */
    "./src/app/home/activity-container.component.ts");
    /* harmony import */


    var _room_room_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./room/room.component */
    "./src/app/home/room/room.component.ts");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(location) {
        _classCallCheck(this, HomeComponent);

        this.location = location;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //this.location.replaceState(window.location.href.replace("xn--dk8hvr", "slumberparty"));
          if (this.location.path() == '/home') {
            this.location.replaceState('/home/chat');
          }

          this.updateActivity(this.location.path(), this.location.getState());
          this.location.onUrlChange(this.updateActivity);
        }
      }, {
        key: "updateActivity",
        value: function updateActivity(url, state) {
          window.history.pushState(null, url, url);
          var activity = url.replace('/home', '');
          activity = activity.replace('/', '');

          if (activity == '') {
            var activityContainer = document.getElementById("activity-container");
            var room = document.getElementsByClassName("room")[0];
            activityContainer.classList.add("invisible");
            room.classList.toggle("visible-mobile");
          } else {
            var _activityContainer = document.getElementById("activity-container");

            _activityContainer.classList.remove("invisible");

            var _room = document.getElementsByClassName("room")[0];

            _room.classList.remove("visible-mobile");
          }
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 7,
      vars: 0,
      consts: [[1, "home"], [1, "header"], [1, "app"], ["id", "menu"], ["id", "activity-container"], [1, "room"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-menu", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-activity-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-room", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"], _activity_container_component__WEBPACK_IMPORTED_MODULE_4__["ActivityContainerComponent"], _room_room_component__WEBPACK_IMPORTED_MODULE_5__["RoomComponent"]],
      styles: [".home[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\n.app[_ngcontent-%COMP%] {\r\n    flex: 15 0 0;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: stretch;\r\n}\r\n\r\n#activity-container[_ngcontent-%COMP%] {\r\n    flex: 5 0 0;\r\n}\r\n\r\n.room[_ngcontent-%COMP%] {\r\n    flex: 10 0 0;\r\n    background-color: #000000;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.invisible[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .app[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n    }\r\n\r\n    #activity-container[_ngcontent-%COMP%] {\r\n        height: 100%;\r\n        border-right: none;\r\n    }\r\n\r\n    #menu[_ngcontent-%COMP%] {\r\n        order: 3;\r\n    }\r\n\r\n    .room[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n\r\n    .visible-mobile[_ngcontent-%COMP%] {\r\n        display: inherit;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBR0E7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0k7UUFDSSxzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksUUFBUTtJQUNaOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5hcHAge1xyXG4gICAgZmxleDogMTUgMCAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxufVxyXG5cclxuI2FjdGl2aXR5LWNvbnRhaW5lciB7XHJcbiAgICBmbGV4OiA1IDAgMDtcclxufVxyXG5cclxuXHJcbi5yb29tIHtcclxuICAgIGZsZXg6IDEwIDAgMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmludmlzaWJsZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuYXBwIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5cclxuICAgICNhY3Rpdml0eS1jb250YWluZXIge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgI21lbnUge1xyXG4gICAgICAgIG9yZGVyOiAzO1xyXG4gICAgfVxyXG5cclxuICAgIC5yb29tIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC52aXNpYmxlLW1vYmlsZSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5oZXJpdDtcclxuICAgIH1cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/menu/menu.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/menu/menu.component.ts ***!
    \*********************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppHomeMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var MenuComponent = /*#__PURE__*/function () {
      function MenuComponent(location) {
        _classCallCheck(this, MenuComponent);

        this.location = location;
        this.updateActivity.bind(this);
        this.location.onUrlChange(this.updateActivity);
      }

      _createClass(MenuComponent, [{
        key: "navigate",
        value: function navigate(s) {
          this.location.replaceState(s);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.updateActivity(this.location.path(), this.location.getState());
        }
      }, {
        key: "updateActivity",
        value: function updateActivity(url, state) {
          // ALERT: REDUNDANCY
          var activity = url.replace('/home', '');
          activity = activity.replace('/', '');

          if (activity == '') {
            activity = 'room';
          }

          var selectedElements = document.getElementsByClassName("selected");
          var i = 0;

          for (var _i3 = 0; _i3 < selectedElements.length; _i3++) {
            var selectedElement = selectedElements[_i3];
            selectedElement.classList.remove("selected");
          }

          var newVisibleActivity = document.getElementById(activity + "-nav");
          newVisibleActivity.classList.add("selected");
        }
      }]);

      return MenuComponent;
    }();

    MenuComponent.ɵfac = function MenuComponent_Factory(t) {
      return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]));
    };

    MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenuComponent,
      selectors: [["app-menu"]],
      decls: 15,
      vars: 0,
      consts: [["id", "room-nav", 3, "click"], ["id", "store-nav", 3, "click"], ["id", "chat-nav", 3, "click"], ["id", "timer-nav", 3, "click"], ["id", "tasks-nav", 3, "click"], ["id", "calendar-nav", 3, "click"], ["id", "settings-nav", 3, "click"]],
      template: function MenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_1_listener() {
            return ctx.navigate("/home");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\uD83C\uDFE0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_3_listener() {
            return ctx.navigate("/home/store");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\uD83D\uDECD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_5_listener() {
            return ctx.navigate("/home/chat");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\uD83D\uDCAC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_7_listener() {
            return ctx.navigate("/home/timer");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u23F2\uFE0F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_9_listener() {
            return ctx.navigate("/home/tasks");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u2705");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_11_listener() {
            return ctx.navigate("/home/calendar");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\uD83D\uDDD3\uFE0F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_13_listener() {
            return ctx.navigate("/home/settings");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u2699\uFE0F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["nav[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    background-color: #011638;\r\n    color: #011638;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    display: block;\r\n    cursor: pointer;\r\n    font-size: 32px;\r\n    text-decoration: none;\r\n    text-align: center;\r\n    border-left: 0.1em solid;\r\n    padding: 0.2em 0.2em 0.2em 0.1em;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n    background-color: #505969;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover:not(.selected) {\r\n    border-color: #505969;\r\n}\r\n\r\n.selected[_ngcontent-%COMP%] {\r\n    border-color: #F5F5FC;\r\n}\r\n\r\n#settings-nav[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 0;\r\n}\r\n\r\n#room-nav[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n@media only screen and (max-height: 420px) {\r\n    #settings-nav[_ngcontent-%COMP%] {\r\n        position: relative;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    nav[_ngcontent-%COMP%] {\r\n        margin-top: auto;\r\n        height: auto;\r\n        display: flex;\r\n    }\r\n\r\n    a[_ngcontent-%COMP%] {\r\n        flex-grow: 1;\r\n        border-left: none;\r\n        border-bottom: 0.1em solid;\r\n        padding: 0.2em 0.2em 0.1em 0.2em;\r\n    }\r\n\r\n    #settings-nav[_ngcontent-%COMP%] {\r\n        position: relative;\r\n    }\r\n\r\n    #room-nav[_ngcontent-%COMP%] {\r\n        display: block;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9tZW51L21lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO1FBQ2hCLFlBQVk7UUFDWixhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLGlCQUFpQjtRQUNqQiwwQkFBMEI7UUFDMUIsZ0NBQWdDO0lBQ3BDOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9tZW51L21lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDExNjM4O1xyXG4gICAgY29sb3I6ICMwMTE2Mzg7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItbGVmdDogMC4xZW0gc29saWQ7XHJcbiAgICBwYWRkaW5nOiAwLjJlbSAwLjJlbSAwLjJlbSAwLjFlbTtcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTA1OTY5O1xyXG59XHJcblxyXG5hOmhvdmVyOm5vdCguc2VsZWN0ZWQpIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzUwNTk2OTtcclxufVxyXG5cclxuLnNlbGVjdGVkIHtcclxuICAgIGJvcmRlci1jb2xvcjogI0Y1RjVGQztcclxufVxyXG5cclxuI3NldHRpbmdzLW5hdiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbn1cclxuXHJcbiNyb29tLW5hdiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0MjBweCkge1xyXG4gICAgI3NldHRpbmdzLW5hdiB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICBuYXYge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcblxyXG4gICAgYSB7XHJcbiAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDAuMWVtIHNvbGlkO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuMmVtIDAuMmVtIDAuMWVtIDAuMmVtO1xyXG4gICAgfVxyXG5cclxuICAgICNzZXR0aW5ncy1uYXYge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICAjcm9vbS1uYXYge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-menu',
          templateUrl: './menu.component.html',
          styleUrls: ['./menu.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/room-change.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/room-change.service.ts ***!
    \*********************************************/

  /*! exports provided: RoomChangeService */

  /***/
  function srcAppHomeRoomChangeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoomChangeService", function () {
      return RoomChangeService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var RoomChangeService = /*#__PURE__*/function () {
      function RoomChangeService() {
        _classCallCheck(this, RoomChangeService);

        this.changeSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.roomId = this.changeSource.asObservable();
      }

      _createClass(RoomChangeService, [{
        key: "setRoom",
        value: function setRoom(roomId) {
          this.changeSource.next(roomId);
        }
      }]);

      return RoomChangeService;
    }();

    RoomChangeService.ɵfac = function RoomChangeService_Factory(t) {
      return new (t || RoomChangeService)();
    };

    RoomChangeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RoomChangeService,
      factory: RoomChangeService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoomChangeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/room/room.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/room/room.component.ts ***!
    \*********************************************/

  /*! exports provided: RoomComponent */

  /***/
  function srcAppHomeRoomRoomComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoomComponent", function () {
      return RoomComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var RoomComponent = /*#__PURE__*/function () {
      function RoomComponent() {
        _classCallCheck(this, RoomComponent);
      } // ...


      _createClass(RoomComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RoomComponent;
    }();

    RoomComponent.ɵfac = function RoomComponent_Factory(t) {
      return new (t || RoomComponent)();
    };

    RoomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RoomComponent,
      selectors: [["app-room"]],
      decls: 2,
      vars: 0,
      consts: [[1, "room"], ["src", "../../../assets/room/slumber-party-room.html"]],
      template: function RoomComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "iframe", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".room[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: stretch;\r\n    flex: 1;\r\n}\r\n\r\niframe[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    border: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9yb29tL3Jvb20uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLE9BQU87QUFDWDs7QUFFQTtJQUNJLE9BQU87SUFDUCxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9yb29tL3Jvb20uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb29tIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICBmbGV4OiAxO1xyXG59XHJcblxyXG5pZnJhbWUge1xyXG4gICAgZmxleDogMTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-room',
          templateUrl: './room.component.html',
          styleUrls: ['./room.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/join-room/join-room.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/join-room/join-room.component.ts ***!
    \**************************************************/

  /*! exports provided: JoinRoomComponent */

  /***/
  function srcAppJoinRoomJoinRoomComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JoinRoomComponent", function () {
      return JoinRoomComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _socket_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../socket/socket.service */
    "./src/app/socket/socket.service.ts");

    var JoinRoomComponent = /*#__PURE__*/function () {
      function JoinRoomComponent(socketService) {
        _classCallCheck(this, JoinRoomComponent);

        this.socketService = socketService;
      }

      _createClass(JoinRoomComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.socketService.reply.subscribe(function (msg) {
            return _this13.onResponseReceived(msg);
          });
        }
      }, {
        key: "onResponseReceived",
        value: function onResponseReceived(msg) {
          if (msg["password_correct"] != null) {
            if (msg["password_correct"] == false) {
              document.location.href = "/auth/sign-in";
            }
          }
        }
      }]);

      return JoinRoomComponent;
    }();

    JoinRoomComponent.ɵfac = function JoinRoomComponent_Factory(t) {
      return new (t || JoinRoomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_socket_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]));
    };

    JoinRoomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: JoinRoomComponent,
      selectors: [["app-join-room"]],
      decls: 2,
      vars: 0,
      template: function JoinRoomComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "join-room works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pvaW4tcm9vbS9qb2luLXJvb20uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JoinRoomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-join-room',
          templateUrl: './join-room.component.html',
          styleUrls: ['./join-room.component.css']
        }]
      }], function () {
        return [{
          type: _socket_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/landing-page/landing-page/landing-page.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/landing-page/landing-page/landing-page.component.ts ***!
    \*********************************************************************/

  /*! exports provided: LandingPageComponent */

  /***/
  function srcAppLandingPageLandingPageLandingPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function () {
      return LandingPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LandingPageComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
      }
    }

    function LandingPageComponent_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Continue to Slumber Party");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LandingPageComponent_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Have an alpha account? Sign in");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var LandingPageComponent = /*#__PURE__*/function () {
      function LandingPageComponent() {
        _classCallCheck(this, LandingPageComponent);

        this.loggedIn = sessionStorage.getItem("token") != null;
      }

      _createClass(LandingPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LandingPageComponent;
    }();

    LandingPageComponent.ɵfac = function LandingPageComponent_Factory(t) {
      return new (t || LandingPageComponent)();
    };

    LandingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LandingPageComponent,
      selectors: [["app-landing-page"]],
      decls: 12,
      vars: 3,
      consts: [[1, "landing-page"], ["id", "options"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["elseBlock", ""], [1, "statement"], ["href", "/home"], ["href", "/auth/sign-in", "id", "entry-link"]],
      template: function LandingPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LandingPageComponent_div_2_Template, 1, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LandingPageComponent_ng_template_3_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LandingPageComponent_ng_template_5_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\uD83D\uDCA4\uD83C\uDF89 Slumber Party is coming soon.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "We can't wait to have you over.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn)("ngIfThen", _r1)("ngIfElse", _r3);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: [".landing-page[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-content: center;\r\n    justify-content: center;\r\n    height: 100%;\r\n    color: #f5f5fc;\r\n}\r\n\r\n.statement[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    margin: 0 25% 0 25%;\r\n    flex-direction: column;\r\n    align-content: center;\r\n    justify-content: center;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    color: #7B869A;\r\n    padding: 0 0.5em 0 0.5em;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n    color: #F5F5FC;\r\n}\r\n\r\n#options[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 1em;\r\n    top: 1em;\r\n    display: flex;\r\n    font-size: small;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    font-size: 4em;\r\n    margin: 0;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    font-size: 2em;\r\n}\r\n\r\n@media only screen and (max-width: 1280px) {\r\n    h1[_ngcontent-%COMP%] {\r\n        font-size: 2em;\r\n        margin: 0;\r\n    }\r\n    \r\n    h2[_ngcontent-%COMP%] {\r\n        font-size: 1em;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixRQUFRO0lBQ1IsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0k7UUFDSSxjQUFjO1FBQ2QsU0FBUztJQUNiOztJQUVBO1FBQ0ksY0FBYztJQUNsQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYW5kaW5nLXBhZ2Uge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgY29sb3I6ICNmNWY1ZmM7XHJcbn1cclxuXHJcbi5zdGF0ZW1lbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogMCAyNSUgMCAyNSU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgY29sb3I6ICM3Qjg2OUE7XHJcbiAgICBwYWRkaW5nOiAwIDAuNWVtIDAgMC41ZW07XHJcbn1cclxuXHJcbmE6aG92ZXIge1xyXG4gICAgY29sb3I6ICNGNUY1RkM7XHJcbn1cclxuXHJcbiNvcHRpb25zIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxZW07XHJcbiAgICB0b3A6IDFlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBmb250LXNpemU6IDRlbTtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuaDIge1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICB9XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-landing-page',
          templateUrl: './landing-page.component.html',
          styleUrls: ['./landing-page.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/panel-header/panel-header.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/panel-header/panel-header.component.ts ***!
    \********************************************************/

  /*! exports provided: PanelHeaderComponent */

  /***/
  function srcAppPanelHeaderPanelHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PanelHeaderComponent", function () {
      return PanelHeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PanelHeaderComponent = /*#__PURE__*/function () {
      function PanelHeaderComponent() {
        _classCallCheck(this, PanelHeaderComponent);
      }

      _createClass(PanelHeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PanelHeaderComponent;
    }();

    PanelHeaderComponent.ɵfac = function PanelHeaderComponent_Factory(t) {
      return new (t || PanelHeaderComponent)();
    };

    PanelHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PanelHeaderComponent,
      selectors: [["app-panel-header"]],
      inputs: {
        header: "header"
      },
      decls: 3,
      vars: 1,
      consts: [[1, "header"]],
      template: function PanelHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.header);
        }
      },
      styles: [".header[_ngcontent-%COMP%] {\r\n    display: block;\r\n    text-align: center;\r\n    background-color: #E8CF73;\r\n    padding: 0.2em 0 0.2em 0;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    display: contents;\r\n    text-decoration: none;\r\n    color: #011638;\r\n    margin: 0;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    h1[_ngcontent-%COMP%] {\r\n        font-size: medium;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFuZWwtaGVhZGVyL3BhbmVsLWhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsU0FBUztBQUNiOztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhbmVsLWhlYWRlci9wYW5lbC1oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRThDRjczO1xyXG4gICAgcGFkZGluZzogMC4yZW0gMCAwLjJlbSAwO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBkaXNwbGF5OiBjb250ZW50cztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjMDExNjM4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICB9XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PanelHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-panel-header',
          templateUrl: './panel-header.component.html',
          styleUrls: ['./panel-header.component.css']
        }]
      }], function () {
        return [];
      }, {
        header: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/socket/socket.service.ts":
  /*!******************************************!*\
    !*** ./src/app/socket/socket.service.ts ***!
    \******************************************/

  /*! exports provided: SocketService */

  /***/
  function srcAppSocketSocketServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocketService", function () {
      return SocketService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_webSocket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/webSocket */
    "./node_modules/rxjs/_esm2015/webSocket/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var socket = Object(rxjs_webSocket__WEBPACK_IMPORTED_MODULE_1__["webSocket"])('wss://websocket.slumberparty.io');

    var SocketService = /*#__PURE__*/function () {
      function SocketService() {
        var _this14 = this;

        _classCallCheck(this, SocketService);

        socket.subscribe(function (msg) {
          return _this14.setResponse(msg);
        }, function (err) {
          return console.log(err);
        }, function () {
          return console.log('complete');
        });
        this.replySource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.reply = this.replySource.asObservable();
      }

      _createClass(SocketService, [{
        key: "setResponse",
        value: function setResponse(msg) {
          this.replySource.next(msg);
        }
      }, {
        key: "sendMessage",
        value: function sendMessage(msg) {
          socket.next(msg);
        }
      }]);

      return SocketService;
    }();

    SocketService.ɵfac = function SocketService_Factory(t) {
      return new (t || SocketService)();
    };

    SocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SocketService,
      factory: SocketService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Kimberly\Documents\GitHub\slumber-party\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map