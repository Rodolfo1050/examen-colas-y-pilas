class Cola2 {
    constructor() {
        this.cola = [];
    }

    enqueue(element) { //agregar
        this.cola.push(element);
        return this.cola
    }
    dequeue() { //elimina el primer elemento
        return this.cola.shift();
    }
    peek() {//muestra el primer elemento
        return this.cola[0];
    }
    size() { //número de objetos
        return this.cola.length;
    }
    isEmpty() {//"Está vació?
        return this.cola.length === 0;
    }
    print() {//mostrar
        return this.cola;
    }
}
let cola = new Cola2;