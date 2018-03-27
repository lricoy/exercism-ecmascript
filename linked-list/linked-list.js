export default class LinkedList {
    constructor() {
        this.first = null;
        this.last = null;
        this._count = 0;
    }

    unshift(val) {
        if (!this.first) {
            let nodeToAdd = new Node(val);
            this.first = nodeToAdd;
            this.last = nodeToAdd;
        } else {
            let lastFirst = this.first;
            this.first = new Node(val, null, lastFirst);
            lastFirst.prev = this.first;
        }
        this._count += 1;
    }

    push (val) {
        if (!this.first) {
            let nodeToAdd = new Node(val);
            this.first = nodeToAdd;
            this.last = nodeToAdd;
        }
        else {
            let previousLast = this.last;
            let nodeToAdd = new Node(val, previousLast);
            previousLast.next = nodeToAdd;
            this.last = nodeToAdd;
        }
        this._count += 1;
    }

    pop () {
        let poppedNode = this.last;
        if (this.isNotEmpty()) {
            this.last = this.last.prev;
            this.last.next = null;
        } else {
            this.resetList();
        }
        this._count -= 1;
        return poppedNode.val;
    }

    shift () {
        let poppedNode = this.first;
        if (this.isNotEmpty()) {
            this.first = this.first.next;
            this.first.prev = null;
        } else {
            this.resetList();
        }
        this._count -= 1;
        return poppedNode.val;
    }

    delete (valToDelete) {
        if (!this.first) {
            this.resetList();
        }
        else if (this.first && this.first.val === valToDelete) {
            this.first = this.first.next;
        } else if (this.last && this.last.val === valToDelete) {
            this.last = this.last.prev;
        }
        else {
            let node = this.first;
            while (node.next != null) {
                if (node.val === valToDelete) {
                    let next = node.next;
                    node.prev.next = next;
                    next.prev = node.prev;
                }
                node = node.next;
            }
        }

        this._count -= 1;
    }

    isNotEmpty() {
        return this.first !== this.last;
    }

    resetList () {
        this.first = null;
        this.last = null;
    }

    count () {
        // @todo: Change to use this._count
        let count = this.first != null ? 1 : 0;
        let node = this.first;
        while (node && node.next != null) {
            node = node.next;
            count += 1;
        }
        return count;
    }

    print () {
        let node = this.first;
        while (node.next != null) {
            node = node.next;
        }
    }
}

class Node {
    constructor(val, prev = null, next = null) {
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}
