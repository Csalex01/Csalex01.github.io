
class Segment {
    constructor(a, b, col) {
        this.a = a;
        this.b = b;
        this.col = col;
    }

    generate() {
        let children = [];

        let v = p5.Vector.sub(this.b, this.a);
        v.div(3);

        // Segment 0
        let b1 = p5.Vector.add(this.a, v);
        children[0] = new Segment(this.a, b1);

        // Segment 3
        let a1 = p5.Vector.sub(this.b, v);
        children[3] = new Segment(a1, this.b);

        v.rotate(-PI / 3);

        // Segment 1
        let c = p5.Vector.add(b1, v);
        children[1] = new Segment(b1, c);

        // Segment 2
        children[2] = new Segment(c, a1);

        return children;
    }
}