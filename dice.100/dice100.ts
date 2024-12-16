export namespace andi {
    export function strategy (_score: number[], _active: number, _potential: number): boolean {
       
       if (_score[0] >= 80) {
            return true;
       } else {
        if (_score[1] > _score[0]) {
            return Math.random() < 0.3;
        } else {
            if (_score[1] > _score[0] + 40) {
                return true
            } else {
                 return Math.random() < 0.5
            }
        }
       }
    }
}