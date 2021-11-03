(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _landing_page_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing-page/landing-page/landing-page.component */ "./src/app/landing-page/landing-page/landing-page.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");







const routes = [
    {
        path: '',
        component: _landing_page_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__["LandingPageComponent"]
    },
    {
        path: 'auth',
        component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"]
    },
    {
        path: 'auth/sign-in',
        component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"]
    },
    {
        path: 'auth/sign-up',
        component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"]
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'home/room',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'home/store',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'home/stats',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'home/timer',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'home/chat',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'home/tasks/:taskId',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'home/tasks',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'home/settings',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'j/:roomId',
        component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'cowork';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/clipboard */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/menu/menu.component */ "./src/app/home/menu/menu.component.ts");
/* harmony import */ var _home_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/header/header.component */ "./src/app/home/header/header.component.ts");
/* harmony import */ var _home_activity_container_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/activity-container.component */ "./src/app/home/activity-container.component.ts");
/* harmony import */ var _panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./panel-header/panel-header.component */ "./src/app/panel-header/panel-header.component.ts");
/* harmony import */ var _home_activities_store_store_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/activities/store/store.component */ "./src/app/home/activities/store/store.component.ts");
/* harmony import */ var _home_activities_chat_chat_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/activities/chat/chat.component */ "./src/app/home/activities/chat/chat.component.ts");
/* harmony import */ var _home_activities_timer_timer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/activities/timer/timer.component */ "./src/app/home/activities/timer/timer.component.ts");
/* harmony import */ var _home_activities_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/activities/tasks/tasks.component */ "./src/app/home/activities/tasks/tasks.component.ts");
/* harmony import */ var _landing_page_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./landing-page/landing-page/landing-page.component */ "./src/app/landing-page/landing-page/landing-page.component.ts");
/* harmony import */ var _home_room_room_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/room/room.component */ "./src/app/home/room/room.component.ts");
/* harmony import */ var _auth_goals_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth/goals/sign-in/sign-in.component */ "./src/app/auth/goals/sign-in/sign-in.component.ts");
/* harmony import */ var _auth_goals_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./auth/goals/sign-up/sign-up.component */ "./src/app/auth/goals/sign-up/sign-up.component.ts");
/* harmony import */ var _auth_goals_join_room_join_room_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auth/goals/join-room/join-room.component */ "./src/app/auth/goals/join-room/join-room.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _auth_goal_container_goal_container_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./auth/goal-container/goal-container.component */ "./src/app/auth/goal-container/goal-container.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_activities_settings_settings_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./home/activities/settings/settings.component */ "./src/app/home/activities/settings/settings.component.ts");
/* harmony import */ var _home_activities_settings_room_link_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./home/activities/settings/room-link.directive */ "./src/app/home/activities/settings/room-link.directive.ts");
/* harmony import */ var _home_activities_settings_room_link_room_link_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./home/activities/settings/room-link/room-link.component */ "./src/app/home/activities/settings/room-link/room-link.component.ts");
/* harmony import */ var _home_activities_chat_chat_message_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./home/activities/chat/chat-message.directive */ "./src/app/home/activities/chat/chat-message.directive.ts");
/* harmony import */ var _home_activities_chat_chat_message_chat_message_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./home/activities/chat/chat-message/chat-message.component */ "./src/app/home/activities/chat/chat-message/chat-message.component.ts");
/* harmony import */ var _home_activities_settings_room_invitation_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./home/activities/settings/room-invitation.directive */ "./src/app/home/activities/settings/room-invitation.directive.ts");
/* harmony import */ var _home_activities_settings_room_invitation_room_invitation_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./home/activities/settings/room-invitation/room-invitation.component */ "./src/app/home/activities/settings/room-invitation/room-invitation.component.ts");
/* harmony import */ var _home_activities_tasks_list_directive__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./home/activities/tasks/list.directive */ "./src/app/home/activities/tasks/list.directive.ts");
/* harmony import */ var _home_activities_tasks_list_list_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./home/activities/tasks/list/list.component */ "./src/app/home/activities/tasks/list/list.component.ts");
/* harmony import */ var _home_activities_tasks_list_task_task_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./home/activities/tasks/list/task/task.component */ "./src/app/home/activities/tasks/list/task/task.component.ts");
/* harmony import */ var _home_activities_tasks_list_task_directive__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./home/activities/tasks/list/task.directive */ "./src/app/home/activities/tasks/list/task.directive.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _home_activities_stats_stats_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./home/activities/stats/stats.component */ "./src/app/home/activities/stats/stats.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _home_activities_tasks_task_editor_popup_task_editor_popup_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./home/activities/tasks/task-editor-popup/task-editor-popup.component */ "./src/app/home/activities/tasks/task-editor-popup/task-editor-popup.component.ts");
/* harmony import */ var _home_activities_tasks_task_editor_popup_directive__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./home/activities/tasks/task-editor-popup.directive */ "./src/app/home/activities/tasks/task-editor-popup.directive.ts");
/* harmony import */ var _home_room_root_player_player_tooltip_directive__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./home/room/root/player/player-tooltip.directive */ "./src/app/home/room/root/player/player-tooltip.directive.ts");
/* harmony import */ var _home_room_root_player_player_tooltip_player_tooltip_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./home/room/root/player/player-tooltip/player-tooltip.component */ "./src/app/home/room/root/player/player-tooltip/player-tooltip.component.ts");
/* harmony import */ var _home_activities_stats_not_monetized_not_monetized_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./home/activities/stats/not-monetized/not-monetized.component */ "./src/app/home/activities/stats/not-monetized/not-monetized.component.ts");
/* harmony import */ var _home_activities_stats_loading_monetization_loading_monetization_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./home/activities/stats/loading-monetization/loading-monetization.component */ "./src/app/home/activities/stats/loading-monetization/loading-monetization.component.ts");
/* harmony import */ var _home_activities_stats_monetized_monetized_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./home/activities/stats/monetized/monetized.component */ "./src/app/home/activities/stats/monetized/monetized.component.ts");
/* harmony import */ var _home_activities_tasks_list_filter_popup_filter_popup_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./home/activities/tasks/list/filter-popup/filter-popup.component */ "./src/app/home/activities/tasks/list/filter-popup/filter-popup.component.ts");
/* harmony import */ var _home_activities_tasks_list_filter_popup_directive__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./home/activities/tasks/list/filter-popup.directive */ "./src/app/home/activities/tasks/list/filter-popup.directive.ts");
/* harmony import */ var _home_activities_tasks_list_filter_popup_tag_tag_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./home/activities/tasks/list/filter-popup/tag/tag.component */ "./src/app/home/activities/tasks/list/filter-popup/tag/tag.component.ts");
/* harmony import */ var _home_activities_tasks_list_filter_popup_tag_directive__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./home/activities/tasks/list/filter-popup/tag.directive */ "./src/app/home/activities/tasks/list/filter-popup/tag.directive.ts");




















































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_34__["DragDropModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_35__["FontAwesomeModule"],
            _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__["ClipboardModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_37__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_38__["environment"].production })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _home_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"],
        _home_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
        _home_activity_container_component__WEBPACK_IMPORTED_MODULE_9__["ActivityContainerComponent"],
        _panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_10__["PanelHeaderComponent"],
        _home_activities_store_store_component__WEBPACK_IMPORTED_MODULE_11__["StoreComponent"],
        _home_activities_chat_chat_component__WEBPACK_IMPORTED_MODULE_12__["ChatComponent"],
        _home_activities_timer_timer_component__WEBPACK_IMPORTED_MODULE_13__["TimerComponent"],
        _home_activities_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_14__["TasksComponent"],
        _home_activities_stats_stats_component__WEBPACK_IMPORTED_MODULE_36__["StatsComponent"],
        _landing_page_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_15__["LandingPageComponent"],
        _home_room_room_component__WEBPACK_IMPORTED_MODULE_16__["RoomComponent"],
        _auth_goal_container_goal_container_component__WEBPACK_IMPORTED_MODULE_21__["GoalContainerComponent"],
        _auth_goals_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_17__["SignInComponent"],
        _auth_goals_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_18__["SignUpComponent"],
        _auth_auth_component__WEBPACK_IMPORTED_MODULE_20__["AuthComponent"],
        _home_activities_settings_settings_component__WEBPACK_IMPORTED_MODULE_23__["SettingsComponent"],
        _home_activities_settings_room_link_directive__WEBPACK_IMPORTED_MODULE_24__["RoomLinkDirective"],
        _home_activities_settings_room_link_room_link_component__WEBPACK_IMPORTED_MODULE_25__["RoomLinkComponent"],
        _home_activities_chat_chat_message_directive__WEBPACK_IMPORTED_MODULE_26__["ChatMessageDirective"],
        _home_activities_chat_chat_message_chat_message_component__WEBPACK_IMPORTED_MODULE_27__["ChatMessageComponent"],
        _home_activities_settings_room_invitation_directive__WEBPACK_IMPORTED_MODULE_28__["RoomInvitationDirective"],
        _home_activities_settings_room_invitation_room_invitation_component__WEBPACK_IMPORTED_MODULE_29__["RoomInvitationComponent"],
        _auth_goals_join_room_join_room_component__WEBPACK_IMPORTED_MODULE_19__["JoinRoomComponent"],
        _home_activities_tasks_list_directive__WEBPACK_IMPORTED_MODULE_30__["ListDirective"],
        _home_activities_tasks_list_list_component__WEBPACK_IMPORTED_MODULE_31__["ListComponent"],
        _home_activities_tasks_list_task_task_component__WEBPACK_IMPORTED_MODULE_32__["TaskComponent"],
        _home_activities_tasks_list_task_directive__WEBPACK_IMPORTED_MODULE_33__["TaskDirective"],
        _home_activities_tasks_task_editor_popup_task_editor_popup_component__WEBPACK_IMPORTED_MODULE_39__["TaskEditorPopupComponent"],
        _home_activities_tasks_task_editor_popup_directive__WEBPACK_IMPORTED_MODULE_40__["TaskEditorPopupDirective"],
        _home_room_root_player_player_tooltip_player_tooltip_component__WEBPACK_IMPORTED_MODULE_42__["PlayerTooltipComponent"],
        _home_room_root_player_player_tooltip_directive__WEBPACK_IMPORTED_MODULE_41__["PlayerTooltipDirective"],
        _home_activities_stats_not_monetized_not_monetized_component__WEBPACK_IMPORTED_MODULE_43__["NotMonetizedComponent"],
        _home_activities_stats_loading_monetization_loading_monetization_component__WEBPACK_IMPORTED_MODULE_44__["LoadingMonetizationComponent"],
        _home_activities_stats_monetized_monetized_component__WEBPACK_IMPORTED_MODULE_45__["MonetizedComponent"],
        _home_activities_tasks_list_filter_popup_filter_popup_component__WEBPACK_IMPORTED_MODULE_46__["FilterPopupComponent"],
        _home_activities_tasks_list_filter_popup_directive__WEBPACK_IMPORTED_MODULE_47__["FilterPopupDirective"],
        _home_activities_tasks_list_filter_popup_tag_tag_component__WEBPACK_IMPORTED_MODULE_48__["TagComponent"],
        _home_activities_tasks_list_filter_popup_tag_directive__WEBPACK_IMPORTED_MODULE_49__["TagDirective"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_34__["DragDropModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_35__["FontAwesomeModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__["ClipboardModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_37__["ServiceWorkerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                    _home_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"],
                    _home_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                    _home_activity_container_component__WEBPACK_IMPORTED_MODULE_9__["ActivityContainerComponent"],
                    _panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_10__["PanelHeaderComponent"],
                    _home_activities_store_store_component__WEBPACK_IMPORTED_MODULE_11__["StoreComponent"],
                    _home_activities_chat_chat_component__WEBPACK_IMPORTED_MODULE_12__["ChatComponent"],
                    _home_activities_timer_timer_component__WEBPACK_IMPORTED_MODULE_13__["TimerComponent"],
                    _home_activities_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_14__["TasksComponent"],
                    _home_activities_stats_stats_component__WEBPACK_IMPORTED_MODULE_36__["StatsComponent"],
                    _landing_page_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_15__["LandingPageComponent"],
                    _home_room_room_component__WEBPACK_IMPORTED_MODULE_16__["RoomComponent"],
                    _auth_goal_container_goal_container_component__WEBPACK_IMPORTED_MODULE_21__["GoalContainerComponent"],
                    _auth_goals_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_17__["SignInComponent"],
                    _auth_goals_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_18__["SignUpComponent"],
                    _auth_auth_component__WEBPACK_IMPORTED_MODULE_20__["AuthComponent"],
                    _home_activities_settings_settings_component__WEBPACK_IMPORTED_MODULE_23__["SettingsComponent"],
                    _home_activities_settings_room_link_directive__WEBPACK_IMPORTED_MODULE_24__["RoomLinkDirective"],
                    _home_activities_settings_room_link_room_link_component__WEBPACK_IMPORTED_MODULE_25__["RoomLinkComponent"],
                    _home_activities_chat_chat_message_directive__WEBPACK_IMPORTED_MODULE_26__["ChatMessageDirective"],
                    _home_activities_chat_chat_message_chat_message_component__WEBPACK_IMPORTED_MODULE_27__["ChatMessageComponent"],
                    _home_activities_settings_room_invitation_directive__WEBPACK_IMPORTED_MODULE_28__["RoomInvitationDirective"],
                    _home_activities_settings_room_invitation_room_invitation_component__WEBPACK_IMPORTED_MODULE_29__["RoomInvitationComponent"],
                    _auth_goals_join_room_join_room_component__WEBPACK_IMPORTED_MODULE_19__["JoinRoomComponent"],
                    _home_activities_tasks_list_directive__WEBPACK_IMPORTED_MODULE_30__["ListDirective"],
                    _home_activities_tasks_list_list_component__WEBPACK_IMPORTED_MODULE_31__["ListComponent"],
                    _home_activities_tasks_list_task_task_component__WEBPACK_IMPORTED_MODULE_32__["TaskComponent"],
                    _home_activities_tasks_list_task_directive__WEBPACK_IMPORTED_MODULE_33__["TaskDirective"],
                    _home_activities_tasks_task_editor_popup_task_editor_popup_component__WEBPACK_IMPORTED_MODULE_39__["TaskEditorPopupComponent"],
                    _home_activities_tasks_task_editor_popup_directive__WEBPACK_IMPORTED_MODULE_40__["TaskEditorPopupDirective"],
                    _home_room_root_player_player_tooltip_player_tooltip_component__WEBPACK_IMPORTED_MODULE_42__["PlayerTooltipComponent"],
                    _home_room_root_player_player_tooltip_directive__WEBPACK_IMPORTED_MODULE_41__["PlayerTooltipDirective"],
                    _home_activities_stats_not_monetized_not_monetized_component__WEBPACK_IMPORTED_MODULE_43__["NotMonetizedComponent"],
                    _home_activities_stats_loading_monetization_loading_monetization_component__WEBPACK_IMPORTED_MODULE_44__["LoadingMonetizationComponent"],
                    _home_activities_stats_monetized_monetized_component__WEBPACK_IMPORTED_MODULE_45__["MonetizedComponent"],
                    _home_activities_tasks_list_filter_popup_filter_popup_component__WEBPACK_IMPORTED_MODULE_46__["FilterPopupComponent"],
                    _home_activities_tasks_list_filter_popup_directive__WEBPACK_IMPORTED_MODULE_47__["FilterPopupDirective"],
                    _home_activities_tasks_list_filter_popup_tag_tag_component__WEBPACK_IMPORTED_MODULE_48__["TagComponent"],
                    _home_activities_tasks_list_filter_popup_tag_directive__WEBPACK_IMPORTED_MODULE_49__["TagDirective"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_34__["DragDropModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_35__["FontAwesomeModule"],
                    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__["ClipboardModule"],
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_37__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_38__["environment"].production })
                ],
                entryComponents: [_home_activities_settings_room_link_room_link_component__WEBPACK_IMPORTED_MODULE_25__["RoomLinkComponent"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _goal_container_goal_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goal-container/goal-container.component */ "./src/app/auth/goal-container/goal-container.component.ts");



class AuthComponent {
    constructor() { }
    ngOnInit() { }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(); };
AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["app-auth"]], decls: 2, vars: 0, consts: [[1, "goal-container-parent"]], template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-goal-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_goal_container_goal_container_component__WEBPACK_IMPORTED_MODULE_1__["GoalContainerComponent"]], styles: [".goal-container-parent[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    app-goal-container[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        height: 100%;\r\n    }\r\n    \r\n    .goal-container-parent[_ngcontent-%COMP%] {\r\n        align-items: flex-start;\r\n        justify-content: flex-start;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLFNBQVM7SUFLVCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJO1FBQ0ksV0FBVztRQUNYLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSx1QkFBdUI7UUFDdkIsMkJBQTJCO0lBQy9CO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2F1dGguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nb2FsLWNvbnRhaW5lci1wYXJlbnQge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIGFwcC1nb2FsLWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZ29hbC1jb250YWluZXItcGFyZW50IHtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-auth',
                templateUrl: './auth.component.html',
                styleUrls: ['./auth.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/auth/goal-container/goal-container.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/auth/goal-container/goal-container.component.ts ***!
  \*****************************************************************/
/*! exports provided: GoalContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalContainerComponent", function() { return GoalContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _goals_goals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../goals/goals */ "./src/app/auth/goals/goals.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _goals_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../goals/sign-in/sign-in.component */ "./src/app/auth/goals/sign-in/sign-in.component.ts");
/* harmony import */ var _goals_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../goals/sign-up/sign-up.component */ "./src/app/auth/goals/sign-up/sign-up.component.ts");
/* harmony import */ var _goals_join_room_join_room_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../goals/join-room/join-room.component */ "./src/app/auth/goals/join-room/join-room.component.ts");







class GoalContainerComponent {
    constructor(location) {
        this.location = location;
    }
    ngOnInit() {
        if (this.location.path() == '/auth') {
            this.location.replaceState('/auth/sign-in');
        }
        this.updateGoal(this.location.path(), this.location.getState());
        this.location.onUrlChange(this.updateGoal);
    }
    onMsgReceived(msg) {
        if (msg.has("error")) {
            console.log(msg["error"]);
        }
    }
    updateGoal(url, state) {
        let goal = "";
        if (url.includes('/auth')) {
            goal = url.replace('/auth', '');
            goal = goal.replace('/', '');
        }
        else {
            goal = "join-room";
        }
        let visibleGoals = document.getElementsByClassName("visible");
        let i = 0;
        for (let i = 0; i < visibleGoals.length; i++) {
            let visibleGoal = document.getElementsByClassName("visible")[i];
            visibleGoal.classList.remove("visible");
        }
        if (_goals_goals__WEBPACK_IMPORTED_MODULE_1__["goals"].includes(goal)) {
            let newVisibleGoal = document.getElementById(goal);
            newVisibleGoal.classList.add("visible");
        }
    }
}
GoalContainerComponent.ɵfac = function GoalContainerComponent_Factory(t) { return new (t || GoalContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"])); };
GoalContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GoalContainerComponent, selectors: [["app-goal-container"]], decls: 7, vars: 0, consts: [[1, "header"], [1, "goals"], ["id", "sign-in", 1, "goal"], ["id", "sign-up", 1, "goal"], ["id", "join-room", 1, "goal"]], template: function GoalContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\uD83D\uDCA4\uD83C\uDF89 Slumber Party");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-sign-in", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-sign-up", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-join-room", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_goals_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__["SignInComponent"], _goals_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"], _goals_join_room_join_room_component__WEBPACK_IMPORTED_MODULE_5__["JoinRoomComponent"]], styles: [".goals[_ngcontent-%COMP%] {\r\n    min-width: 80ch;\r\n    min-height: 16em;\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex: 1 0 0;\r\n}\r\n\r\n.goal[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.visible[_ngcontent-%COMP%] {\r\n    flex: 1 0 0;\r\n    background-color: #F5F5FC;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.header[_ngcontent-%COMP%] {\r\n    display: block;\r\n    text-align: center;\r\n    padding: 0.2em 0 0.2em 0;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    display: contents;\r\n    text-decoration: none;\r\n    color: #F5F5FC;\r\n    margin: 0;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .goals[_ngcontent-%COMP%] {\r\n        min-width: 0;\r\n        min-height: 0;\r\n        height: 100%;\r\n        width: 100%;\r\n    }\r\n\r\n    h1[_ngcontent-%COMP%] {\r\n        font-size: 1.5em;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9nb2FsLWNvbnRhaW5lci9nb2FsLWNvbnRhaW5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsY0FBYztJQUNkLFNBQVM7QUFDYjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYixZQUFZO1FBQ1osV0FBVztJQUNmOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2dvYWwtY29udGFpbmVyL2dvYWwtY29udGFpbmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ29hbHMge1xyXG4gICAgbWluLXdpZHRoOiA4MGNoO1xyXG4gICAgbWluLWhlaWdodDogMTZlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleDogMSAwIDA7XHJcbn1cclxuXHJcbi5nb2FsIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi52aXNpYmxlIHtcclxuICAgIGZsZXg6IDEgMCAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGQztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMC4yZW0gMCAwLjJlbSAwO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBkaXNwbGF5OiBjb250ZW50cztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjRjVGNUZDO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuZ29hbHMge1xyXG4gICAgICAgIG1pbi13aWR0aDogMDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAwO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoalContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-goal-container',
                templateUrl: './goal-container.component.html',
                styleUrls: ['./goal-container.component.css']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/goals/goals.ts":
/*!*************************************!*\
  !*** ./src/app/auth/goals/goals.ts ***!
  \*************************************/
/*! exports provided: goals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goals", function() { return goals; });
const goals = ['sign-in', 'sign-up', 'join-room'];


/***/ }),

/***/ "./src/app/auth/goals/join-room/join-room.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/auth/goals/join-room/join-room.component.ts ***!
  \*************************************************************/
/*! exports provided: JoinRoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinRoomComponent", function() { return JoinRoomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _socket_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../socket/socket.service */ "./src/app/socket/socket.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../panel-header/panel-header.component */ "./src/app/panel-header/panel-header.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");









class JoinRoomComponent {
    constructor(socketService, route, location) {
        this.header = "Join the Party!";
        this.faUsers = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faUsers"];
        this.memberCount = 0;
        this.socketService = socketService;
        this.route = route;
        this.location = location;
    }
    ngOnInit() {
        if (this.location.path().includes("/j/")) {
            this.roomId = this.route.snapshot.paramMap.get('roomId');
            this.socketService.reply.subscribe(msg => this.onResponseReceived(msg));
            this.socketService.sendMessage({ channel: "public", type: "request_room", room_id: this.roomId });
        }
    }
    navigate(s) {
        this.location.replaceState(s);
    }
    onResponseReceived(msg) {
        console.log(msg);
        if (msg["type"] == "request_room") {
            let hiddens = document.getElementsByClassName("hidden-form");
            for (let i = 0; i < hiddens.length; i++) {
                let hidden = document.getElementsByClassName("hidden-form")[i];
                hidden.classList.remove("hidden-form");
            }
            if (msg["title"] != null) {
                this.roomTitle = msg["title"];
                this.memberCount = msg["member_count"];
            }
            else {
                this.header = "Invalid Room Link";
                let forms = document.getElementsByClassName("join-form-element");
                for (let i = 0; i < forms.length; i++) {
                    let form = document.getElementsByClassName("join-form-element")[i];
                    form.classList.toggle("hidden-form");
                }
            }
        }
        else if (msg["type"] == "request_invitations") {
            window.location.href = '/home';
        }
        else if (msg["type"] == "sign_in" && !msg["password_correct"]) {
            this.navigate('/auth/sign-up');
        }
    }
    joinRoom() {
        sessionStorage.setItem("joinRoomId", this.roomId);
        sessionStorage.setItem("joinRoomTitle", this.roomTitle);
        this.socketService.sendMessage({ channel: "settings", type: "request_invitations" });
    }
    goHome() {
        window.location.href = '/home';
    }
}
JoinRoomComponent.ɵfac = function JoinRoomComponent_Factory(t) { return new (t || JoinRoomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_socket_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"])); };
JoinRoomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JoinRoomComponent, selectors: [["app-join-room"]], decls: 15, vars: 4, consts: [[3, "header"], [1, "hidden-form"], [1, "join-form-element"], [1, "users"], [3, "icon"], [3, "click"], [1, "join-form-element", "hidden-form"]], template: function JoinRoomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-panel-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JoinRoomComponent_Template_button_click_6_listener() { return ctx.joinRoom(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "That join link's not valid!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JoinRoomComponent_Template_button_click_12_listener() { return ctx.goHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Go home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", ctx.header);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faUsers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.memberCount, " members in this room");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Join ", ctx.roomTitle, "");
    } }, directives: [_panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_5__["PanelHeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FaIconComponent"]], styles: ["form[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex: 1;\r\n    flex-direction: column;\r\n    padding: 0 4em 0 4em;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    color: #011638;\r\n    cursor: pointer;\r\n    text-decoration: underline;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n    font-size: 1.5em;\r\n}\r\n\r\n.join-form-element[_ngcontent-%COMP%] {\r\n    align-self: center;\r\n    text-align: center;\r\n    flex: 1;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    display: flex;\r\n    margin: 0.5em 0 0.5em 0;\r\n}\r\n\r\n.users[_ngcontent-%COMP%] {\r\n    font-size: 1.5em;\r\n    margin-bottom: 0.25em;\r\n    align-self: flex-end;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    font-size: 1.5em;\r\n    margin-top: 0.25em;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    margin: 0.2em 0 0.2em 0;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n}\r\n\r\n.hidden-form[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    form[_ngcontent-%COMP%] {\r\n        padding: 0 0.5em 0 0.5em;\r\n    }\r\n\r\n    input[_ngcontent-%COMP%] {\r\n        font-size: 1em;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9nb2Fscy9qb2luLXJvb20vam9pbi1yb29tLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsT0FBTztJQUNQLHNCQUFzQjtJQUN0QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSTtRQUNJLHdCQUF3QjtJQUM1Qjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvZ29hbHMvam9pbi1yb29tL2pvaW4tcm9vbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleDogMTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiAwIDRlbSAwIDRlbTtcclxufVxyXG5cclxuYSB7XHJcbiAgICBjb2xvcjogIzAxMTYzODtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG59XHJcblxyXG4uam9pbi1mb3JtLWVsZW1lbnQge1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZmxleDogMTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDAuNWVtIDAgMC41ZW0gMDtcclxufVxyXG5cclxuLnVzZXJzIHtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1ZW07XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBtYXJnaW4tdG9wOiAwLjI1ZW07XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIG1hcmdpbjogMC4yZW0gMCAwLjJlbSAwO1xyXG59XHJcblxyXG5hIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmhpZGRlbi1mb3JtIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIGZvcm0ge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMC41ZW0gMCAwLjVlbTtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JoinRoomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-join-room',
                templateUrl: './join-room.component.html',
                styleUrls: ['./join-room.component.css']
            }]
    }], function () { return [{ type: _socket_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/goals/sign-in/sign-in.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/auth/goals/sign-in/sign-in.component.ts ***!
  \*********************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _socket_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../socket/socket.service */ "./src/app/socket/socket.service.ts");
/* harmony import */ var _panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../panel-header/panel-header.component */ "./src/app/panel-header/panel-header.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






class SignInComponent {
    constructor(location, socketService) {
        this.header = "Sign in to continue";
        this.location = location;
        this.socketService = socketService;
    }
    ngOnInit() {
        this.socketService.reply.subscribe(msg => this.onResponseReceived(msg));
    }
    onSubmit(f) {
        let submission = { channel: "auth", type: "sign_in", username: f.value["username"], password: f.value["password"] };
        this.socketService.sendMessage(submission);
    }
    navigate(s) {
        this.location.replaceState(s);
    }
    onResponseReceived(msg) {
        if (msg["type"] == "sign_in") {
            if (msg["password_correct"]) {
                if (msg["password_correct"] == true && !this.location.path().includes('/j/')) {
                    document.location.href = "/home";
                }
            }
            else if (msg["error"]) {
                let error = document.getElementById("error");
                error.innerHTML = msg["error"];
                error.id = "visible-error";
            }
        }
        else if (msg["type"] == "request_room") {
            if (msg["title"] != null) {
                this.header = "Sign in to continue to " + msg["title"];
            }
        }
    }
}
SignInComponent.ɵfac = function SignInComponent_Factory(t) { return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_socket_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"])); };
SignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignInComponent, selectors: [["app-sign-in"]], decls: 19, vars: 1, consts: [[3, "header"], ["novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-element"], ["type", "text", "placeholder", "Email address", "autocomplete", "email", "name", "username", "ngModel", "", "required", ""], ["type", "password", "placeholder", "Password", "autocomplete", "current-password", "name", "password", "ngModel", "", "required", ""], ["id", "error", 1, "form-element"], ["type", "submit"], [1, "password"], [3, "click"]], template: function SignInComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-panel-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignInComponent_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.onSubmit(_r0); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInComponent_Template_a_click_14_listener() { return ctx.navigate("/auth/sign-up"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "New here? Create an account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInComponent_Template_a_click_17_listener() { return ctx.navigate("/auth/reset-password"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Reset your password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", ctx.header);
    } }, directives: [_panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_3__["PanelHeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"]], styles: ["form[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-content: center;\r\n    padding: 0 4em 0 4em;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    color: #011638;\r\n    cursor: pointer;\r\n    text-decoration: underline;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n    font-size: 1.5em;\r\n}\r\n\r\n.form-element[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 0.5em 0 0.5em 0;\r\n    text-align: center;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    margin: 0.2em 0 0.2em 0;\r\n}\r\n\r\n#error[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n#visible-error[_ngcontent-%COMP%] {\r\n    color: #D64045;\r\n    display: inline;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    form[_ngcontent-%COMP%] {\r\n        padding: 0 0.5em 0 0.5em;\r\n    }\r\n\r\n    input[_ngcontent-%COMP%] {\r\n        font-size: 1em;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9nb2Fscy9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0k7UUFDSSx3QkFBd0I7SUFDNUI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2dvYWxzL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAgNGVtIDAgNGVtO1xyXG59XHJcblxyXG5hIHtcclxuICAgIGNvbG9yOiAjMDExNjM4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxuXHJcbi5mb3JtLWVsZW1lbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW46IDAuNWVtIDAgMC41ZW0gMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaDIge1xyXG4gICAgbWFyZ2luOiAwLjJlbSAwIDAuMmVtIDA7XHJcbn1cclxuXHJcbiNlcnJvciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4jdmlzaWJsZS1lcnJvciB7XHJcbiAgICBjb2xvcjogI0Q2NDA0NTtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgZm9ybSB7XHJcbiAgICAgICAgcGFkZGluZzogMCAwLjVlbSAwIDAuNWVtO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0IHtcclxuICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sign-in',
                templateUrl: './sign-in.component.html',
                styleUrls: ['./sign-in.component.css']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }, { type: _socket_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/goals/sign-up/sign-up.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/auth/goals/sign-up/sign-up.component.ts ***!
  \*********************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _socket_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../socket/socket.service */ "./src/app/socket/socket.service.ts");
/* harmony import */ var _panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../panel-header/panel-header.component */ "./src/app/panel-header/panel-header.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






class SignUpComponent {
    constructor(location, socketService) {
        this.header = "Sign up for an account";
        this.location = location;
        this.socketService = socketService;
    }
    ngOnInit() {
        this.socketService.reply.subscribe(msg => this.onResponseReceived(msg));
    }
    onSubmit(f) {
        let submission = { channel: "auth", type: "sign_up", username: f.value["username"], password: f.value["password"] };
        this.socketService.sendMessage(submission);
    }
    navigate(s) {
        this.location.replaceState(s);
    }
    onResponseReceived(msg) {
        if (msg["type"] == "sign_up") {
            if (msg["password_correct"] || msg["account_creation_success"]) {
                if (msg["password_correct"] == true || msg["account_creation_success"] == true) {
                    document.location.href = "/home";
                }
            }
            else if (msg["error"]) {
                let error = document.getElementById("error");
                error.innerHTML = msg["error"];
                error.id = "visible-error";
            }
        }
        else if (msg["type"] == "request_room") {
            if (msg["title"] != null) {
                this.header = "Sign up to continue to " + msg["title"];
            }
        }
    }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_socket_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"])); };
SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignUpComponent, selectors: [["app-sign-up"]], decls: 16, vars: 1, consts: [[3, "header"], ["novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-element"], ["type", "text", "placeholder", "Email address", "autocomplete", "email", "name", "username", "ngModel", "", "required", ""], ["type", "password", "placeholder", "Password", "autocomplete", "new-password", "name", "password", "ngModel", "", "required", ""], ["id", "error", 1, "form-element"], ["type", "submit"], [1, "password"], [3, "click"]], template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-panel-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignUpComponent_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.onSubmit(_r0); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignUpComponent_Template_a_click_14_listener() { return ctx.navigate("/auth/sign-in"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Already have an account? Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", ctx.header);
    } }, directives: [_panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_3__["PanelHeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"]], styles: ["form[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-content: center;\r\n    padding: 0 4em 0 4em;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    color: #011638;\r\n    cursor: pointer;\r\n    text-decoration: underline;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n    font-size: 1.5em;\r\n}\r\n\r\n.form-element[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 0.5em 0 0.5em 0;\r\n    text-align: center;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    margin: 0.2em 0 0.2em 0;\r\n}\r\n\r\n#error[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n#visible-error[_ngcontent-%COMP%] {\r\n    color: #D64045;\r\n    display: inline;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    form[_ngcontent-%COMP%] {\r\n        padding: 0 0.5em 0 0.5em;\r\n    }\r\n\r\n    input[_ngcontent-%COMP%] {\r\n        font-size: 1em;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9nb2Fscy9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0k7UUFDSSx3QkFBd0I7SUFDNUI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2dvYWxzL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAgNGVtIDAgNGVtO1xyXG59XHJcblxyXG5hIHtcclxuICAgIGNvbG9yOiAjMDExNjM4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxuXHJcbi5mb3JtLWVsZW1lbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW46IDAuNWVtIDAgMC41ZW0gMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaDIge1xyXG4gICAgbWFyZ2luOiAwLjJlbSAwIDAuMmVtIDA7XHJcbn1cclxuXHJcbiNlcnJvciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4jdmlzaWJsZS1lcnJvciB7XHJcbiAgICBjb2xvcjogI0Q2NDA0NTtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgZm9ybSB7XHJcbiAgICAgICAgcGFkZGluZzogMCAwLjVlbSAwIDAuNWVtO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0IHtcclxuICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sign-up',
                templateUrl: './sign-up.component.html',
                styleUrls: ['./sign-up.component.css']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }, { type: _socket_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/handler.ts":
/*!****************************!*\
  !*** ./src/app/handler.ts ***!
  \****************************/
/*! exports provided: Handler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Handler", function() { return Handler; });
// Handlers have helper methods that allow them to communicate with the server
// (initially, by converting the server's snake_case to camelCase)
class Handler {
    snakeToCamel(s) {
        return s.replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace('-', '').replace('_', ''));
    }
}


/***/ }),

/***/ "./src/app/home/activities/activities.ts":
/*!***********************************************!*\
  !*** ./src/app/home/activities/activities.ts ***!
  \***********************************************/
/*! exports provided: activities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activities", function() { return activities; });
const activities = ['room', 'store', 'chat', 'timer', 'stats', 'tasks', 'settings'];


/***/ }),

/***/ "./src/app/home/activities/chat/chat-message.directive.ts":
/*!****************************************************************!*\
  !*** ./src/app/home/activities/chat/chat-message.directive.ts ***!
  \****************************************************************/
/*! exports provided: ChatMessageDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMessageDirective", function() { return ChatMessageDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ChatMessageDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
ChatMessageDirective.ɵfac = function ChatMessageDirective_Factory(t) { return new (t || ChatMessageDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
ChatMessageDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ChatMessageDirective, selectors: [["", "appChatMessage", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatMessageDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appChatMessage]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/activities/chat/chat-message/chat-message.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/home/activities/chat/chat-message/chat-message.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ChatMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMessageComponent", function() { return ChatMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/socket/socket.service */ "./src/app/socket/socket.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




class ChatMessageComponent {
    constructor(socketService) {
        this.socketService = socketService;
    }
    ngOnInit() {
    }
}
ChatMessageComponent.ɵfac = function ChatMessageComponent_Factory(t) { return new (t || ChatMessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"])); };
ChatMessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatMessageComponent, selectors: [["app-chat-message"]], inputs: { data: "data" }, decls: 10, vars: 6, consts: [[1, "chat-message"], [1, "item"], [1, "meta"], [1, "author"], ["value", "MM/dd/yyyy h:mm a", 1, "sent-date"], [1, "chat-contents"]], template: function ChatMessageComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.display_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 3, ctx.data.sent_date, "MM/dd/yyyy h:mm a"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.contents);
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: [".chat-message[_ngcontent-%COMP%]:hover {\r\n    background-color: #dfdfdf;\r\n}\r\n\r\n.chat-message[_ngcontent-%COMP%] {\r\n    padding: 0.5em 2ch 0.5em 2ch;\r\n}\r\n\r\n.author[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n}\r\n\r\n.meta[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.sent-date[_ngcontent-%COMP%] {\r\n    padding-top: 0.25em;\r\n    font-size: smaller;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    margin: 0 0 0 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hY3Rpdml0aWVzL2NoYXQvY2hhdC1tZXNzYWdlL2NoYXQtbWVzc2FnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9hY3Rpdml0aWVzL2NoYXQvY2hhdC1tZXNzYWdlL2NoYXQtbWVzc2FnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXQtbWVzc2FnZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZkZmRmO1xyXG59XHJcblxyXG4uY2hhdC1tZXNzYWdlIHtcclxuICAgIHBhZGRpbmc6IDAuNWVtIDJjaCAwLjVlbSAyY2g7XHJcbn1cclxuXHJcbi5hdXRob3Ige1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5tZXRhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5zZW50LWRhdGUge1xyXG4gICAgcGFkZGluZy10b3A6IDAuMjVlbTtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufVxyXG5cclxucCB7XHJcbiAgICBtYXJnaW46IDAgMCAwIDA7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatMessageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chat-message',
                templateUrl: './chat-message.component.html',
                styleUrls: ['./chat-message.component.css']
            }]
    }], function () { return [{ type: src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/home/activities/chat/chat.component.ts":
/*!********************************************************!*\
  !*** ./src/app/home/activities/chat/chat.component.ts ***!
  \********************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _chat_message_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-message.directive */ "./src/app/home/activities/chat/chat-message.directive.ts");
/* harmony import */ var _chat_message_chat_message_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat-message/chat-message.component */ "./src/app/home/activities/chat/chat-message/chat-message.component.ts");
/* harmony import */ var src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/socket/socket.service */ "./src/app/socket/socket.service.ts");
/* harmony import */ var _room_change_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../room-change.service */ "./src/app/home/room-change.service.ts");
/* harmony import */ var _panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../panel-header/panel-header.component */ "./src/app/panel-header/panel-header.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");









