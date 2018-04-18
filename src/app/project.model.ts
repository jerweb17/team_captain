export class CustomError{
    code:number;
    type:string;
    message:string;
    constructor(errorCode:number,errorType?:string,errorMessage?:string)    {
        this.code= errorCode;
        if(errorType){this.type=errorType;}
        if(errorMessage){this.message=errorMessage;}
    }
}

export class ErrorPage{
    type:string;
    code:number;
    message:string;
    permissionType:string;
    permissionName:string;
    permissionRequestURL:string;
    constructor(customError:CustomError,permissionType?:string,permissionName?:string,permissionRequestURL?:string){
        this.type=customError.type;
        this.code=customError.code;
        this.message=customError.message;
        if(permissionType){this.permissionType=permissionType;}
        if(permissionName){this.permissionName=permissionName;}
        if(permissionRequestURL){this.permissionRequestURL=permissionRequestURL;}
    }
    getMessage(){

    }
}