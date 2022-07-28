import { Component } from '@angular/core';

@Component({
  selector: 'app-up-file',
  templateUrl: './up-file.component.html',
  styleUrls: ['./up-file.component.css']
})
export class UpFileComponent  {

  constructor() { }

  
  afuConfig = {
    uploadAPI: {
      url:"https://slack.com/api/files.upload"
    }
};

}