function ChatComponent_ng_template_3_Template(rf, ctx) { }
class ChatComponent {
    constructor(socketService, roomChangeService, componentFactoryResolver) {
        this.header = "Chat";
        this.socketService = socketService;
        this.roomChangeService = roomChangeService;
        this.componentFactoryResolver = componentFactoryResolver;
    }
    ngOnInit() {
        this.socketService.reply.subscribe(msg => this.onResponseReceived(msg));
        this.roomChangeService.roomId.subscribe(msg => this.onRoomChange(msg));
    }
    onRoomChange(roomId) {
        this.roomId = roomId;
        document.getElementById("retrieving").classList.remove("hidden");
        this.allChatsLoaded = false;
        const viewContainerRef = this.chatMessageHost.viewContainerRef;
        viewContainerRef.clear();
        if (roomId != null)
            this.socketService.sendMessage({ channel: "chat", type: "request_initial_messages", room_id: roomId });
    }
    onResponseReceived(msg) {
        if (msg["type"] == "request_messages") {
            if (msg["messages"].length < 10) {
                document.getElementById("retrieving").classList.add("hidden");
                this.allChatsLoaded = true;
            }
            document.getElementById("retrieving-now").classList.add("hidden");
            document.getElementById("load-more").classList.remove("hidden");
            msg["messages"].forEach(data => {
                this.loadChat(data, false);
            });
        }
        else if (msg["type"] == "send_message") {
            let data = { display_name: msg["display_name"], sent_date: msg["sent_date"], contents: msg["contents"], chat_id: msg["chat_id"] };
            this.loadChat(data, true);
        }
    }
    onSendChat(event) {
        let chatField = document.getElementById("chat-field");
        let contents = chatField.value;
        this.socketService.sendMessage({ channel: "chat", type: "send_message", room_id: sessionStorage.getItem("room_id"), contents: contents });
        chatField.value = "";
        event.preventDefault();
    }
    onListScroll() {
        let list = document.getElementById("list");
        document.getElementById("retrieving-now").classList.remove("hidden");
        document.getElementById("load-more").classList.add("hidden");
        if (list.scrollTop == 0 && !this.allChatsLoaded) {
            this.socketService.sendMessage({ channel: "chat", type: "request_messages", room_id: this.roomId, before_chat_id: this.earliestChatId });
        }
    }
    loadChat(data, recent) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(_chat_message_chat_message_component__WEBPACK_IMPORTED_MODULE_2__["ChatMessageComponent"]);
        const viewContainerRef = this.chatMessageHost.viewContainerRef;
        let componentRef;
        if (recent) {
            componentRef = viewContainerRef.createComponent(componentFactory, 0);
        }
        else {
            componentRef = viewContainerRef.createComponent(componentFactory);
            this.earliestChatId = data["chat_id"];
        }
        componentRef.instance.data = data;
    }
}
ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_room_change_service__WEBPACK_IMPORTED_MODULE_4__["RoomChangeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"])); };
ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["app-chat"]], viewQuery: function ChatComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_chat_message_directive__WEBPACK_IMPORTED_MODULE_1__["ChatMessageDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chatMessageHost = _t.first);
    } }, decls: 11, vars: 1, consts: [[1, "scroll-container"], [3, "header"], ["id", "list", "role", "log", 3, "scroll"], ["appChatMessage", ""], ["id", "retrieving"], ["id", "load-more", 3, "click"], ["id", "retrieving-now", 1, "hidden"], ["id", "chat-box", "novalidate", ""], ["id", "chat-field", "tabindex", "0", "placeholder", "Message the room...", 1, "contents", 3, "keydown.enter"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-panel-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ChatComponent_Template_div_scroll_2_listener() { return ctx.onListScroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatComponent_ng_template_3_Template, 0, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_Template_a_click_5_listener() { return ctx.onListScroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Load more messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Retrieving more messages...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function ChatComponent_Template_textarea_keydown_enter_10_listener($event) { return ctx.onSendChat($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", ctx.header);
    } }, directives: [_panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_5__["PanelHeaderComponent"], _chat_message_directive__WEBPACK_IMPORTED_MODULE_1__["ChatMessageDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"]], styles: [".scroll-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    overflow: auto;\r\n}\r\n\r\n#list[_ngcontent-%COMP%] {\r\n    overflow-y: auto;\r\n    display: flex;\r\n    flex-direction: column-reverse;\r\n}\r\n\r\n#retrieving[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin: 0 0 0 0;\r\n    padding: 1em 0 1em 0;\r\n}\r\n\r\n#load-more[_ngcontent-%COMP%] {\r\n    color: #011638;\r\n    cursor: pointer;\r\n    text-decoration: underline;\r\n}\r\n\r\n.margin[_ngcontent-%COMP%] {\r\n    margin: 0.2em 2ch 0.2em 2ch;\r\n}\r\n\r\nform[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.form-label[_ngcontent-%COMP%] {\r\n    margin: 0 4ch 0 2ch;\r\n}\r\n\r\n.hidden[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n#chat-box[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    padding: 1em 0 1em 0;\r\n}\r\n\r\n#chat-field[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    padding: 0.2em 1ch 0.2em 1ch;\r\n    margin: 0 2ch 0 2ch;\r\n    word-wrap: break-word;\r\n    overflow-wrap: break-word;\r\n    background-color: #dfdfdf;\r\n    box-sizing: border-box;\r\n    border: none !important;\r\n    box-shadow: none !important;\r\n    outline: none !important;\r\n    resize: vertical;\r\n    border-radius: 8px;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .list[_ngcontent-%COMP%] {\r\n        height: 70vh;\r\n    }\r\n\r\n    #chat[_ngcontent-%COMP%] {\r\n        width: 70vh;\r\n        max-width: 70vw;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hY3Rpdml0aWVzL2NoYXQvY2hhdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksT0FBTztJQUNQLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QiwyQkFBMkI7SUFDM0Isd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9hY3Rpdml0aWVzL2NoYXQvY2hhdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcm9sbC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuI2xpc3Qge1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcbn1cclxuXHJcbiNyZXRyaWV2aW5nIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMCAwIDAgMDtcclxuICAgIHBhZGRpbmc6IDFlbSAwIDFlbSAwO1xyXG59XHJcblxyXG4jbG9hZC1tb3JlIHtcclxuICAgIGNvbG9yOiAjMDExNjM4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5tYXJnaW4ge1xyXG4gICAgbWFyZ2luOiAwLjJlbSAyY2ggMC4yZW0gMmNoO1xyXG59XHJcblxyXG5mb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsIHtcclxuICAgIG1hcmdpbjogMCA0Y2ggMCAyY2g7XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuI2NoYXQtYm94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAxZW0gMCAxZW0gMDtcclxufVxyXG5cclxuI2NoYXQtZmllbGQge1xyXG4gICAgZmxleDogMTtcclxuICAgIHBhZGRpbmc6IDAuMmVtIDFjaCAwLjJlbSAxY2g7XHJcbiAgICBtYXJnaW46IDAgMmNoIDAgMmNoO1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZmRmZGY7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICByZXNpemU6IHZlcnRpY2FsO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAubGlzdCB7XHJcbiAgICAgICAgaGVpZ2h0OiA3MHZoO1xyXG4gICAgfVxyXG5cclxuICAgICNjaGF0IHtcclxuICAgICAgICB3aWR0aDogNzB2aDtcclxuICAgICAgICBtYXgtd2lkdGg6IDcwdnc7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chat',
                templateUrl: './chat.component.html',
                styleUrls: ['./chat.component.css']
            }]
    }], function () { return [{ type: src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_3__["SocketService"] }, { type: _room_change_service__WEBPACK_IMPORTED_MODULE_4__["RoomChangeService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }]; }, { chatMessageHost: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_chat_message_directive__WEBPACK_IMPORTED_MODULE_1__["ChatMessageDirective"], { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/home/activities/settings/room-invitation.directive.ts":
/*!***********************************************************************!*\
  !*** ./src/app/home/activities/settings/room-invitation.directive.ts ***!
  \***********************************************************************/
/*! exports provided: RoomInvitationDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomInvitationDirective", function() { return RoomInvitationDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class RoomInvitationDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
RoomInvitationDirective.ɵfac = function RoomInvitationDirective_Factory(t) { return new (t || RoomInvitationDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
RoomInvitationDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: RoomInvitationDirective, selectors: [["", "appRoomInvitation", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoomInvitationDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appRoomInvitation]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/activities/settings/room-invitation/room-invitation.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/home/activities/settings/room-invitation/room-invitation.component.ts ***!
  \***************************************************************************************/
/*! exports provided: RoomInvitationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomInvitationComponent", function() { return RoomInvitationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/socket/socket.service */ "./src/app/socket/socket.service.ts");



class RoomInvitationComponent {
    constructor(socketService) {
        this.socketService = socketService;
    }
    ngOnInit() {
    }
    joinRoom(roomId) {
        let submission = { channel: "settings", type: "join_room", room_id: roomId };
        this.socketService.sendMessage(submission);
    }
    declineInvitation(invitationId) {
        let submission = { channel: "settings", type: "decline_invitation", invitation_id: invitationId };
        this.socketService.sendMessage(submission);
    }
}
RoomInvitationComponent.ɵfac = function RoomInvitationComponent_Factory(t) { return new (t || RoomInvitationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"])); };
RoomInvitationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoomInvitationComponent, selectors: [["app-room-invitation"]], decls: 10, vars: 1, consts: [[1, "invitation"], [1, "item", "form"], [1, "room-label"], [3, "click"], [1, "button-label"]], template: function RoomInvitationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomInvitationComponent_Template_button_click_4_listener() { return ctx.declineInvitation(ctx.data.invitation_id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Decline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomInvitationComponent_Template_button_click_7_listener() { return ctx.joinRoom(ctx.data.room_id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Accept");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);
    } }, styles: [".invitation[_ngcontent-%COMP%]:hover {\r\n    background-color: #D5D5DB;\r\n}\r\n\r\n.item[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    max-width: 10ch;\r\n    flex: 1 0 0;\r\n    margin-right: 2ch;\r\n}\r\n\r\n.button-label[_ngcontent-%COMP%] {\r\n    padding: 0.2em 0 0.2em 0;\r\n}\r\n\r\n.room-label[_ngcontent-%COMP%] {\r\n    flex: 1 0 0;\r\n    margin-left: 2ch;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hY3Rpdml0aWVzL3NldHRpbmdzL3Jvb20taW52aXRhdGlvbi9yb29tLWludml0YXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2FjdGl2aXRpZXMvc2V0dGluZ3Mvcm9vbS1pbnZpdGF0aW9uL3Jvb20taW52aXRhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmludml0YXRpb246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Q1RDVEQjtcclxufVxyXG5cclxuLml0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIG1heC13aWR0aDogMTBjaDtcclxuICAgIGZsZXg6IDEgMCAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyY2g7XHJcbn1cclxuXHJcbi5idXR0b24tbGFiZWwge1xyXG4gICAgcGFkZGluZzogMC4yZW0gMCAwLjJlbSAwO1xyXG59XHJcblxyXG4ucm9vbS1sYWJlbCB7XHJcbiAgICBmbGV4OiAxIDAgMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyY2g7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoomInvitationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-room-invitation',
                templateUrl: './room-invitation.component.html',
                styleUrls: ['./room-invitation.component.css']
            }]
    }], function () { return [{ type: src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/activities/settings/room-link.directive.ts":
/*!*****************************************************************!*\
  !*** ./src/app/home/activities/settings/room-link.directive.ts ***!
  \*****************************************************************/
/*! exports provided: RoomLinkDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomLinkDirective", function() { return RoomLinkDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class RoomLinkDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
RoomLinkDirective.ɵfac = function RoomLinkDirective_Factory(t) { return new (t || RoomLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
RoomLinkDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: RoomLinkDirective, selectors: [["", "appRoomLink", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoomLinkDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appRoomLink]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/activities/settings/room-link/room-link.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/home/activities/settings/room-link/room-link.component.ts ***!
  \***************************************************************************/
/*! exports provided: RoomLinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomLinkComponent", function() { return RoomLinkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/socket/socket.service */ "./src/app/socket/socket.service.ts");



class RoomLinkComponent {
    constructor(socketService) {
        this.socketService = socketService;
    }
    ngOnInit() {
    }
    enterRoom(roomId, title) {
        this.socketService.sendMessage({ channel: "settings", type: "enter_room", room_id: roomId, as_player: false });
        sessionStorage.setItem("room_id", roomId);
        sessionStorage.setItem("room_title", title);
    }
}
RoomLinkComponent.ɵfac = function RoomLinkComponent_Factory(t) { return new (t || RoomLinkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"])); };
RoomLinkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoomLinkComponent, selectors: [["app-room-link"]], inputs: { data: "data" }, decls: 6, vars: 1, consts: [[1, "room-link", "form"], [1, "item"], [1, "room-label"], [3, "click"]], template: function RoomLinkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomLinkComponent_Template_button_click_4_listener() { return ctx.enterRoom(ctx.data.room_id, ctx.data.title); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Enter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);
    } }, styles: [".room-link[_ngcontent-%COMP%]:hover {\r\n    background-color: #D5D5DB;\r\n}\r\n\r\n.item[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    padding: 0.2em 2ch 0.2em 2ch;\r\n}\r\n\r\n.room-label[_ngcontent-%COMP%] {\r\n    flex: 1 0 0;\r\n    margin-left: 2ch;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hY3Rpdml0aWVzL3NldHRpbmdzL3Jvb20tbGluay9yb29tLWxpbmsuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9hY3Rpdml0aWVzL3NldHRpbmdzL3Jvb20tbGluay9yb29tLWxpbmsuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb29tLWxpbms6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Q1RDVEQjtcclxufVxyXG5cclxuLml0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDAuMmVtIDJjaCAwLjJlbSAyY2g7XHJcbn1cclxuXHJcbi5yb29tLWxhYmVsIHtcclxuICAgIGZsZXg6IDEgMCAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJjaDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoomLinkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-room-link',
                templateUrl: './room-link.component.html',
                styleUrls: ['./room-link.component.css']
            }]
    }], function () { return [{ type: src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/home/activities/settings/settings.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/home/activities/settings/settings.component.ts ***!
  \****************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _room_link_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./room-link.directive */ "./src/app/home/activities/settings/room-link.directive.ts");
/* harmony import */ var _room_link_room_link_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./room-link/room-link.component */ "./src/app/home/activities/settings/room-link/room-link.component.ts");
/* harmony import */ var _room_invitation_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./room-invitation.directive */ "./src/app/home/activities/settings/room-invitation.directive.ts");
/* harmony import */ var _room_invitation_room_invitation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./room-invitation/room-invitation.component */ "./src/app/home/activities/settings/room-invitation/room-invitation.component.ts");
/* harmony import */ var src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/socket/socket.service */ "./src/app/socket/socket.service.ts");
/* harmony import */ var _room_change_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../room-change.service */ "./src/app/home/room-change.service.ts");
/* harmony import */ var _panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../panel-header/panel-header.component */ "./src/app/panel-header/panel-header.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/clipboard */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");













