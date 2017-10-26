import { Directive } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS} from "@angular/forms";


const EMAIL_REGEXP =	
/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



@Directive({
  selector: '[ValidEmail]',
  providers: [{provide: NG_VALIDATORS, useExisting: ValidemailDirective, multi: true}]
})

export class ValidemailDirective implements Validator {

  validate(c: AbstractControl): ValidationErrors|null {
    if(c.value){
    return EMAIL_REGEXP.test(c.value) ? null : {'email': true};
    }
  return null;
  }

}
