function Cola3() {
    this._ultdt = 1;
    this._nvdt = 1;
    this._storage = {};
}

Cola3.prototype.enqueue = function(element) {//agregar elemento
    this._storage[this._nvdt] = element;
    this._nvdt++;
    return this._storage;
};
Cola3.prototype.dequeue = function() {//borrar primer elemento
    var _ultdt = this._ultdt,
        _nvdt = this._nvdt,
        deletedData;

    if (_ultdt !== _nvdt) { 
        deletedData = this._storage[_ultdt]
        delete this._storage[_ultdt];
        this._ultdt++;

        return deletedData;
    }
};
Cola3.prototype.peek = function() {//muestra el primer elemento
    return this._storage[this._ultdt]
}
Cola3.prototype.size = function() {//tamaño
    return this._nvdt - this._ultdt;
};
Cola3.prototype.print = function() {//mostrar
    return this._storage;
}
let cola = new Cola3()