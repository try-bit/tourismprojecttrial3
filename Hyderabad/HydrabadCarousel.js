import React, { Component } from "react";
import img1 from "./BirlaScienceMuseum.png";
import img2 from "./GolcondaFort.png";
import img3 from "./HussainSagarLake.png"
import img4 from "./RamojiFilmCity.png"
import img5 from "./TheCharminar.png"

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

const items = [
  {
    src: img1,
  
    caption: "Birla Science Museum"
    
  },
  {
    src: img2,
    
    caption: "Golconda Fort"
  },
  {
    src: img3,
    caption: "HussainSagarLake"
  
  },
  {
    src: img4,
    
    caption: " Ramoji Film City"
  },
  {
    src: img5,
    
    caption: " The Charminar"
    
  }
];

class HydrabadCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
   
    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} className="img-carousel" />
          <h1 style={{fontSize:10}}>
          <CarouselCaption
          
            captionText={item.altText}
            captionHeader={item.caption}
          />
         </h1>
        </CarouselItem>
        
        
        
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
      
    );
  }
}

export default HydrabadCarousel;
