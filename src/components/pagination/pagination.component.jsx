import React, { Component } from 'react';
import PaginationItem from '../pagination-item/pagination-item.component'
import './pagination.styles.scss';

class Pagination extends Component{

  constructor(props) {
    super(props)
  
    this.state = {
       current: 1,
       items: [
         1,2,3,4
       ]
    }

    this.nextItem = this.nextItem.bind(this);
    this.prevItem = this.prevItem.bind(this);
  }
  
  nextItem(){
    const { current, items } = this.state;
    
    if(current < items.length){
      this.setState({current: this.state.current + 1})
    }
  }

  prevItem(){
    const { current } = this.state;

    if(current > 1 )
    this.setState({current: this.state.current - 1})
  }

  render(){
    const { current, items } = this.state;
    const isNextAvailable = current => (<PaginationItem content="Next" clickEvent={this.nextItem} isDisabled={current >= items.length} />) ;
    const isPrevAvailable = current => (<PaginationItem content="Prev" clickEvent={this.prevItem} isDisabled={current <= 1} />) ;

    return (
      <div className="pagination">
        {
          isPrevAvailable(current)
        }
        {
          items.map((item, index) => <PaginationItem content={item} isActive={current - 1  === index} /> )
        }
        {
          isNextAvailable(current)
        }
      </div>
    )
  }
}

export default Pagination;