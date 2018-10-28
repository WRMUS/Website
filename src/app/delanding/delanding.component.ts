import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { album, iAlbum } from '../model/album';

@Component({
  selector: 'app-delanding',
  templateUrl: './delanding.component.html',
  styleUrls: ['./delanding.component.css']
})
export class DelandingComponent implements OnInit {
  photos: iAlbum[];
  photo: iAlbum;
  currentImg : string;
  currentFrame: string = 'Podiumsdiskussion';
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.photos = album;
    document.body.classList.add('nav-hidden','nav-un');
  }
  openModal(content: any, src: string){
    this.currentImg = src;
    const modalRef = this.modalService.open(content,
      {backdrop: true,
        keyboard: true,
        size: 'lg',
        windowClass: 'show'}).result.then((result) => {
      console.log('Closed with: ${result}');
    }, (reason) => {
      this.currentImg = '';
      console.log('Dismissed ${this.getDismissReason(reason)}');
    });
  }
  modalPhoto(content: any, img: string, text: string){
    console.log(content)
    let newPhoto:iAlbum = {
      src: img,
      text,
    }
    this.photo = newPhoto;
    const modalRef = this.modalService.open(content,
      {backdrop: true,
        keyboard: true,
        size: 'lg',
        windowClass: 'show'}).result.then((result) => {
      console.log('Closed with: ${result}');
    }, (reason) => {
      this.currentImg = '';
      console.log('Dismissed ${this.getDismissReason(reason)}');
    });
  }
}