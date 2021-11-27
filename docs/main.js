"use strict";
(self["webpackChunkslumber_party"] = self["webpackChunkslumber_party"] || []).push([["main"],{

/***/ 3696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 4018);
/* harmony import */ var _landing_page_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing-page/landing-page/landing-page.component */ 4450);
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.component */ 7342);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);






const routes = [
    {
        path: '',
        component: _landing_page_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_1__.LandingPageComponent
    },
    {
        path: 'auth',
        component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_2__.AuthComponent
    },
    {
        path: 'auth/sign-in',
        component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_2__.AuthComponent
    },
    {
        path: 'auth/sign-up',
        component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_2__.AuthComponent
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
    },
    {
        path: 'home/room',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
    },
    {
        path: 'home/store',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
    },
    {
        path: 'home/stats',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
    },
    {
        path: 'home/timer',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
    },
    {
        path: 'home/chat',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
    },
    {
        path: 'home/tasks/:taskId',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
    },
    {
        path: 'home/tasks',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
    },
    {
        path: 'home/settings',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
    },
    {
        path: 'j/:roomId',
        component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_2__.AuthComponent,
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3252);


class AppComponent {
    constructor() {
        this.title = 'cowork';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 4750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/cdk/clipboard */ 7142);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3696);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 4018);
/* harmony import */ var _home_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/menu/menu.component */ 8522);
/* harmony import */ var _home_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/header/header.component */ 1790);
/* harmony import */ var _home_activity_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/activity-container.component */ 5464);
/* harmony import */ var _panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./panel-header/panel-header.component */ 9757);
/* harmony import */ var _home_activities_store_store_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/activities/store/store.component */ 566);
/* harmony import */ var _home_activities_chat_chat_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/activities/chat/chat.component */ 5864);
/* harmony import */ var _home_activities_timer_timer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/activities/timer/timer.component */ 5944);
/* harmony import */ var _home_activities_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/activities/tasks/tasks.component */ 6619);
/* harmony import */ var _landing_page_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./landing-page/landing-page/landing-page.component */ 4450);
/* harmony import */ var _home_room_room_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/room/room.component */ 5106);
/* harmony import */ var _auth_goals_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/goals/sign-in/sign-in.component */ 3513);
/* harmony import */ var _auth_goals_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth/goals/sign-up/sign-up.component */ 9251);
/* harmony import */ var _auth_goals_join_room_join_room_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth/goals/join-room/join-room.component */ 7484);
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auth/auth.component */ 7342);
/* harmony import */ var _auth_goal_container_goal_container_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth/goal-container/goal-container.component */ 1737);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _home_activities_settings_settings_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./home/activities/settings/settings.component */ 4125);
/* harmony import */ var _home_activities_settings_room_link_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./home/activities/settings/room-link.directive */ 9729);
/* harmony import */ var _home_activities_settings_room_link_room_link_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./home/activities/settings/room-link/room-link.component */ 1099);
/* harmony import */ var _home_activities_chat_chat_message_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./home/activities/chat/chat-message.directive */ 9280);
/* harmony import */ var _home_activities_chat_chat_message_chat_message_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./home/activities/chat/chat-message/chat-message.component */ 4162);
/* harmony import */ var _home_activities_settings_room_invitation_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./home/activities/settings/room-invitation.directive */ 5888);
/* harmony import */ var _home_activities_settings_room_invitation_room_invitation_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./home/activities/settings/room-invitation/room-invitation.component */ 4689);
/* harmony import */ var _home_activities_tasks_list_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./home/activities/tasks/list.directive */ 8369);
/* harmony import */ var _home_activities_tasks_list_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./home/activities/tasks/list/list.component */ 4004);
/* harmony import */ var _home_activities_tasks_list_task_task_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./home/activities/tasks/list/task/task.component */ 9075);
/* harmony import */ var _home_activities_tasks_list_task_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./home/activities/tasks/list/task.directive */ 9803);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 5798);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 8343);
/* harmony import */ var _home_activities_stats_stats_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./home/activities/stats/stats.component */ 8559);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/service-worker */ 7202);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../environments/environment */ 8260);
/* harmony import */ var _home_activities_tasks_task_editor_popup_task_editor_popup_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./home/activities/tasks/task-editor-popup/task-editor-popup.component */ 9574);
/* harmony import */ var _home_activities_tasks_task_editor_popup_directive__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./home/activities/tasks/task-editor-popup.directive */ 9054);
/* harmony import */ var _home_room_root_player_player_tooltip_directive__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./home/room/root/player/player-tooltip.directive */ 1740);
/* harmony import */ var _home_room_root_player_player_tooltip_player_tooltip_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./home/room/root/player/player-tooltip/player-tooltip.component */ 6482);
/* harmony import */ var _home_activities_stats_not_monetized_not_monetized_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./home/activities/stats/not-monetized/not-monetized.component */ 7162);
/* harmony import */ var _home_activities_stats_loading_monetization_loading_monetization_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./home/activities/stats/loading-monetization/loading-monetization.component */ 7316);
/* harmony import */ var _home_activities_stats_monetized_monetized_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./home/activities/stats/monetized/monetized.component */ 7755);
/* harmony import */ var _home_activities_tasks_list_filter_popup_filter_popup_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./home/activities/tasks/list/filter-popup/filter-popup.component */ 4015);
/* harmony import */ var _home_activities_tasks_list_filter_popup_directive__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./home/activities/tasks/list/filter-popup.directive */ 1998);
/* harmony import */ var _home_activities_tasks_list_filter_popup_tag_tag_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./home/activities/tasks/list/filter-popup/tag/tag.component */ 5922);
/* harmony import */ var _home_activities_tasks_list_filter_popup_tag_directive__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./home/activities/tasks/list/filter-popup/tag.directive */ 6521);
/* harmony import */ var _home_activities_tasks_task_editor_popup_tags_popup_tags_popup_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./home/activities/tasks/task-editor-popup/tags-popup/tags-popup.component */ 6044);
/* harmony import */ var _home_activities_tasks_task_editor_popup_tags_popup_directive__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./home/activities/tasks/task-editor-popup/tags-popup.directive */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/core */ 4001);





















































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_44__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_44__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_45__.BrowserModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_46__.FormsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_47__.HttpClientModule,
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_48__.DragDropModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_49__.FontAwesomeModule,
            _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_50__.ClipboardModule,
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_51__.ServiceWorkerModule.register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_30__.environment.production })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_44__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent,
        _home_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__.MenuComponent,
        _home_header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent,
        _home_activity_container_component__WEBPACK_IMPORTED_MODULE_5__.ActivityContainerComponent,
        _panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_6__.PanelHeaderComponent,
        _home_activities_store_store_component__WEBPACK_IMPORTED_MODULE_7__.StoreComponent,
        _home_activities_chat_chat_component__WEBPACK_IMPORTED_MODULE_8__.ChatComponent,
        _home_activities_timer_timer_component__WEBPACK_IMPORTED_MODULE_9__.TimerComponent,
        _home_activities_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_10__.TasksComponent,
        _home_activities_stats_stats_component__WEBPACK_IMPORTED_MODULE_29__.StatsComponent,
        _landing_page_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_11__.LandingPageComponent,
        _home_room_room_component__WEBPACK_IMPORTED_MODULE_12__.RoomComponent,
        _auth_goal_container_goal_container_component__WEBPACK_IMPORTED_MODULE_17__.GoalContainerComponent,
        _auth_goals_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_13__.SignInComponent,
        _auth_goals_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_14__.SignUpComponent,
        _auth_auth_component__WEBPACK_IMPORTED_MODULE_16__.AuthComponent,
        _home_activities_settings_settings_component__WEBPACK_IMPORTED_MODULE_18__.SettingsComponent,
        _home_activities_settings_room_link_directive__WEBPACK_IMPORTED_MODULE_19__.RoomLinkDirective,
        _home_activities_settings_room_link_room_link_component__WEBPACK_IMPORTED_MODULE_20__.RoomLinkComponent,
        _home_activities_chat_chat_message_directive__WEBPACK_IMPORTED_MODULE_21__.ChatMessageDirective,
        _home_activities_chat_chat_message_chat_message_component__WEBPACK_IMPORTED_MODULE_22__.ChatMessageComponent,
        _home_activities_settings_room_invitation_directive__WEBPACK_IMPORTED_MODULE_23__.RoomInvitationDirective,
        _home_activities_settings_room_invitation_room_invitation_component__WEBPACK_IMPORTED_MODULE_24__.RoomInvitationComponent,
        _auth_goals_join_room_join_room_component__WEBPACK_IMPORTED_MODULE_15__.JoinRoomComponent,
        _home_activities_tasks_list_directive__WEBPACK_IMPORTED_MODULE_25__.ListDirective,
        _home_activities_tasks_list_list_component__WEBPACK_IMPORTED_MODULE_26__.ListComponent,
        _home_activities_tasks_list_task_task_component__WEBPACK_IMPORTED_MODULE_27__.TaskComponent,
        _home_activities_tasks_list_task_directive__WEBPACK_IMPORTED_MODULE_28__.TaskDirective,
        _home_activities_tasks_task_editor_popup_task_editor_popup_component__WEBPACK_IMPORTED_MODULE_31__.TaskEditorPopupComponent,
        _home_activities_tasks_task_editor_popup_directive__WEBPACK_IMPORTED_MODULE_32__.TaskEditorPopupDirective,
        _home_room_root_player_player_tooltip_player_tooltip_component__WEBPACK_IMPORTED_MODULE_34__.PlayerTooltipComponent,
        _home_room_root_player_player_tooltip_directive__WEBPACK_IMPORTED_MODULE_33__.PlayerTooltipDirective,
        _home_activities_stats_not_monetized_not_monetized_component__WEBPACK_IMPORTED_MODULE_35__.NotMonetizedComponent,
        _home_activities_stats_loading_monetization_loading_monetization_component__WEBPACK_IMPORTED_MODULE_36__.LoadingMonetizationComponent,
        _home_activities_stats_monetized_monetized_component__WEBPACK_IMPORTED_MODULE_37__.MonetizedComponent,
        _home_activities_tasks_list_filter_popup_filter_popup_component__WEBPACK_IMPORTED_MODULE_38__.FilterPopupComponent,
        _home_activities_tasks_list_filter_popup_directive__WEBPACK_IMPORTED_MODULE_39__.FilterPopupDirective,
        _home_activities_tasks_list_filter_popup_tag_tag_component__WEBPACK_IMPORTED_MODULE_40__.TagComponent,
        _home_activities_tasks_list_filter_popup_tag_directive__WEBPACK_IMPORTED_MODULE_41__.TagDirective,
        _home_activities_tasks_task_editor_popup_tags_popup_tags_popup_component__WEBPACK_IMPORTED_MODULE_42__.TagsPopupComponent,
        _home_activities_tasks_task_editor_popup_tags_popup_directive__WEBPACK_IMPORTED_MODULE_43__.TagsPopupDirective], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_45__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_46__.FormsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_47__.HttpClientModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_48__.DragDropModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_49__.FontAwesomeModule,
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_50__.ClipboardModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_51__.ServiceWorkerModule] }); })();


/***/ }),

/***/ 7342:
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthComponent": () => (/* binding */ AuthComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _goal_container_goal_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goal-container/goal-container.component */ 1737);


class AuthComponent {
    constructor() { }
    ngOnInit() { }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(); };
AuthComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["app-auth"]], decls: 2, vars: 0, consts: [[1, "goal-container-parent"]], template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-goal-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_goal_container_goal_container_component__WEBPACK_IMPORTED_MODULE_0__.GoalContainerComponent], styles: [".goal-container-parent[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    app-goal-container[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        height: 100%;\r\n    }\r\n    \r\n    .goal-container-parent[_ngcontent-%COMP%] {\r\n        align-items: flex-start;\r\n        justify-content: flex-start;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsU0FBUztJQUtULGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLHVCQUF1QjtRQUN2QiwyQkFBMkI7SUFDL0I7QUFDSiIsImZpbGUiOiJhdXRoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ29hbC1jb250YWluZXItcGFyZW50IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICBhcHAtZ29hbC1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmdvYWwtY29udGFpbmVyLXBhcmVudCB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ 1737:
/*!*****************************************************************!*\
  !*** ./src/app/auth/goal-container/goal-container.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoalContainerComponent": () => (/* binding */ GoalContainerComponent)
/* harmony export */ });
/* harmony import */ var _goals_goals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../goals/goals */ 8186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _goals_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../goals/sign-in/sign-in.component */ 3513);
/* harmony import */ var _goals_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../goals/sign-up/sign-up.component */ 9251);
/* harmony import */ var _goals_join_room_join_room_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../goals/join-room/join-room.component */ 7484);






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
        if (_goals_goals__WEBPACK_IMPORTED_MODULE_0__.goals.includes(goal)) {
            let newVisibleGoal = document.getElementById(goal);
            newVisibleGoal.classList.add("visible");
        }
    }
}
GoalContainerComponent.ɵfac = function GoalContainerComponent_Factory(t) { return new (t || GoalContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.Location)); };
GoalContainerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: GoalContainerComponent, selectors: [["app-goal-container"]], decls: 7, vars: 0, consts: [[1, "header"], [1, "goals"], ["id", "sign-in", 1, "goal"], ["id", "sign-up", 1, "goal"], ["id", "join-room", 1, "goal"]], template: function GoalContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\uD83D\uDCA4\uD83C\uDF89 Slumber Party");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "app-sign-in", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "app-sign-up", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "app-join-room", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } }, directives: [_goals_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_1__.SignInComponent, _goals_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_2__.SignUpComponent, _goals_join_room_join_room_component__WEBPACK_IMPORTED_MODULE_3__.JoinRoomComponent], styles: [".goals[_ngcontent-%COMP%] {\r\n    min-width: 80ch;\r\n    min-height: 16em;\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex: 1 0 0;\r\n}\r\n\r\n.goal[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.visible[_ngcontent-%COMP%] {\r\n    flex: 1 0 0;\r\n    background-color: #F5F5FC;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.header[_ngcontent-%COMP%] {\r\n    display: block;\r\n    text-align: center;\r\n    padding: 0.2em 0 0.2em 0;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    display: contents;\r\n    text-decoration: none;\r\n    color: #F5F5FC;\r\n    margin: 0;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .goals[_ngcontent-%COMP%] {\r\n        min-width: 0;\r\n        min-height: 0;\r\n        height: 100%;\r\n        width: 100%;\r\n    }\r\n\r\n    h1[_ngcontent-%COMP%] {\r\n        font-size: 1.5em;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdvYWwtY29udGFpbmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsU0FBUztBQUNiOztBQUVBO0lBQ0k7UUFDSSxZQUFZO1FBQ1osYUFBYTtRQUNiLFlBQVk7UUFDWixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJnb2FsLWNvbnRhaW5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdvYWxzIHtcclxuICAgIG1pbi13aWR0aDogODBjaDtcclxuICAgIG1pbi1oZWlnaHQ6IDE2ZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXg6IDEgMCAwO1xyXG59XHJcblxyXG4uZ29hbCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4udmlzaWJsZSB7XHJcbiAgICBmbGV4OiAxIDAgMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RkM7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAuMmVtIDAgMC4yZW0gMDtcclxufVxyXG5cclxuaDEge1xyXG4gICAgZGlzcGxheTogY29udGVudHM7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogI0Y1RjVGQztcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmdvYWxzIHtcclxuICAgICAgICBtaW4td2lkdGg6IDA7XHJcbiAgICAgICAgbWluLWhlaWdodDogMDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 8186:
/*!*************************************!*\
  !*** ./src/app/auth/goals/goals.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "goals": () => (/* binding */ goals)
/* harmony export */ });
const goals = ['sign-in', 'sign-up', 'join-room'];


/***/ }),

/***/ 7484:
/*!*************************************************************!*\
  !*** ./src/app/auth/goals/join-room/join-room.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JoinRoomComponent": () => (/* binding */ JoinRoomComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 4815);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _socket_socket_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../socket/socket.service */ 841);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../panel-header/panel-header.component */ 9757);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 8343);








class JoinRoomComponent {
    constructor(socketService, route, location) {
        this.header = "Join the Party!";
        this.faUsers = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faUsers;
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
JoinRoomComponent.ɵfac = function JoinRoomComponent_Factory(t) { return new (t || JoinRoomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_socket_socket_service__WEBPACK_IMPORTED_MODULE_0__.SocketService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.Location)); };
JoinRoomComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: JoinRoomComponent, selectors: [["app-join-room"]], decls: 15, vars: 4, consts: [[3, "header"], [1, "hidden-form"], [1, "join-form-element"], [1, "users"], [3, "icon"], [3, "click"], [1, "join-form-element", "hidden-form"]], template: function JoinRoomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-panel-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function JoinRoomComponent_Template_button_click_6_listener() { return ctx.joinRoom(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "That join link's not valid!");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function JoinRoomComponent_Template_button_click_12_listener() { return ctx.goHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Go home");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("header", ctx.header);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.faUsers);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.memberCount, " members in this room");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Join ", ctx.roomTitle, "");
    } }, directives: [_panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_1__.PanelHeaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconComponent], styles: ["form[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex: 1;\r\n    flex-direction: column;\r\n    padding: 0 4em 0 4em;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    color: #011638;\r\n    cursor: pointer;\r\n    text-decoration: underline;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n    font-size: 1.5em;\r\n}\r\n\r\n.join-form-element[_ngcontent-%COMP%] {\r\n    align-self: center;\r\n    text-align: center;\r\n    flex: 1;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    display: flex;\r\n    margin: 0.5em 0 0.5em 0;\r\n}\r\n\r\n.users[_ngcontent-%COMP%] {\r\n    font-size: 1.5em;\r\n    margin-bottom: 0.25em;\r\n    align-self: flex-end;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    font-size: 1.5em;\r\n    margin-top: 0.25em;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    margin: 0.2em 0 0.2em 0;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n}\r\n\r\n.hidden-form[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    form[_ngcontent-%COMP%] {\r\n        padding: 0 0.5em 0 0.5em;\r\n    }\r\n\r\n    input[_ngcontent-%COMP%] {\r\n        font-size: 1em;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvaW4tcm9vbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLE9BQU87SUFDUCxzQkFBc0I7SUFDdEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0k7UUFDSSx3QkFBd0I7SUFDNUI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCO0FBQ0oiLCJmaWxlIjoiam9pbi1yb29tLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDAgNGVtIDAgNGVtO1xyXG59XHJcblxyXG5hIHtcclxuICAgIGNvbG9yOiAjMDExNjM4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxuXHJcbi5qb2luLWZvcm0tZWxlbWVudCB7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogMC41ZW0gMCAwLjVlbSAwO1xyXG59XHJcblxyXG4udXNlcnMge1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuMjVlbTtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIG1hcmdpbi10b3A6IDAuMjVlbTtcclxufVxyXG5cclxuaDIge1xyXG4gICAgbWFyZ2luOiAwLjJlbSAwIDAuMmVtIDA7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uaGlkZGVuLWZvcm0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgZm9ybSB7XHJcbiAgICAgICAgcGFkZGluZzogMCAwLjVlbSAwIDAuNWVtO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0IHtcclxuICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 3513:
/*!*********************************************************!*\
  !*** ./src/app/auth/goals/sign-in/sign-in.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInComponent": () => (/* binding */ SignInComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _socket_socket_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../socket/socket.service */ 841);
