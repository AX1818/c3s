import React from 'react';

import PhotoThumbnail from '../../components/PhotoThumbnail';

export default class C3Store extends React.Component {
  
  constructor(props) {
    super(props);
    this.photoThumbnails = [];
  }

  componentWillMount() {
    const items = [
      {
        src: 'images/IMAG0038.jpg',
        altText: 'Slide 1',
        caption: 'Slide 1'
      },
      {
        src: 'images/IMAG0039.jpg',    
        altText: 'Slide 2',
        caption: 'Slide 2'
      },
      {
        src: 'images/IMAG0049.jpg',    
        altText: 'Slide 3',
        caption: 'Slide 3'
      },
      {
        src: 'images/IMAG0054.jpg',    
        altText: 'Slide 4',
        caption: 'Slide 4'
      },
      {
        src: 'images/IMAG0074.jpg',    
        altText: 'Slide 5',
        caption: 'Slide 5'
      }
    ];

    this.photoThumbnails = items;
  }


  render() {
    return (
      <div className="store-container">
        {
          this.photoThumbnails.map((photoThumbnail) => {
            return (
              <PhotoThumbnail {...photoThumbnail} />
            );
          })
        }
  
      </div>
    );
  }
  
}
