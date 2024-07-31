import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  //private url='https://jsonplaceholder.typicode.com/posts'
  private url='http://localhost:3000/posts'

  constructor(private ht:HttpClient) { }

  getPosts(){
    return this.ht.get(this.url)
  }
}
