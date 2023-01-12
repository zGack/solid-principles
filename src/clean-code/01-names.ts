(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const filesToEvaluate = [
        { id: 1, flag: false },
        { id: 2, flag: false },
        { id: 3, flag: true },
        { id: 4, flag: false },
        { id: 5, flag: false },
        { id: 7, flag: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const filesToDelete = filesToEvaluate.map( file => file.flag );

    // Malos 
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };

    // Todo: Tarea
        
    // día de hoy - today
    const todayDate = new Date();
    
    // días transcurridos - elapsed time in days
    const elapsedTimeInDays: number = 23;
    
    // número de archivos en un directorio - number of files in directory
    const numFilesInDirectory: number = 33;
    
    // primer nombre - first name
    const firstName: string = 'Fernando';
    
    // primer apellido - last name
    const lastName: string = 'Herrera';

    // días desde la última modificación - days since modification
    const daysSinceLastModification: number = 12;
    
    // cantidad máxima de clases por estudiante - max classes per student
    const maxClassesPerStudent: number = 6;

})();



