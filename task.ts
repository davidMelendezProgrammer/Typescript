export class Tarea{
    descripcion: string;
    completado: boolean;

    //Constructor
    constructor(descripcion: string){
        this.descripcion = descripcion;
        this.completado = false;
    }

    //Metodo para marcar la tarea como completada
    tareaCompletada(){
        this.completado = !this.completado;
    }
}