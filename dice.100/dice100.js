"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.andi = void 0;
var andi;
(function (andi) {
    function strategy(_score, _active, _potential) {
        if (_score[0] >= 80) {
            return true;
        }
        else {
            if (_score[1] > _score[0]) {
                return Math.random() < 0.3;
            }
            else {
                if (_score[1] > _score[0] + 40) {
                    return true;
                }
            }
            // return Math.random() < 0.7
        }
    }
    andi.strategy = strategy;
})(andi || (exports.andi = andi = {}));
