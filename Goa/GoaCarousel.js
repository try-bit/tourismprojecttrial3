import React, { Component } from "react";
import img1 from "./CalanguteBeach.jpg"
import img2 from "./ChurchofOurLadyoftheImmaculateConception.png";
import img3 from "./DudhsagarFalls.png"
import img4 from "./MahadevTempleGoa.png"
import img5 from "./BasilicadeBomJesus.png";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

const items = [
  {
    src: img4,
    
    caption: " Mahadev Temple Goa"
    
  },
  {
    src: img2,
    
    caption: "Churcho Of Our Lady Of The Immaculate Conception"
  },
  {
    src: img3,
    caption: " Dudhsagar Falls"
  
  },
  {
   
    src: img5,
  
    caption: "Basilicade Bom Jesus"
  },
  {
    src: img1,
    
    caption: " Calangute Beach"
    
  }
];

class GoaCarousel extends Component {
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
          <h1 style={{fontSize:6}}>
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

export default GoaCarousel;
