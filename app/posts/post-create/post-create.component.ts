
import { Component } from '@angular/core';

@Component( {
  selector: 'app-post-create',
  templateUrl:'./post-create.component.html',
}

)

export class PostCreateComponent {
enteredValue ='';
newPost ='No content';

  onAddPost() {
    // console.log(postInput);
     console.dir(this.enteredValue);
    this.newPost= this.enteredValue;
    //this.newPost = 'The user\'s post';
   // this.newPost = postInput.value;
  // alert ("clicked");
}
}
