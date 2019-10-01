import React, { Component } from "react";
import ReactDOM from "react-dom";
import {Carousel} from 'react-bootstrap'

const SlideImage = (props) => {

  let active = ""

  if (props.activeIndex == props.id) {
    active = "active"
  } else {
    active = ""
  }

  return (
    <Carousel.Item className={active}>
      <img src={props.image} width={900} height={500} alt={props.altText} />
    </Carousel.Item>
  )
}

export default SlideImage