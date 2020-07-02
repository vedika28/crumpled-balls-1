class Paper {

    constructor() {
        var options = {
            isStatic: false,
            restitution: 0.3,
            density: 1.2,
            friction: 0.5
        }

        this.body = Bodies.circle(50, 600, 25, options);
        World.add(world, this.body);
    }

    display() {
        fill("pink");
        var pos = this.body.position;
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, 50);
    }
}