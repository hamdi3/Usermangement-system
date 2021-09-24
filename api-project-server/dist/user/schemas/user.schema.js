"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongo = require("mongoose");
exports.UserSchema = new mongo.Schema({
    Vorname: String,
    Nachname: String,
    Message: String,
    Anhang: [String],
});
//# sourceMappingURL=user.schema.js.map