function SettingsComponent_ng_template_62_Template(rf, ctx) { }
function SettingsComponent_ng_template_70_Template(rf, ctx) { }
class SettingsComponent {
    constructor(socketService, roomChangeService, componentFactoryResolver) {
        this.header = "Settings";
        this.roomPrivate = true;
        this.roomTitle = sessionStorage.getItem("room_title");
        this.roomId = sessionStorage.getItem("room_id");
        this.roomLink = "https://cowork.ac/j/" + this.roomId;
        this.socketService = socketService;
        this.roomChangeService = roomChangeService;
        this.componentFactoryResolver = componentFactoryResolver;
    }
    ngOnInit() {
        this.socketService.reply.subscribe(msg => this.onResponseReceived(msg));
        this.roomChangeService.roomId.subscribe(msg => this.onRoomChange(msg));
        this.socketService.sendMessage({ channel: "settings", type: "request_rooms" });
        this.socketService.sendMessage({ channel: "settings", type: "request_invitations" });
        if (sessionStorage.getItem("room_id") != undefined) {
            this.socketService.sendMessage({ channel: "settings", type: "enter_room", room_id: sessionStorage.getItem("room_id"), as_player: false });
        }
        if (sessionStorage.getItem("joinRoomId") != undefined) {
            this.socketService.sendMessage({ channel: "settings", type: "join_room", room_id: sessionStorage.getItem("joinRoomId") });
            sessionStorage.removeItem("joinRoomId");
            sessionStorage.removeItem("joinRoomTitle");
        }
        this.displayName = sessionStorage.getItem("display_name");
    }
    onResponseReceived(msg) {
        console.log("Incoming message of type: " + msg["type"]);
        if (msg["channel"] == "settings") {
            if (msg["type"] == "request_rooms") {
                const viewContainerRef = this.roomLinkHost.viewContainerRef;
                viewContainerRef.clear();
                let numRooms = Object.keys(msg["rooms"]).length;
                if (numRooms == 0) {
                    document.getElementById("room-settings").classList.add("hidden");
                    document.getElementById("enter-room").classList.add("hidden");
                }
                else if (numRooms == 1) {
                    document.getElementById("room-settings").classList.remove("hidden");
                    document.getElementById("enter-room").classList.add("hidden");
                }
                else {
                    document.getElementById("room-settings").classList.remove("hidden");
                    document.getElementById("enter-room").classList.remove("hidden");
                }
                for (let name in msg["rooms"]) {
                    if (sessionStorage.getItem("room_id") == null || sessionStorage.getItem("room_title") == null) {
                        sessionStorage.setItem("room_id", msg["rooms"][name]);
                        sessionStorage.setItem("room_title", name);
                        this.socketService.sendMessage({ channel: "settings", type: "enter_room", room_id: msg["rooms"][name], as_player: false });
                    }
                    if (!(msg["rooms"][name] == sessionStorage.getItem("room_id"))) {
                        let data = { title: name, room_id: msg["rooms"][name] };
                        this.loadRoomLink(data);
                    }
                }
            }
            else if (msg["type"] == "request_room_privacy") {
                if (msg["private"] != this.roomPrivate) {
                    this.roomPrivate = msg["private"];
                    let privacyForms = document.getElementsByClassName("privacy-form");
                    for (let index = 0; index < privacyForms.length; index++) {
                        const privacyForm = privacyForms[index];
                        privacyForm.classList.toggle("hidden");
                    }
                }
            }
            else if (msg["type"] == "set_room_privacy") {
                if (msg["success"] == true) {
                    this.roomPrivate = !this.roomPrivate;
                    let privacyForms = document.getElementsByClassName("privacy-form");
                    for (let index = 0; index < privacyForms.length; index++) {
                        const privacyForm = privacyForms[index];
                        privacyForm.classList.toggle("hidden");
                    }
                }
            }
            else if (msg["type"] == "enter_room") {
                if (msg["success"] == true) {
                    console.log("Entered a room.");
                    sessionStorage.setItem("room_title", msg["room_title"]);
                    sessionStorage.setItem("room_id", msg["room_id"]);
                    this.roomTitle = sessionStorage.getItem("room_title");
                    this.roomChangeService.setRoom(msg["room_id"]);
                }
                else {
                    console.error("Failed to enter the room.");
                }
            }
            else if (msg["type"] == "join_room") {
                this.reloadRooms();
            }
            else if (msg["type"] == "request_invitations") {
                const viewContainerRef = this.roomInvitationHost.viewContainerRef;
                viewContainerRef.clear();
                let invitations = msg["invitations"];
                if (invitations.length > 0) {
                    document.getElementById("invitations").classList.remove("hidden");
                    invitations.forEach(invitation => {
                        let data = { title: invitation["room_title"], room_id: invitation["room_id"],
                            username: invitation["username"], invitation_id: invitation["invitation_id"] };
                        this.loadInvitation(data);
                    });
                }
                else {
                    document.getElementById("invitations").classList.add("hidden");
                }
            }
            else if (msg["type"] == "decline_invitation") {
                this.reloadInvitations();
            }
            else if (msg["type"] == "create_room") {
                this.socketService.sendMessage({ channel: "settings", type: "enter_room", room_id: msg["room_id"], as_player: false });
            }
            else if (msg["type"] == "leave_room") {
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
    onSubmitDisplayName(f) {
        let submission = { channel: "settings", type: "edit_display_name", display_name: f.value["display_name"] };
        this.socketService.sendMessage(submission);
    }
    loadRoomLink(data) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(_room_link_room_link_component__WEBPACK_IMPORTED_MODULE_2__["RoomLinkComponent"]);
        const viewContainerRef = this.roomLinkHost.viewContainerRef;
        const componentRef = viewContainerRef.createComponent(componentFactory);
        componentRef.instance.data = data;
    }
    reloadRooms() {
        this.socketService.sendMessage({ channel: "settings", type: "request_rooms" });
    }
    loadInvitation(data) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(_room_invitation_room_invitation_component__WEBPACK_IMPORTED_MODULE_4__["RoomInvitationComponent"]);
        const viewContainerRef = this.roomInvitationHost.viewContainerRef;
        const componentRef = viewContainerRef.createComponent(componentFactory);
        componentRef.instance.data = data;
    }
    reloadInvitations() {
        this.socketService.sendMessage({ channel: "settings", type: "request_invitations" });
    }
    onRoomChange(roomId) {
        this.socketService.sendMessage({ channel: "settings", type: "request_room_privacy", room_id: roomId });
        document.getElementById("room-title").innerHTML = sessionStorage.getItem("room_title");
        this.roomId = roomId;
        this.roomLink = "https://cowork.ac/j/" + this.roomId;
        this.reloadRooms();
    }
    onSubmitInvite(f) {
        let submission = { channel: "settings", type: "create_invitation", room_id: sessionStorage.getItem("room_id"), invitee: f.value["username"] };
        this.socketService.sendMessage(submission);
    }
    onSubmitJoin(f) {
        let submission = { channel: "settings", type: "join_room", room_id: f.value["joinCode"] };
        this.socketService.sendMessage(submission);
    }
    onSubmitLeave() {
        let submission = { channel: "settings", type: "leave_room", room_id: sessionStorage.getItem("room_id") };
        this.socketService.sendMessage(submission);
    }
    onSubmitCreate(f) {
        let submission = { channel: "settings", type: "create_room", title: f.value["title"] };
        this.socketService.sendMessage(submission);
    }
    onToggleRoomPrivacy() {
        let submission = { channel: "settings", type: "set_room_privacy", room_id: sessionStorage.getItem("room_id"), private: !this.roomPrivate };
        this.socketService.sendMessage(submission);
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_room_change_service__WEBPACK_IMPORTED_MODULE_6__["RoomChangeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"])); };
SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], viewQuery: function SettingsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_room_link_directive__WEBPACK_IMPORTED_MODULE_1__["RoomLinkDirective"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_room_invitation_directive__WEBPACK_IMPORTED_MODULE_3__["RoomInvitationDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.roomLinkHost = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.roomInvitationHost = _t.first);
    } }, decls: 89, vars: 11, consts: [[1, "scroll-container"], [3, "header"], [1, "list"], [1, "margin"], ["id", "profile-settings"], ["novalidate", "", 1, "form", 3, "ngSubmit"], ["i", "ngForm"], [1, "form-element"], ["type", "text", "name", "display_name", "ngModel", "", "required", "", 3, "placeholder"], ["type", "submit"], ["id", "room-settings", 1, "hidden"], ["id", "room-title"], [1, "privacy-form", "form", "hidden"], [1, "form-label"], ["type", "submit", 3, "click"], [1, "privacy-form", "form"], [1, "form", "privacy-form", "hidden"], ["readonly", "", 3, "value"], ["type", "submit", 3, "cdkCopyToClipboard"], ["type", "text", "placeholder", "Email address", "name", "username", "ngModel", "", "required", ""], ["novalidate", "", 1, "form"], [3, "click"], ["id", "enter-room", 1, "hidden"], ["appRoomLink", ""], ["id", "invitations", 1, "hidden"], ["appRoomInvitation", ""], ["j", "ngForm"], ["type", "text", "placeholder", "Room code", "name", "joinCode", "ngModel", "", "required", ""], ["c", "ngForm"], ["type", "text", "placeholder", "Room name", "name", "title", "ngModel", "", "required", ""]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-panel-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Update Display Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SettingsComponent_Template_form_ngSubmit_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return ctx.onSubmitDisplayName(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_24_listener() { return ctx.onToggleRoomPrivacy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Make private");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_31_listener() { return ctx.onToggleRoomPrivacy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Make public");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "form", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Copy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "form", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SettingsComponent_Template_form_ngSubmit_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return ctx.onSubmitInvite(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Invite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "form", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_57_listener() { return ctx.onSubmitLeave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Leave");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Enter Another Room");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, SettingsComponent_ng_template_62_Template, 0, 0, "ng-template", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Join a Room");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Pending Invitations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "You don't have any invitations.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, SettingsComponent_ng_template_70_Template, 0, 0, "ng-template", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Join a Public Room");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "form", 5, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SettingsComponent_Template_form_ngSubmit_73_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](74); return ctx.onSubmitJoin(_r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Join");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Make a Room");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "form", 5, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SettingsComponent_Template_form_ngSubmit_82_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](83); return ctx.onSubmitCreate(_r5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", ctx.header);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.displayName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.roomTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.roomTitle, " is currently public. Anyone with the link or room code can join this room.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.roomTitle, " is currently private. No one can join this room without an invitation.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Share an invite link for ", ctx.roomTitle, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("value", "cowork.ac/j/", ctx.roomId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkCopyToClipboard", ctx.roomLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Invite Another User to ", ctx.roomTitle, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Leave ", ctx.roomTitle, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Leave ", ctx.roomTitle, "?");
    } }, directives: [_panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_7__["PanelHeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_9__["CdkCopyToClipboard"], _room_link_directive__WEBPACK_IMPORTED_MODULE_1__["RoomLinkDirective"], _room_invitation_directive__WEBPACK_IMPORTED_MODULE_3__["RoomInvitationDirective"]], styles: [".scroll-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n}\r\n\r\n.list[_ngcontent-%COMP%] {\r\n    flex: 1 1 auto;\r\n    overflow-y: auto;\r\n    height: 70vh;\r\n}\r\n\r\n.margin[_ngcontent-%COMP%] {\r\n    margin: 0.2em 18px 0.2em 18px;\r\n    padding: 0 0 2em 0;\r\n}\r\n\r\n.form[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n}\r\n\r\n.form-element[_ngcontent-%COMP%] {\r\n    max-width: 12ch;\r\n    flex: 1 0 0;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    width: 10ch;\r\n    margin-right: 2ch;\r\n    padding: 0.2em 2ch 0.2em 2ch;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n    margin-left: 2ch;\r\n}\r\n\r\n.hidden[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.form-label[_ngcontent-%COMP%] {\r\n    margin: 0 4ch 0 2ch;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hY3Rpdml0aWVzL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9hY3Rpdml0aWVzL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nyb2xsLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmxpc3Qge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgaGVpZ2h0OiA3MHZoO1xyXG59XHJcblxyXG4ubWFyZ2luIHtcclxuICAgIG1hcmdpbjogMC4yZW0gMThweCAwLjJlbSAxOHB4O1xyXG4gICAgcGFkZGluZzogMCAwIDJlbSAwO1xyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmZvcm0tZWxlbWVudCB7XHJcbiAgICBtYXgtd2lkdGg6IDEyY2g7XHJcbiAgICBmbGV4OiAxIDAgMDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMGNoO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyY2g7XHJcbiAgICBwYWRkaW5nOiAwLjJlbSAyY2ggMC4yZW0gMmNoO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMmNoO1xyXG59XHJcblxyXG4uaGlkZGVuIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsIHtcclxuICAgIG1hcmdpbjogMCA0Y2ggMCAyY2g7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-settings',
                templateUrl: './settings.component.html',
                styleUrls: ['./settings.component.css']
            }]
    }], function () { return [{ type: src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"] }, { type: _room_change_service__WEBPACK_IMPORTED_MODULE_6__["RoomChangeService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }]; }, { roomLinkHost: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_room_link_directive__WEBPACK_IMPORTED_MODULE_1__["RoomLinkDirective"], { static: true }]
        }], roomInvitationHost: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_room_invitation_directive__WEBPACK_IMPORTED_MODULE_3__["RoomInvitationDirective"], { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/home/activities/stats/loading-monetization/loading-monetization.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/home/activities/stats/loading-monetization/loading-monetization.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: LoadingMonetizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingMonetizationComponent", function() { return LoadingMonetizationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LoadingMonetizationComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoadingMonetizationComponent.ɵfac = function LoadingMonetizationComponent_Factory(t) { return new (t || LoadingMonetizationComponent)(); };
LoadingMonetizationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingMonetizationComponent, selectors: [["app-loading-monetization"]], decls: 2, vars: 0, template: function LoadingMonetizationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "loading-monetization works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYWN0aXZpdGllcy9zdGF0cy9sb2FkaW5nLW1vbmV0aXphdGlvbi9sb2FkaW5nLW1vbmV0aXphdGlvbi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingMonetizationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading-monetization',
                templateUrl: './loading-monetization.component.html',
                styleUrls: ['./loading-monetization.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/activities/stats/monetized/monetized.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/home/activities/stats/monetized/monetized.component.ts ***!
  \************************************************************************/
/*! exports provided: MonetizedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonetizedComponent", function() { return MonetizedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MonetizedComponent {
    constructor() { }
    ngOnInit() {
    }
}
MonetizedComponent.ɵfac = function MonetizedComponent_Factory(t) { return new (t || MonetizedComponent)(); };
MonetizedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MonetizedComponent, selectors: [["app-monetized"]], decls: 2, vars: 0, template: function MonetizedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "monetized works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYWN0aXZpdGllcy9zdGF0cy9tb25ldGl6ZWQvbW9uZXRpemVkLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MonetizedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-monetized',
                templateUrl: './monetized.component.html',
                styleUrls: ['./monetized.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/activities/stats/not-monetized/not-monetized.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/home/activities/stats/not-monetized/not-monetized.component.ts ***!
  \********************************************************************************/
/*! exports provided: NotMonetizedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotMonetizedComponent", function() { return NotMonetizedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NotMonetizedComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotMonetizedComponent.ɵfac = function NotMonetizedComponent_Factory(t) { return new (t || NotMonetizedComponent)(); };
NotMonetizedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotMonetizedComponent, selectors: [["app-not-monetized"]], decls: 2, vars: 0, template: function NotMonetizedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "not-monetized works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYWN0aXZpdGllcy9zdGF0cy9ub3QtbW9uZXRpemVkL25vdC1tb25ldGl6ZWQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotMonetizedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-monetized',
                templateUrl: './not-monetized.component.html',
                styleUrls: ['./not-monetized.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/activities/stats/stats.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/home/activities/stats/stats.component.ts ***!
  \**********************************************************/
/*! exports provided: StatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsComponent", function() { return StatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_web_monetization_web_monetization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/web-monetization/web-monetization.service */ "./src/app/web-monetization/web-monetization.service.ts");
/* harmony import */ var _panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../panel-header/panel-header.component */ "./src/app/panel-header/panel-header.component.ts");
/* harmony import */ var _not_monetized_not_monetized_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./not-monetized/not-monetized.component */ "./src/app/home/activities/stats/not-monetized/not-monetized.component.ts");
/* harmony import */ var _loading_monetization_loading_monetization_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loading-monetization/loading-monetization.component */ "./src/app/home/activities/stats/loading-monetization/loading-monetization.component.ts");
/* harmony import */ var _monetized_monetized_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./monetized/monetized.component */ "./src/app/home/activities/stats/monetized/monetized.component.ts");







