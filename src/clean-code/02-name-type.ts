(() => {

    const temperaturesInCelsius = [33.6, 12.34];

    const serverIp = '127.0.0.1';

    const usersData = [
      { id: 1, email: 'fernando@google.com'},
      { id: 2, email: 'juan@google.com' }, 
      { id: 3, email: 'melissa@google.com' }
    ];

    const usersEmails = usersData.map( user => user.email );

    const canJump = false;
    const canRun = true;
    const hasItems = true;
    const isLoading = false;

    // Otros ejercicios
    
    const startTime = new Date().getTime();
    //....
    // 3 doritos después
    //...
    const endTime = new Date().getTime() - startTime;

    // Funciones
    
    function getBooks() {
        throw new Error('Function not implemented.');
    }

    function getBooksByUrl( url: string) {
        throw new Error('Function not implemented.');
    }
    
    function getSquareArea( side: number ) {
        throw new Error('Function not implemented.');
    }

    function printJob() {
        throw new Error('Function not implemented.');
    }
})();




