import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPost } from 'src/app/models/IPost';
import { PostService } from 'src/app/services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  postCreateForm: FormGroup;
  post: IPost;

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService,
    private router: Router) { }

  ngOnInit() {
    this.postCreateForm = this.formBuilder.group({
      category: ['Nhà đất'],
      province: ['Đà Nẵng'],
      org: ['Cá nhân'],
      postType: ['Cần bán'],
      productStatus: ['Mới'],
      address: ['', [Validators.required]],
      area: ['', [Validators.required, Validators.min(20)]],
      productDirection: ['Đông'],
      title: ['', [Validators.required]],
      content: ['', [Validators.required]],
      cost: ['', [Validators.required, Validators.min(100000000)]]
    });
  }

  get category() {
    return this.postCreateForm.get('category');
  }

  get province() {
    return this.postCreateForm.get('province');
  }

  get org() {
    return this.postCreateForm.get('org');
  }

  get postType() {
    return this.postCreateForm.get('postType');
  }

  get productStatus() {
    return this.postCreateForm.get('productStatus');
  }

  get address() {
    return this.postCreateForm.get('address');
  }

  get area() {
    return this.postCreateForm.get('area');
  }

  get productDirection() {
    return this.postCreateForm.get('productDirection');
  }

  get title() {
    return this.postCreateForm.get('title');
  }

  get content() {
    return this.postCreateForm.get('content');
  }

  get cost() {
    return this.postCreateForm.get('cost');
  }

  showConfirmDialog() {
    this.post = this.postCreateForm.value;
  }

  createNewPost() {
    console.log(this.post);
    this.postService.createPost(this.post).subscribe(
      value => {
        console.log(value);
        this.router.navigateByUrl('/');
      },
      error => console.log(error));
  }
}