class StatsComponent {
    constructor(webMonetizationService) {
        this.header = "Stats";
        this.webMonetizationService = webMonetizationService;
    }
    ngOnInit() {
        this.webMonetizationService.monetization.subscribe((state) => {
            this.handleState(state);
        });
    }
    handleState(state) {
        let current = document.getElementsByClassName("current-state")[0];
        current.classList.remove("current-state");
        if (state == "pending") {
            let loading = document.getElementsByTagName("app-loading-monetization")[0];
            current = loading;
        }
        else if (state == "started") {
            let monetized = document.getElementsByTagName("app-monetized")[0];
            current = monetized;
        }
        else {
            // state is stopped or error state
            let notMonetized = document.getElementsByTagName("app-not-monetized")[0];
            current = notMonetized;
        }
        current.classList.add("current-state");
    }
}
StatsComponent.ɵfac = function StatsComponent_Factory(t) { return new (t || StatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_web_monetization_web_monetization_service__WEBPACK_IMPORTED_MODULE_1__["WebMonetizationService"])); };
StatsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatsComponent, selectors: [["app-stats"]], decls: 5, vars: 1, consts: [[3, "header"], [1, "container"], [1, "current-state"]], template: function StatsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-panel-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-not-monetized", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-loading-monetization");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-monetized");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", ctx.header);
    } }, directives: [_panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_2__["PanelHeaderComponent"], _not_monetized_not_monetized_component__WEBPACK_IMPORTED_MODULE_3__["NotMonetizedComponent"], _loading_monetization_loading_monetization_component__WEBPACK_IMPORTED_MODULE_4__["LoadingMonetizationComponent"], _monetized_monetized_component__WEBPACK_IMPORTED_MODULE_5__["MonetizedComponent"]], styles: [".container[_ngcontent-%COMP%] {\r\n    margin: 0 2ch 0 2ch;\r\n}\r\n\r\napp-loading-monetization[_ngcontent-%COMP%], app-monetized[_ngcontent-%COMP%], app-not-monetized[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.current-state[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hY3Rpdml0aWVzL3N0YXRzL3N0YXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYWN0aXZpdGllcy9zdGF0cy9zdGF0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDAgMmNoIDAgMmNoO1xyXG59XHJcblxyXG5hcHAtbG9hZGluZy1tb25ldGl6YXRpb24sIGFwcC1tb25ldGl6ZWQsIGFwcC1ub3QtbW9uZXRpemVkIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5jdXJyZW50LXN0YXRlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-stats',
                templateUrl: './stats.component.html',
                styleUrls: ['./stats.component.css']
            }]
    }], function () { return [{ type: src_app_web_monetization_web_monetization_service__WEBPACK_IMPORTED_MODULE_1__["WebMonetizationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/activities/store/store.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/home/activities/store/store.component.ts ***!
  \**********************************************************/
/*! exports provided: StoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreComponent", function() { return StoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../panel-header/panel-header.component */ "./src/app/panel-header/panel-header.component.ts");



class StoreComponent {
    constructor() {
        this.header = "Store";
    }
    ngOnInit() {
    }
}
StoreComponent.ɵfac = function StoreComponent_Factory(t) { return new (t || StoreComponent)(); };
StoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StoreComponent, selectors: [["app-store"]], decls: 3, vars: 1, consts: [[3, "header"]], template: function StoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-panel-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "store works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", ctx.header);
    } }, directives: [_panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_1__["PanelHeaderComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYWN0aXZpdGllcy9zdG9yZS9zdG9yZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-store',
                templateUrl: './store.component.html',
                styleUrls: ['./store.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/activities/tasks.service.ts":
/*!**************************************************!*\
  !*** ./src/app/home/activities/tasks.service.ts ***!
  \**************************************************/
/*! exports provided: TasksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksService", function() { return TasksService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/socket/socket.service */ "./src/app/socket/socket.service.ts");




class TasksService {
    constructor(socketService) {
        this.socketService = socketService;
        this.activeTaskSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.activeTask = this.activeTaskSource.asObservable();
    }
    setActiveTask(data) {
        let id = data.task_id;
        this.activeTaskSource.next(data);
        this.activeTaskId = id;
    }
}
TasksService.ɵfac = function TasksService_Factory(t) { return new (t || TasksService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"])); };
TasksService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TasksService, factory: TasksService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TasksService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/activities/tasks/list.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/home/activities/tasks/list.directive.ts ***!
  \*********************************************************/
/*! exports provided: ListDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListDirective", function() { return ListDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ListDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
ListDirective.ɵfac = function ListDirective_Factory(t) { return new (t || ListDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
ListDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ListDirective, selectors: [["", "appList", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appList]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/activities/tasks/list/filter-popup.directive.ts":
/*!**********************************************************************!*\
  !*** ./src/app/home/activities/tasks/list/filter-popup.directive.ts ***!
  \**********************************************************************/
/*! exports provided: FilterPopupDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPopupDirective", function() { return FilterPopupDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FilterPopupDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
FilterPopupDirective.ɵfac = function FilterPopupDirective_Factory(t) { return new (t || FilterPopupDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
FilterPopupDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: FilterPopupDirective, selectors: [["", "appFilterPopup", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterPopupDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appFilterPopup]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/activities/tasks/list/filter-popup/filter-popup.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/home/activities/tasks/list/filter-popup/filter-popup.component.ts ***!
  \***********************************************************************************/
/*! exports provided: FilterPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPopupComponent", function() { return FilterPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tag_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tag.directive */ "./src/app/home/activities/tasks/list/filter-popup/tag.directive.ts");
/* harmony import */ var _tag_tag_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tag/tag.component */ "./src/app/home/activities/tasks/list/filter-popup/tag/tag.component.ts");
/* harmony import */ var src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/socket/socket.service */ "./src/app/socket/socket.service.ts");







function FilterPopupComponent_ng_template_7_Template(rf, ctx) { }
class FilterPopupComponent {
    constructor(socketService, componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.socketService = socketService;
    }
    ngOnInit() {
        this.socketService.channelReply.get("tasks").subscribe(msg => this.onResponseReceived(msg));
        this.socketService.sendMessage({ channel: "tasks", type: "request_tags" });
    }
    onResponseReceived(msg) {
        if (msg["channel"] == "tasks") {
            if (msg["type"] == "request_tags") {
                this.onRequestTags(msg);
            }
            else if (msg["type"] == "add_tag") {
                this.onAddTag(msg);
            }
        }
    }
    onRequestTags(msg) {
        for (let tag of msg["tags"])
            this.loadTag(tag);
    }
    onAddTag(msg) {
        this.loadTag(msg);
    }
    loadTag(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(_tag_tag_component__WEBPACK_IMPORTED_MODULE_3__["TagComponent"]);
            const viewContainerRef = this.tagHost.viewContainerRef;
            let componentRef;
            componentRef = viewContainerRef.createComponent(componentFactory, data.index);
            let instance = componentRef.instance;
            instance.data = data;
            //this.tagViewRefs.set(data.task_id, componentRef.hostView);
        });
    }
    addTag() {
        let titleField = document.getElementById("new-tag-title-field");
        let title = titleField.value;
        let min = Math.ceil(0);
        let max = Math.floor(4);
        let color = Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive    
        this.socketService.sendMessage({ channel: "tasks", type: "add_tag", color: color, title: title });
    }
}
FilterPopupComponent.ɵfac = function FilterPopupComponent_Factory(t) { return new (t || FilterPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"])); };
FilterPopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FilterPopupComponent, selectors: [["app-filter-popup"]], viewQuery: function FilterPopupComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_tag_directive__WEBPACK_IMPORTED_MODULE_2__["TagDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.tagHost = _t.first);
    } }, decls: 10, vars: 0, consts: [[1, "popup"], [1, "popup-header"], [1, "drop-area"], ["appTag", ""], [1, "new-tag"], ["id", "new-tag-title-field", "type", "text", "placeholder", "Add a new tag...", 1, "title", 3, "keydown.enter"]], template: function FilterPopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Available tags:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, FilterPopupComponent_ng_template_7_Template, 0, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.enter", function FilterPopupComponent_Template_input_keydown_enter_9_listener() { return ctx.addTag(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_tag_directive__WEBPACK_IMPORTED_MODULE_2__["TagDirective"]], styles: [".popup[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    padding-top: 0.5em;\r\n    padding-bottom: 0.5em;\r\n    overflow: auto;\r\n    background-color: white;\r\n}\r\n\r\n.popup-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    overflow-wrap: break-word;\r\n    background-color: white;\r\n    border: none;\r\n}\r\n\r\n.new-tag[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    display: flex;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    font-size: large;\r\n}\r\n\r\n.close-task[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    padding: 1ch;\r\n    border-radius: 1ch;\r\n    align-self: flex-end;\r\n}\r\n\r\n.close-task[_ngcontent-%COMP%]:hover, .close-task[_ngcontent-%COMP%]:focus {\r\n    background-color: lightgray;\r\n    cursor: pointer;\r\n}\r\n\r\napp-task-preview[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hY3Rpdml0aWVzL3Rhc2tzL2xpc3QvZmlsdGVyLXBvcHVwL2ZpbHRlci1wb3B1cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLE9BQU87SUFDUCx5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLE9BQU87QUFDWCIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYWN0aXZpdGllcy90YXNrcy9saXN0L2ZpbHRlci1wb3B1cC9maWx0ZXItcG9wdXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3B1cCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDAuNWVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnBvcHVwLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgZmxleDogMTtcclxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLm5ldy10YWcge1xyXG4gICAgZmxleDogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbmgzIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuXHJcbi5jbG9zZS10YXNrIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzogMWNoO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMWNoO1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5jbG9zZS10YXNrOmhvdmVyLCAuY2xvc2UtdGFzazpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmFwcC10YXNrLXByZXZpZXcge1xyXG4gICAgZmxleDogMTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FilterPopupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-filter-popup',
                templateUrl: './filter-popup.component.html',
                styleUrls: ['./filter-popup.component.css']
            }]
    }], function () { return [{ type: src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }]; }, { tagHost: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_tag_directive__WEBPACK_IMPORTED_MODULE_2__["TagDirective"], { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/home/activities/tasks/list/filter-popup/tag.directive.ts":
/*!**************************************************************************!*\
  !*** ./src/app/home/activities/tasks/list/filter-popup/tag.directive.ts ***!
  \**************************************************************************/
/*! exports provided: TagDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagDirective", function() { return TagDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TagDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
TagDirective.ɵfac = function TagDirective_Factory(t) { return new (t || TagDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
TagDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TagDirective, selectors: [["", "appTag", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appTag]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/activities/tasks/list/filter-popup/tag/tag.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/home/activities/tasks/list/filter-popup/tag/tag.component.ts ***!
  \******************************************************************************/
/*! exports provided: TagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagComponent", function() { return TagComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");



class TagComponent {
    constructor() { }
    ngOnInit() {
    }
}
TagComponent.ɵfac = function TagComponent_Factory(t) { return new (t || TagComponent)(); };
TagComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TagComponent, selectors: [["app-tag"]], decls: 3, vars: 1, consts: [["cdkDrag", "", 1, "tag"]], template: function TagComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);
    } }, directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDrag"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYWN0aXZpdGllcy90YXNrcy9saXN0L2ZpbHRlci1wb3B1cC90YWcvdGFnLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tag',
                templateUrl: './tag.component.html',
                styleUrls: ['./tag.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/activities/tasks/list/list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/home/activities/tasks/list/list.component.ts ***!
  \**************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _task_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.directive */ "./src/app/home/activities/tasks/list/task.directive.ts");
/* harmony import */ var _task_task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task/task.component */ "./src/app/home/activities/tasks/list/task/task.component.ts");
/* harmony import */ var _filter_popup_filter_popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter-popup/filter-popup.component */ "./src/app/home/activities/tasks/list/filter-popup/filter-popup.component.ts");
/* harmony import */ var _filter_popup_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter-popup.directive */ "./src/app/home/activities/tasks/list/filter-popup.directive.ts");
/* harmony import */ var src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/socket/socket.service */ "./src/app/socket/socket.service.ts");
/* harmony import */ var _lists_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lists.service */ "./src/app/home/activities/tasks/lists.service.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");












function ListComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
} }
function ListComponent_ng_template_9_Template(rf, ctx) { }
class ListComponent {
    constructor(socketService, listsService, componentFactoryResolver) {
        this.disabled = false;
        this.filterPopupOpen = false;
        // string problems. passing by reference. should be passing by value. might need two arrays.
        this.tasks = new Map();
        this.taskViewRefs = new Map();
        this.socketService = socketService;
        this.listsService = listsService;
        this.componentFactoryResolver = componentFactoryResolver;
    }
    ngOnInit() {
        this.socketService.reply.subscribe(msg => this.onResponseReceived(msg));
        this.socketService.sendMessage({ channel: "tasks", type: "request_tasks_for_list", "list_id": this.data.list_id, "index": 0 });
        this.listsService.lists[this.data.list_id] = this;
    }
    dropTask(event) {
        if (event.previousContainer === event.container) {
            if (!(event.currentIndex == event.previousIndex)) {
                this.taskHost.viewContainerRef.move(this.taskHost.viewContainerRef.get(event.previousIndex), event.currentIndex);
                let taskId = event.item.data.task_id;
                let data = this.listsService.lists.get(event.previousContainer.id).tasks.get(taskId).data;
                this.socketService.sendMessage({ channel: "tasks", type: "edit_listing", listing_id: data.listing_id, list_id: event.container.id, index: event.currentIndex });
                return;
            }
        }
        else {
            event.previousContainer.removeItem(event.item);
            let taskId = event.item.data.task_id;
            let data = this.listsService.lists.get(event.previousContainer.id).tasks.get(taskId).data;
            this.tasks.set(taskId, this.listsService.lists.get(event.previousContainer.id).tasks.get(taskId));
            this.listsService.lists.get(event.previousContainer.id).tasks.delete(taskId);
            data.index = event.currentIndex;
            let previousViewContainerRef = this.listsService.lists.get(event.previousContainer.id).taskHost.viewContainerRef;
            previousViewContainerRef.remove(event.previousIndex);
            this.loadTask(data);
            this.socketService.sendMessage({ channel: "tasks", type: "edit_listing", listing_id: data.listing_id, list_id: event.container.id, index: event.currentIndex });
        }
    }
    onResponseReceived(msg) {
        if (msg["channel"] == "tasks") {
            if (msg["type"] == "request_tasks_for_list") {
                this.onRequestTasksForList(msg);
            }
            else if (msg["type"] == "add_task") {
                this.onAddTask(msg);
            }
            else if (msg["type"] == "request_task") {
                this.checkDisable();
            }
            else if (msg["type"] == "delete_task") {
                this.onDeleteTask(msg["task_id"]);
            }
        }
    }
    toggleTags() {
        // request tags? or should have already requested them (probably)
        // make them display: flex or display: none depending on whether
        // they are already visible
        if (!this.filterPopupOpen)
            this.openFilterPopup();
        else
            this.closeFilterPopup();
    }
    openFilterPopup() {
        const viewContainerRef = this.filterPopupHost.viewContainerRef;
        viewContainerRef.clear();
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(_filter_popup_filter_popup_component__WEBPACK_IMPORTED_MODULE_4__["FilterPopupComponent"]);
        let componentRef;
        componentRef = viewContainerRef.createComponent(componentFactory);
        let instance = componentRef.instance;
        this.filterPopupOpen = true;
    }
    closeFilterPopup() {
        const viewContainerRef = this.filterPopupHost.viewContainerRef;
        viewContainerRef.clear();
        this.filterPopupOpen = false;
    }
    checkDisable() {
        this.disabled = this.listsService.disabledLists.has(this.data.list_id);
    }
    onRequestTasksForList(msg) {
        let initialTasksSize = this.tasks.size;
        msg["tasks"].sort(function (a, b) {
            return a.index - b.index;
        });
        msg["tasks"].forEach(data => {
            if (data["list_id"] == this.data.list_id) {
                this.loadTask(data);
            }
        });
        if (this.tasks.size > initialTasksSize) {
            this.socketService.sendMessage({ channel: "tasks", type: "request_tasks_for_list", "list_id": this.data.list_id, "index": this.tasks.size });
        }
    }
    onAddTask(msg) {
        if (msg["list_id"] == this.data.list_id) {
            this.loadTask(msg);
        }
    }
    onDeleteTask(taskId) {
        if (this.tasks.has(taskId)) {
            let index = this.taskHost.viewContainerRef.indexOf(this.taskViewRefs.get(taskId));
            this.taskHost.viewContainerRef.remove(index);
        }
    }
    loadTask(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(_task_task_component__WEBPACK_IMPORTED_MODULE_3__["TaskComponent"]);
            const viewContainerRef = this.taskHost.viewContainerRef;
            let componentRef;
            componentRef = viewContainerRef.createComponent(componentFactory, data.index);
            let instance = componentRef.instance;
            instance.data = data;
            instance.isListing = true;
            this.tasks.set(data.task_id, instance);
            this.taskViewRefs.set(data.task_id, componentRef.hostView);
        });
    }
    addTask() {
        let newTaskTitleField = document.getElementById(this.data.list_id + "-new-task-title-field");
        let title = newTaskTitleField.value;
        this.socketService.sendMessage({ channel: "tasks", type: "add_task", public: true, active: false, title: title, contents: "", list_id: this.data.list_id, index: 0 });
        newTaskTitleField.value = "";
    }
    deleteList() {
        this.socketService.sendMessage({ channel: "tasks", type: "delete_list", list_id: this.data.list_id });
        this.listsService.lists.delete(this.data.list_id);
    }
    editTitle() {
        let titleField = document.getElementById(this.data.list_id + "-title-field");
        let title = titleField.value;
        titleField.blur();
        this.socketService.sendMessage({ channel: "tasks", type: "edit_list_title", list_id: this.data.list_id, title: title });
    }
    startDragging(event) {
        event.source.data = this.data;
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_lists_service__WEBPACK_IMPORTED_MODULE_7__["ListsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"])); };
ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["app-list"]], viewQuery: function ListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_task_directive__WEBPACK_IMPORTED_MODULE_2__["TaskDirective"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_filter_popup_directive__WEBPACK_IMPORTED_MODULE_5__["FilterPopupDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.taskHost = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.filterPopupHost = _t.first);
    } }, inputs: { data: "data", lists: "lists" }, decls: 10, vars: 3, consts: [[1, "list"], [1, "tasks"], [1, "new-task"], ["type", "text", "placeholder", "Add a new task...", 1, "title", 3, "id", "keydown.enter"], [1, "filter", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-filter"], ["d", "M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"], ["appFilterPopup", ""], ["cdkDropList", "", 1, "drop-area", 3, "id", "cdkDropListConnectedTo", "cdkDropListDropped"], ["appTask", ""]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.enter", function ListComponent_Template_input_keydown_enter_3_listener() { return ctx.addTask(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListComponent_Template_a_click_4_listener() { return ctx.toggleTags(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ListComponent_ng_template_7_Template, 0, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkDropListDropped", function ListComponent_Template_div_cdkDropListDropped_8_listener($event) { return ctx.dropTask($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ListComponent_ng_template_9_Template, 0, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "", ctx.data.list_id, "-new-task-title-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", ctx.data.list_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkDropListConnectedTo", ctx.lists);
    } }, directives: [_filter_popup_directive__WEBPACK_IMPORTED_MODULE_5__["FilterPopupDirective"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["CdkDropList"], _task_directive__WEBPACK_IMPORTED_MODULE_2__["TaskDirective"]], styles: [".list[_ngcontent-%COMP%] {\r\n  padding: 0.4rem 1ch 0.4rem 1ch;\r\n}\r\n\r\n.tasks[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n.new-task[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  cursor: pointer;\r\n  justify-content: space-between;\r\n  background-color: white;\r\n  margin: 0.5em 0 0.5em 0;\r\n  box-sizing: border-box;\r\n  border-radius: 8px;\r\n}\r\n\r\n.filter[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  padding: 1ch;\r\n  border-radius: 1ch;\r\n}\r\n\r\n.filter[_ngcontent-%COMP%]:hover {\r\n  background-color: lightgray;\r\n}\r\n\r\n.center[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n  overflow-wrap: break-word;\r\n  background-color: white;\r\n  border: none;\r\n}\r\n\r\n.drop-area[_ngcontent-%COMP%] {\r\n    min-height: 1em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hY3Rpdml0aWVzL3Rhc2tzL2xpc3QvbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLE9BQU87RUFDUCx5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2FjdGl2aXRpZXMvdGFza3MvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdCB7XHJcbiAgcGFkZGluZzogMC40cmVtIDFjaCAwLjRyZW0gMWNoO1xyXG59XHJcblxyXG4udGFza3Mge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiAgXHJcbi5uZXctdGFzayB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbjogMC41ZW0gMCAwLjVlbSAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4uZmlsdGVyIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nOiAxY2g7XHJcbiAgYm9yZGVyLXJhZGl1czogMWNoO1xyXG59XHJcblxyXG4uZmlsdGVyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbn1cclxuXHJcbi5jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbiAgXHJcbi50aXRsZSB7XHJcbiAgZmxleDogMTtcclxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmRyb3AtYXJlYSB7XHJcbiAgICBtaW4taGVpZ2h0OiAxZW07XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-list',
                templateUrl: './list.component.html',
                styleUrls: ['./list.component.css']
            }]
    }], function () { return [{ type: src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"] }, { type: _lists_service__WEBPACK_IMPORTED_MODULE_7__["ListsService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }]; }, { taskHost: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_task_directive__WEBPACK_IMPORTED_MODULE_2__["TaskDirective"], { static: true }]
        }], filterPopupHost: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_filter_popup_directive__WEBPACK_IMPORTED_MODULE_5__["FilterPopupDirective"], { static: true }]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], lists: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/home/activities/tasks/list/task.directive.ts":
/*!**************************************************************!*\
  !*** ./src/app/home/activities/tasks/list/task.directive.ts ***!
  \**************************************************************/
/*! exports provided: TaskDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDirective", function() { return TaskDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TaskDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
TaskDirective.ɵfac = function TaskDirective_Factory(t) { return new (t || TaskDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
TaskDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TaskDirective, selectors: [["", "appTask", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appTask]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/activities/tasks/list/task/task.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/home/activities/tasks/list/task/task.component.ts ***!
  \*******************************************************************/
/*! exports provided: TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return TaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/socket/socket.service */ "./src/app/socket/socket.service.ts");
/* harmony import */ var _lists_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lists.service */ "./src/app/home/activities/tasks/lists.service.ts");
/* harmony import */ var _tasks_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../tasks.service */ "./src/app/home/activities/tasks.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");







function TaskComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function TaskComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", ctx_r2.data.task_id, "-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.data.title || "Untitled task");
} }
function TaskComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", ctx_r4.data.task_id, "-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.data.title || "This user is not currently sharing an active task.");
} }
class TaskComponent {
    constructor(socketService, listsService, tasksService, location) {
        this.socketService = socketService;
        this.listsService = listsService;
        this.tasksService = tasksService;
        this.location = location;
    }
    ngOnInit() {
        this.socketService.reply.subscribe(msg => this.onResponseReceived(msg));
    }
    onResponseReceived(msg) {
        if (msg["channel"] == "tasks") {
            if (msg["type"] == "request_task") {
                this.onRequestTask(msg);
            }
            if (msg["type"] == "set_listing_active") {
                if (msg["listing_id"] == this.data.listing_id)
                    this.data.active = msg["active"];
                else
                    this.data.active = false;
            }
            if (msg["type"] == "set_task_public") {
                if (msg["task_id"] == this.data.task_id)
                    this.data.public = msg["public"];
            }
        }
    }
    startDragging(event) {
        event.source.data = this.data;
    }
    openTask(event) {
        event.preventDefault();
        if (!(this.data.task_id == undefined))
            this.location.replaceState('/home/tasks/' + this.data.task_id);
    }
    removeTask() {
        this.socketService.sendMessage({ channel: "tasks", type: "delete_task", "task_id": this.data.task_id });
    }
    onRequestTask(msg) {
        if (msg["task_id"] == this.data.task_id) {
            this.data = msg;
        }
    }
}
TaskComponent.ɵfac = function TaskComponent_Factory(t) { return new (t || TaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_lists_service__WEBPACK_IMPORTED_MODULE_2__["ListsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tasks_service__WEBPACK_IMPORTED_MODULE_3__["TasksService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"])); };
TaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskComponent, selectors: [["app-task"]], inputs: { data: "data", isListing: "isListing" }, decls: 13, vars: 10, consts: [["draggable", "false", "tabindex", "0", "cdkDrag", "", 3, "href", "ngClass", "cdkDragDisabled", "id", "click", "keydown.enter", "cdkDragStarted"], [1, "center"], [1, "tags"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["elseBlock", ""], [1, "full", 3, "id"], [1, "extras"], [1, "info"], [1, "title", 3, "id"]], template: function TaskComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_Template_a_click_0_listener($event) { return ctx.openTask($event); })("keydown.enter", function TaskComponent_Template_a_keydown_enter_0_listener($event) { return ctx.openTask($event); })("cdkDragStarted", function TaskComponent_Template_a_cdkDragStarted_0_listener($event) { return ctx.startDragging($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " tags ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TaskComponent_div_4_Template, 1, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TaskComponent_ng_template_5_Template, 2, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TaskComponent_ng_template_7_Template, 2, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "extras");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.data.active && ctx.isListing);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "/home/tasks/", ctx.data.task_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.data.task_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isListing ? "listing" : "task")("cdkDragDisabled", !ctx.isListing);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isListing)("ngIfThen", _r1)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", ctx.data.task_id, "-full");
    } }, directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["CdkDrag"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".listing[_ngcontent-%COMP%], .task[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  cursor: -webkit-grab;\r\n  cursor: grab;\r\n  background-color: white;\r\n  padding: 0.2em 1ch 0.2em 1ch;\r\n  margin: 0.5em 0 0.5em 0;\r\n  box-sizing: border-box;\r\n  border-style: solid;\r\n  border-width: 1px;\r\n  border-color: lightgrey;\r\n  border-radius: 8px;\r\n}\r\n\r\na.listing[_ngcontent-%COMP%], a.task[_ngcontent-%COMP%] {\r\n  cursor: -webkit-grab;\r\n  cursor: grab;\r\n  text-decoration: none;\r\n  color: black;\r\n}\r\n\r\n.listing[_ngcontent-%COMP%]:hover {\r\n  background-color: ghostwhite;\r\n}\r\n\r\n.task[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%], .task[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .extras[_ngcontent-%COMP%] {\r\n  visibility: hidden;\r\n}\r\n\r\n.task[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n  background-color: ghostwhite;\r\n}\r\n\r\n.tags[_ngcontent-%COMP%], .extras[_ngcontent-%COMP%] {\r\n  font-size: smaller;\r\n}\r\n\r\n.listing[_ngcontent-%COMP%]:focus {\r\n  outline: none;\r\n}\r\n\r\n.active-radio-button[_ngcontent-%COMP%] {\r\n  cursor: default;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n.hidden[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.active[_ngcontent-%COMP%] {\r\n  background-color: lightgrey;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  font-size: small;\r\n}\r\n\r\n.title[_ngcontent-%COMP%]:focus {\r\n  outline: auto;\r\n  border-color: #011638;\r\n  border-width: 2px;\r\n  box-sizing: border-box;\r\n  border-radius: 4px;\r\n}\r\n\r\n.center[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: top;\r\n}\r\n\r\n.open[_ngcontent-%COMP%] {\r\n  cursor: auto;\r\n}\r\n\r\n.extras[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.cdk-drag-preview[_ngcontent-%COMP%] {\r\n    box-sizing: border-box;\r\n    border-radius: 8px;\r\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n                0 8px 10px 1px rgba(0, 0, 0, 0.14),\r\n                0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\r\n    opacity: 0;\r\n}\r\n\r\n.cdk-drag-animating[_ngcontent-%COMP%] {\r\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hY3Rpdml0aWVzL3Rhc2tzL2xpc3QvdGFzay90YXNrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG9CQUFZO0VBQVosWUFBWTtFQUNaLHVCQUF1QjtFQUN2Qiw0QkFBNEI7RUFDNUIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQkFBWTtFQUFaLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsT0FBTztFQUNQLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEI7O2tEQUU4QztBQUNsRDs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHNEQUFzRDtBQUMxRCIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYWN0aXZpdGllcy90YXNrcy9saXN0L3Rhc2svdGFzay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3RpbmcsIC50YXNrIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBjdXJzb3I6IGdyYWI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMC4yZW0gMWNoIDAuMmVtIDFjaDtcclxuICBtYXJnaW46IDAuNWVtIDAgMC41ZW0gMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgYm9yZGVyLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG5hLmxpc3RpbmcsIGEudGFzayB7XHJcbiAgY3Vyc29yOiBncmFiO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5saXN0aW5nOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnaG9zdHdoaXRlO1xyXG59XHJcblxyXG4udGFzayBkaXYgLnRhZ3MsIC50YXNrIGRpdiAuZXh0cmFzIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi50YXNrOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2hvc3R3aGl0ZTtcclxufVxyXG5cclxuLnRhZ3MsIC5leHRyYXMge1xyXG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufVxyXG5cclxuLmxpc3Rpbmc6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5hY3RpdmUtcmFkaW8tYnV0dG9uIHtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uaGlkZGVuIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgcGFkZGluZzogMDtcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcblxyXG4udGl0bGU6Zm9jdXMge1xyXG4gIG91dGxpbmU6IGF1dG87XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDExNjM4O1xyXG4gIGJvcmRlci13aWR0aDogMnB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICBmbGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHRvcDtcclxufVxyXG5cclxuLm9wZW4ge1xyXG4gIGN1cnNvcjogYXV0bztcclxufVxyXG5cclxuLmV4dHJhcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5jZGstZHJhZy1wcmV2aWV3IHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgICAgICAgICAgICAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gICAgICAgICAgICAgICAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG4gIFxyXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG4gIFxyXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-task',
                templateUrl: './task.component.html',
                styleUrls: ['./task.component.css']
            }]
    }], function () { return [{ type: src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"] }, { type: _lists_service__WEBPACK_IMPORTED_MODULE_2__["ListsService"] }, { type: _tasks_service__WEBPACK_IMPORTED_MODULE_3__["TasksService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isListing: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/home/activities/tasks/lists.service.ts":
/*!********************************************************!*\
  !*** ./src/app/home/activities/tasks/lists.service.ts ***!
  \********************************************************/
/*! exports provided: ListsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsService", function() { return ListsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ListsService {
    constructor() {
        this.lists = new Map();
        this.disabledLists = new Map();
    }
}
ListsService.ɵfac = function ListsService_Factory(t) { return new (t || ListsService)(); };
ListsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ListsService, factory: ListsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/activities/tasks/task-editor-popup.directive.ts":
/*!**********************************************************************!*\
  !*** ./src/app/home/activities/tasks/task-editor-popup.directive.ts ***!
  \**********************************************************************/
/*! exports provided: TaskEditorPopupDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskEditorPopupDirective", function() { return TaskEditorPopupDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TaskEditorPopupDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
TaskEditorPopupDirective.ɵfac = function TaskEditorPopupDirective_Factory(t) { return new (t || TaskEditorPopupDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
TaskEditorPopupDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TaskEditorPopupDirective, selectors: [["", "appTaskEditorPopup", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskEditorPopupDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appTaskEditorPopup]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/activities/tasks/task-editor-popup/task-editor-popup.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/home/activities/tasks/task-editor-popup/task-editor-popup.component.ts ***!
  \****************************************************************************************/
/*! exports provided: TaskEditorPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskEditorPopupComponent", function() { return TaskEditorPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/socket/socket.service */ "./src/app/socket/socket.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





class TaskEditorPopupComponent {
    constructor(socketService) {
        this.isEditingTitle = true;
        this.socketService = socketService;
    }
    ngOnInit() {
        this.enteredTitle = this.data.title || "Untitled task";
        this.enteredDescription = this.data.contents;
        let modalContent = document.getElementsByClassName("modal-content")[0];
        modalContent.focus();
    }
    editTitle() {
        let titleField = document.getElementById("task-title-field");
        this.enteredTitle = this.data.title;
        this.isEditingTitle = true;
    }
    saveTitle() {
        let titleField = document.getElementById("task-title-field");
        if (this.enteredTitle != undefined) {
            if (titleField == document.activeElement)
                titleField.blur();
            this.data.title = this.enteredTitle;
            this.isEditingTitle = false;
            this.socketService.sendMessage({ channel: "tasks", type: "edit_task_title", task_id: this.data.task_id, title: this.enteredTitle });
        }
    }
    saveDescription() {
        if (this.enteredDescription != undefined) {
            this.data.contents = this.enteredDescription;
            this.socketService.sendMessage({ channel: "tasks", type: "edit_task_contents", task_id: this.data.task_id, contents: this.enteredDescription });
        }
    }
    changeActive() {
        this.socketService.sendMessage({ channel: "tasks", type: "set_listing_active", listing_id: this.data.listing_id, active: !this.data.active });
    }
    changePublic() {
        this.socketService.sendMessage({ channel: "tasks", type: "set_task_public", task_id: this.data.task_id, public: !this.data.public });
    }
    removeTask(event) {
        this.onClose(event);
        this.socketService.sendMessage({ channel: "tasks", type: "delete_task", task_id: this.data.task_id, title: this.enteredTitle });
    }
}
TaskEditorPopupComponent.ɵfac = function TaskEditorPopupComponent_Factory(t) { return new (t || TaskEditorPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"])); };
TaskEditorPopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskEditorPopupComponent, selectors: [["app-task-editor-popup"]], decls: 48, vars: 10, consts: [[1, "modal", 3, "click"], ["tabindex", "0", 1, "modal-content"], [1, "task-header"], ["id", "task-title-field", 3, "ngModel", "disabled", "focus", "keydown.enter", "blur", "ngModelChange"], ["tabindex", "0", 1, "close-task", 3, "keydown.enter", "click"], [1, "task-content"], [1, "task-main"], [3, "submit"], ["tabindex", "0", 1, "tooltip-parent"], ["for", "event-details"], ["id", "event-details", "name", "event-details", "rows", "6", 2, "resize", "none", 3, "ngModel", "disabled", "ngModelChange", "blur"], [1, "task-sidebar"], [3, "ngClass"], [1, "task-actions"], [1, "toggle"], [1, "switch"], ["type", "checkbox", "id", "public", 3, "checked", "change"], [1, "slider"], ["tabindex", "0"], ["type", "checkbox", "id", "active", 3, "checked", "change"], ["tabindex", "0", 1, "remove-task", 3, "click", "keydown.enter"]], template: function TaskEditorPopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskEditorPopupComponent_Template_div_click_0_listener($event) { return ctx.onClose($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "textarea", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function TaskEditorPopupComponent_Template_textarea_focus_3_listener() { return ctx.editTitle(); })("keydown.enter", function TaskEditorPopupComponent_Template_textarea_keydown_enter_3_listener() { return ctx.saveTitle(); })("blur", function TaskEditorPopupComponent_Template_textarea_blur_3_listener() { return ctx.saveTitle(); })("ngModelChange", function TaskEditorPopupComponent_Template_textarea_ngModelChange_3_listener($event) { return ctx.enteredTitle = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function TaskEditorPopupComponent_Template_a_keydown_enter_5_listener($event) { return ctx.onClose($event); })("click", function TaskEditorPopupComponent_Template_a_click_5_listener($event) { return ctx.onClose($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function TaskEditorPopupComponent_Template_form_submit_9_listener($event) { return ctx.onClose($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Listing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "A listing is your personal copy of a task. Shared versions of the task will not have this information.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "This section will include time spent on this task, any ongoing timers, and tags.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TaskEditorPopupComponent_Template_textarea_ngModelChange_21_listener($event) { return ctx.enteredDescription = $event; })("blur", function TaskEditorPopupComponent_Template_textarea_blur_21_listener() { return ctx.saveDescription(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h6", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Task Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Public");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Set a task to public if you want it to be visible to others.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TaskEditorPopupComponent_Template_input_change_33_listener() { return ctx.changePublic(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h6", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Listing Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Set a listing to active if you want to work on it. You can have up to one active task at a time.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TaskEditorPopupComponent_Template_input_change_44_listener() { return ctx.changeActive(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskEditorPopupComponent_Template_button_click_46_listener($event) { return ctx.removeTask($event); })("keydown.enter", function TaskEditorPopupComponent_Template_button_keydown_enter_46_listener($event) { return ctx.removeTask($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.enteredTitle)("disabled", !ctx.data.can_edit_title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.enteredDescription)("disabled", !ctx.data.can_edit_contents);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.data.can_edit_settings ? "settings" : "hidden-settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.data.public);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.data.can_edit_settings ? "settings" : "hidden-settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.data.active);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: [".modal[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding-top: 0.5em;\r\n    padding-bottom: 0.5em;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: rgb(0,0,0);\r\n    background-color: rgba(0,0,0,0.4);\r\n    cursor: inherit;\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    padding: 1rem 2ch 1rem 2ch;\r\n    border: 1px solid #888;\r\n    width: min(100%, 100ch);\r\n    border-radius: 2rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.task-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 0.83em;\r\n}\r\n\r\n.task-header[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n    flex-grow: 1;\r\n}\r\n\r\n.close-task[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    padding: 1ch;\r\n    border-radius: 1ch;\r\n}\r\n\r\n.close-task[_ngcontent-%COMP%]:hover, .close-task[_ngcontent-%COMP%]:focus {\r\n    background-color: lightgray;\r\n    cursor: pointer;\r\n}\r\n\r\n.task-content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n\r\n.tooltip-parent[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    width: -webkit-min-content;\r\n    width: -moz-min-content;\r\n    width: min-content;\r\n    border-bottom: 2px dotted #000;\r\n    position: relative;\r\n}\r\n\r\n.tooltip-parent[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n    position: absolute;\r\n    background-color: white;\r\n    padding: 4px;\r\n    border: 1px solid black;\r\n    border-radius: 8px;\r\n    z-index: 1;\r\n    top: 1em;\r\n    left: 4ch;\r\n    width: 20ch;\r\n}\r\n\r\n.tooltip-parent[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%], .tooltip-parent[_ngcontent-%COMP%]:focus   span[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n}\r\n\r\n.task-main[_ngcontent-%COMP%], .task-sidebar[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.task-main[_ngcontent-%COMP%] {\r\n    flex: 3;\r\n}\r\n\r\n.task-sidebar[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    margin-left: 2ch;\r\n    padding-left: 2ch;\r\n    border-left: solid lightgray;\r\n    display: flex;\r\n    gap: 1em;\r\n}\r\n\r\n.task-actions[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n}\r\n\r\n.settings[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1em;\r\n}\r\n\r\n.hidden-settings[_ngcontent-%COMP%] {\r\n    display: none\r\n}\r\n\r\n.task-sidebar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    align-self: stretch;\r\n}\r\n\r\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n    margin-bottom: 0.5em;\r\n}\r\n\r\nform[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.remove-task[_ngcontent-%COMP%]:not(:hover):not(:active) {\r\n    box-shadow: 0 4px #ad3236;\r\n    margin-bottom: 4px;\r\n}\r\n\r\n.remove-task[_ngcontent-%COMP%]:hover:not(:active) {\r\n    box-shadow: 0 2px #ad3236;\r\n    margin-bottom: 2px;\r\n    margin-top: 2px;\r\n}\r\n\r\n.remove-task[_ngcontent-%COMP%]:active {\r\n    margin-top: 4px;\r\n}\r\n\r\n.remove-task[_ngcontent-%COMP%] {\r\n    background-color: #D64045;\r\n    color: white;\r\n}\r\n\r\nh2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n}\r\n\r\n#task-title-field[_ngcontent-%COMP%] {\r\n    font-size: 1.5em;\r\n    height: 1.3em;\r\n    resize: none;\r\n    background-color: transparent;\r\n    border-color: transparent;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.button-holder[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.toggle[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.switch[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 60px;\r\n    height: 34px;\r\n  }\r\n\r\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] { \r\n    opacity: 0;\r\n    width: 0;\r\n    height: 0;\r\n  }\r\n\r\n.slider[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: lightgray;\r\n    transition: .2s;\r\n    border-radius: 34px;\r\n  }\r\n\r\n.slider[_ngcontent-%COMP%]:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 26px;\r\n    width: 26px;\r\n    left: 4px;\r\n    bottom: 4px;\r\n    background-color: white;\r\n    transition: .2s;\r\n    border-radius: 50%;\r\n  }\r\n\r\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\r\n    background-color: #011638;\r\n  }\r\n\r\ninput[_ngcontent-%COMP%]:focus    + .slider[_ngcontent-%COMP%] {\r\n    box-shadow: 0 0 1px #011638;\r\n  }\r\n\r\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\r\n    transform: translateX(26px);\r\n  }\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .modal-content[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        height: 100%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hY3Rpdml0aWVzL3Rhc2tzL3Rhc2stZWRpdG9yLXBvcHVwL3Rhc2stZWRpdG9yLXBvcHVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixVQUFVO0lBQ1YsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIsaUNBQWlDO0lBQ2pDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFFBQVE7SUFDUixTQUFTO0lBQ1QsV0FBVztBQUNmOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLE9BQU87QUFDWDs7QUFFQTtJQUNJLE9BQU87SUFDUCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsUUFBUTtBQUNaOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0FBQ1o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7RUFDZDs7QUFFQTtJQUNFLFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUztFQUNYOztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsMkJBQTJCO0lBRTNCLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsU0FBUztJQUNULFdBQVc7SUFDWCx1QkFBdUI7SUFFdkIsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjs7QUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7QUFFQTtJQUNFLDJCQUEyQjtFQUM3Qjs7QUFFQTtJQUdFLDJCQUEyQjtFQUM3Qjs7QUFFRjtJQUNJO1FBQ0ksV0FBVztRQUNYLFlBQVk7SUFDaEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYWN0aXZpdGllcy90YXNrcy90YXNrLWVkaXRvci1wb3B1cC90YXNrLWVkaXRvci1wb3B1cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMC41ZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xyXG4gICAgY3Vyc29yOiBpbmhlcml0O1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDFyZW0gMmNoIDFyZW0gMmNoO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcclxuICAgIHdpZHRoOiBtaW4oMTAwJSwgMTAwY2gpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4udGFzay1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjgzZW07XHJcbn1cclxuXHJcbi50YXNrLWhlYWRlciB0ZXh0YXJlYSB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi5jbG9zZS10YXNrIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzogMWNoO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMWNoO1xyXG59XHJcblxyXG4uY2xvc2UtdGFzazpob3ZlciwgLmNsb3NlLXRhc2s6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udGFzay1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi50b29sdGlwLXBhcmVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IGRvdHRlZCAjMDAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udG9vbHRpcC1wYXJlbnQgc3BhbiB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRvcDogMWVtO1xyXG4gICAgbGVmdDogNGNoO1xyXG4gICAgd2lkdGg6IDIwY2g7XHJcbn1cclxuXHJcbi50b29sdGlwLXBhcmVudDpob3ZlciBzcGFuLCAudG9vbHRpcC1wYXJlbnQ6Zm9jdXMgc3BhbiB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcblxyXG4udGFzay1tYWluLCAudGFzay1zaWRlYmFyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4udGFzay1tYWluIHtcclxuICAgIGZsZXg6IDM7XHJcbn1cclxuXHJcbi50YXNrLXNpZGViYXIge1xyXG4gICAgZmxleDogMTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyY2g7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDJjaDtcclxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAxZW07XHJcbn1cclxuXHJcbi50YXNrLWFjdGlvbnMge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uc2V0dGluZ3Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDFlbTtcclxufVxyXG5cclxuLmhpZGRlbi1zZXR0aW5ncyB7XHJcbiAgICBkaXNwbGF5OiBub25lXHJcbn1cclxuXHJcbi50YXNrLXNpZGViYXIgYnV0dG9uIHtcclxuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XHJcbn1cclxuXHJcbmlucHV0LCB0ZXh0YXJlYSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnJlbW92ZS10YXNrOm5vdCg6aG92ZXIpOm5vdCg6YWN0aXZlKSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAjYWQzMjM2O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG59XHJcbiAgXHJcbi5yZW1vdmUtdGFzazpob3Zlcjpub3QoOmFjdGl2ZSkge1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggI2FkMzIzNjtcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxufVxyXG4gIFxyXG4ucmVtb3ZlLXRhc2s6YWN0aXZlIHtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxufVxyXG4gIFxyXG4ucmVtb3ZlLXRhc2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Q2NDA0NTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaDIsIGgzLCBoNCwgaDUsIGg2IHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuI3Rhc2stdGl0bGUtZmllbGQge1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGhlaWdodDogMS4zZW07XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4uYnV0dG9uLWhvbGRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLnRvZ2dsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnN3aXRjaCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogMzRweDtcclxuICB9XHJcbiAgXHJcbiAgLnN3aXRjaCBpbnB1dCB7IFxyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gIH1cclxuICBcclxuICAuc2xpZGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjJzO1xyXG4gICAgdHJhbnNpdGlvbjogLjJzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzRweDtcclxuICB9XHJcbiAgXHJcbiAgLnNsaWRlcjpiZWZvcmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGhlaWdodDogMjZweDtcclxuICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgbGVmdDogNHB4O1xyXG4gICAgYm90dG9tOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjJzO1xyXG4gICAgdHJhbnNpdGlvbjogLjJzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuICBcclxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDExNjM4O1xyXG4gIH1cclxuICBcclxuICBpbnB1dDpmb2N1cyArIC5zbGlkZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAjMDExNjM4O1xyXG4gIH1cclxuICBcclxuICBpbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xyXG4gIH1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5tb2RhbC1jb250ZW50IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskEditorPopupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-task-editor-popup',
                templateUrl: './task-editor-popup.component.html',
                styleUrls: ['./task-editor-popup.component.css']
            }]
    }], function () { return [{ type: src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/activities/tasks/tasks.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/home/activities/tasks/tasks.component.ts ***!
  \**********************************************************/
/*! exports provided: TasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return TasksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _list_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.directive */ "./src/app/home/activities/tasks/list.directive.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/list.component */ "./src/app/home/activities/tasks/list/list.component.ts");
/* harmony import */ var src_app_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/handler */ "./src/app/handler.ts");
/* harmony import */ var _task_editor_popup_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task-editor-popup.directive */ "./src/app/home/activities/tasks/task-editor-popup.directive.ts");
/* harmony import */ var _task_editor_popup_task_editor_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task-editor-popup/task-editor-popup.component */ "./src/app/home/activities/tasks/task-editor-popup/task-editor-popup.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../menu/menu.component */ "./src/app/home/menu/menu.component.ts");
/* harmony import */ var src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/socket/socket.service */ "./src/app/socket/socket.service.ts");
/* harmony import */ var _lists_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lists.service */ "./src/app/home/activities/tasks/lists.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../panel-header/panel-header.component */ "./src/app/panel-header/panel-header.component.ts");















function TasksComponent_ng_template_0_Template(rf, ctx) { }
function TasksComponent_ng_template_5_Template(rf, ctx) { }
class TasksComponent extends src_app_handler__WEBPACK_IMPORTED_MODULE_3__["Handler"] {
    constructor(socketService, listsService, componentFactoryResolver, route, location) {
        super();
        this.header = "Tasks";
        this.lists = [];
        this.listViewRefs = new Map();
        this.socketService = socketService;
        this.listsService = listsService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.location = location;
        this.route = route;
    }
    ngOnInit() {
        if (!this.socketService.channelIsRegistered("tasks"))
            this.socketService.register("tasks");
        this.socketService.reply.subscribe(msg => this.onResponseReceived(msg));
        this.socketService.sendMessage({ channel: "tasks", type: "request_lists" });
        this.location.onUrlChange(this.handleTask.bind(this));
        this.handleTask();
    }
    handleMouseDown(event) {
        let element = document.getElementById("lists");
        this.scrollPosition = {
            left: element.scrollLeft,
            x: event.clientX,
        };
    }
    handleMouseMovement(event) {
        if (this.scrollPosition != undefined) {
            const dx = event.clientX - this.scrollPosition.x;
            let element = document.getElementById("lists");
            this.scrollPosition = {
                left: element.scrollLeft,
                x: event.clientX,
            };
            element.scrollBy(-dx, 0);
            if (window.getSelection) {
                if (window.getSelection().empty) {
                    window.getSelection().empty();
                }
                else if (window.getSelection().removeAllRanges) {
                    window.getSelection().removeAllRanges();
                }
            }
        }
    }
    handleMouseUp(event) {
        this.scrollPosition = undefined;
    }
    onResponseReceived(msg) {
        if (msg["channel"] == "tasks") {
            if (msg["type"] == "request_lists") {
                this.onRequestLists(msg);
            }
            else if (msg["type"] == "request_task") {
                this.onRequestTask(msg);
            }
        }
    }
    onRequestLists(msg) {
        msg["lists"].sort(function (a, b) {
            return a.index - b.index;
        });
        msg["lists"].forEach(data => {
            console.log(data);
            this.loadList(data);
        });
    }
    loadList(data) {
        this.lists.push(data.list_id);
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(_list_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"]);
        const viewContainerRef = this.listHost.viewContainerRef;
        let componentRef = viewContainerRef.createComponent(componentFactory, data.index);
        let instance = componentRef.instance;
        instance.data = data;
        instance.lists = this.lists;
        this.listsService.lists.set(data.list_id, instance);
        this.listViewRefs.set(data.list_id, componentRef.hostView);
    }
    handleTask() {
        if (_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"].getActivity(this.location.path()) == "tasks" && this.location.path().split('/').length > 3) {
            this.taskId = this.location.path().split('/')[3];
            this.socketService.sendMessage({ channel: "tasks", type: "request_task", "task_id": this.taskId });
        }
    }
    onRequestTask(taskData) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(_task_editor_popup_task_editor_popup_component__WEBPACK_IMPORTED_MODULE_5__["TaskEditorPopupComponent"]);
        const viewContainerRef = this.taskEditorPopupHost.viewContainerRef;
        let componentRef;
        componentRef = viewContainerRef.createComponent(componentFactory);
        let instance = componentRef.instance;
        instance.data = taskData;
        instance.onClose = this.closeTask.bind(this);
    }
    closeTask(event) {
        if (event.target.classList.contains("modal") ||
            event.target.classList.contains("close-task") ||
            event.target.classList.contains("remove-task")) {
            const viewContainerRef = this.taskEditorPopupHost.viewContainerRef;
            viewContainerRef.clear();
            this.location.replaceState('/home/tasks');
        }
    }
}
TasksComponent.ɵfac = function TasksComponent_Factory(t) { return new (t || TasksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_7__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_lists_service__WEBPACK_IMPORTED_MODULE_8__["ListsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"])); };
TasksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TasksComponent, selectors: [["app-tasks"]], viewQuery: function TasksComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_list_directive__WEBPACK_IMPORTED_MODULE_1__["ListDirective"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_task_editor_popup_directive__WEBPACK_IMPORTED_MODULE_4__["TaskEditorPopupDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listHost = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.taskEditorPopupHost = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 1, consts: [["appTaskEditorPopup", ""], [1, "scroll-container"], [3, "header"], ["id", "list"], ["appList", ""]], template: function TasksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TasksComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-panel-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TasksComponent_ng_template_5_Template, 0, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", ctx.header);
    } }, directives: [_task_editor_popup_directive__WEBPACK_IMPORTED_MODULE_4__["TaskEditorPopupDirective"], _panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_11__["PanelHeaderComponent"], _list_directive__WEBPACK_IMPORTED_MODULE_1__["ListDirective"]], styles: [".scroll-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n    position: relative;\r\n}\r\n\r\n#lists[_ngcontent-%COMP%] {\r\n    flex: 1 1 auto;\r\n    overflow-x: auto;\r\n    display: flex;\r\n    max-height: 100%;\r\n}\r\n\r\n.new-list[_ngcontent-%COMP%] {\r\n    padding: 0.4em 1ch 0.2em 1ch;\r\n    margin: 0 0 1em 0;\r\n}\r\n\r\ninput[type=checkbox][_ngcontent-%COMP%], .tasks[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.list-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:checked ~ .tasks[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\n.submit-button[_ngcontent-%COMP%] {\r\n    display: hidden;\r\n    cursor: pointer;\r\n    width: 2ch;\r\n    height: 1.5em;\r\n    position: absolute;\r\n    right: 1ch;\r\n}\r\n\r\n#new-list-title-field[_ngcontent-%COMP%] {\r\n    cursor: text;\r\n    border: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hY3Rpdml0aWVzL3Rhc2tzL3Rhc2tzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsVUFBVTtJQUNWLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUdBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2FjdGl2aXRpZXMvdGFza3MvdGFza3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGwtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jbGlzdHMge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5uZXctbGlzdCB7XHJcbiAgICBwYWRkaW5nOiAwLjRlbSAxY2ggMC4yZW0gMWNoO1xyXG4gICAgbWFyZ2luOiAwIDAgMWVtIDA7XHJcbn1cclxuICBcclxuaW5wdXRbdHlwZT1jaGVja2JveF0sXHJcbi50YXNrcyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiAgXHJcbi5saXN0LWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbiAgXHJcbmlucHV0OmNoZWNrZWR+LnRhc2tzIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiAgXHJcbi5zdWJtaXQtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGhpZGRlbjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHdpZHRoOiAyY2g7XHJcbiAgICBoZWlnaHQ6IDEuNWVtO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDFjaDtcclxufVxyXG4gIFxyXG5cclxuI25ldy1saXN0LXRpdGxlLWZpZWxkIHtcclxuICAgIGN1cnNvcjogdGV4dDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TasksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tasks',
                templateUrl: './tasks.component.html',
                styleUrls: ['./tasks.component.css']
            }]
    }], function () { return [{ type: src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_7__["SocketService"] }, { type: _lists_service__WEBPACK_IMPORTED_MODULE_8__["ListsService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"] }]; }, { listHost: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_list_directive__WEBPACK_IMPORTED_MODULE_1__["ListDirective"], { static: true }]
        }], taskEditorPopupHost: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_task_editor_popup_directive__WEBPACK_IMPORTED_MODULE_4__["TaskEditorPopupDirective"], { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/home/activities/timer.service.ts":
/*!**************************************************!*\
  !*** ./src/app/home/activities/timer.service.ts ***!
  \**************************************************/
/*! exports provided: TimerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerService", function() { return TimerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class TimerService {
    constructor() { }
    startTimer() {
        this.timerSource = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(1000, 1000);
    }
    stopTimer() {
        this.timerSource = null;
    }
}
TimerService.ɵfac = function TimerService_Factory(t) { return new (t || TimerService)(); };
TimerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TimerService, factory: TimerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/activities/timer/timer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/home/activities/timer/timer.component.ts ***!
  \**********************************************************/
/*! exports provided: TimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerComponent", function() { return TimerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/handler */ "./src/app/handler.ts");
/* harmony import */ var src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/socket/socket.service */ "./src/app/socket/socket.service.ts");
/* harmony import */ var _room_change_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../room-change.service */ "./src/app/home/room-change.service.ts");
/* harmony import */ var _tasks_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tasks.service */ "./src/app/home/activities/tasks.service.ts");
/* harmony import */ var _timer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../timer.service */ "./src/app/home/activities/timer.service.ts");
/* harmony import */ var _panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../panel-header/panel-header.component */ "./src/app/panel-header/panel-header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _tasks_list_task_task_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tasks/list/task/task.component */ "./src/app/home/activities/tasks/list/task/task.component.ts");










