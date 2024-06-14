"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tarea = void 0;
var Tarea = /** @class */ (function () {
    //Constructor
    function Tarea(descripcion) {
        this.descripcion = descripcion;
        this.completado = false;
    }
    //Metodo para marcar la tarea como completada
    Tarea.prototype.tareaCompletada = function () {
        this.completado = !this.completado;
    };
    return Tarea;
}());
exports.Tarea = Tarea;
