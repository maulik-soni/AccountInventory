import { Injectable } from '@angular/core';
declare var jquery:any;
declare var $ :any;


@Injectable()
export class SharedService {

  constructor() { }

  notify(message,type){
    $.growl({
            message: message
        },{
            type: type,
            allow_dismiss: false,
            label: 'Cancel',
            className: 'btn-xs btn-inverse',
            placement: {
                from: 'bottom',
                align: 'center'
            },
            delay: 2500,
            animate: {
                    enter: 'animated fadeIn',
                    exit: 'animated fadeOut'
            },
            offset: {
                x: 20,
                y: 85
            }
        });
  }

}
