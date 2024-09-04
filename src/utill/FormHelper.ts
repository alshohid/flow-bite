import toast from "react-hot-toast";

let emailRegx= /^[^@]+@[^@]+\.[^@]+$/;

class FormHelper {
    IsEmpty(value:any){
        return value.length === 0 ;
    }
    IsEmail(value:string){
        return !emailRegx.test(value)
    }
    ErrorToast(msg:string){
        toast.error(msg)
    }
    SuccessToast(msg:string){
        toast.success(msg)
    }
}
export const {IsEmail,IsEmpty,ErrorToast,SuccessToast}= new FormHelper();