const _c0 = function (a0) { return { "display": a0 }; };
function TimerComponent_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const participant_r1 = ctx.$implicit;
    const isLast_r2 = ctx.last;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r0.participantsDisplay));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", participant_r1, "", isLast_r2 ? "" : ", ", "");
} }
const _c1 = function (a0) { return { "visibility": a0 }; };
class TimerComponent extends src_app_handler__WEBPACK_IMPORTED_MODULE_1__["Handler"] {
    constructor(socketService, roomChangeService, tasksService, timerService) {
        super();
        this.header = "Timer";
        this.tabs = ["host"];
        this.activeTaskData = { "task_id": null, "title": "You need an active task to participate. Select one from the tasks tab." };
        this.activeTask = false;
        this.timeToSubmit = 25;
        this.joinedSession = false;
        this.rightVisibility = "inherit";
        this.leftVisibility = "inherit";
        this.startButtonDisplay = "inherit";
        this.joinButtonDisplay = "none";
        this.leaveButtonDisplay = "none";
        this.participantsDisplay = "none";
        this.socketService = socketService;
        this.roomChangeService = roomChangeService;
        this.tasksService = tasksService;
        this.timerService = timerService;
    }
    ngOnInit() {
        if (!this.socketService.channelIsRegistered("timer"))
            this.socketService.register("timer");
        this.socketService.channelReply.get("timer").subscribe(msg => {
            this[this.snakeToCamel(msg["type"])](msg);
        });
        this.roomChangeService.roomId.subscribe(roomId => this.changeRoom(roomId));
        this.tasksService.activeTask.subscribe(data => { this.activeTaskData = data; this.activeTask = true; });
        this.timeRemaining = new Date(0, 0, 0, 0, this.timeToSubmit);
    }
    changeRoom(roomId) {
        this.roomId = roomId;
    }
    addTime(event, time) {
        this.timeToSubmit += time;
        this.rightVisibility = "inherit";
        this.leftVisibility = "inherit";
        if (this.timeToSubmit > 45 || this.timeToSubmit < 10)
            this.timeToSubmit -= time;
        if (this.timeToSubmit == 45) {
            this.rightVisibility = "hidden";
        }
        else if (this.timeToSubmit == 10) {
            this.leftVisibility = "hidden";
        }
        this.timeRemaining.setMinutes(this.timeToSubmit);
        this.timeRemaining = new Date(0, 0, 0, 0, this.timeToSubmit);
    }
    // start a session (from the server)
    // remember this can come from anyone!
    startSession(msg) {
        this.sessionId = msg["session_id"];
        this.timeRemaining = new Date(0, 0, 0, 0, msg["duration"], 0);
        this.timerService.startTimer();
        if (this.timerSubscription != null)
            this.timerSubscription.unsubscribe();
        this.timerSubscription = this.timerService.timerSource.subscribe(second => this.countdown());
        this.leftVisibility = "hidden";
        this.rightVisibility = "hidden";
        this.startButtonDisplay = "none";
        this.joinButtonDisplay = "none";
        this.participants = msg["participants"];
        // reveal leave session button, participants
        // TODO: the below could absolutely cause glitches if two people choose the same display name
        if (this.participants.includes(sessionStorage.getItem("display_name")))
            this.leaveButtonDisplay = "inherit";
        this.participantsDisplay = "initial";
    }
    joinSession(msg) {
    }
    leaveSession(msg) {
        if (msg["success"] == true) {
            this.sessionId = msg["session_id"];
            this.joinButtonDisplay = "inherit";
            this.leaveButtonDisplay = "none";
        }
    }
    // TODO END SESSION
    endSession(msg) {
    }
    start() {
        this.socketService.sendMessage({ channel: "timer", type: "start_session", room_id: this.roomId, consumable: 0, duration: this.timeToSubmit, is_break: false });
    }
    join() {
    }
    leave() {
        this.socketService.sendMessage({ channel: "timer", type: "leave_session", room_id: this.roomId, session_id: this.sessionId });
    }
    countdown() {
        let newDate = new Date(0, 0, 0, 0, this.timeRemaining.getMinutes(), 0);
        if (this.timeRemaining.getSeconds() == 0) {
            if (this.timeRemaining.getMinutes() == 0) {
                this.socketService.sendMessage({ channel: "timer", type: "leave_session", room_id: this.roomId, consumable: 0, duration: 25, is_break: false });
                this.timeRemaining = new Date(0, 0, 0, 0, this.timeToSubmit);
                this.timerService.stopTimer();
                this.timerSubscription.unsubscribe();
                this.leftVisibility = "inherit";
                this.rightVisibility = "inherit";
            }
            else {
                newDate.setSeconds(59);
                newDate.setMinutes(this.timeRemaining.getMinutes() - 1);
            }
        }
        else {
            newDate.setSeconds(this.timeRemaining.getSeconds() - 1);
        }
        this.timeRemaining = newDate;
    }
}
TimerComponent.ɵfac = function TimerComponent_Factory(t) { return new (t || TimerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_room_change_service__WEBPACK_IMPORTED_MODULE_3__["RoomChangeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tasks_service__WEBPACK_IMPORTED_MODULE_4__["TasksService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_timer_service__WEBPACK_IMPORTED_MODULE_5__["TimerService"])); };
TimerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimerComponent, selectors: [["app-timer"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 27, vars: 25, consts: [[3, "header"], ["id", "not-in-session"], ["id", "host"], ["id", "consumable"], [3, "ngStyle"], ["id", "participants", 3, "ngStyle", 4, "ngFor", "ngForOf"], [3, "data"], ["id", "time"], ["tabindex", "0", "id", "left-arrow", 1, "arrow", 3, "ngStyle", "click", "keydown.enter"], ["id", "time-display"], ["tabindex", "0", "id", "right-arrow", 1, "arrow", 3, "ngStyle", "click", "keydown.enter"], ["id", "start"], ["id", "start-button", 3, "ngStyle", "click"], ["id", "join-button", 3, "ngStyle", "click"], ["id", "leave-button", 3, "ngStyle", "click"], ["id", "in-session"], ["id", "participants", 3, "ngStyle"]], template: function TimerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-panel-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\uD83D\uDD6F\uFE0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Participants:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TimerComponent_p_7_Template, 2, 5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Active task:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-task", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimerComponent_Template_a_click_12_listener($event) { return ctx.addTime($event, 0 - 5); })("keydown.enter", function TimerComponent_Template_a_keydown_enter_12_listener($event) { return ctx.addTime($event, 0 - 5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimerComponent_Template_a_click_17_listener($event) { return ctx.addTime($event, 5); })("keydown.enter", function TimerComponent_Template_a_keydown_enter_17_listener($event) { return ctx.addTime($event, 5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimerComponent_Template_button_click_20_listener() { return ctx.start(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Start");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimerComponent_Template_button_click_22_listener() { return ctx.join(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Join");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimerComponent_Template_button_click_24_listener() { return ctx.leave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Leave");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 15);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", ctx.header);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.participantsDisplay));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.participants);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.activeTaskData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c1, ctx.leftVisibility));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 10, ctx.timeRemaining, "mm:ss"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c1, ctx.rightVisibility));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx.startButtonDisplay));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, ctx.joinButtonDisplay));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c0, ctx.leaveButtonDisplay));
    } }, directives: [_panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_6__["PanelHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _tasks_list_task_task_component__WEBPACK_IMPORTED_MODULE_8__["TaskComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: ["#not-in-session[_ngcontent-%COMP%] {\r\n    flex: 1 0 0;\r\n    padding: 0.2em 0 0.2em 0;\r\n}\r\n\r\nh2[_ngcontent-%COMP%], #participants[_ngcontent-%COMP%] {\r\n    padding: 0 18px 0 18px;\r\n    margin: 0.2em 0 0.2em 0;\r\n}\r\n\r\n#participants[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n#host[_ngcontent-%COMP%] {\r\n    overflow-y: auto;\r\n    flex: 1 0 0;\r\n}\r\n\r\n#time[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    text-align: center;\r\n}\r\n\r\n#time-display[_ngcontent-%COMP%] {\r\n    flex-grow: 1;\r\n    font-size: 2em;\r\n    text-align: center;\r\n}\r\n\r\n#options[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n}\r\n\r\n.arrow[_ngcontent-%COMP%] {\r\n    font-size: 2em;\r\n    margin: 0 0.2ch 0 0.2ch;\r\n    cursor: pointer;\r\n    color: #adbbd3;\r\n}\r\n\r\n.arrow[_ngcontent-%COMP%]::-moz-selection {\r\n    background: white;\r\n}\r\n\r\n.arrow[_ngcontent-%COMP%]::selection {\r\n    background: white;\r\n}\r\n\r\n.arrow[_ngcontent-%COMP%]:hover, .arrow[_ngcontent-%COMP%]:active {\r\n    color: #011638;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    font-size: 2em;\r\n    margin: 0 0.2ch 0 0.2ch;\r\n}\r\n\r\n#active-task[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin: 0.5em 0 0.5em 0;\r\n}\r\n\r\n#start[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 0.5em 0 0.5em 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hY3Rpdml0aWVzL3RpbWVyL3RpbWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUZBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9ob21lL2FjdGl2aXRpZXMvdGltZXIvdGltZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNub3QtaW4tc2Vzc2lvbiB7XHJcbiAgICBmbGV4OiAxIDAgMDtcclxuICAgIHBhZGRpbmc6IDAuMmVtIDAgMC4yZW0gMDtcclxufVxyXG5cclxuaDIsICNwYXJ0aWNpcGFudHMge1xyXG4gICAgcGFkZGluZzogMCAxOHB4IDAgMThweDtcclxuICAgIG1hcmdpbjogMC4yZW0gMCAwLjJlbSAwO1xyXG59XHJcblxyXG4jcGFydGljaXBhbnRzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI2hvc3Qge1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIGZsZXg6IDEgMCAwO1xyXG59XHJcblxyXG4jdGltZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI3RpbWUtZGlzcGxheSB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI29wdGlvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLmFycm93IHtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgbWFyZ2luOiAwIDAuMmNoIDAgMC4yY2g7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogI2FkYmJkMztcclxufVxyXG5cclxuLmFycm93OjpzZWxlY3Rpb24ge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi5hcnJvdzpob3ZlciwgLmFycm93OmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogIzAxMTYzODtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgbWFyZ2luOiAwIDAuMmNoIDAgMC4yY2g7XHJcbn1cclxuXHJcbiNhY3RpdmUtdGFzayB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAuNWVtIDAgMC41ZW0gMDtcclxufVxyXG5cclxuI3N0YXJ0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luOiAwLjVlbSAwIDAuNWVtIDA7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-timer',
                templateUrl: './timer.component.html',
                styleUrls: ['./timer.component.css']
            }]
    }], function () { return [{ type: src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"] }, { type: _room_change_service__WEBPACK_IMPORTED_MODULE_3__["RoomChangeService"] }, { type: _tasks_service__WEBPACK_IMPORTED_MODULE_4__["TasksService"] }, { type: _timer_service__WEBPACK_IMPORTED_MODULE_5__["TimerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/activity-container.component.ts":
/*!******************************************************!*\
  !*** ./src/app/home/activity-container.component.ts ***!
  \******************************************************/
/*! exports provided: ActivityContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityContainerComponent", function() { return ActivityContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _activities_activities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activities/activities */ "./src/app/home/activities/activities.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/home/menu/menu.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _activities_store_store_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./activities/store/store.component */ "./src/app/home/activities/store/store.component.ts");
/* harmony import */ var _activities_chat_chat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./activities/chat/chat.component */ "./src/app/home/activities/chat/chat.component.ts");
/* harmony import */ var _activities_timer_timer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./activities/timer/timer.component */ "./src/app/home/activities/timer/timer.component.ts");
/* harmony import */ var _activities_stats_stats_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./activities/stats/stats.component */ "./src/app/home/activities/stats/stats.component.ts");
/* harmony import */ var _activities_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./activities/tasks/tasks.component */ "./src/app/home/activities/tasks/tasks.component.ts");
/* harmony import */ var _activities_settings_settings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./activities/settings/settings.component */ "./src/app/home/activities/settings/settings.component.ts");











