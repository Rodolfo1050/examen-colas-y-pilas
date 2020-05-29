class Pila3 {
    constructor() {
        this.pila = [];
    }
    
    push(element) { //agregar
        this.pila.push(element);
        return this.pila;
    }
    pop() { //elimina el ultimo elemento
        return this.pila.pop();
    }
    peek() {//muestra el ultimo elemento
        return this.pila[this.pila.length - 1]
    }
    size() {//muestra la cantidad de elementos
        return this.pila.length;
    }
    print() {//muestra
        console.log(this.pila);
    }
}
const pila = new Pila3();