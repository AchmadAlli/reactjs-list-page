import React, { Component } from 'react';
import PaginationItem from '../pagination-item/pagination-item.component'
import './pagination.styles.scss';

class Pagination extends Component{

  constructor(props) {
    super(props)
  
    this.state = {
       current: 1,
       items: this.generatePageNumber(props.items)
    }

    this.nextItem = this.nextItem.bind(this);
    this.prevItem = this.prevItem.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  generatePageNumber(chunkedData){
    let result = [];
    for(let index = 1; index <= chunkedData.length; index++){
      result.push(index)
    }

    console.log(result);
    console.log(this.props.items);    

    return result;
  }
  
  nextItem(){
    const { current, items } = this.state;
    
    if(current < items.length){
      this.setState({current: this.state.current + 1}, )
      this.props.getPage(current + 1)
    }
  }

  prevItem(){
    const { current } = this.state;

    if(current > 1 ){
      this.setState({current: this.state.current - 1})
      this.props.getPage(current - 1)
    }
  }

  changePage(item){
    this.setState({current: item})
    this.props.getPage(item)

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
          items.map((item, index) => <PaginationItem key={index} content={item} isActive={current - 1  === index} clickEvent={() => this.changePage(item)} /> )
        }
        {
          isNextAvailable(current)
        }
      </div>
    )
  }
}

export default Pagination;