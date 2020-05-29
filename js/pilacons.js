function Pila2() {
    this._size = 0;
    this._storage = [];

}
Pila2.prototype.push = function(element) {//agrega elemento
    var size = this._size++;

    this._storage[size] = element;
    return this.element,
        this._storage[size];
}
Pila2.prototype.pop = function() {//elimina el ultimo elemento
    var size = this._size; 

    if (size) { 
        let a = this._storage[this._size - 1];

        delete this._storage[this._size - 1];
        this._size--; 

        return a;
    }

}
Pila2.prototype.peek = function() {//muestra el ultimo elemento
    let a = this._storage[this._size - 1]
    return a
}
Pila2.prototype.size = function() {//muestra el tamaño
    return this._size;
}
Pila2.prototype.print = function() {//muestra
    return this._storage;
}
let pila = new Pila2();