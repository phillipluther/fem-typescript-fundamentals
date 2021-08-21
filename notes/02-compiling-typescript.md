# 02 :: Compiling a TypeScript Programs

> Notes/Talking Points

- Utilize `tsc` compiler command; comes via the `typescript` package
- declaration files (`*.d.ts`)
- hey look! another config ... `tsconfig.json`
- hilariously starting at ES3 `target` prop in config! (intent is to ratchet up and watch how compiled code matures)
- on ^ note, example script utilizes promises (ES2015) and async/await (ES2017)
- ton of warnings about setup/Promise compatibility ... but nothing running in strict
- when compiled, left with 1) the compiled JS, and 2) a declaration file which is essentially the TS that got stripped from the source
- just like w/Babel envs or Rollup targets, you can make `tsc` compile to CommonJS for node via `"module": "CommonJS" in config

running this yields:

## ES3 Target Output

... yikes ...

```
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.addNumbers = void 0;
function timeout(n) {
    return new Promise(function (res) { return setTimeout(res, n); });
}
function addNumbers(a, b) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, timeout(500)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, a + b];
            }
        });
    });
}
exports.addNumbers = addNumbers;
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _b = (_a = console).log;
                return [4 /*yield*/, addNumbers(2, 7)];
            case 1:
                _b.apply(_a, [_c.sent()]);
                return [2 /*return*/];
        }
    });
}); })();
```

## Target ES2015 Output

better; at least there's a `Promise` constructor, but still polyfills for async/await

```
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function timeout(n) {
    return new Promise((res) => setTimeout(res, n));
}
export function addNumbers(a, b) {
    return __awaiter(this, void 0, void 0, function* () {
        yield timeout(500);
        return a + b;
    });
}
(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log(yield addNumbers(2, 7));
}))();
```

## Target ES2017 Output

looks like modern JS! with TS removed

```
function timeout(n) {
    return new Promise((res) => setTimeout(res, n));
}
export async function addNumbers(a, b) {
    await timeout(500);
    return a + b;
}
(async () => {
    console.log(await addNumbers(2, 7));
})();
```
