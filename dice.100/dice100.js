export var andi;
(function (andi) {
    function strategy(_score, _active, _potential) {
        if (_score[_active] >= 80) {
            return true;
        }
        else {
            if (_score[1 - _active] > _score[_active]) {
                return Math.random() < 0.3;
            }
            else {
                if (_score[1 - _active] > _score[_active] + 40) {
                    return true;
                }
                else {
                    return Math.random() < 0.5;
                }
            }
        }
    }
    andi.strategy = strategy;
})(andi || (andi = {}));
