(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".latency{\r\n    color: blue\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGF0ZW5jeXtcclxuICAgIGNvbG9yOiBibHVlXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"padding:20px\" class=\"mat-app-background\">\r\n  <div fxFlex fxLayout=\"column\" fxLayoutGap=\"20px\">\r\n    <div>\r\n      <h3>Transwave Demo</h3>\r\n    </div>\r\n    <div>\r\n      <div>\r\n        <label for=\"language\">Choose a Language To Translate to:</label>\r\n        <select id=\"language\" placeholder=\"Select Language\" [(ngModel)]=\"selectedLanguage\"\r\n          (ngModelChange)=\"onLanguageChange($event)\">\r\n          <option *ngFor=\"let language of languages\" [value]=\"language.code\">\r\n            {{language.name}}\r\n          </option>\r\n        </select>\r\n      </div>\r\n      <!-- drop down listing languages -->\r\n      <div>\r\n        <button mat-raised-button color=\"primary\" id=\"btnStart\" (click)=\"switchSpeechRecognition()\">\r\n          {{ buttonText }}\r\n        </button>\r\n      </div>\r\n\r\n      \r\n      \r\n    </div>\r\n    <div>\r\n      <form>\r\n        <mat-form-field fxFlex=\"60\">\r\n          <textarea #results name=\"results\" [(ngModel)]=\"textData\" readonly matInput rows=\"11\"></textarea>\r\n        </mat-form-field>\r\n\r\n        <div>\r\n          <label *ngIf=\"canShowSound;\" for=\"translatedLanguage\">Translated Text:</label>\r\n          <textarea id=\"translatedLanguage\" rows=\"5\" [(ngModel)]=\"translatedLanguage\" readonly></textarea>\r\n        </div>\r\n        <hr>\r\n        <div>\r\n          <audio *ngIf=\"canShowSound; else noSound\" controls>\r\n            <source [src]=\"voiceUrl\" type=\"audio/mp3\">\r\n            Your browser does not support the audio element.\r\n          </audio>\r\n        </div>\r\n        <ng-template #noSound>\r\n          <p>Sound isn't ready yet. Try clicking the translate button!</p>\r\n        </ng-template>\r\n      </form>\r\n      <div>\r\n        <h2 class=\"latency\">AVERAGE ROUND TRIP LATENCY BETWEEN THE CLIENT AND INFERENCE SERVER</h2>\r\n        <h3 class=\"latency\">{{ping | number:'1.0-0'}}ms</h3>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dictate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dictate-service */ "./src/app/dictate-service.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _ping_service_ts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ping.service.ts.service */ "./src/app/ping.service.ts.service.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./src/app/constants.js");
/* harmony import */ var _translate_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./translate.service */ "./src/app/translate.service.ts");








