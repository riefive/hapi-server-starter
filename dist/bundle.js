!function(n){var Q={};function I(F){if(Q[F])return Q[F].exports;var e=Q[F]={i:F,l:!1,exports:{}};return n[F].call(e.exports,e,e.exports,I),e.l=!0,e.exports}I.m=n,I.c=Q,I.d=function(n,Q,F){I.o(n,Q)||Object.defineProperty(n,Q,{enumerable:!0,get:F})},I.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},I.t=function(n,Q){if(1&Q&&(n=I(n)),8&Q)return n;if(4&Q&&"object"==typeof n&&n&&n.__esModule)return n;var F=Object.create(null);if(I.r(F),Object.defineProperty(F,"default",{enumerable:!0,value:n}),2&Q&&"string"!=typeof n)for(var e in n)I.d(F,e,function(Q){return n[Q]}.bind(null,e));return F},I.n=function(n){var Q=n&&n.__esModule?function(){return n.default}:function(){return n};return I.d(Q,"a",Q),Q},I.o=function(n,Q){return Object.prototype.hasOwnProperty.call(n,Q)},I.p="dist/",I(I.s=9)}([function(module,exports){eval('module.exports = require("joi");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqb2lcIj83ZTVjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqb2lcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n')},function(module,exports){eval('module.exports = require("hapi");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJoYXBpXCI/ZTMwMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaGFwaVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n')},function(module,exports){eval('module.exports = require("fs");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiP2E0MGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n')},function(module,exports){eval('module.exports = require("path");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n')},function(module,exports,__webpack_require__){eval("let Handlers = __webpack_require__(5);\n\nexports.register = function (server, options) {\n    var io = __webpack_require__(6)(server.listener, {\n        serveClient: false\n    });\n    io.on('connection', function (socket) {\n        console.log('New connection!');\n        socket.on('hello', Handlers.hello);\n        socket.on('newMessage', Handlers.newMessage);\n        socket.on('goodbye', Handlers.goodbye);\n\n        socket.emit('Oh hii!');\n        socket.on('burp', () => {\n            socket.emit('Excuse you!');\n        });\n        socket.on('chat', text => {\n            console.log(text);\n            socket.emit('chat', 'hello client');\n        });\n    });\n};\n\nexports.name = 'hapi-chat';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2hhdC9pbmRleC5qcz8xMGU5Il0sIm5hbWVzIjpbIkhhbmRsZXJzIiwicmVxdWlyZSIsImV4cG9ydHMiLCJyZWdpc3RlciIsInNlcnZlciIsIm9wdGlvbnMiLCJpbyIsImxpc3RlbmVyIiwic2VydmVDbGllbnQiLCJvbiIsInNvY2tldCIsImNvbnNvbGUiLCJsb2ciLCJoZWxsbyIsIm5ld01lc3NhZ2UiLCJnb29kYnllIiwiZW1pdCIsInRleHQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxXQUFXLG1CQUFBQyxDQUFRLENBQVIsQ0FBZjs7QUFFQUMsUUFBUUMsUUFBUixHQUFtQixVQUFVQyxNQUFWLEVBQWtCQyxPQUFsQixFQUEyQjtBQUMxQyxRQUFJQyxLQUFLLG1CQUFBTCxDQUFRLENBQVIsRUFBcUJHLE9BQU9HLFFBQTVCLEVBQXNDO0FBQzNDQyxxQkFBYTtBQUQ4QixLQUF0QyxDQUFUO0FBR0FGLE9BQUdHLEVBQUgsQ0FBTSxZQUFOLEVBQW9CLFVBQVVDLE1BQVYsRUFBa0I7QUFDbENDLGdCQUFRQyxHQUFSLENBQVksaUJBQVo7QUFDQUYsZUFBT0QsRUFBUCxDQUFVLE9BQVYsRUFBbUJULFNBQVNhLEtBQTVCO0FBQ0FILGVBQU9ELEVBQVAsQ0FBVSxZQUFWLEVBQXdCVCxTQUFTYyxVQUFqQztBQUNBSixlQUFPRCxFQUFQLENBQVUsU0FBVixFQUFxQlQsU0FBU2UsT0FBOUI7O0FBRUFMLGVBQU9NLElBQVAsQ0FBWSxTQUFaO0FBQ0FOLGVBQU9ELEVBQVAsQ0FBVSxNQUFWLEVBQWtCLE1BQU07QUFDcEJDLG1CQUFPTSxJQUFQLENBQVksYUFBWjtBQUNILFNBRkQ7QUFHQU4sZUFBT0QsRUFBUCxDQUFVLE1BQVYsRUFBbUJRLElBQUQsSUFBVTtBQUN4Qk4sb0JBQVFDLEdBQVIsQ0FBWUssSUFBWjtBQUNBUCxtQkFBT00sSUFBUCxDQUFZLE1BQVosRUFBb0IsY0FBcEI7QUFDSCxTQUhEO0FBSUgsS0FkRDtBQWVILENBbkJEOztBQXFCQWQsUUFBUWdCLElBQVIsR0FBZSxXQUFmIiwiZmlsZSI6IjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgSGFuZGxlcnMgPSByZXF1aXJlKCcuL2hhbmRsZXJzJyk7XG5cbmV4cG9ydHMucmVnaXN0ZXIgPSBmdW5jdGlvbiAoc2VydmVyLCBvcHRpb25zKSB7XG4gICAgdmFyIGlvID0gcmVxdWlyZSgnc29ja2V0LmlvJykoc2VydmVyLmxpc3RlbmVyLCB7XG4gICAgICAgIHNlcnZlQ2xpZW50OiBmYWxzZVxuICAgIH0pO1xuICAgIGlvLm9uKCdjb25uZWN0aW9uJywgZnVuY3Rpb24gKHNvY2tldCkge1xuICAgICAgICBjb25zb2xlLmxvZygnTmV3IGNvbm5lY3Rpb24hJyk7XG4gICAgICAgIHNvY2tldC5vbignaGVsbG8nLCBIYW5kbGVycy5oZWxsbyk7XG4gICAgICAgIHNvY2tldC5vbignbmV3TWVzc2FnZScsIEhhbmRsZXJzLm5ld01lc3NhZ2UpO1xuICAgICAgICBzb2NrZXQub24oJ2dvb2RieWUnLCBIYW5kbGVycy5nb29kYnllKTtcblxuICAgICAgICBzb2NrZXQuZW1pdCgnT2ggaGlpIScpO1xuICAgICAgICBzb2NrZXQub24oJ2J1cnAnLCAoKSA9PiB7XG4gICAgICAgICAgICBzb2NrZXQuZW1pdCgnRXhjdXNlIHlvdSEnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNvY2tldC5vbignY2hhdCcsICh0ZXh0KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0ZXh0KTtcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KCdjaGF0JywgJ2hlbGxvIGNsaWVudCcpXG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuZXhwb3J0cy5uYW1lID0gJ2hhcGktY2hhdCc7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n")},function(module,exports){eval("exports.hello = function () {\n    this.emit('Hi back at you');\n};\n\nexports.newMessage = function (newMessage) {\n    console.log('Got message', newMessage);\n};\n\nexports.goodbye = function () {\n    this.emit('Take it easy, pal');\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2hhdC9oYW5kbGVycy5qcz83YmZmIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJoZWxsbyIsImVtaXQiLCJuZXdNZXNzYWdlIiwiY29uc29sZSIsImxvZyIsImdvb2RieWUiXSwibWFwcGluZ3MiOiJBQUFBQSxRQUFRQyxLQUFSLEdBQWdCLFlBQVk7QUFDeEIsU0FBS0MsSUFBTCxDQUFVLGdCQUFWO0FBQ0gsQ0FGRDs7QUFJQUYsUUFBUUcsVUFBUixHQUFxQixVQUFVQSxVQUFWLEVBQXNCO0FBQ3ZDQyxZQUFRQyxHQUFSLENBQVksYUFBWixFQUEyQkYsVUFBM0I7QUFDSCxDQUZEOztBQUlBSCxRQUFRTSxPQUFSLEdBQWtCLFlBQVk7QUFDMUIsU0FBS0osSUFBTCxDQUFVLG1CQUFWO0FBQ0gsQ0FGRCIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cy5oZWxsbyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmVtaXQoJ0hpIGJhY2sgYXQgeW91Jyk7XG59O1xuXG5leHBvcnRzLm5ld01lc3NhZ2UgPSBmdW5jdGlvbiAobmV3TWVzc2FnZSkge1xuICAgIGNvbnNvbGUubG9nKCdHb3QgbWVzc2FnZScsIG5ld01lc3NhZ2UpO1xufTtcblxuZXhwb3J0cy5nb29kYnllID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZW1pdCgnVGFrZSBpdCBlYXN5LCBwYWwnKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n")},function(module,exports){eval('module.exports = require("socket.io");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzb2NrZXQuaW9cIj9jYjM0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzb2NrZXQuaW9cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6\n')},function(module,exports){eval('module.exports = require("inert");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbmVydFwiP2I5YzgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImluZXJ0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///7\n')},function(module,exports){eval('module.exports = require("hapi-pino");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJoYXBpLXBpbm9cIj9lNmI2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJoYXBpLXBpbm9cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n')},function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: external \"hapi\"\nvar external_hapi_ = __webpack_require__(1);\n\n// CONCATENATED MODULE: ./src/pages/page1.js\n/* harmony default export */ var page1 = ({\n    method: 'GET',\n    path: '/page1',\n    handler: (request, h) => {\n        return 'page1';\n    }\n});\n// CONCATENATED MODULE: ./src/pages/page2.js\n/* harmony default export */ var page2 = ({\n    method: 'GET',\n    path: '/page2',\n    handler: (request, h) => {\n        return 'page2';\n    }\n});\n// CONCATENATED MODULE: ./src/pages/page3.js\n/* harmony default export */ var page3 = ({\n    method: 'GET',\n    path: '/page3',\n    handler: (request, h) => {\n        const response = h.response('Hello page 3');\n        response.type('text/plain');\n        return response;\n    }\n});\n// EXTERNAL MODULE: external \"joi\"\nvar external_joi_ = __webpack_require__(0);\n\n// CONCATENATED MODULE: ./src/pages/page4.js\n\n\n/* harmony default export */ var page4 = ({\n    method: 'POST',\n    path: '/account',\n    config: {\n        validate: {\n            payload: {\n                firstname: external_joi_[\"string\"]().required(),\n                lastname: external_joi_[\"string\"]().required(),\n                timestamp: external_joi_[\"any\"]().forbidden().default(new Date().getTime())\n            }\n        }\n    },\n    handler: (request, h) => {\n        return request.payload;\n    }\n});\n// CONCATENATED MODULE: ./src/pages/home.js\n/* harmony default export */ var home = ({\n    method: 'GET',\n    path: '/',\n    handler: (request, h) => {\n        return 'Hello, world!';\n    }\n});\n// CONCATENATED MODULE: ./src/pages/name.js\n/* harmony default export */ var pages_name = ({\n    method: 'GET',\n    path: '/name/{name}',\n    handler: (request, h) => {\n        request.logger.info('In handler %s', request.path);\n        return 'Hello, ' + encodeURIComponent(request.params.name) + '!';\n    }\n});\n// CONCATENATED MODULE: ./src/pages/hello.js\n/* harmony default export */ var hello = ({\n    method: 'GET',\n    path: '/hello',\n    handler: (request, h) => {\n        return h.file('./public/hello.html');\n    }\n});\n// CONCATENATED MODULE: ./src/app.js\n\n\n\n\n\n\n\n\n\n\n\nconst fs = __webpack_require__(2);\nconst path = __webpack_require__(3);\nconst source = path.join(__dirname, '/config.json');\nlet config = null;\n\nif (fs.existsSync(source) && fs.statSync(source).isFile()) {\n    const configfile = fs.readFileSync(source, 'utf8');\n    config = JSON.parse(configfile.toString());\n}\n\nconst server = external_hapi_[\"server\"]({\n    host: config !== null ? config.host : 'localhost',\n    port: config !== null ? config.port : 3000\n});\n\nconst init = async () => {\n    await server.register(__webpack_require__(4));\n    await server.register(__webpack_require__(7));\n    await server.register({\n        plugin: __webpack_require__(8),\n        options: {\n            prettyPrint: false,\n            logEvents: ['response']\n        }\n    });\n\n    server.route(home);\n    server.route(page1);\n    server.route(page2);\n    server.route(page3);\n    server.route(page4);\n    server.route(pages_name);\n    server.route(hello);\n\n    await server.start();\n    console.log(`Server running at: ${server.info.uri}`);\n};\n\nprocess.on('unhandledRejection', err => {\n    console.log(err);\n    process.exit(1);\n});\n\ninit();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcGFnZTEuanM/ZDY0ZSIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcGFnZTIuanM/MTFiMSIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcGFnZTMuanM/OGY1MyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcGFnZTQuanM/MWM5NCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaG9tZS5qcz84MDczIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9uYW1lLmpzP2IyNzIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2hlbGxvLmpzP2NjMWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcz8xMTEyIl0sIm5hbWVzIjpbIm1ldGhvZCIsInBhdGgiLCJoYW5kbGVyIiwicmVxdWVzdCIsImgiLCJyZXNwb25zZSIsInR5cGUiLCJjb25maWciLCJ2YWxpZGF0ZSIsInBheWxvYWQiLCJmaXJzdG5hbWUiLCJyZXF1aXJlZCIsImxhc3RuYW1lIiwidGltZXN0YW1wIiwiZm9yYmlkZGVuIiwiZGVmYXVsdCIsIkRhdGUiLCJnZXRUaW1lIiwibG9nZ2VyIiwiaW5mbyIsImVuY29kZVVSSUNvbXBvbmVudCIsInBhcmFtcyIsIm5hbWUiLCJmaWxlIiwiZnMiLCJyZXF1aXJlIiwic291cmNlIiwiam9pbiIsIl9fZGlybmFtZSIsImV4aXN0c1N5bmMiLCJzdGF0U3luYyIsImlzRmlsZSIsImNvbmZpZ2ZpbGUiLCJyZWFkRmlsZVN5bmMiLCJKU09OIiwicGFyc2UiLCJ0b1N0cmluZyIsInNlcnZlciIsImhvc3QiLCJwb3J0IiwiaW5pdCIsInJlZ2lzdGVyIiwicGx1Z2luIiwib3B0aW9ucyIsInByZXR0eVByaW50IiwibG9nRXZlbnRzIiwicm91dGUiLCJzdGFydCIsImNvbnNvbGUiLCJsb2ciLCJ1cmkiLCJwcm9jZXNzIiwib24iLCJlcnIiLCJleGl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSwwQ0FBZTtBQUNYQSxZQUFRLEtBREc7QUFF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Z0IsbUJBQUFoQixDQUFRLENBQVIsQ0FBaEIsQ0FBTjtBQUNBLFVBQU1ZLE9BQU9JLFFBQVAsQ0FBZ0IsbUJBQUFoQixDQUFRLENBQVIsQ0FBaEIsQ0FBTjtBQUNBLFVBQU1ZLE9BQU9JLFFBQVAsQ0FBZ0I7QUFDbEJDLGdCQUFRLG1CQUFBakIsQ0FBUSxDQUFSLENBRFU7QUFFbEJrQixpQkFBUztBQUNMQyx5QkFBYSxLQURSO0FBRUxDLHVCQUFXLENBQUMsVUFBRDtBQUZOO0FBRlMsS0FBaEIsQ0FBTjs7QUFRQVIsV0FBT1MsS0FBUCxDQUFhLElBQWI7QUFDQVQsV0FBT1MsS0FBUCxDQUFhLEtBQWI7QUFDQVQsV0FBT1MsS0FBUCxDQUFhLEtBQWI7QUFDQVQsV0FBT1MsS0FBUCxDQUFhLEtBQWI7QUFDQVQsV0FBT1MsS0FBUCxDQUFhLEtBQWI7QUFDQVQsV0FBT1MsS0FBUCxDQUFhLFVBQWI7QUFDQVQsV0FBT1MsS0FBUCxDQUFhLEtBQWI7O0FBRUEsVUFBTVQsT0FBT1UsS0FBUCxFQUFOO0FBQ0FDLFlBQVFDLEdBQVIsQ0FBYSxzQkFBcUJaLE9BQU9sQixJQUFQLENBQVkrQixHQUFJLEVBQWxEO0FBQ0gsQ0FyQkQ7O0FBdUJBQyxRQUFRQyxFQUFSLENBQVcsb0JBQVgsRUFBa0NDLEdBQUQsSUFBUztBQUN0Q0wsWUFBUUMsR0FBUixDQUFZSSxHQUFaO0FBQ0FGLFlBQVFHLElBQVIsQ0FBYSxDQUFiO0FBQ0gsQ0FIRDs7QUFLQWQiLCJmaWxlIjoiOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIHBhdGg6ICcvcGFnZTEnLFxuICAgIGhhbmRsZXI6IChyZXF1ZXN0LCBoKSA9PiB7XG4gICAgICAgIHJldHVybiAncGFnZTEnO1xuICAgIH1cbn07IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgcGF0aDogJy9wYWdlMicsXG4gICAgaGFuZGxlcjogKHJlcXVlc3QsIGgpID0+IHtcbiAgICAgICAgcmV0dXJuICdwYWdlMic7XG4gICAgfVxufTsiLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBwYXRoOiAnL3BhZ2UzJyxcbiAgICBoYW5kbGVyOiAocmVxdWVzdCwgaCkgPT4ge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGgucmVzcG9uc2UoJ0hlbGxvIHBhZ2UgMycpO1xuICAgICAgICByZXNwb25zZS50eXBlKCd0ZXh0L3BsYWluJyk7XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG59OyIsImltcG9ydCAqIGFzIEpvaSBmcm9tICdqb2knO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgcGF0aDogJy9hY2NvdW50JyxcbiAgICBjb25maWc6IHtcbiAgICAgICAgdmFsaWRhdGU6IHtcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICBmaXJzdG5hbWU6IEpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuICAgICAgICAgICAgICAgIGxhc3RuYW1lOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IEpvaS5hbnkoKS5mb3JiaWRkZW4oKS5kZWZhdWx0KChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGhhbmRsZXI6IChyZXF1ZXN0LCBoKSA9PiB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0LnBheWxvYWQ7XG4gICAgfVxufTsiLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICBwYXRoOiAnLycsXG4gICAgaGFuZGxlcjogKHJlcXVlc3QsIGgpID0+IHtcbiAgICAgICAgcmV0dXJuICdIZWxsbywgd29ybGQhJztcbiAgICB9XG59OyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIHBhdGg6ICcvbmFtZS97bmFtZX0nLFxuICAgIGhhbmRsZXI6IChyZXF1ZXN0LCBoKSA9PiB7XG4gICAgICAgIHJlcXVlc3QubG9nZ2VyLmluZm8oJ0luIGhhbmRsZXIgJXMnLCByZXF1ZXN0LnBhdGgpO1xuICAgICAgICByZXR1cm4gJ0hlbGxvLCAnICsgZW5jb2RlVVJJQ29tcG9uZW50KHJlcXVlc3QucGFyYW1zLm5hbWUpICsgJyEnO1xuICAgIH1cbn07IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgcGF0aDogJy9oZWxsbycsXG4gICAgaGFuZGxlcjogKHJlcXVlc3QsIGgpID0+IHtcbiAgICAgICAgcmV0dXJuIGguZmlsZSgnLi9wdWJsaWMvaGVsbG8uaHRtbCcpO1xuICAgIH1cbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgKiBhcyBIYXBpIGZyb20gJ2hhcGknO1xuaW1wb3J0IHBhZ2UxIGZyb20gJy4vcGFnZXMvcGFnZTEnO1xuaW1wb3J0IHBhZ2UyIGZyb20gJy4vcGFnZXMvcGFnZTInO1xuaW1wb3J0IHBhZ2UzIGZyb20gJy4vcGFnZXMvcGFnZTMnO1xuaW1wb3J0IHBhZ2U0IGZyb20gJy4vcGFnZXMvcGFnZTQnO1xuaW1wb3J0IGhvbWUgZnJvbSAnLi9wYWdlcy9ob21lJztcbmltcG9ydCBuYW1lIGZyb20gJy4vcGFnZXMvbmFtZSc7XG5pbXBvcnQgaGVsbG8gZnJvbSAnLi9wYWdlcy9oZWxsbyc7XG5cbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5jb25zdCBzb3VyY2UgPSBwYXRoLmpvaW4oX19kaXJuYW1lLCAnL2NvbmZpZy5qc29uJyk7XG5sZXQgY29uZmlnID0gbnVsbDtcblxuaWYgKGZzLmV4aXN0c1N5bmMoc291cmNlKSAmJiBmcy5zdGF0U3luYyhzb3VyY2UpLmlzRmlsZSgpKSB7XG4gICAgY29uc3QgY29uZmlnZmlsZSA9IGZzLnJlYWRGaWxlU3luYyhzb3VyY2UsICd1dGY4Jyk7XG4gICAgY29uZmlnID0gSlNPTi5wYXJzZShjb25maWdmaWxlLnRvU3RyaW5nKCkpO1xufVxuXG5jb25zdCBzZXJ2ZXIgPSBIYXBpLnNlcnZlcih7XG4gICAgaG9zdDogY29uZmlnICE9PSBudWxsID8gY29uZmlnLmhvc3QgOiAnbG9jYWxob3N0JyxcbiAgICBwb3J0OiBjb25maWcgIT09IG51bGwgPyBjb25maWcucG9ydCA6IDMwMDBcbn0pO1xuXG5jb25zdCBpbml0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IHNlcnZlci5yZWdpc3RlcihyZXF1aXJlKCcuL2NoYXQnKSk7XG4gICAgYXdhaXQgc2VydmVyLnJlZ2lzdGVyKHJlcXVpcmUoJ2luZXJ0JykpO1xuICAgIGF3YWl0IHNlcnZlci5yZWdpc3Rlcih7XG4gICAgICAgIHBsdWdpbjogcmVxdWlyZSgnaGFwaS1waW5vJyksXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIHByZXR0eVByaW50OiBmYWxzZSxcbiAgICAgICAgICAgIGxvZ0V2ZW50czogWydyZXNwb25zZSddXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHNlcnZlci5yb3V0ZShob21lKTtcbiAgICBzZXJ2ZXIucm91dGUocGFnZTEpO1xuICAgIHNlcnZlci5yb3V0ZShwYWdlMik7XG4gICAgc2VydmVyLnJvdXRlKHBhZ2UzKTtcbiAgICBzZXJ2ZXIucm91dGUocGFnZTQpO1xuICAgIHNlcnZlci5yb3V0ZShuYW1lKTtcbiAgICBzZXJ2ZXIucm91dGUoaGVsbG8pO1xuXG4gICAgYXdhaXQgc2VydmVyLnN0YXJ0KCk7XG4gICAgY29uc29sZS5sb2coYFNlcnZlciBydW5uaW5nIGF0OiAke3NlcnZlci5pbmZvLnVyaX1gKTtcbn07XG5cbnByb2Nlc3Mub24oJ3VuaGFuZGxlZFJlamVjdGlvbicsIChlcnIpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIHByb2Nlc3MuZXhpdCgxKTtcbn0pO1xuXG5pbml0KCk7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///9\n")}]);