/* harmony import */ var _panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../panel-header/panel-header.component */ 9757);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8346);





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
SignInComponent.ɵfac = function SignInComponent_Factory(t) { return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_socket_socket_service__WEBPACK_IMPORTED_MODULE_0__.SocketService)); };
SignInComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SignInComponent, selectors: [["app-sign-in"]], decls: 19, vars: 1, consts: [[3, "header"], ["novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-element"], ["type", "text", "placeholder", "Email address", "autocomplete", "email", "name", "username", "ngModel", "", "required", ""], ["type", "password", "placeholder", "Password", "autocomplete", "current-password", "name", "password", "ngModel", "", "required", ""], ["id", "error", 1, "form-element"], ["type", "submit"], [1, "password"], [3, "click"]], template: function SignInComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-panel-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function SignInComponent_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SignInComponent_Template_a_click_14_listener() { return ctx.navigate("/auth/sign-up"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "New here? Create an account");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SignInComponent_Template_a_click_17_listener() { return ctx.navigate("/auth/reset-password"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Reset your password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("header", ctx.header);
    } }, directives: [_panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_1__.PanelHeaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator], styles: ["form[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-content: center;\r\n    padding: 0 4em 0 4em;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    color: #011638;\r\n    cursor: pointer;\r\n    text-decoration: underline;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n    font-size: 1.5em;\r\n}\r\n\r\n.form-element[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 0.5em 0 0.5em 0;\r\n    text-align: center;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    margin: 0.2em 0 0.2em 0;\r\n}\r\n\r\n#error[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n#visible-error[_ngcontent-%COMP%] {\r\n    color: #D64045;\r\n    display: inline;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    form[_ngcontent-%COMP%] {\r\n        padding: 0 0.5em 0 0.5em;\r\n    }\r\n\r\n    input[_ngcontent-%COMP%] {\r\n        font-size: 1em;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24taW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0k7UUFDSSx3QkFBd0I7SUFDNUI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCO0FBQ0oiLCJmaWxlIjoic2lnbi1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAgNGVtIDAgNGVtO1xyXG59XHJcblxyXG5hIHtcclxuICAgIGNvbG9yOiAjMDExNjM4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxuXHJcbi5mb3JtLWVsZW1lbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW46IDAuNWVtIDAgMC41ZW0gMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaDIge1xyXG4gICAgbWFyZ2luOiAwLjJlbSAwIDAuMmVtIDA7XHJcbn1cclxuXHJcbiNlcnJvciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4jdmlzaWJsZS1lcnJvciB7XHJcbiAgICBjb2xvcjogI0Q2NDA0NTtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgZm9ybSB7XHJcbiAgICAgICAgcGFkZGluZzogMCAwLjVlbSAwIDAuNWVtO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0IHtcclxuICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 9251:
/*!*********************************************************!*\
  !*** ./src/app/auth/goals/sign-up/sign-up.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpComponent": () => (/* binding */ SignUpComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _socket_socket_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../socket/socket.service */ 841);
/* harmony import */ var _panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../panel-header/panel-header.component */ 9757);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8346);





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
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_socket_socket_service__WEBPACK_IMPORTED_MODULE_0__.SocketService)); };
SignUpComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SignUpComponent, selectors: [["app-sign-up"]], decls: 16, vars: 1, consts: [[3, "header"], ["novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-element"], ["type", "text", "placeholder", "Email address", "autocomplete", "email", "name", "username", "ngModel", "", "required", ""], ["type", "password", "placeholder", "Password", "autocomplete", "new-password", "name", "password", "ngModel", "", "required", ""], ["id", "error", 1, "form-element"], ["type", "submit"], [1, "password"], [3, "click"]], template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-panel-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function SignUpComponent_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SignUpComponent_Template_a_click_14_listener() { return ctx.navigate("/auth/sign-in"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Already have an account? Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("header", ctx.header);
    } }, directives: [_panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_1__.PanelHeaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator], styles: ["form[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-content: center;\r\n    padding: 0 4em 0 4em;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    color: #011638;\r\n    cursor: pointer;\r\n    text-decoration: underline;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n    font-size: 1.5em;\r\n}\r\n\r\n.form-element[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 0.5em 0 0.5em 0;\r\n    text-align: center;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    margin: 0.2em 0 0.2em 0;\r\n}\r\n\r\n#error[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n#visible-error[_ngcontent-%COMP%] {\r\n    color: #D64045;\r\n    display: inline;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    form[_ngcontent-%COMP%] {\r\n        padding: 0 0.5em 0 0.5em;\r\n    }\r\n\r\n    input[_ngcontent-%COMP%] {\r\n        font-size: 1em;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24tdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0k7UUFDSSx3QkFBd0I7SUFDNUI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCO0FBQ0oiLCJmaWxlIjoic2lnbi11cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAgNGVtIDAgNGVtO1xyXG59XHJcblxyXG5hIHtcclxuICAgIGNvbG9yOiAjMDExNjM4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxuXHJcbi5mb3JtLWVsZW1lbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW46IDAuNWVtIDAgMC41ZW0gMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaDIge1xyXG4gICAgbWFyZ2luOiAwLjJlbSAwIDAuMmVtIDA7XHJcbn1cclxuXHJcbiNlcnJvciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4jdmlzaWJsZS1lcnJvciB7XHJcbiAgICBjb2xvcjogI0Q2NDA0NTtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgZm9ybSB7XHJcbiAgICAgICAgcGFkZGluZzogMCAwLjVlbSAwIDAuNWVtO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0IHtcclxuICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 8133:
/*!****************************!*\
  !*** ./src/app/handler.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Handler": () => (/* binding */ Handler)
/* harmony export */ });
// Handlers have helper methods that allow them to communicate with the server
// (initially, by converting the server's snake_case to camelCase)
class Handler {
    snakeToCamel(s) {
        return s.replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace('-', '').replace('_', ''));
    }
}


/***/ }),

/***/ 8898:
/*!***********************************************!*\
  !*** ./src/app/home/activities/activities.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activities": () => (/* binding */ activities)
/* harmony export */ });
const activities = ['room', 'store', 'chat', 'timer', 'stats', 'tasks', 'settings'];


/***/ }),

/***/ 9280:
/*!****************************************************************!*\
  !*** ./src/app/home/activities/chat/chat-message.directive.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatMessageDirective": () => (/* binding */ ChatMessageDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class ChatMessageDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
ChatMessageDirective.ɵfac = function ChatMessageDirective_Factory(t) { return new (t || ChatMessageDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef)); };
ChatMessageDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ChatMessageDirective, selectors: [["", "appChatMessage", ""]] });


/***/ }),

/***/ 4162:
/*!*****************************************************************************!*\
  !*** ./src/app/home/activities/chat/chat-message/chat-message.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatMessageComponent": () => (/* binding */ ChatMessageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/socket/socket.service */ 841);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8267);



class ChatMessageComponent {
    constructor(socketService) {
        this.socketService = socketService;
    }
    ngOnInit() {
    }
}
ChatMessageComponent.ɵfac = function ChatMessageComponent_Factory(t) { return new (t || ChatMessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_0__.SocketService)); };
ChatMessageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChatMessageComponent, selectors: [["app-chat-message"]], inputs: { data: "data" }, decls: 10, vars: 6, consts: [[1, "chat-message"], [1, "item"], [1, "meta"], [1, "author"], ["value", "MM/dd/yyyy h:mm a", 1, "sent-date"], [1, "chat-contents"]], template: function ChatMessageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.display_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](7, 3, ctx.data.sent_date, "MM/dd/yyyy h:mm a"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.contents);
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe], styles: [".chat-message[_ngcontent-%COMP%]:hover {\r\n    background-color: #dfdfdf;\r\n}\r\n\r\n.chat-message[_ngcontent-%COMP%] {\r\n    padding: 0.5em 2ch 0.5em 2ch;\r\n}\r\n\r\n.author[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n}\r\n\r\n.meta[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.sent-date[_ngcontent-%COMP%] {\r\n    padding-top: 0.25em;\r\n    font-size: smaller;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    margin: 0 0 0 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQtbWVzc2FnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6ImNoYXQtbWVzc2FnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXQtbWVzc2FnZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZkZmRmO1xyXG59XHJcblxyXG4uY2hhdC1tZXNzYWdlIHtcclxuICAgIHBhZGRpbmc6IDAuNWVtIDJjaCAwLjVlbSAyY2g7XHJcbn1cclxuXHJcbi5hdXRob3Ige1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5tZXRhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5zZW50LWRhdGUge1xyXG4gICAgcGFkZGluZy10b3A6IDAuMjVlbTtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxufVxyXG5cclxucCB7XHJcbiAgICBtYXJnaW46IDAgMCAwIDA7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 5864:
/*!********************************************************!*\
  !*** ./src/app/home/activities/chat/chat.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatComponent": () => (/* binding */ ChatComponent)
/* harmony export */ });
/* harmony import */ var _chat_message_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-message.directive */ 9280);
/* harmony import */ var _chat_message_chat_message_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-message/chat-message.component */ 4162);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/socket/socket.service */ 841);
/* harmony import */ var _room_change_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../room-change.service */ 2164);
/* harmony import */ var _panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../panel-header/panel-header.component */ 9757);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8346);








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
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(_chat_message_chat_message_component__WEBPACK_IMPORTED_MODULE_1__.ChatMessageComponent);
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
ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_2__.SocketService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_room_change_service__WEBPACK_IMPORTED_MODULE_3__.RoomChangeService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ComponentFactoryResolver)); };
ChatComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["app-chat"]], viewQuery: function ChatComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_chat_message_directive__WEBPACK_IMPORTED_MODULE_0__.ChatMessageDirective, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.chatMessageHost = _t.first);
    } }, decls: 11, vars: 1, consts: [[1, "scroll-container"], [3, "header"], ["id", "list", "role", "log", 3, "scroll"], ["appChatMessage", ""], ["id", "retrieving"], ["id", "load-more", 3, "click"], ["id", "retrieving-now", 1, "hidden"], ["id", "chat-box", "novalidate", ""], ["id", "chat-field", "tabindex", "0", "placeholder", "Message the room...", 1, "contents", 3, "keydown.enter"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-panel-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("scroll", function ChatComponent_Template_div_scroll_2_listener() { return ctx.onListScroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ChatComponent_ng_template_3_Template, 0, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ChatComponent_Template_a_click_5_listener() { return ctx.onListScroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Load more messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Retrieving more messages...");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keydown.enter", function ChatComponent_Template_textarea_keydown_enter_10_listener($event) { return ctx.onSendChat($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("header", ctx.header);
    } }, directives: [_panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_4__.PanelHeaderComponent, _chat_message_directive__WEBPACK_IMPORTED_MODULE_0__.ChatMessageDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm], styles: [".scroll-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    overflow: auto;\r\n    flex: 1;\r\n}\r\n\r\n#list[_ngcontent-%COMP%] {\r\n    overflow-y: auto;\r\n    display: flex;\r\n    flex-direction: column-reverse;\r\n    flex: 1;\r\n}\r\n\r\n#retrieving[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin: 0 0 0 0;\r\n    padding: 1em 0 1em 0;\r\n}\r\n\r\n#load-more[_ngcontent-%COMP%] {\r\n    color: #011638;\r\n    cursor: pointer;\r\n    text-decoration: underline;\r\n}\r\n\r\n.margin[_ngcontent-%COMP%] {\r\n    margin: 0.2em 2ch 0.2em 2ch;\r\n}\r\n\r\nform[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.form-label[_ngcontent-%COMP%] {\r\n    margin: 0 4ch 0 2ch;\r\n}\r\n\r\n.hidden[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n#chat-box[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    padding: 1em 0 1em 0;\r\n}\r\n\r\n#chat-field[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    padding: 0.2em 1ch 0.2em 1ch;\r\n    margin: 0 2ch 0 2ch;\r\n    word-wrap: break-word;\r\n    overflow-wrap: break-word;\r\n    background-color: #dfdfdf;\r\n    box-sizing: border-box;\r\n    border: none !important;\r\n    box-shadow: none !important;\r\n    outline: none !important;\r\n    resize: vertical;\r\n    border-radius: 8px;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .list[_ngcontent-%COMP%] {\r\n        height: 70vh;\r\n    }\r\n\r\n    #chat[_ngcontent-%COMP%] {\r\n        width: 70vh;\r\n        max-width: 70vw;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLE9BQU87QUFDWDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLE9BQU87QUFDWDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxlQUFlO0lBQ25CO0FBQ0oiLCJmaWxlIjoiY2hhdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcm9sbC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGZsZXg6IDE7XHJcbn1cclxuXHJcbiNsaXN0IHtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gICAgZmxleDogMTtcclxufVxyXG5cclxuI3JldHJpZXZpbmcge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwIDAgMCAwO1xyXG4gICAgcGFkZGluZzogMWVtIDAgMWVtIDA7XHJcbn1cclxuXHJcbiNsb2FkLW1vcmUge1xyXG4gICAgY29sb3I6ICMwMTE2Mzg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLm1hcmdpbiB7XHJcbiAgICBtYXJnaW46IDAuMmVtIDJjaCAwLjJlbSAyY2g7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwge1xyXG4gICAgbWFyZ2luOiAwIDRjaCAwIDJjaDtcclxufVxyXG5cclxuLmhpZGRlbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4jY2hhdC1ib3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDFlbSAwIDFlbSAwO1xyXG59XHJcblxyXG4jY2hhdC1maWVsZCB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgcGFkZGluZzogMC4yZW0gMWNoIDAuMmVtIDFjaDtcclxuICAgIG1hcmdpbjogMCAyY2ggMCAyY2g7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZGZkZjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIHJlc2l6ZTogdmVydGljYWw7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5saXN0IHtcclxuICAgICAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICB9XHJcblxyXG4gICAgI2NoYXQge1xyXG4gICAgICAgIHdpZHRoOiA3MHZoO1xyXG4gICAgICAgIG1heC13aWR0aDogNzB2dztcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 5888:
/*!***********************************************************************!*\
  !*** ./src/app/home/activities/settings/room-invitation.directive.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoomInvitationDirective": () => (/* binding */ RoomInvitationDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class RoomInvitationDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
RoomInvitationDirective.ɵfac = function RoomInvitationDirective_Factory(t) { return new (t || RoomInvitationDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef)); };
RoomInvitationDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: RoomInvitationDirective, selectors: [["", "appRoomInvitation", ""]] });


/***/ }),

/***/ 4689:
/*!***************************************************************************************!*\
  !*** ./src/app/home/activities/settings/room-invitation/room-invitation.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoomInvitationComponent": () => (/* binding */ RoomInvitationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/socket/socket.service */ 841);


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
RoomInvitationComponent.ɵfac = function RoomInvitationComponent_Factory(t) { return new (t || RoomInvitationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_0__.SocketService)); };
RoomInvitationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RoomInvitationComponent, selectors: [["app-room-invitation"]], decls: 10, vars: 1, consts: [[1, "invitation"], [1, "item", "form"], [1, "room-label"], [3, "click"], [1, "button-label"]], template: function RoomInvitationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RoomInvitationComponent_Template_button_click_4_listener() { return ctx.declineInvitation(ctx.data.invitation_id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Decline");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RoomInvitationComponent_Template_button_click_7_listener() { return ctx.joinRoom(ctx.data.room_id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Accept");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.title);
    } }, styles: [".invitation[_ngcontent-%COMP%]:hover {\r\n    background-color: #D5D5DB;\r\n}\r\n\r\n.item[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    max-width: 10ch;\r\n    flex: 1 0 0;\r\n    margin-right: 2ch;\r\n}\r\n\r\n.button-label[_ngcontent-%COMP%] {\r\n    padding: 0.2em 0 0.2em 0;\r\n}\r\n\r\n.room-label[_ngcontent-%COMP%] {\r\n    flex: 1 0 0;\r\n    margin-left: 2ch;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvb20taW52aXRhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJyb29tLWludml0YXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnZpdGF0aW9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNENUQ1REI7XHJcbn1cclxuXHJcbi5pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBtYXgtd2lkdGg6IDEwY2g7XHJcbiAgICBmbGV4OiAxIDAgMDtcclxuICAgIG1hcmdpbi1yaWdodDogMmNoO1xyXG59XHJcblxyXG4uYnV0dG9uLWxhYmVsIHtcclxuICAgIHBhZGRpbmc6IDAuMmVtIDAgMC4yZW0gMDtcclxufVxyXG5cclxuLnJvb20tbGFiZWwge1xyXG4gICAgZmxleDogMSAwIDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMmNoO1xyXG59Il19 */"] });


/***/ }),

/***/ 9729:
/*!*****************************************************************!*\
  !*** ./src/app/home/activities/settings/room-link.directive.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoomLinkDirective": () => (/* binding */ RoomLinkDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class RoomLinkDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
RoomLinkDirective.ɵfac = function RoomLinkDirective_Factory(t) { return new (t || RoomLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef)); };
RoomLinkDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: RoomLinkDirective, selectors: [["", "appRoomLink", ""]] });


/***/ }),

