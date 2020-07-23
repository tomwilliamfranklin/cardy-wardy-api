"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
// ? ROUTES
var index_1 = __importDefault(require("./routes/index"));
var flashcards_1 = __importDefault(require("./routes/flashcards"));
var users_1 = __importDefault(require("./routes/users"));
var app = express_1.default();
app.use(cors_1.default());
app.use('/', index_1.default.indexRouter);
app.use('/flashcards', flashcards_1.default.flashcardsIndex);
app.use('/users', users_1.default.userRouter);
// PORT
var port = process.env.PORT || 3000;
app.listen(port, function () { return console.log("listening on port " + port + "..."); });