class ActivityContainerComponent {
    constructor(location) {
        this.activities = _activities_activities__WEBPACK_IMPORTED_MODULE_1__["activities"];
        this.location = location;
        this.updateActivity.bind(this);
        this.location.onUrlChange(this.updateActivity);
    }
    ngOnInit() {
        this.updateActivity(this.location.path(), this.location.getState());
    }
    updateActivity(url, state) {
        // ALERT: REDUNDANCY
        let activity = _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"].getActivity(url);
        let visibleActivities = document.getElementsByClassName("visible");
        let i = 0;
        for (let i = 0; i < visibleActivities.length; i++) {
            let visibleActivity = document.getElementsByClassName("visible")[i];
            visibleActivity.classList.remove("visible");
        }
        if (_activities_activities__WEBPACK_IMPORTED_MODULE_1__["activities"].includes(activity)) {
            let newVisibleActivity = document.getElementById(activity);
            newVisibleActivity.classList.add("visible");
        }
    }
}
ActivityContainerComponent.ɵfac = function ActivityContainerComponent_Factory(t) { return new (t || ActivityContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"])); };
ActivityContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActivityContainerComponent, selectors: [["app-activity-container"]], decls: 7, vars: 0, consts: [[1, "activities"], ["id", "store", 1, "activity"], ["id", "chat", 1, "activity"], ["id", "timer", 1, "activity"], ["id", "stats", 1, "activity"], ["id", "tasks", 1, "activity"], ["id", "settings", 1, "activity"]], template: function ActivityContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-store", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-chat", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-timer", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-stats", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-tasks", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-settings", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_activities_store_store_component__WEBPACK_IMPORTED_MODULE_4__["StoreComponent"], _activities_chat_chat_component__WEBPACK_IMPORTED_MODULE_5__["ChatComponent"], _activities_timer_timer_component__WEBPACK_IMPORTED_MODULE_6__["TimerComponent"], _activities_stats_stats_component__WEBPACK_IMPORTED_MODULE_7__["StatsComponent"], _activities_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_8__["TasksComponent"], _activities_settings_settings_component__WEBPACK_IMPORTED_MODULE_9__["SettingsComponent"]], styles: [".activities[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex: 1 0 0;\r\n    height: 100%;\r\n    background-color: #011638;\r\n}\r\n\r\n.activity[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    visibility: hidden;\r\n    display: flex;\r\n    border-radius: 0 2rem 0 0;\r\n    flex-direction: column;\r\n    flex: 1 0 0;\r\n    background-color: white;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.visible[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hY3Rpdml0eS1jb250YWluZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYWN0aXZpdHktY29udGFpbmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aXZpdGllcyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXg6IDEgMCAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxMTYzODtcclxufVxyXG5cclxuLmFjdGl2aXR5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDJyZW0gMCAwO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXg6IDEgMCAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnZpc2libGUge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActivityContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-activity-container',
                templateUrl: './activity-container.component.html',
                styleUrls: ['./activity-container.component.css']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _socket_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../socket/socket.service */ "./src/app/socket/socket.service.ts");



class HeaderComponent {
    constructor(socketService) {
        this.socketService = socketService;
    }
    ngOnInit() {
        this.socketService.reply.subscribe(msg => this.onResponseReceived(msg));
    }
    onResponseReceived(msg) {
        if (msg["password_correct"] != null) {
            if (msg["password_correct"] == false) {
                document.location.href = "/auth/sign-in";
            }
        }
    }
    signOut() {
        let signOutMessage = { channel: "auth", type: "sign_out" };
        this.socketService.sendMessage(signOutMessage);
        sessionStorage.clear();
        document.location.href = "/";
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_socket_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 6, vars: 0, consts: [[1, "header"], ["href", "/", 1, "home"], ["alt", "Cowork", "src", "../../../assets/icons/icon.png", "height", "48", "width", "48", 2, "margin-left", "-4px"], [1, "options"], ["tabindex", "0", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_4_listener() { return ctx.signOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sign out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 0.5em 0 0.5em 0;\r\n    background-color: #011638;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    color: white;\r\n    cursor: pointer;\r\n    text-decoration: underline;\r\n    padding: 0 0.5em 0 0.5em;\r\n}\r\n\r\n.home[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    display: contents;\r\n    color: #F5F5FC;\r\n    margin: 0;\r\n}\r\n\r\n.options[_ngcontent-%COMP%] {\r\n    font-size: small;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n    color: #F5F5FC;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .header[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        align-items: left;\r\n        justify-content: left;\r\n    }\r\n\r\n    h1[_ngcontent-%COMP%] {\r\n        font-size: 1em;\r\n    }\r\n\r\n    .options[_ngcontent-%COMP%] {\r\n        top: 0.8em;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5Qix3QkFBd0I7SUFDeEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsaUJBQWlCO1FBQ2pCLHFCQUFxQjtJQUN6Qjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDAuNWVtIDAgMC41ZW0gMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTE2Mzg7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBwYWRkaW5nOiAwIDAuNWVtIDAgMC41ZW07XHJcbn1cclxuXHJcbi5ob21lIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuaDEge1xyXG4gICAgZGlzcGxheTogY29udGVudHM7XHJcbiAgICBjb2xvcjogI0Y1RjVGQztcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLm9wdGlvbnMge1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgICBjb2xvcjogI0Y1RjVGQztcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogbGVmdDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5vcHRpb25zIHtcclxuICAgICAgICB0b3A6IDAuOGVtO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _socket_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/home/menu/menu.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/home/header/header.component.ts");
/* harmony import */ var _activity_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./activity-container.component */ "./src/app/home/activity-container.component.ts");
/* harmony import */ var _room_room_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./room/room.component */ "./src/app/home/room/room.component.ts");








class HomeComponent {
    constructor(location) {
        this.location = location;
    }
    ngOnInit() {
        if (this.location.path() == '/home') {
            this.location.replaceState('/home/tasks');
        }
        this.updateActivity(this.location.path(), this.location.getState());
        this.location.onUrlChange(this.updateActivity);
    }
    updateActivity(url, state) {
        window.history.pushState(null, url, url);
        let activity = _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"].getActivity(url);
        console.log(activity);
        if (activity == '') {
            let activityContainer = document.getElementById("activity-container");
            let room = document.getElementsByClassName("room")[0];
            activityContainer.classList.add("invisible");
            room.classList.toggle("visible-mobile");
        }
        else {
            let activityContainer = document.getElementById("activity-container");
            activityContainer.classList.remove("invisible");
            let room = document.getElementsByClassName("room")[0];
            room.classList.remove("visible-mobile");
        }
    }
    static getActivity(path) {
        let splitPath = path.split('/');
        let activity = splitPath[2];
        console.log(activity);
        activity = activity.replace('/', '');
        if (activity == '') {
            activity = 'room';
        }
        return activity;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 7, vars: 0, consts: [[1, "home"], [1, "header"], [1, "app"], ["id", "menu"], ["id", "activity-container"], ["id", "room"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"], _activity_container_component__WEBPACK_IMPORTED_MODULE_4__["ActivityContainerComponent"], _room_room_component__WEBPACK_IMPORTED_MODULE_5__["RoomComponent"]], styles: [".home[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\n.app[_ngcontent-%COMP%] {\r\n    flex: 15 0 0;\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n#activity-container[_ngcontent-%COMP%] {\r\n    flex: 5;\r\n    border-radius: 0 2rem 0 0;\r\n    min-width: 300px;\r\n}\r\n\r\n#menu[_ngcontent-%COMP%] {\r\n    min-width: -webkit-fit-content;\r\n    min-width: -moz-fit-content;\r\n    min-width: fit-content;\r\n    border-right: 2px solid lightgray;\r\n}\r\n\r\n#room[_ngcontent-%COMP%] {\r\n    flex: 10 0 0;\r\n    background-color: #000000;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.invisible[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .app[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n    }\r\n\r\n    #activity-container[_ngcontent-%COMP%] {\r\n        height: 100%;\r\n        border-right: none;\r\n    }\r\n\r\n    #menu[_ngcontent-%COMP%] {\r\n        order: 3;\r\n        width: auto;\r\n    }\r\n\r\n    .room[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n\r\n    .visible-mobile[_ngcontent-%COMP%] {\r\n        display: inherit;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLE9BQU87SUFDUCx5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksOEJBQXNCO0lBQXRCLDJCQUFzQjtJQUF0QixzQkFBc0I7SUFDdEIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJO1FBQ0ksc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLFFBQVE7UUFDUixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmFwcCB7XHJcbiAgICBmbGV4OiAxNSAwIDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuI2FjdGl2aXR5LWNvbnRhaW5lciB7XHJcbiAgICBmbGV4OiA1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAycmVtIDAgMDtcclxuICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbiNtZW51IHtcclxuICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBsaWdodGdyYXk7XHJcbn1cclxuXHJcbiNyb29tIHtcclxuICAgIGZsZXg6IDEwIDAgMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmludmlzaWJsZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuYXBwIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG5cclxuICAgICNhY3Rpdml0eS1jb250YWluZXIge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgI21lbnUge1xyXG4gICAgICAgIG9yZGVyOiAzO1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5yb29tIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC52aXNpYmxlLW1vYmlsZSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5oZXJpdDtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/menu/menu.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/menu/menu.component.ts ***!
  \*********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




class MenuComponent {
    constructor(location) {
        this.faHome = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHome"];
        this.faStore = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faStore"];
        this.faComments = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faComments"];
        this.faHourglass = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHourglass"];
        this.faChartPie = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faChartPie"];
        this.faTasks = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTasks"];
        this.faCalendar = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCalendar"];
        this.faCog = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCog"];
        this.location = location;
        this.updateActivity.bind(this);
        this.location.onUrlChange(this.updateActivity);
    }
    navigate(s, event) {
        let activity = MenuComponent.getActivity(s);
        event.preventDefault();
        document.getElementById(activity + "-nav").blur();
        this.location.replaceState(s);
    }
    ngOnInit() {
        this.updateActivity(this.location.path(), this.location.getState());
    }
    updateActivity(url, state) {
        // ALERT: REDUNDANCY
        let activity = MenuComponent.getActivity(url);
        let selectedElements = document.getElementsByClassName("selected");
        let i = 0;
        for (let i = 0; i < selectedElements.length; i++) {
            let selectedElement = selectedElements[i];
            selectedElement.classList.remove("selected");
        }
        let newVisibleActivity = document.getElementById(activity + "-nav");
        newVisibleActivity.classList.add("selected");
    }
    static getActivity(path) {
        let splitPath = path.split('/');
        let activity = splitPath[2];
        activity = activity.replace('/', '');
        return activity;
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"])); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 40, vars: 0, consts: [["tabindex", "0", "id", "room-nav", "href", "/home", 3, "keydown.enter", "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-house-door"], ["fill-rule", "evenodd", "d", "M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z"], ["fill-rule", "evenodd", "d", "M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"], ["tabindex", "0", "id", "store-nav", "href", "/home/store", 3, "keydown.enter", "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-shop"], ["fill-rule", "evenodd", "d", "M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"], ["tabindex", "0", "id", "chat-nav", "href", "/home/chat", 3, "keydown.enter", "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-chat"], ["fill-rule", "evenodd", "d", "M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"], ["tabindex", "0", "id", "timer-nav", "href", "/home/timer", 3, "keydown.enter", "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-hourglass"], ["fill-rule", "evenodd", "d", "M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1-.5-.5zm2.5.5v1a3.5 3.5 0 0 0 1.989 3.158c.533.256 1.011.791 1.011 1.491v.702c0 .7-.478 1.235-1.011 1.491A3.5 3.5 0 0 0 4.5 13v1h7v-1a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351v-.702c0-.7.478-1.235 1.011-1.491A3.5 3.5 0 0 0 11.5 3V2h-7z"], ["tabindex", "0", "id", "stats-nav", "href", "/home/stats", 3, "keydown.enter", "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-graph-up"], ["fill-rule", "evenodd", "d", "M0 0h1v15h15v1H0V0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5z"], ["tabindex", "0", "id", "tasks-nav", "href", "/home/tasks", 3, "keydown.enter", "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-list-task"], ["fill-rule", "evenodd", "d", "M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"], ["d", "M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z"], ["fill-rule", "evenodd", "d", "M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"], ["tabindex", "0", "id", "settings-nav", "href", "/home/settings", 3, "keydown.enter", "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-gear"], ["fill-rule", "evenodd", "d", "M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 0 1 4.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 0 1-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 0 1 1.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 0 1 2.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 0 1 2.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 0 1 1.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 0 1-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 0 1 8.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 0 0 1.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 0 0 .52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 0 0-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 0 0-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 0 0-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 0 0-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 0 0 .52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 0 0 1.255-.52l.094-.319z"], ["fill-rule", "evenodd", "d", "M8 5.754a2.246 2.246 0 1 0 0 4.492 2.246 2.246 0 0 0 0-4.492zM4.754 8a3.246 3.246 0 1 1 6.492 0 3.246 3.246 0 0 1-6.492 0z"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function MenuComponent_Template_a_keydown_enter_1_listener($event) { return ctx.navigate("/home", $event); })("click", function MenuComponent_Template_a_click_1_listener($event) { return ctx.navigate("/home", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Test");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function MenuComponent_Template_a_keydown_enter_7_listener($event) { return ctx.navigate("/home/store", $event); })("click", function MenuComponent_Template_a_click_7_listener($event) { return ctx.navigate("/home/store", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function MenuComponent_Template_a_keydown_enter_12_listener($event) { return ctx.navigate("/home/chat", $event); })("click", function MenuComponent_Template_a_click_12_listener($event) { return ctx.navigate("/home/chat", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function MenuComponent_Template_a_keydown_enter_17_listener($event) { return ctx.navigate("/home/timer", $event); })("click", function MenuComponent_Template_a_click_17_listener($event) { return ctx.navigate("/home/timer", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Timer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function MenuComponent_Template_a_keydown_enter_22_listener($event) { return ctx.navigate("/home/stats", $event); })("click", function MenuComponent_Template_a_click_22_listener($event) { return ctx.navigate("/home/stats", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Stats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function MenuComponent_Template_a_keydown_enter_27_listener($event) { return ctx.navigate("/home/tasks", $event); })("click", function MenuComponent_Template_a_click_27_listener($event) { return ctx.navigate("/home/tasks", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "svg", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function MenuComponent_Template_a_keydown_enter_34_listener($event) { return ctx.navigate("/home/settings", $event); })("click", function MenuComponent_Template_a_click_34_listener($event) { return ctx.navigate("/home/settings", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "svg", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["nav[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: left;\r\n    height: 100%;\r\n    background-color: white;\r\n    padding: 0.5ch;\r\n}\r\n\r\nsvg[_ngcontent-%COMP%] {\r\n    margin-right: 1ch;\r\n    scale: 2;\r\n}\r\n\r\nspan[_ngcontent-%COMP%] {\r\n    font-size: 0.8em\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    color: #b4b4b4;\r\n    display: block;\r\n    cursor: pointer;\r\n    font-size: 24px;\r\n    text-decoration: none;\r\n    text-align: left;\r\n    padding: 0.2em 0.2em 0.2em 0.1em;\r\n    margin: 1ch;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover:not(.selected), a[_ngcontent-%COMP%]:focus {\r\n    color: black;\r\n    outline: none;\r\n}\r\n\r\n.selected[_ngcontent-%COMP%] {\r\n    color: black;\r\n    outline: none;\r\n}\r\n\r\n#room-nav[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n@media only screen and (max-height: 420px) {\r\n    #settings-nav[_ngcontent-%COMP%] {\r\n        position: relative;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 1600px) {\r\n    span[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n\r\n    svg[_ngcontent-%COMP%] {\r\n        margin-right: 0;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    nav[_ngcontent-%COMP%] {\r\n        flex-direction: row;\r\n        border-top: solid 1px black;\r\n        padding: 0.5rem 0 0.5rem 0;\r\n        margin-top: auto;\r\n        height: auto;\r\n    }\r\n\r\n    a[_ngcontent-%COMP%] {\r\n        flex-grow: 1;\r\n    }\r\n\r\n    #settings-nav[_ngcontent-%COMP%] {\r\n        position: relative;\r\n    }\r\n\r\n    #room-nav[_ngcontent-%COMP%] {\r\n        display: block;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 600px) {\r\n    nav[_ngcontent-%COMP%] {\r\n        border-radius: 0 2rem 0 0;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9tZW51L21lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixRQUFRO0FBQ1o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsY0FBYztJQUNkLGVBQWU7SUFDZixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixnQ0FBZ0M7SUFDaEMsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxtQkFBbUI7UUFDbkIsMkJBQTJCO1FBQzNCLDBCQUEwQjtRQUMxQixnQkFBZ0I7UUFDaEIsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHlCQUF5QjtJQUM3QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9tZW51L21lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBsZWZ0O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAwLjVjaDtcclxufVxyXG5cclxuc3ZnIHtcclxuICAgIG1hcmdpbi1yaWdodDogMWNoO1xyXG4gICAgc2NhbGU6IDI7XHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAwLjhlbVxyXG59XHJcblxyXG5hIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6ICNiNGI0YjQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAwLjJlbSAwLjJlbSAwLjJlbSAwLjFlbTtcclxuICAgIG1hcmdpbjogMWNoO1xyXG59XHJcblxyXG5hOmhvdmVyOm5vdCguc2VsZWN0ZWQpLCBhOmZvY3VzIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5zZWxlY3RlZCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4jcm9vbS1uYXYge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDIwcHgpIHtcclxuICAgICNzZXR0aW5ncy1uYXYge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIHtcclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgc3ZnIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIG5hdiB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggYmxhY2s7XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtIDAgMC41cmVtIDA7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgYSB7XHJcbiAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgfVxyXG5cclxuICAgICNzZXR0aW5ncy1uYXYge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICAjcm9vbS1uYXYge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XHJcbiAgICBuYXYge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMnJlbSAwIDA7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.css']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/room-change.service.ts":
/*!*********************************************!*\
  !*** ./src/app/home/room-change.service.ts ***!
  \*********************************************/
/*! exports provided: RoomChangeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomChangeService", function() { return RoomChangeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class RoomChangeService {
    constructor() {
        this.changeSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.roomId = this.changeSource.asObservable();
    }
    setRoom(roomId) {
        this.changeSource.next(roomId);
        this.currentRoomId = roomId;
    }
}
RoomChangeService.ɵfac = function RoomChangeService_Factory(t) { return new (t || RoomChangeService)(); };
RoomChangeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RoomChangeService, factory: RoomChangeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoomChangeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/room/images.ts":
/*!*************************************!*\
  !*** ./src/app/home/room/images.ts ***!
  \*************************************/
/*! exports provided: images */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "images", function() { return images; });
const images = ['floor.png', 'alien.png', 'bear.png', 'bear-shadow.png'];


/***/ }),

/***/ "./src/app/home/room/object-factory.ts":
/*!*********************************************!*\
  !*** ./src/app/home/room/object-factory.ts ***!
  \*********************************************/
/*! exports provided: ObjectFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectFactory", function() { return ObjectFactory; });
/* harmony import */ var _root_player_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./root/player/player */ "./src/app/home/room/root/player/player.ts");
/* harmony import */ var _root_tile_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./root/tile-map */ "./src/app/home/room/root/tile-map.ts");
/* harmony import */ var kontra__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kontra */ "./node_modules/kontra/kontra.mjs");
// this might not be the best way to create these objects!
// simply exists to return object that matches server's id
// variant on factory pattern. May result in duplicate code; beware!



class ObjectFactory {
    constructor(room, socketService) {
        this.room = room;
        this.socketService = socketService;
    }
    makeObject(objects, data) {
        let sceneId = data["scene_id"];
        let object;
        switch (sceneId) {
            case 0: {
                // tile map
                object = new _root_tile_map__WEBPACK_IMPORTED_MODULE_1__["TileMap"](data["width"], data["height"], data["layers"], this.socketService);
                break;
            }
            case 1: {
                // player
                console.log(data);
                object = new _root_player_player__WEBPACK_IMPORTED_MODULE_0__["Player"](this.room, data["id"], data["display_name"], new kontra__WEBPACK_IMPORTED_MODULE_2__["Vector"](data["translation_x"], data["translation_y"]));
                /* create the task popup
                OMITTED FOR USER TESTS--WILL ASK USERS WHAT THEY WOULD DO INSTEAD
                
                const componentFactory = this.componentFactoryResolver.resolveComponentFactory(TaskPopupComponent);

                const viewContainerRef = this.taskHost.viewContainerRef;
            
                let componentRef: ComponentRef<TaskPopupComponent>;
            
                componentRef = viewContainerRef.createComponent(componentFactory, data.index);
            
                let instance: TaskPopupComponent = <TaskPopupComponent>componentRef.instance;
                instance.data = data;
                this.tasks.set(data.task_id, instance);
                this.taskViewRefs.set(data.task_id, componentRef.hostView);
                */
                break;
            }
        }
        return object;
    }
}


/***/ }),

/***/ "./src/app/home/room/room.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/room/room.component.ts ***!
  \*********************************************/
/*! exports provided: RoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomComponent", function() { return RoomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var kontra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kontra */ "./node_modules/kontra/kontra.mjs");
/* harmony import */ var src_app_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/handler */ "./src/app/handler.ts");
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images */ "./src/app/home/room/images.ts");
/* harmony import */ var _object_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./object-factory */ "./src/app/home/room/object-factory.ts");
/* harmony import */ var _root_player_player_tooltip_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./root/player/player-tooltip.directive */ "./src/app/home/room/root/player/player-tooltip.directive.ts");
/* harmony import */ var _root_player_player_tooltip_player_tooltip_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./root/player/player-tooltip/player-tooltip.component */ "./src/app/home/room/root/player/player-tooltip/player-tooltip.component.ts");
/* harmony import */ var src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/socket/socket.service */ "./src/app/socket/socket.service.ts");
/* harmony import */ var _room_change_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../room-change.service */ "./src/app/home/room-change.service.ts");











function RoomComponent_ng_template_11_Template(rf, ctx) { }
class RoomComponent extends src_app_handler__WEBPACK_IMPORTED_MODULE_2__["Handler"] {
    constructor(socketService, roomChangeService, componentFactoryResolver) {
        super();
        this.socketService = socketService;
        this.roomChangeService = roomChangeService;
        this.objects = new Map();
        this.objectFactory = new _object_factory__WEBPACK_IMPORTED_MODULE_4__["ObjectFactory"](this, socketService);
        this.componentFactoryResolver = componentFactoryResolver;
    }
    ngOnInit() {
        // register and observe socket channels
        if (!this.socketService.channelIsRegistered("room"))
            this.socketService.register("room");
        this.socketService.channelReply.get("room").subscribe(msg => {
            if (this[this.snakeToCamel(msg["type"])] != undefined)
                this[this.snakeToCamel(msg["type"])](msg);
        });
        this.roomChangeService.roomId.subscribe(msg => this.onRoomChange(msg));
        let { canvas, context } = Object(kontra__WEBPACK_IMPORTED_MODULE_1__["init"])();
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
        Object(kontra__WEBPACK_IMPORTED_MODULE_1__["setImagePath"])('/assets/room/');
        kontra__WEBPACK_IMPORTED_MODULE_1__["load"].apply(null, _images__WEBPACK_IMPORTED_MODULE_3__["images"]);
        document.onresize = function () {
            canvas.width = canvas.clientWidth;
            canvas.height = canvas.clientHeight;
        };
    }
    addPersistObject(msg) {
        console.log(msg);
        let object = this.objectFactory.makeObject(this.objects, msg["data"]);
        if (msg["data"]["parent_id"] != null) {
            this.objects.get(msg["data"]["parent_id"]).addChild(object);
        }
        else {
            let loop = Object(kontra__WEBPACK_IMPORTED_MODULE_1__["GameLoop"])({
                update: function () {
                    object.update();
                },
                render: function () {
                    object.render();
                }
            });
            // start the loop
            loop.start();
        }
        this.objects.set(msg["data"]["id"], object);
    }
    modifyPersistObject(msg) {
        if (this.objects.has(msg["id"])) {
            let object = this.objects.get(msg["id"]);
            object[this.snakeToCamel(msg["method"])](msg);
        }
    }
    peerChangedActiveListing(msg) {
        let player = this.objects.get(msg["persist_object_id"]);
        if (msg["public"] == true) {
            let player = this.objects.get(msg["persist_object_id"]);
        }
    }
    removePersistObject(msg) {
        if (this.objects.has(msg["id"])) {
            let object = this.objects.get(msg["id"]);
            object.parent.removeChild(object);
        }
    }
    onRoomChange(roomId) {
    }
    openPlayerTooltip(displayName, id, position) {
        let roomPosition = new kontra__WEBPACK_IMPORTED_MODULE_1__["Vector"](document.getElementById("game").offsetLeft, document.getElementById("game").offsetTop);
        let playerPositionCanvas = roomPosition.add(position).add(new kontra__WEBPACK_IMPORTED_MODULE_1__["Vector"](64, 0));
        const viewContainerRef = this.playerTooltipHost.viewContainerRef;
        viewContainerRef.clear();
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(_root_player_player_tooltip_player_tooltip_component__WEBPACK_IMPORTED_MODULE_6__["PlayerTooltipComponent"]);
        let componentRef;
        componentRef = viewContainerRef.createComponent(componentFactory);
        let instance = componentRef.instance;
        instance.onClose = this.closePlayerTooltip.bind(this);
        instance.displayName = displayName;
        instance.id = id;
        instance.position = playerPositionCanvas;
    }
    closePlayerTooltip() {
        console.log("working on it luv");
        const viewContainerRef = this.playerTooltipHost.viewContainerRef;
        viewContainerRef.clear();
    }
}
RoomComponent.ɵfac = function RoomComponent_Factory(t) { return new (t || RoomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_7__["SocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_room_change_service__WEBPACK_IMPORTED_MODULE_8__["RoomChangeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"])); };
RoomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoomComponent, selectors: [["app-room"]], viewQuery: function RoomComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_root_player_player_tooltip_directive__WEBPACK_IMPORTED_MODULE_5__["PlayerTooltipDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.playerTooltipHost = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 12, vars: 0, consts: [[1, "room"], ["id", "game", "width", "128", "height", "128"], ["id", "game-log", "role", "log"], ["appPlayerTooltip", ""]], template: function RoomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Move North");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Move South");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Move East");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Move West");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RoomComponent_ng_template_11_Template, 0, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_root_player_player_tooltip_directive__WEBPACK_IMPORTED_MODULE_5__["PlayerTooltipDirective"]], styles: ["canvas[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    border-radius: 2rem 2rem 0 0;\r\n}\r\n\r\n.room[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex: 1 0 0;\r\n    background-color: #011638;\r\n}\r\n\r\n@media only screen and (min-width: 600px) {\r\n    canvas[_ngcontent-%COMP%] {\r\n        border-radius: 2rem 0 0 0;\r\n        margin-left: 4ch;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9yb29tL3Jvb20uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSTtRQUNJLHlCQUF5QjtRQUN6QixnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcm9vbS9yb29tLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjYW52YXMge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbSAycmVtIDAgMDtcclxufVxyXG5cclxuLnJvb20ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4OiAxIDAgMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTE2Mzg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcclxuICAgIGNhbnZhcyB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnJlbSAwIDAgMDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNGNoO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-room',
                templateUrl: './room.component.html',
                styleUrls: ['./room.component.css']
            }]
    }], function () { return [{ type: src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_7__["SocketService"] }, { type: _room_change_service__WEBPACK_IMPORTED_MODULE_8__["RoomChangeService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }]; }, { playerTooltipHost: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_root_player_player_tooltip_directive__WEBPACK_IMPORTED_MODULE_5__["PlayerTooltipDirective"], { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/home/room/root/player/player-tooltip.directive.ts":
/*!*******************************************************************!*\
  !*** ./src/app/home/room/root/player/player-tooltip.directive.ts ***!
  \*******************************************************************/
/*! exports provided: PlayerTooltipDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerTooltipDirective", function() { return PlayerTooltipDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PlayerTooltipDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
PlayerTooltipDirective.ɵfac = function PlayerTooltipDirective_Factory(t) { return new (t || PlayerTooltipDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
PlayerTooltipDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PlayerTooltipDirective, selectors: [["", "appPlayerTooltip", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayerTooltipDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appPlayerTooltip]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/room/root/player/player-tooltip/player-tooltip.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/home/room/root/player/player-tooltip/player-tooltip.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PlayerTooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerTooltipComponent", function() { return PlayerTooltipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/handler */ "./src/app/handler.ts");
/* harmony import */ var src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/socket/socket.service */ "./src/app/socket/socket.service.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _activities_tasks_list_task_task_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../activities/tasks/list/task/task.component */ "./src/app/home/activities/tasks/list/task/task.component.ts");






class PlayerTooltipComponent extends src_app_handler__WEBPACK_IMPORTED_MODULE_1__["Handler"] {
    constructor(socketService) {
        super();
        this.activeTaskData = { "task_id": null, "title": "This user's active task is not currently available." };
        this.socketService = socketService;
    }
    ngOnInit() {
        const width = 300;
        const height = 150;
        const marginBottom = 18;
        this.subscription = this.socketService.channelReply.get("room").subscribe(msg => {
            if (msg["type"] == "request_active_task_for_account")
                this[this.snakeToCamel(msg["type"])](msg);
        });
        this.x = (this.position.x - (width / 2) - (32 / 2)).toString() + "px";
        this.y = (this.position.y - height - marginBottom).toString() + "px";
        this.socketService.sendMessage({ channel: "tasks", type: "request_active_task_for_account", "persist_object_id": this.id });
    }
    requestActiveTaskForAccount(msg) {
        this.activeTaskData = msg;
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
PlayerTooltipComponent.ɵfac = function PlayerTooltipComponent_Factory(t) { return new (t || PlayerTooltipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"])); };
PlayerTooltipComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayerTooltipComponent, selectors: [["app-player-tooltip"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 9, vars: 8, consts: [["cdkDrag", "", 1, "tooltip"], [1, "tooltip-header"], [1, "close-task", 3, "keydown.enter", "click"], [3, "isListing", "data"]], template: function PlayerTooltipComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function PlayerTooltipComponent_Template_a_keydown_enter_4_listener() { return ctx.onClose(); })("click", function PlayerTooltipComponent_Template_a_click_4_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-task", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", ctx.x)("top", ctx.y);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.displayName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.displayName, " is currently working on:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isListing", false)("data", ctx.activeTaskData);
    } }, directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDrag"], _activities_tasks_list_task_task_component__WEBPACK_IMPORTED_MODULE_4__["TaskComponent"]], styles: [".tooltip[_ngcontent-%COMP%] {\r\n    cursor: move;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    padding-top: 0.5em;\r\n    padding-bottom: 0.5em;\r\n    position: fixed;\r\n    overflow: auto;\r\n    width: 300px;\r\n    background-color: white;\r\n    padding: 1rem 2ch 1rem 2ch;\r\n    border-radius: 2em;\r\n    box-shadow: 0 1rem 1px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.tooltip-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n}\r\n\r\n.close-task[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    padding: 1ch;\r\n    border-radius: 1ch;\r\n    align-self: flex-end;\r\n}\r\n\r\n.close-task[_ngcontent-%COMP%]:hover, .close-task[_ngcontent-%COMP%]:focus {\r\n    background-color: lightgray;\r\n    cursor: pointer;\r\n}\r\n\r\napp-task-preview[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9yb29tL3Jvb3QvcGxheWVyL3BsYXllci10b29sdGlwL3BsYXllci10b29sdGlwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsY0FBYztJQUNkLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQiwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxPQUFPO0FBQ1giLCJmaWxlIjoic3JjL2FwcC9ob21lL3Jvb20vcm9vdC9wbGF5ZXIvcGxheWVyLXRvb2x0aXAvcGxheWVyLXRvb2x0aXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sdGlwIHtcclxuICAgIGN1cnNvcjogbW92ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMC41ZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMXJlbSAyY2ggMXJlbSAyY2g7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyZW07XHJcbiAgICBib3gtc2hhZG93OiAwIDFyZW0gMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG4udG9vbHRpcC1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuaDMge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uY2xvc2UtdGFzayB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmc6IDFjaDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFjaDtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uY2xvc2UtdGFzazpob3ZlciwgLmNsb3NlLXRhc2s6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5hcHAtdGFzay1wcmV2aWV3IHtcclxuICAgIGZsZXg6IDE7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayerTooltipComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-player-tooltip',
                templateUrl: './player-tooltip.component.html',
                styleUrls: ['./player-tooltip.component.css']
            }]
    }], function () { return [{ type: src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/room/root/player/player.ts":
/*!*************************************************!*\
  !*** ./src/app/home/room/root/player/player.ts ***!
  \*************************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var kontra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kontra */ "./node_modules/kontra/kontra.mjs");

const speed = 5;
class Player extends kontra__WEBPACK_IMPORTED_MODULE_0__["Sprite"].class {
    constructor(room, id, displayName, position) {
        let spriteSheet = Object(kontra__WEBPACK_IMPORTED_MODULE_0__["SpriteSheet"])({
            image: kontra__WEBPACK_IMPORTED_MODULE_0__["imageAssets"]["bear"],
            frameWidth: 128,
            frameHeight: 128,
            animations: {
                walkFR: {
                    frames: '0..47',
                    frameRate: 48
                },
                idleFR: {
                    frames: '48..195',
                    frameRate: 0
                },
                walkFL: {
                    frames: '49..96',
                    frameRate: 48
                },
                idleFL: {
                    frames: '97..195',
                    frameRate: 0
                },
                walkBR: {
                    frames: '98..145',
                    frameRate: 48
                },
                idleBR: {
                    frames: '146...195',
                    frameRate: 0
                },
                walkBL: {
                    frames: '147..194',
                    frameRate: 48
                },
                idleBL: {
                    frames: '195..200',
                    frameRate: 0
                }
            }
        });
        super({
            type: 'player',
            x: position.x,
            y: position.y,
            dx: 0,
            dy: 0,
            image: spriteSheet.frame[48],
            animations: spriteSheet.animations,
            children: [new kontra__WEBPACK_IMPORTED_MODULE_0__["Button"]({
                    // button properties
                    room: room,
                    persistObjectId: id,
                    padX: 64,
                    padY: 64,
                    color: "transparent",
                    onFocus: function () {
                        // read out to the screen reader
                    },
                    render: function () {
                        if (this.pressed) {
                            if (!(this.previouslyPressed == true)) {
                                this.previouslyPressed = true;
                                // open their little profile
                                // with current task etc.
                                console.log(displayName);
                                room.openPlayerTooltip(displayName, id, Object(kontra__WEBPACK_IMPORTED_MODULE_0__["Vector"])(Object(kontra__WEBPACK_IMPORTED_MODULE_0__["getWorldRect"])(this).x, Object(kontra__WEBPACK_IMPORTED_MODULE_0__["getWorldRect"])(this).y));
                            }
                        }
                        else {
                            if (this.previouslyPressed == true) {
                                this.previouslyPressed = false;
                                // close the tooltip specifically (must be THIS one--what about othr players?)
                            }
                        }
                        if (this.hovered) {
                            if (!(this.previouslyHovered == true)) {
                                this.previouslyHovered = true;
                                Object(kontra__WEBPACK_IMPORTED_MODULE_0__["getCanvas"])().style.cursor = "pointer";
                            }
                        }
                        else {
                            if (this.previouslyHovered == true) {
                                this.previouslyHovered = false;
                                Object(kontra__WEBPACK_IMPORTED_MODULE_0__["getCanvas"])().style.cursor = "initial";
                            }
                        }
                        if (this.focused) {
                            this.context.setLineDash([8, 10]);
                            this.context.lineWidth = 3;
                            this.context.strokeStyle = 'red';
                            this.context.strokeRect(0, 0, this.width, this.height);
                        }
                    }
                })]
        });
        this.room = room;
        this.playAnimation('idleFR');
        this.playingAnimation = 'idleFR';
        this.id = id;
        this.displayName = displayName;
        this.target = Object(kontra__WEBPACK_IMPORTED_MODULE_0__["Vector"])(this.x, this.y);
        Object(kontra__WEBPACK_IMPORTED_MODULE_0__["track"])(this);
        this.shadow = Object(kontra__WEBPACK_IMPORTED_MODULE_0__["Sprite"])({
            image: kontra__WEBPACK_IMPORTED_MODULE_0__["imageAssets"]["bear-shadow"],
            opacity: 0.5,
            y: 96
        });
    }
    update() {
        let distance = this.target.distance(Object(kontra__WEBPACK_IMPORTED_MODULE_0__["Vector"])(this.x, this.y));
        // also cancel movement upon collision! maybe upon collision, set target to position?
        if (distance > 4) {
            this.velocity = Object(kontra__WEBPACK_IMPORTED_MODULE_0__["Vector"])(this.direction.x * speed, this.direction.y * speed);
        }
        else if (!this.playingAnimation.includes('idle')) {
            this.playingAnimation = this.playingAnimation.replace('walk', 'idle');
            this.playAnimation(this.playingAnimation);
            this.reportLocation();
            this.target = Object(kontra__WEBPACK_IMPORTED_MODULE_0__["Vector"])(this.x, this.y);
            this.dx = 0;
            this.dy = 0;
        }
        super.update();
    }
    draw() {
        this.addChild(this.shadow);
        this.shadow.render();
        this.removeChild(this.shadow);
        super.draw();
        let nameTag = new kontra__WEBPACK_IMPORTED_MODULE_0__["Text"]({
            text: this.displayName,
            font: '16px Arial',
            color: 'black',
            width: 128,
            x: 0,
            y: 128,
            anchor: { x: 0, y: 0 },
            textAlign: 'center'
        });
        nameTag.render();
    }
    setTarget(msg) {
        this.target = Object(kontra__WEBPACK_IMPORTED_MODULE_0__["Vector"])(msg["position_x"] - 128 / 2, msg["position_y"] - 128 / 2);
        this.direction = Object(kontra__WEBPACK_IMPORTED_MODULE_0__["Vector"])(this.target.x - this.x, this.target.y - this.y).normalize();
        let left = this.direction.x <= 0;
        let right = !left;
        let backward = this.direction.y <= 0;
        let forward = !backward;
        if (forward && right) {
            this.playingAnimation = 'walkFR';
        }
        if (forward && left) {
            this.playingAnimation = 'walkFL';
        }
        if (backward && right) {
            this.playingAnimation = 'walkBR';
        }
        if (backward && left) {
            this.playingAnimation = 'walkBL';
        }
        this.playAnimation(this.playingAnimation);
    }
    reportLocation() {
        let log = document.getElementById("game-log");
        let message = document.createElement("p");
        message.innerHTML = this.displayName + " is now at " + Math.round(this.x) + " on the x-axis and " + Math.round(this.y) + " on the y-axis.";
        log.appendChild(message);
    }
}


/***/ }),

/***/ "./src/app/home/room/root/tile-map.ts":
/*!********************************************!*\
  !*** ./src/app/home/room/root/tile-map.ts ***!
  \********************************************/
/*! exports provided: TileMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileMap", function() { return TileMap; });
/* harmony import */ var kontra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kontra */ "./node_modules/kontra/kontra.mjs");

const epsilon = 0.0000000000001;
class TileMap extends kontra__WEBPACK_IMPORTED_MODULE_0__["GameObject"].class {
    constructor(width, height, layers, socketService) {
        super();
        let img = kontra__WEBPACK_IMPORTED_MODULE_0__["imageAssets"]['floor'];
        this.tileEngine = Object(kontra__WEBPACK_IMPORTED_MODULE_0__["TileEngine"])({
            // tile size
            tilewidth: 128,
            tileheight: 128,
            // map size in tiles
            width: width,
            height: height,
            // tileset object
            tilesets: [{
                    firstgid: 1,
                    image: img
                }],
            // layer object
            layers: layers,
        });
        this.socketService = socketService;
        Object(kontra__WEBPACK_IMPORTED_MODULE_0__["initPointer"])();
        this.moveButton = new kontra__WEBPACK_IMPORTED_MODULE_0__["Button"]({
            // button properties
            socketService: socketService,
            padX: width * this.tileEngine.tilewidth,
            padY: height * this.tileEngine.tileheight,
            color: "red",
            onFocus: function () {
                // read out to the screen reader
            },
            render: function () {
                if (this.pressed) {
                    this.disable();
                    this.willEnable = false;
                    this.pressed = false;
                    let pointer = Object(kontra__WEBPACK_IMPORTED_MODULE_0__["getPointer"])();
                    // this is pretty gross, but the server typechecks for floats
                    this.socketService.sendMessage({ channel: "room", type: "set_target", position_x: (pointer.x + epsilon), position_y: (pointer.y + epsilon) });
                }
                else if (this.disabled && !this.willEnable) {
                    console.log("unpressed");
                    this.willEnable = true;
                    new Promise(resolve => setTimeout(this.enable.bind(this), 300));
                }
            }
        });
        this.addChild(this.moveButton);
    }
    render() {
        this.tileEngine.render();
        this.moveButton.render();
        super.render();
    }
    addChild(object) {
        this.tileEngine.addObject(object);
        super.addChild(object);
        console.log(this.children);
    }
    removeChild(object) {
        this.tileEngine.removeObject(object);
        super.removeChild(object);
    }
}


/***/ }),

/***/ "./src/app/landing-page/landing-page/landing-page.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/landing-page/landing-page/landing-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function LandingPageComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function LandingPageComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Continue to Cowork");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LandingPageComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Have an alpha account? Sign in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LandingPageComponent {
    constructor() {
        this.loggedIn = sessionStorage.getItem("token") != null;
    }
    ngOnInit() { }
}
LandingPageComponent.ɵfac = function LandingPageComponent_Factory(t) { return new (t || LandingPageComponent)(); };
LandingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingPageComponent, selectors: [["app-landing-page"]], decls: 12, vars: 3, consts: [[1, "landing-page"], ["id", "options"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["elseBlock", ""], [1, "statement"], ["href", "/home"], ["href", "/auth/sign-in", "id", "entry-link"]], template: function LandingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LandingPageComponent_div_2_Template, 1, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LandingPageComponent_ng_template_3_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LandingPageComponent_ng_template_5_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cowork is coming soon.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "We can't wait, either.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn)("ngIfThen", _r1)("ngIfElse", _r3);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".landing-page[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-content: center;\r\n    justify-content: center;\r\n    height: 100%;\r\n    color: #f5f5fc;\r\n}\r\n\r\n.statement[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    margin: 0 25% 0 25%;\r\n    flex-direction: column;\r\n    align-content: center;\r\n    justify-content: center;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    color: #7B869A;\r\n    padding: 0 0.5em 0 0.5em;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n    color: #F5F5FC;\r\n}\r\n\r\n#options[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 1em;\r\n    top: 1em;\r\n    display: flex;\r\n    font-size: small;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    font-size: 4em;\r\n    margin: 0;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    font-size: 2em;\r\n}\r\n\r\n@media only screen and (max-width: 1280px) {\r\n    h1[_ngcontent-%COMP%] {\r\n        font-size: 2em;\r\n        margin: 0;\r\n    }\r\n    \r\n    h2[_ngcontent-%COMP%] {\r\n        font-size: 1em;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixRQUFRO0lBQ1IsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0k7UUFDSSxjQUFjO1FBQ2QsU0FBUztJQUNiOztJQUVBO1FBQ0ksY0FBYztJQUNsQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYW5kaW5nLXBhZ2Uge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgY29sb3I6ICNmNWY1ZmM7XHJcbn1cclxuXHJcbi5zdGF0ZW1lbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogMCAyNSUgMCAyNSU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgY29sb3I6ICM3Qjg2OUE7XHJcbiAgICBwYWRkaW5nOiAwIDAuNWVtIDAgMC41ZW07XHJcbn1cclxuXHJcbmE6aG92ZXIge1xyXG4gICAgY29sb3I6ICNGNUY1RkM7XHJcbn1cclxuXHJcbiNvcHRpb25zIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxZW07XHJcbiAgICB0b3A6IDFlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBmb250LXNpemU6IDRlbTtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuaDIge1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing-page',
                templateUrl: './landing-page.component.html',
                styleUrls: ['./landing-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/panel-header/panel-header.component.ts":
/*!********************************************************!*\
  !*** ./src/app/panel-header/panel-header.component.ts ***!
  \********************************************************/
/*! exports provided: PanelHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelHeaderComponent", function() { return PanelHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PanelHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
PanelHeaderComponent.ɵfac = function PanelHeaderComponent_Factory(t) { return new (t || PanelHeaderComponent)(); };
PanelHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PanelHeaderComponent, selectors: [["app-panel-header"]], inputs: { header: "header" }, decls: 3, vars: 1, consts: [[1, "header"]], template: function PanelHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.header);
    } }, styles: [".header[_ngcontent-%COMP%] {\r\n    display: block;\r\n    text-align: center;\r\n    padding: 0.2em 0 0.2em 0;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n    display: contents;\r\n    text-decoration: none;\r\n    color: #011638;\r\n    margin: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFuZWwtaGVhZGVyL3BhbmVsLWhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsU0FBUztBQUNiIiwiZmlsZSI6InNyYy9hcHAvcGFuZWwtaGVhZGVyL3BhbmVsLWhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAuMmVtIDAgMC4yZW0gMDtcclxufVxyXG5cclxuaDEge1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICMwMTE2Mzg7XHJcbiAgICBtYXJnaW46IDA7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PanelHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-panel-header',
                templateUrl: './panel-header.component.html',
                styleUrls: ['./panel-header.component.css']
            }]
    }], function () { return []; }, { header: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/socket/socket.service.ts":
/*!******************************************!*\
  !*** ./src/app/socket/socket.service.ts ***!
  \******************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_webSocket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/webSocket */ "./node_modules/rxjs/_esm2015/webSocket/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class SocketService {
    constructor(httpClient) {
        this.unsentMessages = [];
        this.httpClient = httpClient;
        this.replySource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.reply = this.replySource.asObservable();
        this.replySources = new Map();
        this.channelReply = new Map();
        this.establishWebsocket();
    }
    establishWebsocket() {
        this.httpClient.get('https://ws.cowork.ac', { responseType: 'text', withCredentials: true }).subscribe(data => {
            this.socket = Object(rxjs_webSocket__WEBPACK_IMPORTED_MODULE_1__["webSocket"])('wss://ws.cowork.ac:4433');
            this.socket.subscribe(msg => {
                if (msg["password_correct"] == true) {
                    sessionStorage.setItem("username", msg["username"]);
                    sessionStorage.setItem("display_name", msg["display_name"]);
                }
                this.setResponse(msg);
                // in the future, the below should be the only way to get messages.
                // classes should subscribe to individual channels.
                let channel = msg["channel"];
                if (this.channelIsRegistered(channel)) {
                    this.replySources.get(channel).next(msg);
                }
            }, err => console.log(err), () => console.log('complete'));
            while (this.unsentMessages.length > 0) {
                this.sendMessage(this.unsentMessages.pop());
            }
        });
    }
    setResponse(msg) {
        this.replySource.next(msg);
    }
    sendMessage(msg) {
        if (this.socket === undefined) {
            this.unsentMessages.push(msg);
        }
        else {
            this.socket.next(msg);
        }
    }
    channelIsRegistered(channel) {
        return this.replySources.has(channel);
    }
    register(channel) {
        this.replySources.set(channel, new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]());
        this.channelReply.set(channel, this.replySources.get(channel).asObservable());
    }
}
SocketService.ɵfac = function SocketService_Factory(t) { return new (t || SocketService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
SocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SocketService, factory: SocketService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/web-monetization/web-monetization.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/web-monetization/web-monetization.service.ts ***!
  \**************************************************************/
/*! exports provided: WebMonetizationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebMonetizationService", function() { return WebMonetizationService; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




class WebMonetizationService {
    constructor(document) {
        this.document = document;
        this.monetizationSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.monetization = this.monetizationSource.asObservable();
        if (this.webMonetizationExists()) {
            this.document.monetization.addEventListener('monetizationpending', (paymentPointer, requestId) => this.monetizationSource.next("pending"));
            this.document.monetization.addEventListener('monetizationstart', (paymentPointer, requestId) => this.monetizationSource.next("started"));
            this.document.monetization.addEventListener('monetizationstop', (paymentPointer, requestId) => this.monetizationSource.next("stopped"));
        }
    }
    webMonetizationExists() {
        return !!this.document && !!this.document.monetization;
    }
}
WebMonetizationService.ɵfac = function WebMonetizationService_Factory(t) { return new (t || WebMonetizationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); };
WebMonetizationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: WebMonetizationService, factory: WebMonetizationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WebMonetizationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\isaac\Documents\GitHub\cowork\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map