/***/ 1099:
/*!***************************************************************************!*\
  !*** ./src/app/home/activities/settings/room-link/room-link.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoomLinkComponent": () => (/* binding */ RoomLinkComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/socket/socket.service */ 841);


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
RoomLinkComponent.ɵfac = function RoomLinkComponent_Factory(t) { return new (t || RoomLinkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_0__.SocketService)); };
RoomLinkComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RoomLinkComponent, selectors: [["app-room-link"]], inputs: { data: "data" }, decls: 6, vars: 1, consts: [[1, "room-link", "form"], [1, "item"], [1, "room-label"], [3, "click"]], template: function RoomLinkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RoomLinkComponent_Template_button_click_4_listener() { return ctx.enterRoom(ctx.data.room_id, ctx.data.title); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Enter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.title);
    } }, styles: [".room-link[_ngcontent-%COMP%]:hover {\r\n    background-color: #D5D5DB;\r\n}\r\n\r\n.item[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    padding: 0.2em 2ch 0.2em 2ch;\r\n}\r\n\r\n.room-label[_ngcontent-%COMP%] {\r\n    flex: 1 0 0;\r\n    margin-left: 2ch;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvb20tbGluay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoicm9vbS1saW5rLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm9vbS1saW5rOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNENUQ1REI7XHJcbn1cclxuXHJcbi5pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAwLjJlbSAyY2ggMC4yZW0gMmNoO1xyXG59XHJcblxyXG4ucm9vbS1sYWJlbCB7XHJcbiAgICBmbGV4OiAxIDAgMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyY2g7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 4125:
/*!****************************************************************!*\
  !*** ./src/app/home/activities/settings/settings.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsComponent": () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var _room_link_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./room-link.directive */ 9729);
/* harmony import */ var _room_link_room_link_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./room-link/room-link.component */ 1099);
/* harmony import */ var _room_invitation_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./room-invitation.directive */ 5888);
/* harmony import */ var _room_invitation_room_invitation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./room-invitation/room-invitation.component */ 4689);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/socket/socket.service */ 841);
/* harmony import */ var _room_change_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../room-change.service */ 2164);
/* harmony import */ var _panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../panel-header/panel-header.component */ 9757);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/clipboard */ 7142);












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
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(_room_link_room_link_component__WEBPACK_IMPORTED_MODULE_1__.RoomLinkComponent);
        const viewContainerRef = this.roomLinkHost.viewContainerRef;
        const componentRef = viewContainerRef.createComponent(componentFactory);
        componentRef.instance.data = data;
    }
    reloadRooms() {
        this.socketService.sendMessage({ channel: "settings", type: "request_rooms" });
    }
    loadInvitation(data) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(_room_invitation_room_invitation_component__WEBPACK_IMPORTED_MODULE_3__.RoomInvitationComponent);
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
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_4__.SocketService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_room_change_service__WEBPACK_IMPORTED_MODULE_5__.RoomChangeService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ComponentFactoryResolver)); };
SettingsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], viewQuery: function SettingsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_room_link_directive__WEBPACK_IMPORTED_MODULE_0__.RoomLinkDirective, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_room_invitation_directive__WEBPACK_IMPORTED_MODULE_2__.RoomInvitationDirective, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.roomLinkHost = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.roomInvitationHost = _t.first);
    } }, decls: 89, vars: 11, consts: [[1, "scroll-container"], [3, "header"], [1, "list"], [1, "margin"], ["id", "profile-settings"], ["novalidate", "", 1, "form", 3, "ngSubmit"], ["i", "ngForm"], [1, "form-element"], ["type", "text", "name", "display_name", "ngModel", "", "required", "", 3, "placeholder"], ["type", "submit"], ["id", "room-settings", 1, "hidden"], ["id", "room-title"], [1, "privacy-form", "form", "hidden"], [1, "form-label"], ["type", "submit", 3, "click"], [1, "privacy-form", "form"], [1, "form", "privacy-form", "hidden"], ["readonly", "", 3, "value"], ["type", "submit", 3, "cdkCopyToClipboard"], ["type", "text", "placeholder", "Email address", "name", "username", "ngModel", "", "required", ""], ["novalidate", "", 1, "form"], [3, "click"], ["id", "enter-room", 1, "hidden"], ["appRoomLink", ""], ["id", "invitations", 1, "hidden"], ["appRoomInvitation", ""], ["j", "ngForm"], ["type", "text", "placeholder", "Room code", "name", "joinCode", "ngModel", "", "required", ""], ["c", "ngForm"], ["type", "text", "placeholder", "Room name", "name", "title", "ngModel", "", "required", ""]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-panel-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Update Display Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "form", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function SettingsComponent_Template_form_ngSubmit_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](10); return ctx.onSubmitDisplayName(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_24_listener() { return ctx.onToggleRoomPrivacy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "Make private");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_31_listener() { return ctx.onToggleRoomPrivacy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "Make public");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "form", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](37, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "Copy");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "form", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function SettingsComponent_Template_form_ngSubmit_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](10); return ctx.onSubmitInvite(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](46, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, "Invite");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "form", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_57_listener() { return ctx.onSubmitLeave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](58, "Leave");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](61, "Enter Another Room");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](62, SettingsComponent_ng_template_62_Template, 0, 0, "ng-template", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](64, "Join a Room");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](66, "Pending Invitations");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](68, "You don't have any invitations.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](70, SettingsComponent_ng_template_70_Template, 0, 0, "ng-template", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](72, "Join a Public Room");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](73, "form", 5, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function SettingsComponent_Template_form_ngSubmit_73_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](74); return ctx.onSubmitJoin(_r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](75, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](76, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](79, "Join");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](81, "Make a Room");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "form", 5, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function SettingsComponent_Template_form_ngSubmit_82_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](83); return ctx.onSubmitCreate(_r5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](84, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](85, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](86, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](87, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](88, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("header", ctx.header);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("placeholder", ctx.displayName);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.roomTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx.roomTitle, " is currently public. Anyone with the link or room code can join this room.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx.roomTitle, " is currently private. No one can join this room without an invitation.");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Share an invite link for ", ctx.roomTitle, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("value", "cowork.ac/j/", ctx.roomId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("cdkCopyToClipboard", ctx.roomLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Invite Another User to ", ctx.roomTitle, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Leave ", ctx.roomTitle, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Leave ", ctx.roomTitle, "?");
    } }, directives: [_panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_6__.PanelHeaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_9__.CdkCopyToClipboard, _room_link_directive__WEBPACK_IMPORTED_MODULE_0__.RoomLinkDirective, _room_invitation_directive__WEBPACK_IMPORTED_MODULE_2__.RoomInvitationDirective], styles: [".scroll-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n}\r\n\r\n.list[_ngcontent-%COMP%] {\r\n    flex: 1 1 auto;\r\n    overflow-y: auto;\r\n    height: 70vh;\r\n}\r\n\r\n.margin[_ngcontent-%COMP%] {\r\n    margin: 0.2em 18px 0.2em 18px;\r\n    padding: 0 0 2em 0;\r\n}\r\n\r\n.form[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n}\r\n\r\n.form-element[_ngcontent-%COMP%] {\r\n    max-width: 12ch;\r\n    flex: 1 0 0;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    width: 10ch;\r\n    margin-right: 2ch;\r\n    padding: 0.2em 2ch 0.2em 2ch;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n    margin-left: 2ch;\r\n}\r\n\r\n.hidden[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.form-label[_ngcontent-%COMP%] {\r\n    margin: 0 4ch 0 2ch;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNldHRpbmdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nyb2xsLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmxpc3Qge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgaGVpZ2h0OiA3MHZoO1xyXG59XHJcblxyXG4ubWFyZ2luIHtcclxuICAgIG1hcmdpbjogMC4yZW0gMThweCAwLjJlbSAxOHB4O1xyXG4gICAgcGFkZGluZzogMCAwIDJlbSAwO1xyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmZvcm0tZWxlbWVudCB7XHJcbiAgICBtYXgtd2lkdGg6IDEyY2g7XHJcbiAgICBmbGV4OiAxIDAgMDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMGNoO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyY2g7XHJcbiAgICBwYWRkaW5nOiAwLjJlbSAyY2ggMC4yZW0gMmNoO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMmNoO1xyXG59XHJcblxyXG4uaGlkZGVuIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsIHtcclxuICAgIG1hcmdpbjogMCA0Y2ggMCAyY2g7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 7316:
/*!**********************************************************************************************!*\
  !*** ./src/app/home/activities/stats/loading-monetization/loading-monetization.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingMonetizationComponent": () => (/* binding */ LoadingMonetizationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class LoadingMonetizationComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoadingMonetizationComponent.ɵfac = function LoadingMonetizationComponent_Factory(t) { return new (t || LoadingMonetizationComponent)(); };
LoadingMonetizationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingMonetizationComponent, selectors: [["app-loading-monetization"]], decls: 2, vars: 0, template: function LoadingMonetizationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "loading-monetization works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FkaW5nLW1vbmV0aXphdGlvbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 7755:
/*!************************************************************************!*\
  !*** ./src/app/home/activities/stats/monetized/monetized.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonetizedComponent": () => (/* binding */ MonetizedComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class MonetizedComponent {
    constructor() { }
    ngOnInit() {
    }
}
MonetizedComponent.ɵfac = function MonetizedComponent_Factory(t) { return new (t || MonetizedComponent)(); };
MonetizedComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MonetizedComponent, selectors: [["app-monetized"]], decls: 2, vars: 0, template: function MonetizedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "monetized works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb25ldGl6ZWQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 7162:
/*!********************************************************************************!*\
  !*** ./src/app/home/activities/stats/not-monetized/not-monetized.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotMonetizedComponent": () => (/* binding */ NotMonetizedComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class NotMonetizedComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotMonetizedComponent.ɵfac = function NotMonetizedComponent_Factory(t) { return new (t || NotMonetizedComponent)(); };
NotMonetizedComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotMonetizedComponent, selectors: [["app-not-monetized"]], decls: 2, vars: 0, template: function NotMonetizedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "not-monetized works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtbW9uZXRpemVkLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 8559:
/*!**********************************************************!*\
  !*** ./src/app/home/activities/stats/stats.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatsComponent": () => (/* binding */ StatsComponent)
/* harmony export */ });
/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js/auto */ 9008);
/* harmony import */ var src_app_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/handler */ 8133);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_web_monetization_web_monetization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/web-monetization/web-monetization.service */ 2082);
/* harmony import */ var src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/socket/socket.service */ 841);
/* harmony import */ var _panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../panel-header/panel-header.component */ 9757);






class StatsComponent extends src_app_handler__WEBPACK_IMPORTED_MODULE_1__.Handler {
    constructor(webMonetizationService, socketService) {
        super();
        this.header = "Stats";
        this.webMonetizationService = webMonetizationService;
        this.socketService = socketService;
    }
    ngOnInit() {
        this.webMonetizationService.monetization.subscribe((state) => {
            this.handleState(state);
        });
        if (!this.socketService.channelIsRegistered("stats"))
            this.socketService.register("stats");
        this.socketService.channelReply.get("stats").subscribe(msg => {
            this[this.snakeToCamel(msg["type"])](msg);
        });
        this.socketService.sendMessage({ channel: "stats", type: "request_sessions" });
        const ctx = document.getElementById('myChart').getContext('2d');
        this.barChart = new chart_js_auto__WEBPACK_IMPORTED_MODULE_0__["default"](ctx, {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
            },
            options: {
                indexAxis: 'y',
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
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
StatsComponent.ɵfac = function StatsComponent_Factory(t) { return new (t || StatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_web_monetization_web_monetization_service__WEBPACK_IMPORTED_MODULE_2__.WebMonetizationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_3__.SocketService)); };
StatsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: StatsComponent, selectors: [["app-stats"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 1, consts: [[3, "header"], [1, "container"], ["id", "myChart", "width", "400", "height", "400"]], template: function StatsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-panel-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "canvas", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("header", ctx.header);
    } }, directives: [_panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_4__.PanelHeaderComponent], styles: [".container[_ngcontent-%COMP%] {\r\n    margin: 0 2ch 0 2ch;\r\n}\r\n\r\napp-loading-monetization[_ngcontent-%COMP%], app-monetized[_ngcontent-%COMP%], app-not-monetized[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.current-state[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzdGF0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDAgMmNoIDAgMmNoO1xyXG59XHJcblxyXG5hcHAtbG9hZGluZy1tb25ldGl6YXRpb24sIGFwcC1tb25ldGl6ZWQsIGFwcC1ub3QtbW9uZXRpemVkIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5jdXJyZW50LXN0YXRlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59Il19 */"] });


/***/ }),

/***/ 566:
/*!**********************************************************!*\
  !*** ./src/app/home/activities/store/store.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreComponent": () => (/* binding */ StoreComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../panel-header/panel-header.component */ 9757);


class StoreComponent {
    constructor() {
        this.header = "Store";
    }
    ngOnInit() {
    }
}
StoreComponent.ɵfac = function StoreComponent_Factory(t) { return new (t || StoreComponent)(); };
StoreComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StoreComponent, selectors: [["app-store"]], decls: 3, vars: 1, consts: [[3, "header"]], template: function StoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-panel-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "store works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("header", ctx.header);
    } }, directives: [_panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_0__.PanelHeaderComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9yZS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 1739:
/*!**************************************************!*\
  !*** ./src/app/home/activities/tasks.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TasksService": () => (/* binding */ TasksService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4008);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/socket/socket.service */ 841);



class TasksService {
    constructor(socketService) {
        this.socketService = socketService;
        this.activeTaskSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.activeTask = this.activeTaskSource.asObservable();
    }
    setActiveTask(data) {
        let id = data.task_id;
        this.activeTaskSource.next(data);
        this.activeTaskId = id;
    }
}
TasksService.ɵfac = function TasksService_Factory(t) { return new (t || TasksService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_0__.SocketService)); };
TasksService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TasksService, factory: TasksService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8369:
/*!*********************************************************!*\
  !*** ./src/app/home/activities/tasks/list.directive.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListDirective": () => (/* binding */ ListDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class ListDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
ListDirective.ɵfac = function ListDirective_Factory(t) { return new (t || ListDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef)); };
ListDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ListDirective, selectors: [["", "appList", ""]] });


/***/ }),

/***/ 1998:
/*!**********************************************************************!*\
  !*** ./src/app/home/activities/tasks/list/filter-popup.directive.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPopupDirective": () => (/* binding */ FilterPopupDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class FilterPopupDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
FilterPopupDirective.ɵfac = function FilterPopupDirective_Factory(t) { return new (t || FilterPopupDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef)); };
FilterPopupDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: FilterPopupDirective, selectors: [["", "appFilterPopup", ""]] });


/***/ }),

/***/ 4015:
/*!***********************************************************************************!*\
  !*** ./src/app/home/activities/tasks/list/filter-popup/filter-popup.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPopupComponent": () => (/* binding */ FilterPopupComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _tag_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tag.directive */ 6521);
/* harmony import */ var _tag_tag_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tag/tag.component */ 5922);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/socket/socket.service */ 841);






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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(_tag_tag_component__WEBPACK_IMPORTED_MODULE_1__.TagComponent);
            const viewContainerRef = this.tagHost.viewContainerRef;
            let componentRef;
            componentRef = viewContainerRef.createComponent(componentFactory, data.index);
            let instance = componentRef.instance;
            instance.data = data;
            instance.onSelect = this.filterByTag.bind(this);
        });
    }
    filterByTag(tagId) {
    }
    addTag() {
        let titleField = document.getElementById("new-tag-title-field");
        let title = titleField.value;
        let min = Math.ceil(0);
        let max = Math.floor(4);
        let color = Math.floor(Math.random() * (max - min) + min);
        this.socketService.sendMessage({ channel: "tasks", type: "add_tag", color: color, title: title });
    }
}
FilterPopupComponent.ɵfac = function FilterPopupComponent_Factory(t) { return new (t || FilterPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_2__.SocketService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ComponentFactoryResolver)); };
FilterPopupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: FilterPopupComponent, selectors: [["app-filter-popup"]], viewQuery: function FilterPopupComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_tag_directive__WEBPACK_IMPORTED_MODULE_0__.TagDirective, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.tagHost = _t.first);
    } }, decls: 10, vars: 0, consts: [[1, "popup"], [1, "popup-header"], [1, "tags"], ["appTag", ""], [1, "new-tag"], ["id", "new-tag-title-field", "type", "text", "placeholder", "Add a new tag...", 1, "title", 3, "keydown.enter"]], template: function FilterPopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Available tags:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, FilterPopupComponent_ng_template_7_Template, 0, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown.enter", function FilterPopupComponent_Template_input_keydown_enter_9_listener() { return ctx.addTag(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } }, directives: [_tag_directive__WEBPACK_IMPORTED_MODULE_0__.TagDirective], styles: [".popup[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    padding-top: 0.5em;\r\n    padding-bottom: 0.5em;\r\n    overflow: auto;\r\n    background-color: white;\r\n}\r\n\r\n.popup-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.tags[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    grid-gap: 1ch;\r\n    gap: 1ch;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    overflow-wrap: break-word;\r\n    background-color: white;\r\n    border: none;\r\n}\r\n\r\n.new-tag[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    display: flex;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    font-size: large;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlci1wb3B1cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsYUFBUTtJQUFSLFFBQVE7QUFDWjs7QUFFQTtJQUNJLE9BQU87SUFDUCx5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoiZmlsdGVyLXBvcHVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9wdXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAwLjVlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5wb3B1cC1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnRhZ3Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGdhcDogMWNoO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgZmxleDogMTtcclxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLm5ldy10YWcge1xyXG4gICAgZmxleDogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbmgzIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 6521:
/*!**************************************************************************!*\
  !*** ./src/app/home/activities/tasks/list/filter-popup/tag.directive.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagDirective": () => (/* binding */ TagDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class TagDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
TagDirective.ɵfac = function TagDirective_Factory(t) { return new (t || TagDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef)); };
TagDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TagDirective, selectors: [["", "appTag", ""]] });


/***/ }),

/***/ 5922:
/*!******************************************************************************!*\
  !*** ./src/app/home/activities/tasks/list/filter-popup/tag/tag.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagComponent": () => (/* binding */ TagComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8267);


