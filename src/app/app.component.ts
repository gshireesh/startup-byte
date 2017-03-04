import { Component } from '@angular/core';

export interface AMAPost {
  name :string,
  department : string,
  post : string,
  time : string,
  picture ?: string,
  likes : number,
  comments : number,
  _id ?: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  amaData : AMAPost[] = [
    {
      "_id": "58bb2cefe9703fe65ba050db",
      "name": "Russo Leach",
      "department": "Marketing",
      "picture": "https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4.jpg",
      "likes": 19,
      "comments": 1,
      "post": "nostrud excepteur reprehenderit eiusmod est reprehenderit minim ad nulla eiusmod",
      "time": "April 13 : @ 02:42 (IST)"
    },
    {
      "_id": "58bb2cef226ce8932d0b5b75",
      "name": "Brandy Mcintosh",
      "department": "Maintanance",
      "picture": "http://placehold.it/32x32",
      "likes": 4,
      "comments": 20,
      "post": "mollit aute consectetur incididunt labore eu deserunt proident eiusmod officia",
      "time": "December 21 : @ 03:00 (IST)"
    },
    {
      "_id": "58bb2cef7cff222cc9aa8cfb",
      "name": "Augusta Witt",
      "department": "Maintanance",
      "picture": "http://placehold.it/32x32",
      "likes": 5,
      "comments": 8,
      "post": "mollit est laboris laborum dolor tempor quis ex officia ex",
      "time": "November 23 : @ 08:45 (IST)"
    },
    {
      "_id": "58bb2cef483591c24652d2d5",
      "name": "Katherine Hill",
      "department": "Maintanance",
      "picture": "http://placehold.it/32x32",
      "likes": 35,
      "comments": 19,
      "post": "deserunt proident ullamco ex eu qui anim nulla esse duis",
      "time": "August 12 : @ 02:02 (IST)"
    },
    {
      "_id": "58bb2cef5c7234b04b13b7aa",
      "name": "Krista Ellison",
      "department": "Software",
      "picture": "http://placehold.it/32x32",
      "likes": 3,
      "comments": 15,
      "post": "consequat ea nisi exercitation esse sunt sit sit voluptate excepteur",
      "time": "March 05 : @ 10:04 (IST)"
    },
    {
      "_id": "58bb2cef9d6344d73cb1e3eb",
      "name": "Foreman Carr",
      "department": "Marketing",
      "picture": "http://placehold.it/32x32",
      "likes": 39,
      "comments": 10,
      "post": "amet sit qui sit enim deserunt quis eiusmod cillum sint",
      "time": "January 12 : @ 01:08 (IST)"
    },
    {
      "_id": "58bb2cef3182d0bb4c4ed123",
      "name": "Ewing Juarez",
      "department": "Software",
      "picture": "http://placehold.it/32x32",
      "likes": 27,
      "comments": 7,
      "post": "est labore laborum voluptate commodo sit ut incididunt eiusmod irure",
      "time": "December 07 : @ 11:42 (IST)"
    },
    {
      "_id": "58bb2cefebb5a8f6d5e576f2",
      "name": "Nunez Burch",
      "department": "Software",
      "picture": "http://placehold.it/32x32",
      "likes": 8,
      "comments": 18,
      "post": "ad minim eu exercitation minim laboris laboris minim irure nisi",
      "time": "December 14 : @ 05:47 (IST)"
    },
    {
      "_id": "58bb2cef95b922cf02e306c0",
      "name": "Melba Hutchinson",
      "department": "Marketing",
      "picture": "http://placehold.it/32x32",
      "likes": 22,
      "comments": 5,
      "post": "esse tempor veniam incididunt minim esse sint qui culpa aliqua",
      "time": "January 04 : @ 07:32 (IST)"
    },
    {
      "_id": "58bb2cef67a97b92a64fc097",
      "name": "Staci Sanchez",
      "department": "Maintanance",
      "picture": "http://placehold.it/32x32",
      "likes": 1,
      "comments": 9,
      "post": "elit ullamco labore excepteur minim elit aliqua dolore in nisi",
      "time": "March 06 : @ 05:43 (IST)"
    },
    {
      "_id": "58bb2cefb2c83b0855957924",
      "name": "Janette Phelps",
      "department": "Software",
      "picture": "http://placehold.it/32x32",
      "likes": 9,
      "comments": 15,
      "post": "adipisicing aliqua voluptate ut voluptate ipsum fugiat reprehenderit id non",
      "time": "August 21 : @ 02:32 (IST)"
    },
    {
      "_id": "58bb2cefa968a306250be994",
      "name": "Floyd Holland",
      "department": "Maintanance",
      "picture": "http://placehold.it/32x32",
      "likes": 11,
      "comments": 2,
      "post": "est tempor ea ea nulla nostrud tempor labore excepteur amet",
      "time": "November 01 : @ 08:53 (IST)"
    },
    {
      "_id": "58bb2cef007d82b6413855a4",
      "name": "Debbie Rosales",
      "department": "Marketing",
      "picture": "http://placehold.it/32x32",
      "likes": 7,
      "comments": 12,
      "post": "reprehenderit adipisicing reprehenderit nostrud nulla in proident aliquip magna aliquip",
      "time": "February 17 : @ 09:24 (IST)"
    },
    {
      "_id": "58bb2cefd4775f5ee1a7f394",
      "name": "Buckner Burnett",
      "department": "Maintanance",
      "picture": "http://placehold.it/32x32",
      "likes": 10,
      "comments": 18,
      "post": "eu laboris occaecat esse laborum anim Lorem qui voluptate sunt",
      "time": "October 23 : @ 05:58 (IST)"
    },
    {
      "_id": "58bb2cefdfc6438bf4189e8d",
      "name": "Jody Hughes",
      "department": "Marketing",
      "picture": "http://placehold.it/32x32",
      "likes": 8,
      "comments": 13,
      "post": "do eiusmod tempor occaecat velit laborum tempor ipsum cillum nostrud",
      "time": "March 26 : @ 01:37 (IST)"
    },
    {
      "_id": "58bb2cef73994aaa437ef3dd",
      "name": "Figueroa Hayes",
      "department": "Marketing",
      "picture": "http://placehold.it/32x32",
      "likes": 31,
      "comments": 12,
      "post": "reprehenderit qui proident officia nulla reprehenderit officia cillum eu dolor",
      "time": "April 29 : @ 01:33 (IST)"
    },
    {
      "_id": "58bb2cef60c56c2f36f8d53d",
      "name": "Marsh Parker",
      "department": "Maintanance",
      "picture": "http://placehold.it/32x32",
      "likes": 5,
      "comments": 3,
      "post": "pariatur nulla incididunt amet cupidatat laboris ex cupidatat qui Lorem",
      "time": "December 04 : @ 06:21 (IST)"
    },
    {
      "_id": "58bb2cef58c5f73e2222188f",
      "name": "Aurelia Avila",
      "department": "Software",
      "picture": "http://placehold.it/32x32",
      "likes": 38,
      "comments": 18,
      "post": "eiusmod irure aute cillum est non exercitation qui veniam magna",
      "time": "July 26 : @ 10:59 (IST)"
    }
  ];

}