var AppComponent = /** @class */ (function () {
    function AppComponent(dictateService, _pingService, _translateService) {
        var _this = this;
        this.dictateService = dictateService;
        this._pingService = _pingService;
        this._translateService = _translateService;
        this.buttonText = 'Start Recognition';
        this.textDataBase = '';
        this.textData = '';
        this.ping = 0;
        this.canShowSound = false;
        this.voiceUrl = '';
        this.languages = _constants__WEBPACK_IMPORTED_MODULE_5__["default"];
        this.selectedLanguage = '';
        this.translatedLanguage = "";
        this.sourceLang = 'en';
        this._pingService.pingStream.subscribe(function (ping) {
            _this.ping = ping;
        });
    }
    AppComponent.prototype.switchSpeechRecognition = function () {
        var _this = this;
        if (!this.dictateService.isInitialized()) {
            this.dictateService.init({
                server: "wss://mageweave.xyz/websocket",
                onResults: function (hyp) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var _a, _b;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                console.log(hyp);
                                this.textDataBase = this.textDataBase + hyp + '\n';
                                this.textData = this.textDataBase;
                                this.results.nativeElement.scrollTop = this.results.nativeElement.scrollHeight;
                                _a = this;
                                return [4 /*yield*/, this._translateService.translateToLang(this.textData, this.sourceLang, this.selectedLanguage)];
                            case 1:
                                _a.translatedLanguage = _c.sent();
                                _b = this;
                                return [4 /*yield*/, this._translateService.textToVoice(this.selectedLanguage, this.translatedLanguage)];
                            case 2:
                                _b.voiceUrl = _c.sent();
                                this.canShowSound = true;
                                return [2 /*return*/];
                        }
                    });
                }); },
                onPartialResults: function (hyp) {
                    console.log(hyp);
                    _this.textData = _this.textDataBase + hyp;
                    _this.canShowSound ? _this.canShowSound = false : null;
                },
                onError: function (code, data) {
                    console.log(code, data);
                },
                onEvent: function (code, data) {
                    console.log(code, data);
                }
            });
            this.buttonText = 'Stop Recognition';
        }
        else if (this.dictateService.isRunning()) {
            this.dictateService.resume();
            this.buttonText = 'Stop Recognition';
        }
        else {
            this.dictateService.pause();
            this.buttonText = 'Start Recognition';
        }
    };
    AppComponent.prototype.onLanguageChange = function (event) {
        console.log(event);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('results'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AppComponent.prototype, "results", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            providers: [_dictate_service__WEBPACK_IMPORTED_MODULE_2__["DictateService"], _ping_service_ts_service__WEBPACK_IMPORTED_MODULE_4__["PingService"]],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dictate_service__WEBPACK_IMPORTED_MODULE_2__["DictateService"], _ping_service_ts_service__WEBPACK_IMPORTED_MODULE_4__["PingService"], _translate_service__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["NoopAnimationsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                // import HttpClientModule after BrowserModule.
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/constants.js":
/*!******************************!*\
  !*** ./src/app/constants.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const languages = [{name: 'Spanish', code: 'es'},
{name: 'French', code: 'fr'}, {name: 'Mandarin', code: 'zh'},
{name: 'Russian', code: 'ru'}, {name: 'Japanese', code: 'jap'}];

/* harmony default export */ __webpack_exports__["default"] = (languages);


/***/ }),

/***/ "./src/app/dictate-service.ts":
/*!************************************!*\
  !*** ./src/app/dictate-service.ts ***!
  \************************************/
/*! exports provided: DictateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DictateService", function() { return DictateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DictateService = /** @class */ (function () {
    function DictateService() {
        // Defaults
        this.SERVER = "wss://mageweave.xyz/websocket";
        // Send blocks 4 x per second as recommended in the server doc.
        this.INTERVAL = 250;
        // Path to worker javascript
        this.WORKER_PATH = 'assets/recorder-worker.js';
        // Error codes (mostly following Android error names and codes)
        this.ERR_NETWORK = 2;
        this.ERR_AUDIO = 3;
        this.ERR_SERVER = 4;
        this.ERR_CLIENT = 5;
        // Event codes
        this.MSG_WAITING_MICROPHONE = 1;
        this.MSG_MEDIA_STREAM_CREATED = 2;
        this.MSG_INIT_RECORDER = 3;
        this.MSG_RECORDING = 4;
        this.MSG_SEND = 5;
        this.MSG_SEND_EMPTY = 6;
        this.MSG_SEND_EOS = 7;
        this.MSG_WEB_SOCKET = 8;
        this.MSG_WEB_SOCKET_OPEN = 9;
        this.MSG_WEB_SOCKET_CLOSE = 10;
        this.MSG_STOP = 11;
        this.MSG_SERVER_CHANGED = 12;
    }
    DictateService.prototype.init = function (cfg) {
        this.config = cfg || {};
        this.config.server = this.config.server || this.SERVER;
        this.config.audioSourceId = this.config.audioSourceId;
        this.config.interval = this.config.interval || this.INTERVAL;
        this.config.onReadyForSpeech = this.config.onReadyForSpeech || function () { };
        this.config.onEndOfSpeech = this.config.onEndOfSpeech || function () { };
        this.config.onResults = this.config.onResults || function (data) { };
        this.config.onPartialResults = this.config.onPartialResults || function (data) { };
        this.config.onEndOfSession = this.config.onEndOfSession || function () { };
        this.config.onEvent = this.config.onEvent || function (e, data) { };
        this.config.onError = this.config.onError || function (e, data) { };
        this.paused = true;
        var audioSourceConstraints = {};
        this.config.onEvent(this.MSG_WAITING_MICROPHONE, "Waiting for approval to access your microphone ...");
        try {
            window.AudioContext = window.AudioContext || window.webkitAudioContext;
            navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;
            this.audioContext = new AudioContext();
            if (navigator.getUserMedia) {
                if (this.config.audioSourceId) {
                    audioSourceConstraints.audio = {
                        optional: [{ sourceId: this.config.audioSourceId }]
                    };
                }
                else {
                    audioSourceConstraints.audio = true;
                }
                navigator.getUserMedia(audioSourceConstraints, this.startUserMedia.bind(this), function (e) {
                    this.config.onError(this.ERR_CLIENT, "No live audio input in this browser: " + e);
                });
            }
            else {
                this.config.onError(this.ERR_CLIENT, "No user media support");
            }
        }
        catch (e) {
            // Firefox 24: TypeError: AudioContext is not a constructor
            // Set media.webaudio.enabled = true (in about:this.config) to fix this.
            this.config.onError(this.ERR_CLIENT, "Error initializing Web Audio browser: " + e + " " + e.stack);
        }
        try {
            this.createWebSocket();
        }
        catch (e) {
            this.config.onError(this.ERR_CLIENT, "No web socket support in this browser!" + e + " " + e.stack);
        }
    };
    DictateService.prototype.isInitialized = function () {
        return this.ws != null;
    };
    DictateService.prototype.pause = function () {
        this.paused = true;
    };
    DictateService.prototype.resume = function () {
        this.paused = false;
    };
    DictateService.prototype.isRunning = function () {
        return this.paused;
    };
    // Cancel everything without waiting on the server
    DictateService.prototype.cancel = function () {
        // Stop the regular sending of audio (if present)
        clearInterval(this.intervalKey);
        if (this.worker) {
            this.pause();
            this.clearWorker();
            this.config.onEvent(this.MSG_STOP, 'Stopped recording');
        }
        if (this.ws) {
            this.ws.close();
            this.ws = null;
        }
    };
    DictateService.prototype.startUserMedia = function (stream) {
        var input = this.audioContext.createMediaStreamSource(stream);
        this.config.onEvent(this.MSG_MEDIA_STREAM_CREATED, 'Media stream created');
        //Firefox loses the audio input stream every five seconds
        // To fix added the input to window.source
        window.source = input;
        // make the analyser available in window context
        window.userSpeechAnalyser = this.audioContext.createAnalyser();
        input.connect(window.userSpeechAnalyser);
        this.initWorker(input);
        this.config.onEvent(this.MSG_INIT_RECORDER, 'Recorder initialized');
    };
    DictateService.prototype.socketSend = function (blob) {
        if (this.paused)
            return;
        if (this.ws) {
            var state = this.ws.readyState;
            if (state == 1) {
                // If blob is an audio blob
                if (blob instanceof Blob) {
                    if (blob.size > 0) {
                        this.ws.send(blob);
                        this.config.onEvent(this.MSG_SEND, 'Send: blob: ' + blob.type + ', ' + blob.size);
                    }
                    else {
                        this.config.onEvent(this.MSG_SEND_EMPTY, 'Send: blob: ' + blob.type + ', EMPTY');
                    }
                    // Otherwise it's the EOS tag (string)
                }
                else {
                    this.ws.send(blob);
                    this.config.onEvent(this.MSG_SEND_EOS, 'Send tag: ' + blob);
                }
            }
            else {
                this.config.onError(this.ERR_NETWORK, 'WebSocket: readyState!=1: ' + state + ": failed to send: " + blob);
            }
        }
        else {
            this.config.onError(this.ERR_CLIENT, 'No web socket connection: failed to send: ' + blob);
        }
    };
    DictateService.prototype.createWebSocket = function () {
        var _this = this;
        this.ws = new WebSocket(this.config.server);
        this.ws.onmessage = function (e) {
            var data = e.data;
            _this.config.onEvent(_this.MSG_WEB_SOCKET, data);
            if (data instanceof Object && !(data instanceof Blob)) {
                _this.config.onError(_this.ERR_SERVER, 'WebSocket: onEvent: got Object that is not a Blob');
            }
            else if (data instanceof Blob) {
                _this.config.onError(_this.ERR_SERVER, 'WebSocket: got Blob');
            }
            else {
                var res = JSON.parse(data);
                if (res.continue) {
                    // do nothing
                }
                else if (res.partial) {
                    _this.config.onPartialResults(res.partial);
                }
                else if (res.text) {
                    _this.config.onResults(res.text);
                }
            }
        };
        // Start recording only if the socket becomes open
        this.ws.onopen = function (e) {
            _this.intervalKey = setInterval(function () {
                _this.exportWorkerData();
            }, _this.config.interval);
            // Start recording
            _this.resume();
            _this.config.onReadyForSpeech();
            _this.config.onEvent(_this.MSG_WEB_SOCKET_OPEN, "Opened the socket successfully");
        };
        // This can happen if the blob was too big
        // E.g. "Frame size of 65580 bytes exceeds maximum accepted frame size"
        // Status codes
        // http://tools.ietf.org/html/rfc6455#section-7.4.1
        // 1005:
        // 1006:
        this.ws.onclose = function (e) {
            var code = e.code;
            var reason = e.reason;
            var wasClean = e.wasClean;
            // The server closes the connection (only?)
            // when its endpointer triggers.
            _this.config.onEndOfSession();
            _this.config.onEvent(_this.MSG_WEB_SOCKET_CLOSE, e.code + "/" + e.reason + "/" + e.wasClean);
        };
        this.ws.onerror = function (e) {
            var data = e.data;
            _this.config.onError(_this.ERR_NETWORK, data);
        };
    };
    DictateService.prototype.initWorker = function (source) {
        var _this = this;
        var node = source.context.createScriptProcessor(4096, 1, 1);
        this.worker = new Worker(this.WORKER_PATH);
        this.worker.onmessage = function (e) {
            if (_this.paused)
                return;
            var blob = e.data;
            _this.socketSend(blob);
        };
        node.onaudioprocess = function (e) {
            if (_this.paused)
                return;
            _this.worker.postMessage({
                command: 'record',
                buffer: [
                    e.inputBuffer.getChannelData(0)
                ]
            });
        };
        this.worker.postMessage({
            command: 'init',
            config: {
                sampleRate: source.context.sampleRate
            }
        });
        source.connect(node);
        node.connect(source.context.destination); //TODO: this should not be necessary (try to remove it)
    };
    DictateService.prototype.clearWorker = function () {
        this.worker.postMessage({ command: 'clear' });
    };
    DictateService.prototype.exportWorkerData = function () {
        this.worker.postMessage({ command: 'exportData' });
    };
    DictateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DictateService);
    return DictateService;
}());