const _c0 = function (a0) { return { "delete": a0 }; };
class TagComponent {
    constructor() { }
    ngOnInit() {
        switch (this.data["color"]) {
            case 0: {
                this.backgroundColor = "blue";
                break;
            }
            case 1: {
                this.backgroundColor = "green";
                break;
            }
            case 2: {
                this.backgroundColor = "orange";
                break;
            }
            case 3: {
                this.backgroundColor = "lavender";
                break;
            }
        }
    }
}
TagComponent.ɵfac = function TagComponent_Factory(t) { return new (t || TagComponent)(); };
TagComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TagComponent, selectors: [["app-tag"]], decls: 5, vars: 7, consts: [["tabindex", "0", 1, "tag", 3, "click", "keydown.enter"], [1, "title"], ["tabindex", "0", 1, "placeholder", 3, "id", "ngClass", "click", "keydown.enter"]], template: function TagComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TagComponent_Template_div_click_0_listener() { return ctx.onSelect(ctx.data); })("keydown.enter", function TagComponent_Template_div_keydown_enter_0_listener() { return ctx.onSelect(ctx.data); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TagComponent_Template_div_click_3_listener($event) { return ctx.onDelete(ctx.data, $event); })("keydown.enter", function TagComponent_Template_div_keydown_enter_3_listener($event) { return ctx.onDelete(ctx.data, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "x");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.backgroundColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", ctx.data.tag_id, "-x");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.onDelete != undefined));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], styles: [".tag[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    padding: 0.5em 1ch 0.5em 1ch;\r\n    border-radius: 8px;\r\n    display: flex;\r\n    align-items: center;\r\n    grid-gap: 1ch;\r\n    gap: 1ch;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n    flex-grow: 1;\r\n}\r\n\r\n.placeholder[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.delete[_ngcontent-%COMP%], .placeholder[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n    padding: 2px;\r\n}\r\n\r\n.delete[_ngcontent-%COMP%] {\r\n    display: inline;\r\n    display: initial;\r\n}\r\n\r\n.tag[_ngcontent-%COMP%]:hover   .delete[_ngcontent-%COMP%], .tag[_ngcontent-%COMP%]:focus   .delete[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n}\r\n\r\n.delete[_ngcontent-%COMP%]:hover, .delete[_ngcontent-%COMP%]:focus {\r\n    background-color: #ffffff79;\r\n    border-radius: 2px;\r\n}\r\n\r\n.cdk-drag-preview[_ngcontent-%COMP%] {\r\n    box-sizing: border-box;\r\n    border-radius: 8px;\r\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n                0 8px 10px 1px rgba(0, 0, 0, 0.14),\r\n                0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.cdk-drag-animating[_ngcontent-%COMP%] {\r\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixhQUFRO0lBQVIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWdCO0lBQWhCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCOztrREFFOEM7QUFDbEQ7O0FBRUE7SUFDSSxzREFBc0Q7QUFDMUQiLCJmaWxlIjoidGFnLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFnIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDAuNWVtIDFjaCAwLjVlbSAxY2g7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMWNoO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4ucGxhY2Vob2xkZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmRlbGV0ZSwgLnBsYWNlaG9sZGVyIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIHBhZGRpbmc6IDJweDtcclxufVxyXG5cclxuLmRlbGV0ZSB7XHJcbiAgICBkaXNwbGF5OiBpbml0aWFsO1xyXG59XHJcblxyXG4udGFnOmhvdmVyIC5kZWxldGUsIC50YWc6Zm9jdXMgLmRlbGV0ZSB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcblxyXG4uZGVsZXRlOmhvdmVyLCAuZGVsZXRlOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY3OTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5cclxuLmNkay1kcmFnLXByZXZpZXcge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgICAgICAgICAgICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXHJcbiAgICAgICAgICAgICAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG59XHJcbiAgXHJcbi5jZGstZHJhZy1hbmltYXRpbmcge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59Il19 */"] });


/***/ }),

/***/ 4004:
/*!**************************************************************!*\
  !*** ./src/app/home/activities/tasks/list/list.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListComponent": () => (/* binding */ ListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _task_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.directive */ 9803);
/* harmony import */ var _task_task_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task/task.component */ 9075);
/* harmony import */ var _filter_popup_filter_popup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter-popup/filter-popup.component */ 4015);
/* harmony import */ var _filter_popup_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter-popup.directive */ 1998);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/socket/socket.service */ 841);
/* harmony import */ var _lists_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lists.service */ 9160);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 5798);











function ListComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
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
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(_filter_popup_filter_popup_component__WEBPACK_IMPORTED_MODULE_2__.FilterPopupComponent);
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(_task_task_component__WEBPACK_IMPORTED_MODULE_1__.TaskComponent);
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
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_4__.SocketService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_lists_service__WEBPACK_IMPORTED_MODULE_5__.ListsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ComponentFactoryResolver)); };
ListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["app-list"]], viewQuery: function ListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_task_directive__WEBPACK_IMPORTED_MODULE_0__.TaskDirective, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_filter_popup_directive__WEBPACK_IMPORTED_MODULE_3__.FilterPopupDirective, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.taskHost = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.filterPopupHost = _t.first);
    } }, inputs: { data: "data", lists: "lists" }, decls: 10, vars: 3, consts: [[1, "list"], [1, "tasks"], [1, "new-task"], ["type", "text", "placeholder", "Add a new task...", 1, "title", 3, "id", "keydown.enter"], [1, "filter", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-filter"], ["d", "M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"], ["appFilterPopup", ""], ["cdkDropList", "", 1, "drop-area", 3, "id", "cdkDropListConnectedTo", "cdkDropListDropped"], ["appTask", ""]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keydown.enter", function ListComponent_Template_input_keydown_enter_3_listener() { return ctx.addTask(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ListComponent_Template_a_click_4_listener() { return ctx.toggleTags(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ListComponent_ng_template_7_Template, 0, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("cdkDropListDropped", function ListComponent_Template_div_cdkDropListDropped_8_listener($event) { return ctx.dropTask($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, ListComponent_ng_template_9_Template, 0, 0, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("id", "", ctx.data.list_id, "-new-task-title-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("id", ctx.data.list_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("cdkDropListConnectedTo", ctx.lists);
    } }, directives: [_filter_popup_directive__WEBPACK_IMPORTED_MODULE_3__.FilterPopupDirective, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__.CdkDropList, _task_directive__WEBPACK_IMPORTED_MODULE_0__.TaskDirective], styles: [".list[_ngcontent-%COMP%] {\r\n  padding: 0.4rem 1ch 0.4rem 1ch;\r\n}\r\n\r\n.tasks[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n.new-task[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  cursor: pointer;\r\n  justify-content: space-between;\r\n  background-color: white;\r\n  margin: 0.5em 0 0.5em 0;\r\n  box-sizing: border-box;\r\n  border-radius: 8px;\r\n}\r\n\r\n.filter[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  padding: 1ch;\r\n  border-radius: 1ch;\r\n}\r\n\r\n.filter[_ngcontent-%COMP%]:hover {\r\n  background-color: lightgray;\r\n}\r\n\r\n.center[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n  overflow-wrap: break-word;\r\n  background-color: white;\r\n  border: none;\r\n}\r\n\r\n.drop-area[_ngcontent-%COMP%] {\r\n    min-height: 1em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxPQUFPO0VBQ1AseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6Imxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0IHtcclxuICBwYWRkaW5nOiAwLjRyZW0gMWNoIDAuNHJlbSAxY2g7XHJcbn1cclxuXHJcbi50YXNrcyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuICBcclxuLm5ldy10YXNrIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiAwLjVlbSAwIDAuNWVtIDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5maWx0ZXIge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmc6IDFjaDtcclxuICBib3JkZXItcmFkaXVzOiAxY2g7XHJcbn1cclxuXHJcbi5maWx0ZXI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuICBcclxuLnRpdGxlIHtcclxuICBmbGV4OiAxO1xyXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uZHJvcC1hcmVhIHtcclxuICAgIG1pbi1oZWlnaHQ6IDFlbTtcclxufSJdfQ== */"] });


/***/ }),

/***/ 9803:
/*!**************************************************************!*\
  !*** ./src/app/home/activities/tasks/list/task.directive.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskDirective": () => (/* binding */ TaskDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class TaskDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
TaskDirective.ɵfac = function TaskDirective_Factory(t) { return new (t || TaskDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef)); };
TaskDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TaskDirective, selectors: [["", "appTask", ""]] });


/***/ }),

/***/ 9075:
/*!*******************************************************************!*\
  !*** ./src/app/home/activities/tasks/list/task/task.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskComponent": () => (/* binding */ TaskComponent)
/* harmony export */ });
/* harmony import */ var _filter_popup_tag_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../filter-popup/tag.directive */ 6521);
/* harmony import */ var _filter_popup_tag_tag_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../filter-popup/tag/tag.component */ 5922);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/socket/socket.service */ 841);
/* harmony import */ var _lists_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lists.service */ 9160);
/* harmony import */ var _tasks_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../tasks.service */ 1739);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 5798);









function TaskComponent_ng_template_3_Template(rf, ctx) { }
function TaskComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div");
} }
function TaskComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("id", "", ctx_r3.data.task_id, "-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r3.data.title || "Untitled task");
} }
function TaskComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("id", "", ctx_r5.data.task_id, "-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r5.data.title || "This user is not currently sharing an active task.");
} }
class TaskComponent {
    constructor(socketService, listsService, tasksService, componentFactoryResolver, location) {
        this.socketService = socketService;
        this.listsService = listsService;
        this.tasksService = tasksService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.location = location;
    }
    ngOnInit() {
        this.socketService.reply.subscribe(msg => this.onResponseReceived(msg));
        if (this.isListing)
            for (let tag of this.data.tags)
                this.loadTag(tag);
    }
    onResponseReceived(msg) {
        if (msg["channel"] == "tasks") {
            if (msg["type"] == "request_task") {
                this.onRequestTask(msg);
            }
            if (msg["type"] == "set_listing_active") {
                if (msg["listing_id"] == this.data.listing_id) {
                    this.data.active = msg["active"];
                    this.tasksService.setActiveTask(this.data);
                }
                else
                    this.data.active = false;
            }
            if (msg["type"] == "set_task_public") {
                if (msg["task_id"] == this.data.task_id)
                    this.data.public = msg["public"];
            }
            if (msg["type"] == "add_tagging") {
                if (this.isListing && msg["listing_id"] == this.data.listing_id)
                    this.loadTag(msg);
            }
        }
    }
    loadTag(data) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(_filter_popup_tag_tag_component__WEBPACK_IMPORTED_MODULE_1__.TagComponent);
        const viewContainerRef = this.tagHost.viewContainerRef;
        let componentRef;
        componentRef = viewContainerRef.createComponent(componentFactory, data.index);
        let instance = componentRef.instance;
        instance.data = data;
        instance.onSelect = function name(data) {
            this.location.replaceState('/home/tasks/' + this.data.task_id);
        }.bind(this);
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
TaskComponent.ɵfac = function TaskComponent_Factory(t) { return new (t || TaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_2__.SocketService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_lists_service__WEBPACK_IMPORTED_MODULE_3__.ListsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_tasks_service__WEBPACK_IMPORTED_MODULE_4__.TasksService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.Location)); };
TaskComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: TaskComponent, selectors: [["app-task"]], viewQuery: function TaskComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_filter_popup_tag_directive__WEBPACK_IMPORTED_MODULE_0__.TagDirective, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.tagHost = _t.first);
    } }, inputs: { data: "data", isListing: "isListing" }, decls: 10, vars: 10, consts: [["draggable", "false", "tabindex", "0", "cdkDrag", "", 3, "href", "ngClass", "cdkDragDisabled", "id", "click", "keydown.enter", "cdkDragStarted"], [1, "center"], [1, "tags"], ["appTag", ""], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["elseBlock", ""], [1, "full", 3, "id"], [1, "title", 3, "id"]], template: function TaskComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TaskComponent_Template_a_click_0_listener($event) { return ctx.openTask($event); })("keydown.enter", function TaskComponent_Template_a_keydown_enter_0_listener($event) { return ctx.openTask($event); })("cdkDragStarted", function TaskComponent_Template_a_cdkDragStarted_0_listener($event) { return ctx.startDragging($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, TaskComponent_ng_template_3_Template, 0, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, TaskComponent_div_4_Template, 1, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, TaskComponent_ng_template_5_Template, 2, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, TaskComponent_ng_template_7_Template, 2, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](6);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx.data.active && ctx.isListing);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("href", "/home/tasks/", ctx.data.task_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("id", ctx.data.task_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.isListing ? "listing" : "task")("cdkDragDisabled", !ctx.isListing);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isListing)("ngIfThen", _r2)("ngIfElse", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("id", "", ctx.data.task_id, "-full");
    } }, directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__.CdkDrag, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _filter_popup_tag_directive__WEBPACK_IMPORTED_MODULE_0__.TagDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf], styles: [".listing[_ngcontent-%COMP%], .task[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  cursor: -webkit-grab;\r\n  cursor: grab;\r\n  background-color: white;\r\n  padding: 0.5em 1ch 0.5em 1ch;\r\n  margin: 0.5em 0 0.5em 0;\r\n  box-sizing: border-box;\r\n  border-style: solid;\r\n  border-width: 1px;\r\n  border-color: lightgrey;\r\n  border-radius: 8px;\r\n}\r\n\r\na.listing[_ngcontent-%COMP%], a.task[_ngcontent-%COMP%] {\r\n  cursor: -webkit-grab;\r\n  cursor: grab;\r\n  text-decoration: none;\r\n  color: black;\r\n}\r\n\r\n.listing[_ngcontent-%COMP%]:hover {\r\n  background-color: ghostwhite;\r\n}\r\n\r\n.task[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%], .task[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .extras[_ngcontent-%COMP%] {\r\n  visibility: hidden;\r\n}\r\n\r\n.task[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n  background-color: ghostwhite;\r\n}\r\n\r\n.active[_ngcontent-%COMP%]:hover {\r\n  background-color: #bbbbbb;\r\n}\r\n\r\n.tags[_ngcontent-%COMP%], .extras[_ngcontent-%COMP%] {\r\n  font-size: x-small;\r\n}\r\n\r\n.tags[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  grid-gap: 1ch;\r\n  gap: 1ch;\r\n}\r\n\r\n.listing[_ngcontent-%COMP%]:focus {\r\n  outline: none;\r\n}\r\n\r\n.active-radio-button[_ngcontent-%COMP%] {\r\n  cursor: default;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n.hidden[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.active[_ngcontent-%COMP%] {\r\n  background-color: lightgrey;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n}\r\n\r\n.title[_ngcontent-%COMP%]:focus {\r\n  outline: auto;\r\n  border-color: #011638;\r\n  border-width: 2px;\r\n  box-sizing: border-box;\r\n  border-radius: 4px;\r\n}\r\n\r\n.center[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: top;\r\n}\r\n\r\n.open[_ngcontent-%COMP%] {\r\n  cursor: auto;\r\n}\r\n\r\n.extras[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.cdk-drag-preview[_ngcontent-%COMP%] {\r\n    box-sizing: border-box;\r\n    border-radius: 8px;\r\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n                0 8px 10px 1px rgba(0, 0, 0, 0.14),\r\n                0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\r\n    opacity: 0;\r\n}\r\n\r\n.cdk-drag-animating[_ngcontent-%COMP%] {\r\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsb0JBQVk7RUFBWixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLDRCQUE0QjtFQUM1Qix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9CQUFZO0VBQVosWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixhQUFRO0VBQVIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCOztrREFFOEM7QUFDbEQ7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxzREFBc0Q7QUFDMUQiLCJmaWxlIjoidGFzay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3RpbmcsIC50YXNrIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBjdXJzb3I6IGdyYWI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMC41ZW0gMWNoIDAuNWVtIDFjaDtcclxuICBtYXJnaW46IDAuNWVtIDAgMC41ZW0gMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgYm9yZGVyLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG5hLmxpc3RpbmcsIGEudGFzayB7XHJcbiAgY3Vyc29yOiBncmFiO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5saXN0aW5nOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnaG9zdHdoaXRlO1xyXG59XHJcblxyXG4udGFzayBkaXYgLnRhZ3MsIC50YXNrIGRpdiAuZXh0cmFzIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi50YXNrOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2hvc3R3aGl0ZTtcclxufVxyXG5cclxuLmFjdGl2ZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiYmJiYjtcclxufVxyXG5cclxuLnRhZ3MsIC5leHRyYXMge1xyXG4gIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxufVxyXG5cclxuLnRhZ3Mge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGdhcDogMWNoO1xyXG59XHJcblxyXG4ubGlzdGluZzpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmFjdGl2ZS1yYWRpby1idXR0b24ge1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4udGl0bGU6Zm9jdXMge1xyXG4gIG91dGxpbmU6IGF1dG87XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDExNjM4O1xyXG4gIGJvcmRlci13aWR0aDogMnB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICBmbGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHRvcDtcclxufVxyXG5cclxuLm9wZW4ge1xyXG4gIGN1cnNvcjogYXV0bztcclxufVxyXG5cclxuLmV4dHJhcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5jZGstZHJhZy1wcmV2aWV3IHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgICAgICAgICAgICAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gICAgICAgICAgICAgICAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG4gIFxyXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG4gIFxyXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxufSJdfQ== */"] });


/***/ }),

/***/ 9160:
/*!********************************************************!*\
  !*** ./src/app/home/activities/tasks/lists.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListsService": () => (/* binding */ ListsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class ListsService {
    constructor() {
        this.lists = new Map();
        this.disabledLists = new Map();
    }
}
ListsService.ɵfac = function ListsService_Factory(t) { return new (t || ListsService)(); };
ListsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ListsService, factory: ListsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9054:
/*!**********************************************************************!*\
  !*** ./src/app/home/activities/tasks/task-editor-popup.directive.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskEditorPopupDirective": () => (/* binding */ TaskEditorPopupDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class TaskEditorPopupDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
TaskEditorPopupDirective.ɵfac = function TaskEditorPopupDirective_Factory(t) { return new (t || TaskEditorPopupDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef)); };
TaskEditorPopupDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TaskEditorPopupDirective, selectors: [["", "appTaskEditorPopup", ""]] });


/***/ }),

/***/ 316:
/*!*********************************************************************************!*\
  !*** ./src/app/home/activities/tasks/task-editor-popup/tags-popup.directive.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagsPopupDirective": () => (/* binding */ TagsPopupDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class TagsPopupDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
TagsPopupDirective.ɵfac = function TagsPopupDirective_Factory(t) { return new (t || TagsPopupDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef)); };
TagsPopupDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TagsPopupDirective, selectors: [["", "appTagsPopup", ""]] });


/***/ }),

/***/ 6044:
/*!********************************************************************************************!*\
  !*** ./src/app/home/activities/tasks/task-editor-popup/tags-popup/tags-popup.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagsPopupComponent": () => (/* binding */ TagsPopupComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _list_filter_popup_tag_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../list/filter-popup/tag.directive */ 6521);
/* harmony import */ var _list_filter_popup_tag_tag_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../list/filter-popup/tag/tag.component */ 5922);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/socket/socket.service */ 841);






