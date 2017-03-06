import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";

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

const sampleData : any[]= [
  {
    "_id": "58bc399a45df6672e28e3762",
    "name": "Russo Leach",
    "department": "Marketing",
    "picture": "https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4.jpg",
    "likes": 19,
    "comments": 1,
    "post": "nostrud excepteur reprehenderit eiusmod est reprehenderit minim ad nulla eiusmod",
    "time": "Tue Sep 22 2015 06:28:53 GMT+0530 (IST)"
  },
  {
    "_id": "58bc399aeb55d79a734f72b8",
    "name": "Vera Carney",
    "department": "Software",
    "picture": "http://placehold.it/32x32",
    "likes": 17,
    "comments": 5,
    "post": "eu ullamco et mollit ad id eu velit ut eu",
    "time": "Mon Jul 06 2015 10:35:34 GMT+0530 (IST)"
  },
  {
    "_id": "58bc399a884904e6a8784869",
    "name": "Alyssa Moss",
    "department": "Software",
    "picture": "http://placehold.it/32x32",
    "likes": 7,
    "comments": 19,
    "post": "amet cupidatat magna cupidatat dolor reprehenderit dolore dolore ut reprehenderit",
    "time": "Sun Aug 10 2014 18:30:21 GMT+0530 (IST)"
  },
  {
    "_id": "58bc399a898c621b0085bb46",
    "name": "Elsa Meyer",
    "department": "Software",
    "picture": "http://placehold.it/32x32",
    "likes": 38,
    "comments": 14,
    "post": "enim sint cillum duis aliqua ullamco in consectetur magna sit",
    "time": "Sat Sep 19 2015 03:27:18 GMT+0530 (IST)"
  },
  {
    "_id": "58bc399a9d43deb03b2b42aa",
    "name": "Margaret Fuller",
    "department": "Software",
    "picture": "http://placehold.it/32x32",
    "likes": 40,
    "comments": 3,
    "post": "voluptate consectetur in mollit consectetur dolore aliqua ex officia id",
    "time": "Sun Oct 16 2016 08:27:52 GMT+0530 (IST)"
  },
  {
    "_id": "58bc399ae065fd21ddbd12be",
    "name": "Brooke Whitley",
    "department": "Maintanance",
    "picture": "http://placehold.it/32x32",
    "likes": 35,
    "comments": 16,
    "post": "elit duis aute ea culpa Lorem cupidatat aliquip cillum magna",
    "time": "Wed May 13 2015 10:50:23 GMT+0530 (IST)"
  },
  {
    "_id": "58bc399aea967995943b2852",
    "name": "Levy Grimes",
    "department": "Software",
    "picture": "http://placehold.it/32x32",
    "likes": 21,
    "comments": 20,
    "post": "consequat Lorem elit ad do amet qui magna voluptate eiusmod",
    "time": "Fri Dec 23 2016 01:00:05 GMT+0530 (IST)"
  },
  {
    "_id": "58bc399a6f1334cfb2adb41e",
    "name": "Isabella Hudson",
    "department": "Software",
    "picture": "http://placehold.it/32x32",
    "likes": 37,
    "comments": 2,
    "post": "magna enim non voluptate proident cupidatat eu veniam sint dolore",
    "time": "Sun Sep 07 2014 06:27:39 GMT+0530 (IST)"
  },
  {
    "_id": "58bc399ac56ad4caa201d475",
    "name": "Davis Church",
    "department": "Maintanance",
    "picture": "http://placehold.it/32x32",
    "likes": 25,
    "comments": 14,
    "post": "anim pariatur aliquip amet eiusmod esse consectetur aliqua non est",
    "time": "Tue Feb 28 2017 02:39:07 GMT+0530 (IST)"
  },
  {
    "_id": "58bc399a3776c1ae9b737d01",
    "name": "Browning Winters",
    "department": "Maintanance",
    "picture": "http://placehold.it/32x32",
    "likes": 30,
    "comments": 17,
    "post": "sit sit ad magna nulla excepteur quis minim veniam nisi",
    "time": "Sun Aug 30 2015 13:18:03 GMT+0530 (IST)"
  },
  {
    "_id": "58bc399a05123b7bed168a16",
    "name": "Langley Abbott",
    "department": "Maintanance",
    "picture": "http://placehold.it/32x32",
    "likes": 11,
    "comments": 10,
    "post": "quis culpa enim officia consectetur ea veniam elit labore amet",
    "time": "Mon Jun 22 2015 10:53:50 GMT+0530 (IST)"
  },
  {
    "_id": "58bc399a14e5efa694cf9477",
    "name": "Verna Montgomery",
    "department": "Software",
    "picture": "http://placehold.it/32x32",
    "likes": 34,
    "comments": 1,
    "post": "anim et ut Lorem ipsum ut laborum duis enim consequat",
    "time": "Sat May 21 2016 00:20:50 GMT+0530 (IST)"
  },
  {
    "_id": "58bc399aec8c0baf66fa42cc",
    "name": "Shelia Luna",
    "department": "Maintanance",
    "picture": "http://placehold.it/32x32",
    "likes": 32,
    "comments": 20,
    "post": "ullamco ullamco ullamco non adipisicing do anim qui commodo non",
    "time": "Wed Sep 14 2016 13:53:37 GMT+0530 (IST)"
  },
  {
    "_id": "58bc399a4f0ed25dfde7ccef",
    "name": "Molly Hill",
    "department": "Software",
    "picture": "http://placehold.it/32x32",
    "likes": 2,
    "comments": 7,
    "post": "ex aute voluptate id pariatur sunt tempor amet proident et",
    "time": "Mon Jun 15 2015 17:14:09 GMT+0530 (IST)"
  },
  {
    "_id": "58bc399a5508a89331fff312",
    "name": "Sherri Clarke",
    "department": "Software",
    "picture": "http://placehold.it/32x32",
    "likes": 2,
    "comments": 9,
    "post": "sunt aliqua ex nisi qui commodo pariatur voluptate laborum excepteur",
    "time": "Wed Mar 23 2016 19:03:33 GMT+0530 (IST)"
  }
];

@Injectable()
export class AmaService {

  private AMAData : AMAPost[];

  constructor(public http:Http) {
    this.AMAData = sampleData.map(p => this.clone(p))
  }

  trending() {
    let result  = this.AMAData.sort((n1,n2) => n2.likes - n1.likes);
    return Observable.from(result)
      .catch(this.handleError);
  }

  popular() {
    let result  = this.AMAData.sort((n1,n2) => n2.comments - n1.comments);
    return Observable.from(result)
      .catch(this.handleError);
  }

  recent() {
    //hack to sort by date. Remove in production
    let result  = this.AMAData
      .sort((n1,n2) => {
        let d2 = new Date(n2.time),
        d1 = new Date(n1.time);
        return  d2.getTime()-d1.getTime()
      });
    return Observable.from(result)
      .catch(this.handleError);
  }

  private clone(object: any){
    // hack
    return JSON.parse(JSON.stringify(object));
  }

  recommended() {
    return Observable.from(this.AMAData)
      .catch(this.handleError);
  }

  handleError(error) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
