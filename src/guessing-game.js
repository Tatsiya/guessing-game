class GuessingGame {
    constructor() {
        this.array = [];
    }

    setRange(min, max) {
        var numberOfElements = max - min + 1;
        var value = min;
        for (var i = 0; i < numberOfElements; i++) {
            this.array.push(value);
            value++;
        }
        return this.array;
    }

    guess() {
        var candidate = this.array[Math.floor(this.array.length / 2)];
        return candidate;
    }

    lower() {
        this.array = this.array.slice(0, Math.floor((this.array.length / 2)+1));
    }

    greater() {
        this.array = this.array.slice(Math.floor(this.array.length / 2), this.array.length);
    }
}

module.exports = GuessingGame;