function TagsPopupComponent_ng_template_5_Template(rf, ctx) { }
class TagsPopupComponent {
    constructor(socketService, componentFactoryResolver) {
        this.tags = new Map();
        this.tagViewRefs = new Map();
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
            else if (msg["type"] == "delete_tag") {
                this.onDeleteTag(msg);
            }
        }
    }
    onRequestTags(msg) {
        for (let tag of msg["tags"])
            this.loadTag(tag);
    }
    onDeleteTag(msg) {
        if (this.tags.has(msg.tag_id)) {
            let index = this.tagHost.viewContainerRef.indexOf(this.tagViewRefs.get(msg.tag_id));
            this.tagHost.viewContainerRef.remove(index);
        }
    }
    onAddTag(msg) {
        this.loadTag(msg);
    }
    loadTag(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(_list_filter_popup_tag_tag_component__WEBPACK_IMPORTED_MODULE_1__.TagComponent);
            const viewContainerRef = this.tagHost.viewContainerRef;
            let componentRef;
            componentRef = viewContainerRef.createComponent(componentFactory, data.index);
            let instance = componentRef.instance;
            instance.data = data;
            instance.onSelect = this.addTagToListing.bind(this);
            instance.onDelete = this.deleteTag.bind(this);
            this.tags.set(data.tag_id, instance);
            this.tagViewRefs.set(data.tag_id, componentRef.hostView);
        });
    }
    addTagToListing(data) {
        console.log("OH AM I ALSO DOING THIS LOL");
        this.socketService.sendMessage({ channel: "tasks", type: "add_tagging", listing_id: this.data.listing_id, tag_id: data.tag_id });
    }
    deleteTag(data, event) {
        console.log(data.tag_id);
        event.preventDefault();
        event.stopPropagation();
        this.socketService.sendMessage({ channel: "tasks", type: "delete_tag", tag_id: data.tag_id });
    }
    addTag() {
        let titleField = document.getElementById("new-tag-title-field");
        let title = titleField.value;
        let min = Math.ceil(0);
        let max = Math.floor(4);
        let color = Math.floor(Math.random() * (max - min) + min);
        this.socketService.sendMessage({ channel: "tasks", type: "add_tag", color: color, title: title });
    }
}
TagsPopupComponent.ɵfac = function TagsPopupComponent_Factory(t) { return new (t || TagsPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_2__.SocketService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ComponentFactoryResolver)); };
TagsPopupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TagsPopupComponent, selectors: [["app-tags-popup"]], viewQuery: function TagsPopupComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_list_filter_popup_tag_directive__WEBPACK_IMPORTED_MODULE_0__.TagDirective, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.tagHost = _t.first);
    } }, decls: 8, vars: 0, consts: [[1, "popup"], [1, "popup-header"], [1, "tags"], ["appTag", ""], [1, "new-tag"], ["id", "new-tag-title-field", "type", "text", "placeholder", "Add a new tag...", 1, "title", 3, "keydown.enter"]], template: function TagsPopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, TagsPopupComponent_ng_template_5_Template, 0, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown.enter", function TagsPopupComponent_Template_input_keydown_enter_7_listener() { return ctx.addTag(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } }, directives: [_list_filter_popup_tag_directive__WEBPACK_IMPORTED_MODULE_0__.TagDirective], styles: [".popup[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    margin-top: 1em;\r\n    width: 300px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    padding-top: 0.5em;\r\n    padding-bottom: 0.5em;\r\n    overflow: auto;\r\n    z-index: 1;\r\n    background-color: white;\r\n    padding: 1rem 2ch 1rem 2ch;\r\n    border-radius: 2em;\r\n    box-shadow: 0 1rem 1rem 1rem rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.tags[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    grid-gap: 0.5em;\r\n    gap: 0.5em;\r\n}\r\n\r\n.popup-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    overflow-wrap: break-word;\r\n    background-color: white;\r\n    border: none;\r\n}\r\n\r\n.new-tag[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    display: flex;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    font-size: large;\r\n}\r\n\r\n.close-task[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    padding: 1ch;\r\n    border-radius: 1ch;\r\n    align-self: flex-end;\r\n}\r\n\r\n.close-task[_ngcontent-%COMP%]:hover, .close-task[_ngcontent-%COMP%]:focus {\r\n    background-color: lightgray;\r\n    cursor: pointer;\r\n}\r\n\r\napp-task-preview[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhZ3MtcG9wdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsY0FBYztJQUNkLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQiwrQ0FBK0M7QUFDbkQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGVBQVU7SUFBVixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksT0FBTztJQUNQLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLE9BQU87SUFDUCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksU0FBUztJQUNULGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksT0FBTztBQUNYIiwiZmlsZSI6InRhZ3MtcG9wdXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3B1cCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDAuNWVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDJjaCAxcmVtIDJjaDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJlbTtcclxuICAgIGJveC1zaGFkb3c6IDAgMXJlbSAxcmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG4udGFncyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMC41ZW07XHJcbn1cclxuXHJcbi5wb3B1cC1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5uZXctdGFnIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcblxyXG4uY2xvc2UtdGFzayB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmc6IDFjaDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFjaDtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uY2xvc2UtdGFzazpob3ZlciwgLmNsb3NlLXRhc2s6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5hcHAtdGFzay1wcmV2aWV3IHtcclxuICAgIGZsZXg6IDE7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 9574:
/*!****************************************************************************************!*\
  !*** ./src/app/home/activities/tasks/task-editor-popup/task-editor-popup.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskEditorPopupComponent": () => (/* binding */ TaskEditorPopupComponent)
/* harmony export */ });
/* harmony import */ var _list_filter_popup_tag_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../list/filter-popup/tag.directive */ 6521);
/* harmony import */ var _list_filter_popup_tag_tag_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../list/filter-popup/tag/tag.component */ 5922);
/* harmony import */ var _tags_popup_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tags-popup.directive */ 316);
/* harmony import */ var _tags_popup_tags_popup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tags-popup/tags-popup.component */ 6044);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/socket/socket.service */ 841);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8267);










function TaskEditorPopupComponent_ng_template_16_Template(rf, ctx) { }
function TaskEditorPopupComponent_ng_template_41_Template(rf, ctx) { }
class TaskEditorPopupComponent {
    constructor(socketService, componentFactoryResolver) {
        this.tags = new Map();
        this.taggings = new Map();
        this.tagViewRefs = new Map();
        this.isEditingTitle = true;
        this.tagsPopupOpen = false;
        this.socketService = socketService;
        this.componentFactoryResolver = componentFactoryResolver;
    }
    ngOnInit() {
        this.enteredTitle = this.data.title || "Untitled task";
        this.enteredDescription = this.data.contents;
        let modalContent = document.getElementsByClassName("modal-content")[0];
        for (let tag of this.data.tags) {
            this.loadTagging(tag);
        }
        modalContent.focus();
        this.socketSubscription = this.socketService.channelReply.get("tasks").subscribe(msg => this.onResponseReceived(msg));
    }
    ngOnDestroy() {
        this.socketSubscription.unsubscribe();
    }
    onResponseReceived(msg) {
        if (msg["channel"] == "tasks") {
            if (msg["type"] == "add_tagging") {
                this.loadTagging(msg);
            }
            else if (msg["type"] == "delete_tagging" || msg["type"] == "delete_tag") {
                this.deleteTagging(msg);
            }
        }
    }
    onRequestTags(msg) {
        for (let tag of msg["tags"])
            this.loadTagging(tag);
    }
    deleteTagging(msg) {
        if (this.tags.has(msg.tag_id)) {
            let index = this.tagHost.viewContainerRef.indexOf(this.tagViewRefs.get(msg.tag_id));
            this.tagHost.viewContainerRef.remove(index);
        }
        else if (this.tags.has(this.taggings.get(msg.tagging_id))) {
            let index = this.tagHost.viewContainerRef.indexOf(this.tagViewRefs.get(this.taggings.get(msg.tagging_id)));
            this.tagHost.viewContainerRef.remove(index);
        }
    }
    loadTagging(data) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(_list_filter_popup_tag_tag_component__WEBPACK_IMPORTED_MODULE_1__.TagComponent);
        const viewContainerRef = this.tagHost.viewContainerRef;
        let componentRef;
        componentRef = viewContainerRef.createComponent(componentFactory, data.index);
        let instance = componentRef.instance;
        instance.data = data;
        instance.onSelect = this.removeTag.bind(this);
        this.tags.set(data.tag_id, instance);
        this.taggings.set(data.tagging_id, data.tag_id);
        this.tagViewRefs.set(data.tag_id, componentRef.hostView);
    }
    removeTag(data) {
        this.socketService.sendMessage({ channel: "tasks", type: "delete_tagging", tagging_id: data.tagging_id });
    }
    toggleTags() {
        // request tags? or should have already requested them (probably)
        // make them display: flex or display: none depending on whether
        // they are already visible
        if (!this.tagsPopupOpen)
            this.openTagsPopup();
        else
            this.closeTagsPopup();
    }
    openTagsPopup() {
        const viewContainerRef = this.tagsPopupHost.viewContainerRef;
        viewContainerRef.clear();
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(_tags_popup_tags_popup_component__WEBPACK_IMPORTED_MODULE_3__.TagsPopupComponent);
        let componentRef;
        componentRef = viewContainerRef.createComponent(componentFactory);
        let instance = componentRef.instance;
        instance.data = this.data;
        this.tagsPopupOpen = true;
    }
    closeTagsPopup() {
        const viewContainerRef = this.tagsPopupHost.viewContainerRef;
        viewContainerRef.clear();
        this.tagsPopupOpen = false;
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
TaskEditorPopupComponent.ɵfac = function TaskEditorPopupComponent_Factory(t) { return new (t || TaskEditorPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_4__.SocketService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ComponentFactoryResolver)); };
TaskEditorPopupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: TaskEditorPopupComponent, selectors: [["app-task-editor-popup"]], viewQuery: function TaskEditorPopupComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_tags_popup_directive__WEBPACK_IMPORTED_MODULE_2__.TagsPopupDirective, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_list_filter_popup_tag_directive__WEBPACK_IMPORTED_MODULE_0__.TagDirective, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.tagsPopupHost = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.tagHost = _t.first);
    } }, decls: 54, vars: 10, consts: [[1, "modal", 3, "click"], ["tabindex", "0", 1, "modal-content"], [1, "task-header"], ["id", "task-title-field", 3, "ngModel", "disabled", "focus", "keydown.enter", "blur", "ngModelChange"], ["tabindex", "0", 1, "close-task", 3, "keydown.enter", "click"], [1, "task-content"], [1, "task-main"], [3, "submit"], ["tabindex", "0", 1, "tooltip-parent"], [1, "tags"], ["appTag", ""], ["for", "event-details"], ["id", "event-details", "name", "event-details", "rows", "6", 2, "resize", "none", 3, "ngModel", "disabled", "ngModelChange", "blur"], [1, "task-sidebar"], [3, "ngClass"], [1, "task-actions"], [1, "toggle"], [1, "switch"], ["type", "checkbox", "id", "public", 3, "checked", "change"], [1, "slider"], [1, "tags-settings"], ["tabindex", "0", 3, "click", "keydown.enter"], ["appTagsPopup", ""], ["tabindex", "0"], ["type", "checkbox", "id", "active", 3, "checked", "change"], ["tabindex", "0", 1, "close-button", 3, "click", "keydown.enter"], ["tabindex", "0", 1, "remove-task", 3, "click", "keydown.enter"]], template: function TaskEditorPopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TaskEditorPopupComponent_Template_div_click_0_listener($event) { return ctx.onClose($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "textarea", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("focus", function TaskEditorPopupComponent_Template_textarea_focus_3_listener() { return ctx.editTitle(); })("keydown.enter", function TaskEditorPopupComponent_Template_textarea_keydown_enter_3_listener() { return ctx.saveTitle(); })("blur", function TaskEditorPopupComponent_Template_textarea_blur_3_listener() { return ctx.saveTitle(); })("ngModelChange", function TaskEditorPopupComponent_Template_textarea_ngModelChange_3_listener($event) { return ctx.enteredTitle = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keydown.enter", function TaskEditorPopupComponent_Template_a_keydown_enter_5_listener($event) { return ctx.onClose($event); })("click", function TaskEditorPopupComponent_Template_a_click_5_listener($event) { return ctx.onClose($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submit", function TaskEditorPopupComponent_Template_form_submit_9_listener($event) { return ctx.onClose($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Listing");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "A listing is your personal copy of a task. Shared versions of the task will not have this information.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, TaskEditorPopupComponent_ng_template_16_Template, 0, 0, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TaskEditorPopupComponent_Template_textarea_ngModelChange_21_listener($event) { return ctx.enteredDescription = $event; })("blur", function TaskEditorPopupComponent_Template_textarea_blur_21_listener() { return ctx.saveDescription(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "h6", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Task Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Public");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Set a task to public if you want it to be visible to others.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function TaskEditorPopupComponent_Template_input_change_33_listener() { return ctx.changePublic(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](34, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "h6", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "Listing Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TaskEditorPopupComponent_Template_button_click_39_listener() { return ctx.toggleTags(); })("keydown.enter", function TaskEditorPopupComponent_Template_button_keydown_enter_39_listener() { return ctx.toggleTags(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, TaskEditorPopupComponent_ng_template_41_Template, 0, 0, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "Set a listing to active if you want to work on it. You can have up to one active task at a time.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function TaskEditorPopupComponent_Template_input_change_48_listener() { return ctx.changeActive(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](49, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TaskEditorPopupComponent_Template_button_click_50_listener($event) { return ctx.onClose($event); })("keydown.enter", function TaskEditorPopupComponent_Template_button_keydown_enter_50_listener($event) { return ctx.onClose($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TaskEditorPopupComponent_Template_button_click_52_listener($event) { return ctx.removeTask($event); })("keydown.enter", function TaskEditorPopupComponent_Template_button_keydown_enter_52_listener($event) { return ctx.removeTask($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.enteredTitle)("disabled", !ctx.data.can_edit_title);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.enteredDescription)("disabled", !ctx.data.can_edit_contents);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.data.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.data.can_edit_settings ? "settings" : "hidden-settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx.data.public);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.data.can_edit_settings ? "settings" : "hidden-settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx.data.active);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _list_filter_popup_tag_directive__WEBPACK_IMPORTED_MODULE_0__.TagDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _tags_popup_directive__WEBPACK_IMPORTED_MODULE_2__.TagsPopupDirective], styles: [".modal[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding-top: 0.5em;\r\n    padding-bottom: 0.5em;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: rgb(0,0,0);\r\n    background-color: rgba(0,0,0,0.4);\r\n    cursor: inherit;\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n    background-color: white;\r\n    padding: 1rem 2ch 1rem 2ch;\r\n    border: 1px solid #888;\r\n    width: min(100%, 100ch);\r\n    border-radius: 2rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.task-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-bottom: 0.83em;\r\n}\r\n\r\n.task-header[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n    flex-grow: 1;\r\n}\r\n\r\n.close-task[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    padding: 1ch;\r\n    border-radius: 1ch;\r\n}\r\n\r\n.close-task[_ngcontent-%COMP%]:hover, .close-task[_ngcontent-%COMP%]:focus {\r\n    background-color: lightgray;\r\n    cursor: pointer;\r\n}\r\n\r\n.close-button[_ngcontent-%COMP%] {\r\n    background-color: #011638;\r\n    color: white;\r\n    \r\n}\r\n\r\n.close-button[_ngcontent-%COMP%]:not(:hover):not(:active) {\r\n    box-shadow: 0 4px #010c1f;\r\n    margin-bottom: 4px;\r\n}\r\n\r\n.close-button[_ngcontent-%COMP%]:hover:not(:active) {\r\n    box-shadow: 0 2px #010c1f;\r\n    margin-bottom: 2px;\r\n    margin-top: 2px;\r\n}\r\n\r\n.tags[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    grid-gap: 1ch;\r\n    gap: 1ch;\r\n    margin: 1em 0 1em 0;\r\n}\r\n\r\n.task-content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n\r\n.tooltip-parent[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    width: -webkit-min-content;\r\n    width: -moz-min-content;\r\n    width: min-content;\r\n    border-bottom: 2px dotted #000;\r\n    position: relative;\r\n}\r\n\r\n.tooltip-parent[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n    position: absolute;\r\n    background-color: white;\r\n    padding: 4px;\r\n    border: 1px solid black;\r\n    border-radius: 8px;\r\n    z-index: 1;\r\n    top: 1em;\r\n    left: 4ch;\r\n    width: 20ch;\r\n}\r\n\r\n.tooltip-parent[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%], .tooltip-parent[_ngcontent-%COMP%]:focus   span[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n}\r\n\r\n.task-main[_ngcontent-%COMP%], .task-sidebar[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.task-main[_ngcontent-%COMP%] {\r\n    flex: 3;\r\n}\r\n\r\n.task-sidebar[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    margin-left: 2ch;\r\n    padding-left: 2ch;\r\n    border-left: solid lightgray;\r\n    display: flex;\r\n    grid-gap: 1em;\r\n    gap: 1em;\r\n}\r\n\r\n.task-actions[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n}\r\n\r\n.settings[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    grid-gap: 1em;\r\n    gap: 1em;\r\n}\r\n\r\n.hidden-settings[_ngcontent-%COMP%] {\r\n    display: none\r\n}\r\n\r\n.task-sidebar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    align-self: stretch;\r\n}\r\n\r\n.tags-settings[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n    margin-bottom: 0.5em;\r\n}\r\n\r\nform[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.remove-task[_ngcontent-%COMP%]:not(:hover):not(:active) {\r\n    box-shadow: 0 4px #ad3236;\r\n    margin-bottom: 4px;\r\n}\r\n\r\n.remove-task[_ngcontent-%COMP%]:hover:not(:active) {\r\n    box-shadow: 0 2px #ad3236;\r\n    margin-bottom: 2px;\r\n    margin-top: 2px;\r\n}\r\n\r\n.remove-task[_ngcontent-%COMP%]:active {\r\n    margin-top: 4px;\r\n}\r\n\r\n.remove-task[_ngcontent-%COMP%] {\r\n    background-color: #D64045;\r\n    color: white;\r\n}\r\n\r\nh2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n}\r\n\r\n#task-title-field[_ngcontent-%COMP%] {\r\n    font-size: 1.5em;\r\n    height: 1.3em;\r\n    resize: none;\r\n    background-color: transparent;\r\n    border-color: transparent;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.toggle[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.switch[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 60px;\r\n    height: 34px;\r\n  }\r\n\r\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] { \r\n    opacity: 0;\r\n    width: 0;\r\n    height: 0;\r\n  }\r\n\r\n.slider[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: lightgray;\r\n    transition: .2s;\r\n    border-radius: 34px;\r\n  }\r\n\r\n.slider[_ngcontent-%COMP%]:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 26px;\r\n    width: 26px;\r\n    left: 4px;\r\n    bottom: 4px;\r\n    background-color: white;\r\n    transition: .2s;\r\n    border-radius: 50%;\r\n  }\r\n\r\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\r\n    background-color: #011638;\r\n  }\r\n\r\ninput[_ngcontent-%COMP%]:focus    + .slider[_ngcontent-%COMP%] {\r\n    box-shadow: 0 0 1px #011638;\r\n  }\r\n\r\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\r\n    transform: translateX(26px);\r\n  }\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .modal-content[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        height: 100%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2stZWRpdG9yLXBvcHVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixVQUFVO0lBQ1YsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIsaUNBQWlDO0lBQ2pDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixlQUFlO0FBQ25COztBQUdBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7O0FBRWhCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFRO0lBQVIsUUFBUTtJQUNSLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIsOEJBQThCO0lBQzlCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxPQUFPO0FBQ1g7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLGFBQVE7SUFBUixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQVE7SUFBUixRQUFRO0FBQ1o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtFQUNkOztBQUVBO0lBQ0UsVUFBVTtJQUNWLFFBQVE7SUFDUixTQUFTO0VBQ1g7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCwyQkFBMkI7SUFFM0IsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0lBQ1QsV0FBVztJQUNYLHVCQUF1QjtJQUV2QixlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0UsMkJBQTJCO0VBQzdCOztBQUVBO0lBR0UsMkJBQTJCO0VBQzdCOztBQUVGO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjtBQUNKIiwiZmlsZSI6InRhc2stZWRpdG9yLXBvcHVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAwLjVlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XHJcbiAgICBjdXJzb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMXJlbSAyY2ggMXJlbSAyY2g7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gICAgd2lkdGg6IG1pbigxMDAlLCAxMDBjaCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi50YXNrLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuODNlbTtcclxufVxyXG5cclxuLnRhc2staGVhZGVyIHRleHRhcmVhIHtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxuLmNsb3NlLXRhc2sge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiAxY2g7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxY2g7XHJcbn1cclxuXHJcbi5jbG9zZS10YXNrOmhvdmVyLCAuY2xvc2UtdGFzazpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG4uY2xvc2UtYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTE2Mzg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBcclxufVxyXG5cclxuLmNsb3NlLWJ1dHRvbjpub3QoOmhvdmVyKTpub3QoOmFjdGl2ZSkge1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggIzAxMGMxZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxufVxyXG5cclxuLmNsb3NlLWJ1dHRvbjpob3Zlcjpub3QoOmFjdGl2ZSkge1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggIzAxMGMxZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxufVxyXG5cclxuLnRhZ3Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMWNoO1xyXG4gICAgbWFyZ2luOiAxZW0gMCAxZW0gMDtcclxufVxyXG5cclxuLnRhc2stY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4udG9vbHRpcC1wYXJlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBkb3R0ZWQgIzAwMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnRvb2x0aXAtcGFyZW50IHNwYW4ge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0b3A6IDFlbTtcclxuICAgIGxlZnQ6IDRjaDtcclxuICAgIHdpZHRoOiAyMGNoO1xyXG59XHJcblxyXG4udG9vbHRpcC1wYXJlbnQ6aG92ZXIgc3BhbiwgLnRvb2x0aXAtcGFyZW50OmZvY3VzIHNwYW4ge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuLnRhc2stbWFpbiwgLnRhc2stc2lkZWJhciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnRhc2stbWFpbiB7XHJcbiAgICBmbGV4OiAzO1xyXG59XHJcblxyXG4udGFzay1zaWRlYmFyIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBtYXJnaW4tbGVmdDogMmNoO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyY2g7XHJcbiAgICBib3JkZXItbGVmdDogc29saWQgbGlnaHRncmF5O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMWVtO1xyXG59XHJcblxyXG4udGFzay1hY3Rpb25zIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnNldHRpbmdzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxZW07XHJcbn1cclxuXHJcbi5oaWRkZW4tc2V0dGluZ3Mge1xyXG4gICAgZGlzcGxheTogbm9uZVxyXG59XHJcblxyXG4udGFzay1zaWRlYmFyIGJ1dHRvbiB7XHJcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xyXG59XHJcblxyXG4udGFncy1zZXR0aW5ncyBidXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlucHV0LCB0ZXh0YXJlYSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnJlbW92ZS10YXNrOm5vdCg6aG92ZXIpOm5vdCg6YWN0aXZlKSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAjYWQzMjM2O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG59XHJcbiAgXHJcbi5yZW1vdmUtdGFzazpob3Zlcjpub3QoOmFjdGl2ZSkge1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggI2FkMzIzNjtcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxufVxyXG4gIFxyXG4ucmVtb3ZlLXRhc2s6YWN0aXZlIHtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxufVxyXG4gIFxyXG4ucmVtb3ZlLXRhc2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Q2NDA0NTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaDIsIGgzLCBoNCwgaDUsIGg2IHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuI3Rhc2stdGl0bGUtZmllbGQge1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGhlaWdodDogMS4zZW07XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4udG9nZ2xlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc3dpdGNoIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiAzNHB4O1xyXG4gIH1cclxuICBcclxuICAuc3dpdGNoIGlucHV0IHsgXHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5zbGlkZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuMnM7XHJcbiAgICB0cmFuc2l0aW9uOiAuMnM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xyXG4gIH1cclxuICBcclxuICAuc2xpZGVyOmJlZm9yZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgd2lkdGg6IDI2cHg7XHJcbiAgICBsZWZ0OiA0cHg7XHJcbiAgICBib3R0b206IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuMnM7XHJcbiAgICB0cmFuc2l0aW9uOiAuMnM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTE2Mzg7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0OmZvY3VzICsgLnNsaWRlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4ICMwMTE2Mzg7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbiAgfVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 6619:
/*!**********************************************************!*\
  !*** ./src/app/home/activities/tasks/tasks.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TasksComponent": () => (/* binding */ TasksComponent)
/* harmony export */ });
/* harmony import */ var _list_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.directive */ 8369);
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list/list.component */ 4004);
/* harmony import */ var src_app_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/handler */ 8133);
/* harmony import */ var _task_editor_popup_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-editor-popup.directive */ 9054);
/* harmony import */ var _task_editor_popup_task_editor_popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task-editor-popup/task-editor-popup.component */ 9574);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../menu/menu.component */ 8522);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/socket/socket.service */ 841);
/* harmony import */ var _lists_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lists.service */ 9160);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../panel-header/panel-header.component */ 9757);














