import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/models/IPost';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: IPost[];
  term: string;
  searchDialog = { area: 0, cost: 0, direction: '' };

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getAllPost().subscribe(
      value => (this.posts = value),
      error => console.log(error));
  }

  areaChanged(area: string) {
    console.log(Number(area));
    this.searchDialog.area = Number(area);
  }

  findPost() {
    if (this.searchDialog.area !== 0) {
      this.postService.getAllPost().subscribe(
        value => (this.posts = value.filter(p => {
          return p.area < this.searchDialog.area;
        })),
        error => console.log(error));
    } else {
      this.postService.getAllPost().subscribe(
        value => (this.posts = value),
        error => console.log(error));
    }
  }

}
