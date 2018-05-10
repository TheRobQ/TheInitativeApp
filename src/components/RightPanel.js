import React from 'react';
import urls from '../urls';
import Slider from './Slider'

export default class RightPanel extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      urlArray: urls,
      slideIndex: 0,
      image: urls[0]
    }
    this.slideIncrementer = this.slideIncrementer.bind(this)
  }

  slideIncrementer = (urls) =>{
    console.log( this.state.urlArray.length-2);
     if(this.state.slideIndex > this.state.urlArray.length-2){
       return this.setState({slideIndex: 0, image: urls[0]})
     } else{
        this.setState((prevState) => {
        return   {slideIndex:  prevState.slideIndex += 1, image: urls[this.state.slideIndex]}
        })
      }
  }


  intervals = setInterval(() => this.slideIncrementer(urls), 14000)


  render(){
    console.log(this.state.slideIndex);
    console.log(this.state.image);
    return (
      <section className="leftImage">
        <div className="mySlides">
          <Slider image={this.state.image}/>
        </div>
      </section>)
  }
}