function TasksComponent_ng_template_0_Template(rf, ctx) { }
function TasksComponent_ng_template_5_Template(rf, ctx) { }
class TasksComponent extends src_app_handler__WEBPACK_IMPORTED_MODULE_2__.Handler {
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
            this.loadList(data);
        });
    }
    loadList(data) {
        this.lists.push(data.list_id);
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(_list_list_component__WEBPACK_IMPORTED_MODULE_1__.ListComponent);
        const viewContainerRef = this.listHost.viewContainerRef;
        let componentRef = viewContainerRef.createComponent(componentFactory, data.index);
        let instance = componentRef.instance;
        instance.data = data;
        instance.lists = this.lists;
        this.listsService.lists.set(data.list_id, instance);
        this.listViewRefs.set(data.list_id, componentRef.hostView);
    }
    handleTask() {
        if (_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__.MenuComponent.getActivity(this.location.path()) == "tasks" && this.location.path().split('/').length > 3) {
            this.taskId = this.location.path().split('/')[3];
            this.socketService.sendMessage({ channel: "tasks", type: "request_task", "task_id": this.taskId });
        }
    }
    onRequestTask(taskData) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(_task_editor_popup_task_editor_popup_component__WEBPACK_IMPORTED_MODULE_4__.TaskEditorPopupComponent);
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
            event.target.classList.contains("remove-task") ||
            event.target.classList.contains("close-button")) {
            const viewContainerRef = this.taskEditorPopupHost.viewContainerRef;
            viewContainerRef.clear();
            this.location.replaceState('/home/tasks');
        }
    }
}
TasksComponent.ɵfac = function TasksComponent_Factory(t) { return new (t || TasksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_6__.SocketService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_lists_service__WEBPACK_IMPORTED_MODULE_7__.ListsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.Location)); };
TasksComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: TasksComponent, selectors: [["app-tasks"]], viewQuery: function TasksComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_list_directive__WEBPACK_IMPORTED_MODULE_0__.ListDirective, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_task_editor_popup_directive__WEBPACK_IMPORTED_MODULE_3__.TaskEditorPopupDirective, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.listHost = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.taskEditorPopupHost = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 1, consts: [["appTaskEditorPopup", ""], [1, "scroll-container"], [3, "header"], ["id", "list"], ["appList", ""]], template: function TasksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, TasksComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "app-panel-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, TasksComponent_ng_template_5_Template, 0, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("header", ctx.header);
    } }, directives: [_task_editor_popup_directive__WEBPACK_IMPORTED_MODULE_3__.TaskEditorPopupDirective, _panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_8__.PanelHeaderComponent, _list_directive__WEBPACK_IMPORTED_MODULE_0__.ListDirective], styles: [".scroll-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n    position: relative;\r\n}\r\n\r\n#lists[_ngcontent-%COMP%] {\r\n    flex: 1 1 auto;\r\n    overflow-x: auto;\r\n    display: flex;\r\n    max-height: 100%;\r\n}\r\n\r\n.new-list[_ngcontent-%COMP%] {\r\n    padding: 0.4em 1ch 0.2em 1ch;\r\n    margin: 0 0 1em 0;\r\n}\r\n\r\ninput[type=checkbox][_ngcontent-%COMP%], .tasks[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.list-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:checked ~ .tasks[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\n.submit-button[_ngcontent-%COMP%] {\r\n    display: hidden;\r\n    cursor: pointer;\r\n    width: 2ch;\r\n    height: 1.5em;\r\n    position: absolute;\r\n    right: 1ch;\r\n}\r\n\r\n#new-list-title-field[_ngcontent-%COMP%] {\r\n    cursor: text;\r\n    border: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2tzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsVUFBVTtJQUNWLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUdBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEIiLCJmaWxlIjoidGFza3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGwtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jbGlzdHMge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5uZXctbGlzdCB7XHJcbiAgICBwYWRkaW5nOiAwLjRlbSAxY2ggMC4yZW0gMWNoO1xyXG4gICAgbWFyZ2luOiAwIDAgMWVtIDA7XHJcbn1cclxuICBcclxuaW5wdXRbdHlwZT1jaGVja2JveF0sXHJcbi50YXNrcyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiAgXHJcbi5saXN0LWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbiAgXHJcbmlucHV0OmNoZWNrZWR+LnRhc2tzIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiAgXHJcbi5zdWJtaXQtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGhpZGRlbjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHdpZHRoOiAyY2g7XHJcbiAgICBoZWlnaHQ6IDEuNWVtO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDFjaDtcclxufVxyXG4gIFxyXG5cclxuI25ldy1saXN0LXRpdGxlLWZpZWxkIHtcclxuICAgIGN1cnNvcjogdGV4dDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufSJdfQ== */"] });


/***/ }),

/***/ 6031:
/*!**************************************************!*\
  !*** ./src/app/home/activities/timer.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimerService": () => (/* binding */ TimerService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 1356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);


class TimerService {
    constructor() { }
    startTimer() {
        this.timerSource = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.timer)(1000, 1000);
    }
    stopTimer() {
        this.timerSource = null;
    }
}
TimerService.ɵfac = function TimerService_Factory(t) { return new (t || TimerService)(); };
TimerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TimerService, factory: TimerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5944:
/*!**********************************************************!*\
  !*** ./src/app/home/activities/timer/timer.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimerComponent": () => (/* binding */ TimerComponent)
/* harmony export */ });
/* harmony import */ var src_app_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/handler */ 8133);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/socket/socket.service */ 841);
/* harmony import */ var _room_change_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../room-change.service */ 2164);
/* harmony import */ var _tasks_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tasks.service */ 1739);
/* harmony import */ var _timer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../timer.service */ 6031);
/* harmony import */ var _panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../panel-header/panel-header.component */ 9757);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _tasks_list_task_task_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../tasks/list/task/task.component */ 9075);









const _c0 = function (a0) { return { "display": a0 }; };
function TimerComponent_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const participant_r1 = ctx.$implicit;
    const isLast_r2 = ctx.last;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](3, _c0, ctx_r0.participantsDisplay));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", participant_r1, "", isLast_r2 ? "" : ", ", "");
} }
const _c1 = function (a0) { return { "visibility": a0 }; };
class TimerComponent extends src_app_handler__WEBPACK_IMPORTED_MODULE_0__.Handler {
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
TimerComponent.ɵfac = function TimerComponent_Factory(t) { return new (t || TimerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_1__.SocketService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_room_change_service__WEBPACK_IMPORTED_MODULE_2__.RoomChangeService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_tasks_service__WEBPACK_IMPORTED_MODULE_3__.TasksService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_timer_service__WEBPACK_IMPORTED_MODULE_4__.TimerService)); };
TimerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: TimerComponent, selectors: [["app-timer"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]], decls: 31, vars: 25, consts: [[3, "header"], ["id", "not-in-session"], ["id", "consumable"], [3, "ngStyle"], ["id", "participants", 3, "ngStyle", 4, "ngFor", "ngForOf"], [3, "data"], ["id", "join"], ["id", "host"], ["id", "time"], ["tabindex", "0", "id", "left-arrow", 1, "arrow", 3, "ngStyle", "click", "keydown.enter"], ["id", "time-display"], ["tabindex", "0", "id", "right-arrow", 1, "arrow", 3, "ngStyle", "click", "keydown.enter"], ["id", "start"], ["id", "start-button", 3, "ngStyle", "click"], ["id", "join-button", 3, "ngStyle", "click"], ["id", "leave-button", 3, "ngStyle", "click"], ["id", "in-session"], ["id", "participants", 3, "ngStyle"]], template: function TimerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-panel-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "\uD83D\uDD6F\uFE0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Participants:");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, TimerComponent_p_7_Template, 2, 5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "app-task", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Join a session");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Start a new session");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TimerComponent_Template_a_click_16_listener($event) { return ctx.addTime($event, -5); })("keydown.enter", function TimerComponent_Template_a_keydown_enter_16_listener($event) { return ctx.addTime($event, -5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](20, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TimerComponent_Template_a_click_21_listener($event) { return ctx.addTime($event, 5); })("keydown.enter", function TimerComponent_Template_a_keydown_enter_21_listener($event) { return ctx.addTime($event, 5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TimerComponent_Template_button_click_24_listener() { return ctx.start(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "Start");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TimerComponent_Template_button_click_26_listener() { return ctx.join(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Join");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TimerComponent_Template_button_click_28_listener() { return ctx.leave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Leave");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](30, "div", 16);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("header", ctx.header);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](13, _c0, ctx.participantsDisplay));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.participants);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("data", ctx.activeTaskData);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](15, _c1, ctx.leftVisibility));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](20, 10, ctx.timeRemaining, "mm:ss"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](17, _c1, ctx.rightVisibility));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](19, _c0, ctx.startButtonDisplay));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](21, _c0, ctx.joinButtonDisplay));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](23, _c0, ctx.leaveButtonDisplay));
    } }, directives: [_panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_5__.PanelHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _tasks_list_task_task_component__WEBPACK_IMPORTED_MODULE_6__.TaskComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe], styles: ["#not-in-session[_ngcontent-%COMP%] {\r\n    flex: 1 0 0;\r\n    padding: 0.2em 2ch 0.2em 2ch;\r\n}\r\n\r\n#consumable[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 6em;\r\n}\r\n\r\nh2[_ngcontent-%COMP%], #participants[_ngcontent-%COMP%] {\r\n    margin: 0.2em 0 0.2em 0;\r\n}\r\n\r\n#participants[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n#time[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    text-align: center;\r\n}\r\n\r\n#time-display[_ngcontent-%COMP%] {\r\n    flex-grow: 1;\r\n    font-size: 2em;\r\n    text-align: center;\r\n}\r\n\r\n#options[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n}\r\n\r\n.arrow[_ngcontent-%COMP%] {\r\n    font-size: 2em;\r\n    margin: 0 0.2ch 0 0.2ch;\r\n    cursor: pointer;\r\n    color: #adbbd3;\r\n}\r\n\r\n.arrow[_ngcontent-%COMP%]::-moz-selection {\r\n    background: white;\r\n}\r\n\r\n.arrow[_ngcontent-%COMP%]::selection {\r\n    background: white;\r\n}\r\n\r\n.arrow[_ngcontent-%COMP%]:hover, .arrow[_ngcontent-%COMP%]:active {\r\n    color: #011638;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n    font-size: 2em;\r\n    margin: 0 0.2ch 0 0.2ch;\r\n}\r\n\r\n#active-task[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin: 0.5em 0 0.5em 0;\r\n}\r\n\r\n#start[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 0.5em 0 0.5em 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUZBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0IiLCJmaWxlIjoidGltZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNub3QtaW4tc2Vzc2lvbiB7XHJcbiAgICBmbGV4OiAxIDAgMDtcclxuICAgIHBhZGRpbmc6IDAuMmVtIDJjaCAwLjJlbSAyY2g7XHJcbn1cclxuXHJcbiNjb25zdW1hYmxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogNmVtO1xyXG59XHJcblxyXG5oMiwgI3BhcnRpY2lwYW50cyB7XHJcbiAgICBtYXJnaW46IDAuMmVtIDAgMC4yZW0gMDtcclxufVxyXG5cclxuI3BhcnRpY2lwYW50cyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiN0aW1lIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jdGltZS1kaXNwbGF5IHtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jb3B0aW9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4uYXJyb3cge1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBtYXJnaW46IDAgMC4yY2ggMCAwLjJjaDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjYWRiYmQzO1xyXG59XHJcblxyXG4uYXJyb3c6OnNlbGVjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLmFycm93OmhvdmVyLCAuYXJyb3c6YWN0aXZlIHtcclxuICAgIGNvbG9yOiAjMDExNjM4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBtYXJnaW46IDAgMC4yY2ggMCAwLjJjaDtcclxufVxyXG5cclxuI2FjdGl2ZS10YXNrIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMC41ZW0gMCAwLjVlbSAwO1xyXG59XHJcblxyXG4jc3RhcnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW46IDAuNWVtIDAgMC41ZW0gMDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 5464:
/*!******************************************************!*\
  !*** ./src/app/home/activity-container.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityContainerComponent": () => (/* binding */ ActivityContainerComponent)
/* harmony export */ });
/* harmony import */ var _activities_activities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activities/activities */ 8898);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu/menu.component */ 8522);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _activities_store_store_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./activities/store/store.component */ 566);
/* harmony import */ var _activities_chat_chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./activities/chat/chat.component */ 5864);
/* harmony import */ var _activities_timer_timer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./activities/timer/timer.component */ 5944);
/* harmony import */ var _activities_stats_stats_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./activities/stats/stats.component */ 8559);
/* harmony import */ var _activities_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./activities/tasks/tasks.component */ 6619);
/* harmony import */ var _activities_settings_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./activities/settings/settings.component */ 4125);










