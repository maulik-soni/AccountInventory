export class EditUser{
  constructor(
      public name: string,
      public email:string,
      public password?:string,
      public confirm?:string) { }


}