/***/ }),

/***/ "./src/app/ping.service.ts.service.ts":
/*!********************************************!*\
  !*** ./src/app/ping.service.ts.service.ts ***!
  \********************************************/
/*! exports provided: PingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PingService", function() { return PingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");

//our root app component




var PingService = /** @class */ (function () {
    function PingService(_http) {
        var _this = this;
        this._http = _http;
        this.pingStream = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.ping = 0;
        this.url = "/latency";
        rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["Observable"].interval(5000)
            .subscribe(function (data) {
            var timeStart = performance.now();
            _this._http.get(_this.url)
                .subscribe(function (data) {
                var timeEnd = performance.now();
                var ping = timeEnd - timeStart;
                _this.ping = ping;
                _this.pingStream.next(ping);
            });
        });
    }
    PingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PingService);
    return PingService;
}());



/***/ }),

/***/ "./src/app/translate.service.ts":
/*!**************************************!*\
  !*** ./src/app/translate.service.ts ***!
  \**************************************/
/*! exports provided: TranslateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateService", function() { return TranslateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var TranslateService = /** @class */ (function () {
    function TranslateService(_httpClient) {
        this._httpClient = _httpClient;
        this.translateToLangUrl = "/mlservice/translate";
        this.textToVoiceUrl = "/mlservice/voice";
    }
    TranslateService.prototype.translateToLang = function (text, source, target) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._httpClient.post(this.translateToLangUrl, { text: text, source: source, target: target }).toPromise()];
                    case 1:
                        result = _a.sent();
                        console.log(result.output[0]);
                        return [2 /*return*/, result.output[0]];
                }
            });
        });
    };
    TranslateService.prototype.textToVoice = function (lang, text) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._httpClient.post(this.textToVoiceUrl, { lang: lang, text: text }).toPromise()];
                    case 1:
                        result = _a.sent();
                        console.log(result.output);
                        return [2 /*return*/, result.output];
                }
            });
        });
    };
    TranslateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TranslateService);
    return TranslateService;
}());



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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\user\OneDrive\Documents\Apps\vosk-server\client-samples\angular-demo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map