class ActivityContainerComponent {
    constructor(location) {
        this.activities = _activities_activities__WEBPACK_IMPORTED_MODULE_0__.activities;
        this.location = location;
        this.updateActivity.bind(this);
        this.location.onUrlChange(this.updateActivity);
    }
    ngOnInit() {
        this.updateActivity(this.location.path(), this.location.getState());
    }
    updateActivity(url, state) {
        // ALERT: REDUNDANCY
        let activity = _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__.MenuComponent.getActivity(url);
        let visibleActivities = document.getElementsByClassName("visible");
        let i = 0;
        for (let i = 0; i < visibleActivities.length; i++) {
            let visibleActivity = document.getElementsByClassName("visible")[i];
            visibleActivity.classList.remove("visible");
        }
        if (_activities_activities__WEBPACK_IMPORTED_MODULE_0__.activities.includes(activity)) {
            let newVisibleActivity = document.getElementById(activity);
            newVisibleActivity.classList.add("visible");
        }
    }
}
ActivityContainerComponent.ɵfac = function ActivityContainerComponent_Factory(t) { return new (t || ActivityContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.Location)); };
ActivityContainerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: ActivityContainerComponent, selectors: [["app-activity-container"]], decls: 7, vars: 0, consts: [[1, "activities"], ["id", "store", 1, "activity"], ["id", "chat", 1, "activity"], ["id", "timer", 1, "activity"], ["id", "stats", 1, "activity"], ["id", "tasks", 1, "activity"], ["id", "settings", 1, "activity"]], template: function ActivityContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-store", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "app-chat", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "app-timer", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "app-stats", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "app-tasks", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "app-settings", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } }, directives: [_activities_store_store_component__WEBPACK_IMPORTED_MODULE_2__.StoreComponent, _activities_chat_chat_component__WEBPACK_IMPORTED_MODULE_3__.ChatComponent, _activities_timer_timer_component__WEBPACK_IMPORTED_MODULE_4__.TimerComponent, _activities_stats_stats_component__WEBPACK_IMPORTED_MODULE_5__.StatsComponent, _activities_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_6__.TasksComponent, _activities_settings_settings_component__WEBPACK_IMPORTED_MODULE_7__.SettingsComponent], styles: [".activities[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex: 1 0 0;\r\n    height: 100%;\r\n    background-color: #011638;\r\n}\r\n\r\n.activity[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: absolute;\r\n    top: 0;\r\n    visibility: hidden;\r\n    display: flex;\r\n    border-radius: 0 2rem 0 0;\r\n    flex-direction: column;\r\n    flex: 1 0 0;\r\n    background-color: white;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.visible[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2aXR5LWNvbnRhaW5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoiYWN0aXZpdHktY29udGFpbmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aXZpdGllcyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXg6IDEgMCAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxMTYzODtcclxufVxyXG5cclxuLmFjdGl2aXR5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMnJlbSAwIDA7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleDogMSAwIDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4udmlzaWJsZSB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59Il19 */"] });


/***/ }),

/***/ 1790:
/*!*************************************************!*\
  !*** ./src/app/home/header/header.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _socket_socket_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../socket/socket.service */ 841);


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
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_socket_socket_service__WEBPACK_IMPORTED_MODULE_0__.SocketService)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 6, vars: 0, consts: [[1, "header"], ["href", "/", 1, "home"], ["alt", "Cowork", "src", "../../../assets/icons/icon.png", "height", "48", "width", "48", 2, "margin-left", "-4px"], [1, "options"], ["tabindex", "0", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_4_listener() { return ctx.signOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Sign out");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: [".header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 0.5em 0 0.5em 0;\r\n    background-color: #011638;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    color: white;\r\n    cursor: pointer;\r\n    text-decoration: underline;\r\n    padding: 0 0.5em 0 0.5em;\r\n}\r\n\r\n.home[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    display: contents;\r\n    color: #F5F5FC;\r\n    margin: 0;\r\n}\r\n\r\n.options[_ngcontent-%COMP%] {\r\n    font-size: small;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n    color: #F5F5FC;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .header[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        align-items: left;\r\n        justify-content: left;\r\n    }\r\n\r\n    h1[_ngcontent-%COMP%] {\r\n        font-size: 1em;\r\n    }\r\n\r\n    .options[_ngcontent-%COMP%] {\r\n        top: 0.8em;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsd0JBQXdCO0lBQ3hCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsU0FBUztBQUNiOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLGlCQUFpQjtRQUNqQixxQkFBcUI7SUFDekI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksVUFBVTtJQUNkO0FBQ0oiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMC41ZW0gMCAwLjVlbSAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxMTYzODtcclxufVxyXG5cclxuYSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIHBhZGRpbmc6IDAgMC41ZW0gMCAwLjVlbTtcclxufVxyXG5cclxuLmhvbWUge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBkaXNwbGF5OiBjb250ZW50cztcclxuICAgIGNvbG9yOiAjRjVGNUZDO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ub3B0aW9ucyB7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjRjVGNUZDO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBsZWZ0O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICAgIH1cclxuXHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICB9XHJcblxyXG4gICAgLm9wdGlvbnMge1xyXG4gICAgICAgIHRvcDogMC44ZW07XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 4018:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu/menu.component */ 8522);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ 1790);
/* harmony import */ var _activity_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./activity-container.component */ 5464);
/* harmony import */ var _room_room_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./room/room.component */ 5106);







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
        let activity = _menu_menu_component__WEBPACK_IMPORTED_MODULE_0__.MenuComponent.getActivity(url);
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
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.Location)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 7, vars: 0, consts: [[1, "home"], [1, "header"], [1, "app"], ["id", "menu"], ["id", "activity-container"], ["id", "room"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "app-menu", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "app-activity-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "app-room", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _menu_menu_component__WEBPACK_IMPORTED_MODULE_0__.MenuComponent, _activity_container_component__WEBPACK_IMPORTED_MODULE_2__.ActivityContainerComponent, _room_room_component__WEBPACK_IMPORTED_MODULE_3__.RoomComponent], styles: [".home[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\n.app[_ngcontent-%COMP%] {\r\n    flex: 15 0 0;\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n#activity-container[_ngcontent-%COMP%] {\r\n    flex: 5;\r\n    border-radius: 0 2rem 0 0;\r\n    min-width: 300px;\r\n}\r\n\r\n#menu[_ngcontent-%COMP%] {\r\n    min-width: -webkit-fit-content;\r\n    min-width: -moz-fit-content;\r\n    min-width: fit-content;\r\n    border-right: 2px solid lightgray;\r\n}\r\n\r\n#room[_ngcontent-%COMP%] {\r\n    flex: 10 0 0;\r\n    background-color: #000000;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.invisible[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .app[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n    }\r\n\r\n    #activity-container[_ngcontent-%COMP%] {\r\n        height: 100%;\r\n        border-right: none;\r\n    }\r\n\r\n    #menu[_ngcontent-%COMP%] {\r\n        order: 3;\r\n        width: auto;\r\n    }\r\n\r\n    .room[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n\r\n    .visible-mobile[_ngcontent-%COMP%] {\r\n        display: inherit;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksT0FBTztJQUNQLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw4QkFBc0I7SUFBdEIsMkJBQXNCO0lBQXRCLHNCQUFzQjtJQUN0QixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0k7UUFDSSxzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksUUFBUTtRQUNSLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5hcHAge1xyXG4gICAgZmxleDogMTUgMCAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbiNhY3Rpdml0eS1jb250YWluZXIge1xyXG4gICAgZmxleDogNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMnJlbSAwIDA7XHJcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4jbWVudSB7XHJcbiAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgbGlnaHRncmF5O1xyXG59XHJcblxyXG4jcm9vbSB7XHJcbiAgICBmbGV4OiAxMCAwIDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5pbnZpc2libGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmFwcCB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuXHJcbiAgICAjYWN0aXZpdHktY29udGFpbmVyIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgICNtZW51IHtcclxuICAgICAgICBvcmRlcjogMztcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAucm9vbSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAudmlzaWJsZS1tb2JpbGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 8522:
/*!*********************************************!*\
  !*** ./src/app/home/menu/menu.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 4815);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8267);



class MenuComponent {
    constructor(location) {
        this.faHome = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faHome;
        this.faStore = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faStore;
        this.faComments = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faComments;
        this.faHourglass = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faHourglass;
        this.faChartPie = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faChartPie;
        this.faTasks = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faTasks;
        this.faCalendar = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faCalendar;
        this.faCog = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faCog;
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
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.Location)); };
MenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 40, vars: 0, consts: [["tabindex", "0", "id", "room-nav", "href", "/home", 3, "keydown.enter", "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-house-door"], ["fill-rule", "evenodd", "d", "M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z"], ["fill-rule", "evenodd", "d", "M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"], ["tabindex", "0", "id", "store-nav", "href", "/home/store", 3, "keydown.enter", "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-shop"], ["fill-rule", "evenodd", "d", "M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"], ["tabindex", "0", "id", "chat-nav", "href", "/home/chat", 3, "keydown.enter", "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-chat"], ["fill-rule", "evenodd", "d", "M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"], ["tabindex", "0", "id", "timer-nav", "href", "/home/timer", 3, "keydown.enter", "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-hourglass"], ["fill-rule", "evenodd", "d", "M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1-.5-.5zm2.5.5v1a3.5 3.5 0 0 0 1.989 3.158c.533.256 1.011.791 1.011 1.491v.702c0 .7-.478 1.235-1.011 1.491A3.5 3.5 0 0 0 4.5 13v1h7v-1a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351v-.702c0-.7.478-1.235 1.011-1.491A3.5 3.5 0 0 0 11.5 3V2h-7z"], ["tabindex", "0", "id", "stats-nav", "href", "/home/stats", 3, "keydown.enter", "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-graph-up"], ["fill-rule", "evenodd", "d", "M0 0h1v15h15v1H0V0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5z"], ["tabindex", "0", "id", "tasks-nav", "href", "/home/tasks", 3, "keydown.enter", "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-list-task"], ["fill-rule", "evenodd", "d", "M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"], ["d", "M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z"], ["fill-rule", "evenodd", "d", "M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"], ["tabindex", "0", "id", "settings-nav", "href", "/home/settings", 3, "keydown.enter", "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-gear"], ["fill-rule", "evenodd", "d", "M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 0 1 4.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 0 1-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 0 1 1.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 0 1 2.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 0 1 2.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 0 1 1.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 0 1-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 0 1 8.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 0 0 1.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 0 0 .52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 0 0-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 0 0-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 0 0-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 0 0-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 0 0 .52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 0 0 1.255-.52l.094-.319z"], ["fill-rule", "evenodd", "d", "M8 5.754a2.246 2.246 0 1 0 0 4.492 2.246 2.246 0 0 0 0-4.492zM4.754 8a3.246 3.246 0 1 1 6.492 0 3.246 3.246 0 0 1-6.492 0z"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.enter", function MenuComponent_Template_a_keydown_enter_1_listener($event) { return ctx.navigate("/home", $event); })("click", function MenuComponent_Template_a_click_1_listener($event) { return ctx.navigate("/home", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Test");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.enter", function MenuComponent_Template_a_keydown_enter_7_listener($event) { return ctx.navigate("/home/store", $event); })("click", function MenuComponent_Template_a_click_7_listener($event) { return ctx.navigate("/home/store", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.enter", function MenuComponent_Template_a_keydown_enter_12_listener($event) { return ctx.navigate("/home/chat", $event); })("click", function MenuComponent_Template_a_click_12_listener($event) { return ctx.navigate("/home/chat", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.enter", function MenuComponent_Template_a_keydown_enter_17_listener($event) { return ctx.navigate("/home/timer", $event); })("click", function MenuComponent_Template_a_click_17_listener($event) { return ctx.navigate("/home/timer", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Timer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.enter", function MenuComponent_Template_a_keydown_enter_22_listener($event) { return ctx.navigate("/home/stats", $event); })("click", function MenuComponent_Template_a_click_22_listener($event) { return ctx.navigate("/home/stats", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Stats");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.enter", function MenuComponent_Template_a_keydown_enter_27_listener($event) { return ctx.navigate("/home/tasks", $event); })("click", function MenuComponent_Template_a_click_27_listener($event) { return ctx.navigate("/home/tasks", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "svg", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.enter", function MenuComponent_Template_a_keydown_enter_34_listener($event) { return ctx.navigate("/home/settings", $event); })("click", function MenuComponent_Template_a_click_34_listener($event) { return ctx.navigate("/home/settings", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "svg", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["nav[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: left;\r\n    height: 100%;\r\n    background-color: white;\r\n    padding: 0.5ch;\r\n}\r\n\r\nsvg[_ngcontent-%COMP%] {\r\n    margin-right: 1ch;\r\n    scale: 2;\r\n}\r\n\r\nspan[_ngcontent-%COMP%] {\r\n    font-size: 0.8em\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    color: #b4b4b4;\r\n    display: block;\r\n    cursor: pointer;\r\n    font-size: 24px;\r\n    text-decoration: none;\r\n    text-align: left;\r\n    padding: 0.2em 0.2em 0.2em 0.1em;\r\n    margin: 1ch;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover:not(.selected), a[_ngcontent-%COMP%]:focus {\r\n    color: black;\r\n    outline: none;\r\n}\r\n\r\n.selected[_ngcontent-%COMP%] {\r\n    color: black;\r\n    outline: none;\r\n}\r\n\r\n#room-nav[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n@media only screen and (max-height: 420px) {\r\n    #settings-nav[_ngcontent-%COMP%] {\r\n        position: relative;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 1600px) {\r\n    span[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n\r\n    svg[_ngcontent-%COMP%] {\r\n        margin-right: 0;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    nav[_ngcontent-%COMP%] {\r\n        flex-direction: row;\r\n        border-top: solid 1px black;\r\n        padding: 0.5rem 0 0.5rem 0;\r\n        margin-top: auto;\r\n        height: auto;\r\n    }\r\n\r\n    a[_ngcontent-%COMP%] {\r\n        flex-grow: 1;\r\n    }\r\n\r\n    #settings-nav[_ngcontent-%COMP%] {\r\n        position: relative;\r\n    }\r\n\r\n    #room-nav[_ngcontent-%COMP%] {\r\n        display: block;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 600px) {\r\n    nav[_ngcontent-%COMP%] {\r\n        border-radius: 0 2rem 0 0;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixRQUFRO0FBQ1o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsY0FBYztJQUNkLGVBQWU7SUFDZixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixnQ0FBZ0M7SUFDaEMsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxtQkFBbUI7UUFDbkIsMkJBQTJCO1FBQzNCLDBCQUEwQjtRQUMxQixnQkFBZ0I7UUFDaEIsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHlCQUF5QjtJQUM3QjtBQUNKIiwiZmlsZSI6Im1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBsZWZ0O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAwLjVjaDtcclxufVxyXG5cclxuc3ZnIHtcclxuICAgIG1hcmdpbi1yaWdodDogMWNoO1xyXG4gICAgc2NhbGU6IDI7XHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAwLjhlbVxyXG59XHJcblxyXG5hIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6ICNiNGI0YjQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAwLjJlbSAwLjJlbSAwLjJlbSAwLjFlbTtcclxuICAgIG1hcmdpbjogMWNoO1xyXG59XHJcblxyXG5hOmhvdmVyOm5vdCguc2VsZWN0ZWQpLCBhOmZvY3VzIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5zZWxlY3RlZCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4jcm9vbS1uYXYge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDIwcHgpIHtcclxuICAgICNzZXR0aW5ncy1uYXYge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIHtcclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgc3ZnIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIG5hdiB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggYmxhY2s7XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtIDAgMC41cmVtIDA7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgYSB7XHJcbiAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgfVxyXG5cclxuICAgICNzZXR0aW5ncy1uYXYge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICAjcm9vbS1uYXYge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XHJcbiAgICBuYXYge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMnJlbSAwIDA7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 2164:
/*!*********************************************!*\
  !*** ./src/app/home/room-change.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoomChangeService": () => (/* binding */ RoomChangeService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4008);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);


class RoomChangeService {
    constructor() {
        this.changeSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.roomId = this.changeSource.asObservable();
    }
    setRoom(roomId) {
        this.changeSource.next(roomId);
        this.currentRoomId = roomId;
    }
}
RoomChangeService.ɵfac = function RoomChangeService_Factory(t) { return new (t || RoomChangeService)(); };
RoomChangeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RoomChangeService, factory: RoomChangeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6419:
/*!*************************************!*\
  !*** ./src/app/home/room/images.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "images": () => (/* binding */ images)
/* harmony export */ });
const images = ['floor.png', 'alien.png', 'bear.png', 'bear-shadow.png'];


/***/ }),

/***/ 9690:
/*!*********************************************!*\
  !*** ./src/app/home/room/object-factory.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObjectFactory": () => (/* binding */ ObjectFactory)
/* harmony export */ });
/* harmony import */ var _root_player_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./root/player/player */ 5588);
/* harmony import */ var _root_tile_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./root/tile-map */ 7217);
/* harmony import */ var kontra__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kontra */ 8382);
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
                object = new _root_tile_map__WEBPACK_IMPORTED_MODULE_1__.TileMap(data["width"], data["height"], data["layers"], this.socketService);
                break;
            }
            case 1: {
                // player
                console.log(data);
                object = new _root_player_player__WEBPACK_IMPORTED_MODULE_0__.Player(this.room, data["id"], data["display_name"], new kontra__WEBPACK_IMPORTED_MODULE_2__.Vector(data["translation_x"], data["translation_y"]));
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

/***/ 5106:
/*!*********************************************!*\
  !*** ./src/app/home/room/room.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoomComponent": () => (/* binding */ RoomComponent)
/* harmony export */ });
/* harmony import */ var kontra__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! kontra */ 8382);
/* harmony import */ var src_app_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/handler */ 8133);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images */ 6419);
/* harmony import */ var _object_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./object-factory */ 9690);
/* harmony import */ var _root_player_player_tooltip_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./root/player/player-tooltip.directive */ 1740);
/* harmony import */ var _root_player_player_tooltip_player_tooltip_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./root/player/player-tooltip/player-tooltip.component */ 6482);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/socket/socket.service */ 841);
/* harmony import */ var _room_change_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../room-change.service */ 2164);










