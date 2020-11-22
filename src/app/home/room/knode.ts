export abstract class Knode {
    [key: string]: any; // type for unknown keys.
    public parent: Knode;
    public children: Set<Knode>;

    constructor(parent: Knode) {
        this.parent = parent;
        this.children = new Set<Knode>();
    }

    free() {
        this.parent.children.delete(this);
        // remove object from memory?
    }

    update(): void {
        for (let child of this.children) {
            child.update();
        }
    }

    render(): void {
        for (let child of this.children) {
            child.render();
        }
    }
}