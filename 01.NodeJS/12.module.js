module.exports = {
    randInt: function(from, to) {
        return Math.ceil(Math.random() * (to-from) + from);
    },
    circleArea: function(radius) {
        return Math.PI * radius * radius;
    }
}