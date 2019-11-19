import { Component, OnInit } from '@angular/core';
import { Title, DomSanitizer } from '@angular/platform-browser';

import {
  AccessibilityConfig,
  AdvancedLayout,
  GalleryService,
  GridLayout,
  Image,
  LineLayout,
  PlainGalleryConfig,
  PlainGalleryStrategy
} from '@ks89/angular-modal-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass']
})
export class GalleryComponent {
  title = 'Gallery';

  

  imageIndex = 1;
  galleryId = 200;

  customPlainGalleryRowConfig: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.CUSTOM,
    layout: new AdvancedLayout(-1, true)
  };

  customPlainGalleryColumnConfig: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.CUSTOM,
    layout: new AdvancedLayout(-1, true)
  };

  customPlainGalleryRowDescConfig: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.CUSTOM,
    layout: new AdvancedLayout(-1, true)
  };

  plainGalleryRow: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.ROW,
    layout: new LineLayout({ width: '80px', height: '80px' }, { length: 2, wrap: true }, 'flex-start')
  };
  plainGalleryRowSpaceAround: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.ROW,
    layout: new LineLayout({ width: '50px', height: '50px' }, { length: 2, wrap: true }, 'space-around')
  };
  plainGalleryRowATags: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.ROW,
    layout: new LineLayout({ width: '95px', height: '63px' }, { length: 4, wrap: true }, 'flex-start'),
    // when advanced is defined, additionalBackground: '50% 50%/cover' will be used by default.
    // I added this here, to be more explicit.
    advanced: { aTags: true, additionalBackground: '50% 50%/cover' }
  };

  plainGalleryColumn: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.COLUMN,
    layout: new LineLayout({ width: '50px', height: '50px' }, { length: 3, wrap: true }, 'flex-start')
  };

  plainGalleryGrid: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.GRID,
    layout: new GridLayout({ width: '80px', height: '80px' }, { length: 3, wrap: true })
  };

  images: Image[] = [
    new Image(0, {
      img: '../assets/images/gallery/img.jpg',
      extUrl: 'http://www.google.com'
    }),
    new Image(1, {
      img: '../assets/images/gallery/img2.jpg',
      description: 'Description 2'
    }),
    new Image(
      2,
      {
        img: '../assets/images/gallery/img3.jpg',
        description: 'Description 3',
        extUrl: 'http://www.google.com'
      },
      {
        img: '../assets/images/gallery/thumbs/img3.png',
        title: 'custom title 2',
        alt: 'custom alt 2',
        ariaLabel: 'arial label 2'
      }
    ),
    new Image(3, {
      img: '../assets/images/gallery/img4.jpg',
      description: 'Description 4',
      extUrl: 'http://www.google.com'
    }),    
    new Image(13, { img: '../assets/images/gallery/img5.jpg' }, { img: '../assets/images/gallery/thumbs/img5.jpg' })
  ];

  imagesRect: Image[] = [
    new Image(
      0,
      {
        img: '../assets/img/gallery/01.jpg',
        description: 'Cow Softy(CW)'
      },
      { img: '../assets/img/gallery/thumb/01.jpg' }
    ),
    new Image(
      1,
      { 
        img: '../assets/img/gallery/02.jpg',
        description: 'NDM'
      },
      { 
        img: '../assets/img/gallery/thumb/02.jpg' 
      }
     ),
    new Image(
      2,
      {
        img: '../assets/img/gallery/03.jpg',
        description: 'Goat Nappkid'
      },
      {
        img: '../assets/img/gallery/thumb/03.jpg',        
      }
    ),
    new Image(
      3,
      {
        img: '../assets/img/gallery/04.jpg',
        description: 'Goat Glaze(PG4)'
      },
      { img: '../assets/img/gallery/thumb/04.jpg' }
    ),
    new Image(
      4, 
      { 
        img: '../assets/img/gallery/05.jpg',
        description: 'Sebago'
     },
     { img: '../assets/img/gallery/thumb/05.jpg' }
     ),
    new Image(
      5,
      {
        img: '../assets/img/gallery/06.jpg',
        description: 'Vokata(R7)'
      },
      { img: '../assets/img/gallery/thumb/06.jpg' }
    ),
    new Image(
      6,
      { 
        img: '../assets/img/gallery/07.jpg',
        description: 'Sheep Cabretta(R10)'
      },
      { img: '../assets/img/gallery/thumb/07.jpg' }
      ),
    new Image(
      7,
      { 
        img: '../assets/img/gallery/08.jpg',
        description: 'Cow Aniline'
      },
      { img: '../assets/img/gallery/thumb/08.jpg' }
      ),
    new Image(
      8,
      { 
        img: '../assets/img/gallery/09.jpg',
        description: 'Cow Corrected(B26)'
      },
      { img: '../assets/img/gallery/thumb/09.jpg' }
      ),
    new Image(
      9,
      { 
        img: '../assets/img/gallery/10.jpg',
        description: 'Rambler'
      },
      { img: '../assets/img/gallery/thumb/10.jpg' }
      ),
    new Image(
      10,
      { 
        img: '../assets/img/gallery/11.jpg',
        description: 'Shunken'
      },
      { img: '../assets/img/gallery/thumb/11.jpg' }
      ),
    new Image(
      11,
      { 
        img: '../assets/img/gallery/12.jpg',
        description: 'Printed Milled(R12)'
      },
      { img: '../assets/img/gallery/thumb/12.jpg' }
      ),
    new Image(
     12,
      { 
        img: '../assets/img/gallery/13.jpg',
        description: 'Buff Print'
      },
      { img: '../assets/img/gallery/thumb/13.jpg' }
      ),
    new Image(
     13,
      { 
        img: '../assets/img/gallery/14.jpg',
        description: 'EMU'
      },
      { img: '../assets/img/gallery/thumb/14.jpg' }
      ),
    new Image(
     14,
      { 
        img: '../assets/img/gallery/15.jpg',
        description: 'Metro'
      },
      { img: '../assets/img/gallery/thumb/15.jpg' }
      ),
    new Image(
     15,
      { 
        img: '../assets/img/gallery/16.jpg',
        description: 'D11'
      },
      { img: '../assets/img/gallery/thumb/16.jpg' }
      ),
    new Image(
     16,
      { 
        img: '../assets/img/gallery/17.jpg',
        description: 'Cow Hai Celled Upper(B33)'
      },
      { img: '../assets/img/gallery/thumb/17.jpg' }
      ),
    new Image(
     17,
      { 
        img: '../assets/img/gallery/18.jpg',
        description: 'Siracco'
      },
      { img: '../assets/img/gallery/thumb/18.jpg' }
      ),
    new Image(
     18,
      { 
        img: '../assets/img/gallery/19.jpg',
        description: ''
      },
      { img: '../assets/img/gallery/thumb/19.jpg' }
      ),
    new Image(
     19,
      { 
        img: '../assets/img/gallery/20.jpg',
        description: ''
      },
      { img: '../assets/img/gallery/thumb/20.jpg' }
      ),
    new Image(
    20,
      { 
        img: '../assets/img/gallery/21.jpg',
        description: ''
      },
      { img: '../assets/img/gallery/thumb/21.jpg' }
      ),
    new Image(
     21,
      { 
        img: '../assets/img/gallery/22.jpg',
        description: ''
      },
      { img: '../assets/img/gallery/thumb/22.jpg' }
      ),
    new Image(
     22,
      { 
        img: '../assets/img/gallery/23.jpg',
        description: ''
      },
      { img: '../assets/img/gallery/thumb/23.jpg' }
      ),
    new Image(
     23,
      { 
        img: '../assets/img/gallery/24.jpg',
        description: ''
      },
      { img: '../assets/img/gallery/thumb/24.jpg' }
      ),
    new Image(
      24,
      { 
        img: '../assets/img/gallery/25.jpg',
        description: ''
      },
      { img: '../assets/img/gallery/thumb/25.jpg' }
      ),
    new Image(
     25,
      { 
        img: '../assets/img/gallery/26.jpg',
        description: ''
      },
      { img: '../assets/img/gallery/thumb/26.jpg' }
      ),
    new Image(
     26,
      { 
        img: '../assets/img/gallery/27.jpg',
        description: ''
      },
      { img: '../assets/img/gallery/thumb/27.jpg' }
      ),
    new Image(
     27,
      { 
        img: '../assets/img/gallery/28.jpg',
        description: ''
      },
      { img: '../assets/img/gallery/thumb/28.jpg' }
      ),
    new Image(
     28,
      { 
        img: '../assets/img/gallery/29.jpg',
        description: ''
      },
      { img: '../assets/img/gallery/thumb/28.jpg' }
      ),
    new Image(
     29,
      { 
        img: '../assets/img/gallery/30.jpg',
        description: ''
      },
      { img: '../assets/img/gallery/thumb/30.jpg' }
      ),
    new Image(
     30,
      { 
        img: '../assets/img/gallery/31.jpg',
        description: ''
      },
      { img: '../assets/img/gallery/thumb/31.jpg' }
      ),
    new Image(
     31,
      { 
        img: '../assets/img/gallery/32.jpg',
        description: ''
      },
      { img: '../assets/img/gallery/thumb/32.jpg' }
      ),
    new Image(
     32,
      { 
        img: '../assets/img/gallery/33.jpg',
        description: ''
      },
      { img: '../assets/img/gallery/thumb/33.jpg' }
      ),
    new Image(
     33,
      { 
        img: '../assets/img/gallery/34.jpg',
        description: ''
      },
      { img: '../assets/img/gallery/thumb/34.jpg' }
      ),
    new Image(
     34,
      { 
        img: '../assets/img/gallery/35.jpg',
        description: ''
      },
      { img: '../assets/img/gallery/thumb/35.jpg' }
      ),
    new Image(
     35,
      { 
        img: '../assets/img/gallery/36.jpg',
        description: ''
      },
      { img: '../assets/img/gallery/thumb/36.jpg' }
      ),
    new Image(
     36,
      { 
        img: '../assets/img/gallery/37.jpg',
        description: ''
      },
      { img: '../assets/img/gallery/thumb/37.jpg' }
      ),
    new Image(
     37,
      { 
        img: '../assets/img/gallery/38.jpg',
        description: ''
      },
      { img: '../assets/img/gallery/thumb/38.jpg' }
      ),
    new Image(
     38,
      { 
        img: '../assets/img/gallery/39.jpg',
        description: ''
      },
      { img: '../assets/img/gallery/thumb/39.jpg' }
      ),
    new Image(
     39,
      { 
        img: '../assets/img/gallery/40.jpg',
        description: ''
      },
      { img: '../assets/img/gallery/thumb/40.jpg' }
      )
      
  ];

  accessibilityConfig: AccessibilityConfig = {
    backgroundAriaLabel: 'CUSTOM Modal gallery full screen background',
    backgroundTitle: 'CUSTOM background title',

    plainGalleryContentAriaLabel: 'CUSTOM Plain gallery content',
    plainGalleryContentTitle: 'CUSTOM plain gallery content title',

    modalGalleryContentAriaLabel: 'CUSTOM Modal gallery content',
    modalGalleryContentTitle: 'CUSTOM modal gallery content title',

    loadingSpinnerAriaLabel: 'CUSTOM The current image is loading. Please be patient.',
    loadingSpinnerTitle: 'CUSTOM The current image is loading. Please be patient.',

    mainContainerAriaLabel: 'CUSTOM Current image and navigation',
    mainContainerTitle: 'CUSTOM main container title',
    mainPrevImageAriaLabel: 'CUSTOM Previous image',
    mainPrevImageTitle: 'CUSTOM Previous image',
    mainNextImageAriaLabel: 'CUSTOM Next image',
    mainNextImageTitle: 'CUSTOM Next image',

    dotsContainerAriaLabel: 'CUSTOM Image navigation dots',
    dotsContainerTitle: 'CUSTOM dots container title',
    dotAriaLabel: 'CUSTOM Navigate to image number',

    previewsContainerAriaLabel: 'CUSTOM Image previews',
    previewsContainerTitle: 'CUSTOM previews title',
    previewScrollPrevAriaLabel: 'CUSTOM Scroll previous previews',
    previewScrollPrevTitle: 'CUSTOM Scroll previous previews',
    previewScrollNextAriaLabel: 'CUSTOM Scroll next previews',
    previewScrollNextTitle: 'CUSTOM Scroll next previews',

    carouselContainerAriaLabel: 'Current image and navigation',
    carouselContainerTitle: '',
    carouselPrevImageAriaLabel: 'Previous image',
    carouselPrevImageTitle: 'Previous image',
    carouselNextImageAriaLabel: 'Next image',
    carouselNextImageTitle: 'Next image',
    carouselPreviewsContainerAriaLabel: 'Image previews',
    carouselPreviewsContainerTitle: '',
    carouselPreviewScrollPrevAriaLabel: 'Scroll previous previews',
    carouselPreviewScrollPrevTitle: 'Scroll previous previews',
    carouselPreviewScrollNextAriaLabel: 'Scroll next previews',
    carouselPreviewScrollNextTitle: 'Scroll next previews'
  };

  constructor(private galleryService: GalleryService, private sanitizer: DomSanitizer, private titleService: Title) {}

  openImageModalRow(image: Image) {
    console.log('Opening modal gallery from custom plain gallery row, with image: ', image);
    const index: number = this.getCurrentIndexCustomLayout(image, this.images);
    this.customPlainGalleryRowConfig = Object.assign({}, this.customPlainGalleryRowConfig, { layout: new AdvancedLayout(index, true) });
  }

  openImageModalColumn(image: Image) {
    console.log('Opening modal gallery from custom plain gallery column, with image: ', image);
    const index: number = this.getCurrentIndexCustomLayout(image, this.images);
    this.customPlainGalleryColumnConfig = Object.assign({}, this.customPlainGalleryColumnConfig, { layout: new AdvancedLayout(index, true) });
  }

  openImageModalRowDescription(image: Image) {
    console.log('Opening modal gallery from custom plain gallery row and description, with image: ', image);
    const index: number = this.getCurrentIndexCustomLayout(image, this.imagesRect);
    this.customPlainGalleryRowDescConfig = Object.assign({}, this.customPlainGalleryRowDescConfig, { layout: new AdvancedLayout(index, true) });
  }

  addRandomImage() {
    const imageToCopy: Image = this.images[Math.floor(Math.random() * this.images.length)];
    const newImage: Image = new Image(this.images.length - 1 + 1, imageToCopy.modal, imageToCopy.plain);
    this.images = [...this.images, newImage];
  }

  openModalViaService(id: number | undefined, index: number) {
    console.log('opening gallery with index ' + index);
    this.galleryService.openGallery(id, index);
  }

  trackById(index: number, item: Image) {
    return item.id;
  }

  private getCurrentIndexCustomLayout(image: Image, images: Image[]): number {
    return image ? images.indexOf(image) : -1;
  }


  ngOnInit() {
    this.titleService.setTitle(this.title);
  }

  

}
