import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'backendtest';
  p:any;

  constructor(private ps:PostService){
    alert('I AM CONSTRUCTOR.....')
  }

  ngOnInit(){
    alert('I AM NGINIT....');
    this.ps.getPosts().subscribe(response=>
      {
      this.p=response;
      });
    }
}
