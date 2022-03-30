"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
const a = { j: 2, js: 22 };
_1.default.info(`${a}`);
_1.default.error("", Object.assign(Object.assign({}, a), { action: "register" }));
