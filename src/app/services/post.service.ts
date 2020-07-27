import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from '../models/IPost';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private readonly API = 'http://localhost:3000/posts';

  constructor(private httpClient: HttpClient) { }

  getAllPost(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(this.API);
  }

  createPost(post: Partial<IPost>): Observable<IPost> {
    return this.httpClient.post<IPost>(this.API, post);
  }
}