function RoomComponent_ng_template_11_Template(rf, ctx) { }
class RoomComponent extends src_app_handler__WEBPACK_IMPORTED_MODULE_0__.Handler {
    constructor(socketService, roomChangeService, componentFactoryResolver) {
        super();
        this.socketService = socketService;
        this.roomChangeService = roomChangeService;
        this.objects = new Map();
        this.objectFactory = new _object_factory__WEBPACK_IMPORTED_MODULE_2__.ObjectFactory(this, socketService);
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
        let { canvas, context } = (0,kontra__WEBPACK_IMPORTED_MODULE_7__.init)(document.getElementById("game"));
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
        (0,kontra__WEBPACK_IMPORTED_MODULE_7__.setImagePath)('/assets/room/');
        kontra__WEBPACK_IMPORTED_MODULE_7__.load.apply(null, _images__WEBPACK_IMPORTED_MODULE_1__.images);
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
            let loop = (0,kontra__WEBPACK_IMPORTED_MODULE_7__.GameLoop)({
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
        let roomPosition = new kontra__WEBPACK_IMPORTED_MODULE_7__.Vector(document.getElementById("game").offsetLeft, document.getElementById("game").offsetTop);
        let playerPositionCanvas = roomPosition.add(position).add(new kontra__WEBPACK_IMPORTED_MODULE_7__.Vector(64, 0));
        const viewContainerRef = this.playerTooltipHost.viewContainerRef;
        viewContainerRef.clear();
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(_root_player_player_tooltip_player_tooltip_component__WEBPACK_IMPORTED_MODULE_4__.PlayerTooltipComponent);
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
RoomComponent.ɵfac = function RoomComponent_Factory(t) { return new (t || RoomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_5__.SocketService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_room_change_service__WEBPACK_IMPORTED_MODULE_6__.RoomChangeService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ComponentFactoryResolver)); };
RoomComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: RoomComponent, selectors: [["app-room"]], viewQuery: function RoomComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_root_player_player_tooltip_directive__WEBPACK_IMPORTED_MODULE_3__.PlayerTooltipDirective, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.playerTooltipHost = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]], decls: 12, vars: 0, consts: [[1, "room"], ["id", "game", "width", "128", "height", "128"], ["id", "game-log", "role", "log"], ["appPlayerTooltip", ""]], template: function RoomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Move North");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Move South");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Move East");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Move West");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, RoomComponent_ng_template_11_Template, 0, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } }, directives: [_root_player_player_tooltip_directive__WEBPACK_IMPORTED_MODULE_3__.PlayerTooltipDirective], styles: ["canvas[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    border-radius: 2rem 2rem 0 0;\r\n    background-color: #238531;\r\n}\r\n\r\n.room[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex: 1 0 0;\r\n    background-color: #011638;\r\n}\r\n\r\n@media only screen and (min-width: 600px) {\r\n    canvas[_ngcontent-%COMP%] {\r\n        border-radius: 2rem 0 0 0;\r\n        margin-left: 4ch;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvb20uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0k7UUFDSSx5QkFBeUI7UUFDekIsZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoicm9vbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiY2FudmFzIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW0gMnJlbSAwIDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM4NTMxO1xyXG59XHJcblxyXG4ucm9vbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXg6IDEgMCAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxMTYzODtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gICAgY2FudmFzIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAycmVtIDAgMCAwO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0Y2g7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 1740:
/*!*******************************************************************!*\
  !*** ./src/app/home/room/root/player/player-tooltip.directive.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerTooltipDirective": () => (/* binding */ PlayerTooltipDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class PlayerTooltipDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
PlayerTooltipDirective.ɵfac = function PlayerTooltipDirective_Factory(t) { return new (t || PlayerTooltipDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef)); };
PlayerTooltipDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PlayerTooltipDirective, selectors: [["", "appPlayerTooltip", ""]] });


/***/ }),

/***/ 6482:
/*!**********************************************************************************!*\
  !*** ./src/app/home/room/root/player/player-tooltip/player-tooltip.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerTooltipComponent": () => (/* binding */ PlayerTooltipComponent)
/* harmony export */ });
/* harmony import */ var src_app_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/handler */ 8133);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/socket/socket.service */ 841);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 5798);
/* harmony import */ var _activities_tasks_list_task_task_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../activities/tasks/list/task/task.component */ 9075);





class PlayerTooltipComponent extends src_app_handler__WEBPACK_IMPORTED_MODULE_0__.Handler {
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
PlayerTooltipComponent.ɵfac = function PlayerTooltipComponent_Factory(t) { return new (t || PlayerTooltipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_socket_socket_service__WEBPACK_IMPORTED_MODULE_1__.SocketService)); };
PlayerTooltipComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PlayerTooltipComponent, selectors: [["app-player-tooltip"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 9, vars: 8, consts: [["cdkDrag", "", 1, "tooltip"], [1, "tooltip-header"], [1, "close-task", 3, "keydown.enter", "click"], [3, "isListing", "data"]], template: function PlayerTooltipComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keydown.enter", function PlayerTooltipComponent_Template_a_keydown_enter_4_listener() { return ctx.onClose(); })("click", function PlayerTooltipComponent_Template_a_click_4_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "app-task", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("left", ctx.x)("top", ctx.y);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.displayName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.displayName, " is currently working on:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isListing", false)("data", ctx.activeTaskData);
    } }, directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.CdkDrag, _activities_tasks_list_task_task_component__WEBPACK_IMPORTED_MODULE_2__.TaskComponent], styles: [".tooltip[_ngcontent-%COMP%] {\r\n    cursor: move;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    padding-top: 0.5em;\r\n    padding-bottom: 0.5em;\r\n    position: fixed;\r\n    overflow: auto;\r\n    width: 300px;\r\n    background-color: white;\r\n    padding: 1rem 2ch 1rem 2ch;\r\n    border-radius: 2em;\r\n    box-shadow: 0 1rem 1px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.tooltip-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n}\r\n\r\n.close-task[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    padding: 1ch;\r\n    border-radius: 1ch;\r\n    align-self: flex-end;\r\n}\r\n\r\n.close-task[_ngcontent-%COMP%]:hover, .close-task[_ngcontent-%COMP%]:focus {\r\n    background-color: lightgray;\r\n    cursor: pointer;\r\n}\r\n\r\napp-task-preview[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllci10b29sdGlwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsY0FBYztJQUNkLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQiwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxPQUFPO0FBQ1giLCJmaWxlIjoicGxheWVyLXRvb2x0aXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sdGlwIHtcclxuICAgIGN1cnNvcjogbW92ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMC41ZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMXJlbSAyY2ggMXJlbSAyY2g7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyZW07XHJcbiAgICBib3gtc2hhZG93OiAwIDFyZW0gMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG4udG9vbHRpcC1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuaDMge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uY2xvc2UtdGFzayB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmc6IDFjaDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFjaDtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uY2xvc2UtdGFzazpob3ZlciwgLmNsb3NlLXRhc2s6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5hcHAtdGFzay1wcmV2aWV3IHtcclxuICAgIGZsZXg6IDE7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 5588:
/*!*************************************************!*\
  !*** ./src/app/home/room/root/player/player.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var kontra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kontra */ 8382);

const speed = 5;
class Player extends kontra__WEBPACK_IMPORTED_MODULE_0__.Sprite["class"] {
    constructor(room, id, displayName, position) {
        let spriteSheet = (0,kontra__WEBPACK_IMPORTED_MODULE_0__.SpriteSheet)({
            image: kontra__WEBPACK_IMPORTED_MODULE_0__.imageAssets.bear,
            frameWidth: 128,
            frameHeight: 128,
            animations: {
                walkFR: {
                    frames: '0..47',
                    frameRate: 90
                },
                idleFR: {
                    frames: '48..195',
                    frameRate: 0
                },
                walkFL: {
                    frames: '49..96',
                    frameRate: 90
                },
                idleFL: {
                    frames: '97..195',
                    frameRate: 0
                },
                walkBR: {
                    frames: '98..145',
                    frameRate: 90
                },
                idleBR: {
                    frames: '146...195',
                    frameRate: 0
                },
                walkBL: {
                    frames: '147..194',
                    frameRate: 90
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
            children: [new kontra__WEBPACK_IMPORTED_MODULE_0__.Button({
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
                                room.openPlayerTooltip(displayName, id, (0,kontra__WEBPACK_IMPORTED_MODULE_0__.Vector)((0,kontra__WEBPACK_IMPORTED_MODULE_0__.getWorldRect)(this).x, (0,kontra__WEBPACK_IMPORTED_MODULE_0__.getWorldRect)(this).y));
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
                                (0,kontra__WEBPACK_IMPORTED_MODULE_0__.getCanvas)().style.cursor = "pointer";
                            }
                        }
                        else {
                            if (this.previouslyHovered == true) {
                                this.previouslyHovered = false;
                                (0,kontra__WEBPACK_IMPORTED_MODULE_0__.getCanvas)().style.cursor = "initial";
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
        this.target = (0,kontra__WEBPACK_IMPORTED_MODULE_0__.Vector)(this.x, this.y);
        (0,kontra__WEBPACK_IMPORTED_MODULE_0__.track)(this);
        this.shadow = (0,kontra__WEBPACK_IMPORTED_MODULE_0__.Sprite)({
            image: kontra__WEBPACK_IMPORTED_MODULE_0__.imageAssets["bear-shadow"],
            opacity: 0.5,
            y: 96
        });
    }
    update() {
        let distance = this.target.distance((0,kontra__WEBPACK_IMPORTED_MODULE_0__.Vector)(this.x, this.y));
        // also cancel movement upon collision! maybe upon collision, set target to position?
        if (distance > 4) {
            this.velocity = (0,kontra__WEBPACK_IMPORTED_MODULE_0__.Vector)(this.direction.x * speed, this.direction.y * speed);
        }
        else if (!this.playingAnimation.includes('idle')) {
            this.playingAnimation = this.playingAnimation.replace('walk', 'idle');
            this.playAnimation(this.playingAnimation);
            this.reportLocation();
            this.target = (0,kontra__WEBPACK_IMPORTED_MODULE_0__.Vector)(this.x, this.y);
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
        let nameTag = new kontra__WEBPACK_IMPORTED_MODULE_0__.Text({
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
        this.target = (0,kontra__WEBPACK_IMPORTED_MODULE_0__.Vector)(msg["position_x"] - 128 / 2, msg["position_y"] - 128 / 2);
        this.direction = (0,kontra__WEBPACK_IMPORTED_MODULE_0__.Vector)(this.target.x - this.x, this.target.y - this.y).normalize();
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

/***/ 7217:
/*!********************************************!*\
  !*** ./src/app/home/room/root/tile-map.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TileMap": () => (/* binding */ TileMap)
/* harmony export */ });
/* harmony import */ var kontra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kontra */ 8382);

const epsilon = 0.0000000000001;
class TileMap extends kontra__WEBPACK_IMPORTED_MODULE_0__.GameObject["class"] {
    constructor(width, height, layers, socketService) {
        super();
        let img = kontra__WEBPACK_IMPORTED_MODULE_0__.imageAssets.floor;
        this.tileEngine = (0,kontra__WEBPACK_IMPORTED_MODULE_0__.TileEngine)({
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
        (0,kontra__WEBPACK_IMPORTED_MODULE_0__.initPointer)();
        this.moveButton = new kontra__WEBPACK_IMPORTED_MODULE_0__.Button({
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
                    let pointer = (0,kontra__WEBPACK_IMPORTED_MODULE_0__.getPointer)();
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

/***/ 4450:
/*!*********************************************************************!*\
  !*** ./src/app/landing-page/landing-page/landing-page.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingPageComponent": () => (/* binding */ LandingPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8267);


function LandingPageComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function LandingPageComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Continue to Cowork");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LandingPageComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
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
LandingPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingPageComponent, selectors: [["app-landing-page"]], decls: 22, vars: 3, consts: [[1, "landing-page"], ["id", "options"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["elseBlock", ""], [1, "hero", "section"], [1, "statement"], ["id", "logo", "src", "../../../assets/icons/icon.png"], ["href", "/auth/sign-in"], [1, "cta"], [1, "demo"], ["src", "../../../assets/landing-page/demo.mp4", "autoplay", "", "loop", "", "muted", ""], [1, "more"], ["href", "/home"], ["href", "/auth/sign-in", "id", "entry-link"]], template: function LandingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LandingPageComponent_div_2_Template, 1, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LandingPageComponent_ng_template_3_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LandingPageComponent_ng_template_5_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Cowork");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "A shared, social space to help you get your work done");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Launch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "video", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "This is supposed to appear after the rest of it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn)("ngIfThen", _r1)("ngIfElse", _r3);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: [".landing-page[_ngcontent-%COMP%] {\r\n    align-content: center;\r\n    justify-content: center;\r\n    color: white;\r\n}\r\n\r\n.hero[_ngcontent-%COMP%] {\r\n    background-color: #011638;\r\n}\r\n\r\n.section[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    height: 90vh;\r\n    padding: 0 12ch 0 12ch;\r\n}\r\n\r\n.statement[_ngcontent-%COMP%] {\r\n    margin-right: 6ch;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-content: center;\r\n    justify-content: center;\r\n}\r\n\r\n.cta[_ngcontent-%COMP%] {\r\n    font-size: 2em;\r\n    align-self: flex-start;\r\n}\r\n\r\n.statement[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n}\r\n\r\n.demo[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\nvideo[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n    border-radius: 2em;\r\n    border: solid ghostwhite 4px;\r\n}\r\n\r\n#logo[_ngcontent-%COMP%] {\r\n    height: 128px;\r\n    width: 128px;\r\n    margin-left: -32px;\r\n}\r\n\r\n.more[_ngcontent-%COMP%] {\r\n    color: #011638;\r\n    padding: 0 25% 0 25%;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    color: #7B869A;\r\n    padding: 0 0.5em 0 0.5em;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n    color: #F5F5FC;\r\n}\r\n\r\n#options[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 1em;\r\n    top: 1em;\r\n    display: flex;\r\n    font-size: small;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    font-size: 4em;\r\n    margin: 0;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n    font-size: 2em;\r\n}\r\n\r\n@media only screen and (max-width: 1280px) {\r\n    h1[_ngcontent-%COMP%] {\r\n        font-size: 2em;\r\n        margin: 0;\r\n    }\r\n    \r\n    h2[_ngcontent-%COMP%] {\r\n        font-size: 1em;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsUUFBUTtJQUNSLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsU0FBUztBQUNiOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJO1FBQ0ksY0FBYztRQUNkLFNBQVM7SUFDYjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7QUFDSiIsImZpbGUiOiJsYW5kaW5nLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYW5kaW5nLXBhZ2Uge1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5oZXJvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTE2Mzg7XHJcbn1cclxuXHJcbi5zZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDkwdmg7XHJcbiAgICBwYWRkaW5nOiAwIDEyY2ggMCAxMmNoO1xyXG59XHJcblxyXG4uc3RhdGVtZW50IHtcclxuICAgIG1hcmdpbi1yaWdodDogNmNoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmN0YSB7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5zdGF0ZW1lbnQgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5kZW1vIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbnZpZGVvIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJlbTtcclxuICAgIGJvcmRlcjogc29saWQgZ2hvc3R3aGl0ZSA0cHg7XHJcbn1cclxuXHJcbiNsb2dvIHtcclxuICAgIGhlaWdodDogMTI4cHg7XHJcbiAgICB3aWR0aDogMTI4cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTMycHg7XHJcbn1cclxuXHJcbi5tb3JlIHtcclxuICAgIGNvbG9yOiAjMDExNjM4O1xyXG4gICAgcGFkZGluZzogMCAyNSUgMCAyNSU7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgY29sb3I6ICM3Qjg2OUE7XHJcbiAgICBwYWRkaW5nOiAwIDAuNWVtIDAgMC41ZW07XHJcbn1cclxuXHJcbmE6aG92ZXIge1xyXG4gICAgY29sb3I6ICNGNUY1RkM7XHJcbn1cclxuXHJcbiNvcHRpb25zIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxZW07XHJcbiAgICB0b3A6IDFlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBmb250LXNpemU6IDRlbTtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuaDIge1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 9757:
/*!********************************************************!*\
  !*** ./src/app/panel-header/panel-header.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelHeaderComponent": () => (/* binding */ PanelHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class PanelHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
PanelHeaderComponent.ɵfac = function PanelHeaderComponent_Factory(t) { return new (t || PanelHeaderComponent)(); };
PanelHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PanelHeaderComponent, selectors: [["app-panel-header"]], inputs: { header: "header" }, decls: 3, vars: 1, consts: [[1, "header"]], template: function PanelHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.header);
    } }, styles: [".header[_ngcontent-%COMP%] {\r\n    display: block;\r\n    text-align: center;\r\n    padding: 0.2em 0 0.2em 0;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n    display: contents;\r\n    text-decoration: none;\r\n    color: #011638;\r\n    margin: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhbmVsLWhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsU0FBUztBQUNiIiwiZmlsZSI6InBhbmVsLWhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAuMmVtIDAgMC4yZW0gMDtcclxufVxyXG5cclxuaDEge1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICMwMTE2Mzg7XHJcbiAgICBtYXJnaW46IDA7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 841:
/*!******************************************!*\
  !*** ./src/app/socket/socket.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocketService": () => (/* binding */ SocketService)
/* harmony export */ });
/* harmony import */ var rxjs_webSocket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/webSocket */ 7106);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4008);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3981);




class SocketService {
    constructor(httpClient) {
        this.unsentMessages = [];
        this.httpClient = httpClient;
        this.replySource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.reply = this.replySource.asObservable();
        this.replySources = new Map();
        this.channelReply = new Map();
        this.establishWebsocket();
    }
    establishWebsocket() {
        this.httpClient.get('https://ws.cowork.ac', { responseType: 'text', withCredentials: true }).subscribe(data => {
            this.socket = (0,rxjs_webSocket__WEBPACK_IMPORTED_MODULE_1__.webSocket)('wss://ws.cowork.ac:4433');
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
        this.replySources.set(channel, new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject());
        this.channelReply.set(channel, this.replySources.get(channel).asObservable());
    }
}
SocketService.ɵfac = function SocketService_Factory(t) { return new (t || SocketService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
SocketService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SocketService, factory: SocketService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2082:
/*!**************************************************************!*\
  !*** ./src/app/web-monetization/web-monetization.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebMonetizationService": () => (/* binding */ WebMonetizationService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4008);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);



class WebMonetizationService {
    constructor(document) {
        this.document = document;
        this.monetizationSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
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
WebMonetizationService.ɵfac = function WebMonetizationService_Factory(t) { return new (t || WebMonetizationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT)); };
WebMonetizationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: WebMonetizationService, factory: WebMonetizationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 4750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 8260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map