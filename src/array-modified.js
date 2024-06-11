import { populateDom } from "./append-all-tasks";

export function spliceHandler(array, method, args) {
    console.log(`Array modified using ${method}. Arguments: ${args}`);
    console.log(`New Array State: `, array);
}

export function pushHandler(array, method, args) {
    console.log(`Array modified using ${method}. Arguments: ${args}`);
    console.log(`New Array State: `, array);
    localStorage.setItem("myArray", JSON.stringify(array))
}

export function createObservableArray(array, spliceCallback, pushCallback) {
    const originalSplice = array.splice;
    const originalPush = array.push;

    array.splice = function(...args) {
        const result = originalSplice.apply(this, args);

        spliceCallback(this, 'splice', args);

        return result;
    };

    array.push = function(...args) {
        const result = originalPush.apply(this, args);

        pushCallback(this, 'push', args);

        return result;
    };

    return array;
}

export let tasksArray 

export function arrayChecker () {
    if (localStorage.getItem('myArray')) {
        const tasks = localStorage.getItem('myArray')
        tasksArray = createObservableArray(JSON.parse(tasks), spliceHandler, pushHandler);
        console.log(tasks)
    /*     populateDom(JSON.parse(tasks)) */
    } else {
        localStorage.setItem('myArray', JSON.stringify([]))
        arrayChecker()
    }
    
}