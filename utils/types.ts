export interface ResponseFuncs{
    GET?: Function 
    POST?: Function
    PUT?: Function
    DELETE?: Function
}

export interface Todo {
    _id?:number,
    activity:string,
    description:string,
    done:boolean
}