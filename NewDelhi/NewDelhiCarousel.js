import React, { Component } from "react";
import img1 from "./Humayun'sTomb.png";
import img2 from "./IndiaGate.png";
import img3 from "./LotusTemple.png"
import img4 from "./QutubMinar.png"
import img5 from "./RedFort.png"

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
  
    caption: "Humayun's Tomb.png"
    
  },
  {
    src: img2,
    
    caption: "India Gate"
  },
  {
    src: img3,
    caption: " Lotus Temple"
  
  },
  {
    src: img4,
    
    caption: " Qutub Minar"
  },
  {
    src: img5,
    
    caption: " Red Fort"
    
  }
];

class NewDelhiCarousel extends Component {
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

export default NewDelhiCarousel;
