export class Log {

    /**
     * 
     * @param message 
     */
    static success(message: string) {
        console.log(`%c SUCCESS: ${message}`, 'color:green');
    }

    /**
     * 
     * @param message 
     */
    static danger(message: string) {
        console.log(`%c ERROR: ${message}`, 'color:red');
    } 

    /**
     * 
     * @param message 
     */
    static info(message: string) {
        console.log(`%c INFO: ${message}`, 'color:blue');
    }

    /**
     * 
     * @param message 
     */
    static warning(message: string) {
        console.log(`%c Warning: ${message}`, 'color:black; background:yellow');
    }
}