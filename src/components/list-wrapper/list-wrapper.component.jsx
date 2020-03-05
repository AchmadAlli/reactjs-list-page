import React, { Component } from 'react';
import _ from 'underscore';
import ListItem from '../list-item/list-item.component';
import Pagination from '../pagination/pagination.component';
import PendingPayment from '../../data/pendingPayment';
import SuccessPayment from '../../data/successfulPayment';
import './list-wrapper.styles.scss'

class listWrapper extends Component {

  constructor(props) {
    super(props)
    const data = props.title === 'Pembayaran lunas' ? SuccessPayment : PendingPayment;
  
    this.state = {
       listData: _.chunk(data, 5),
       currentPage: 1
    }
    
    this.getCurrentPage = this.getCurrentPage.bind(this)
  }
  
  getCurrentPage(currentPage){
    this.setState({currentPage: currentPage })
  }

  render() {
    const { title } = this.props;
    const { listData, currentPage } = this.state;

    return (
      <div className="list-wrapper">
        <h1> {title} </h1>
        <table className="list-wrapper__table">
          <thead>
            <tr>
              <td> # </td>
              <td> Nama </td>
              <td> No Invoice </td>
              <td> Tanggal Pembayaran </td>
              <td> Nominal </td>
              <td> Action </td>
            </tr>
          </thead>
          <tbody>
            {
              listData[currentPage - 1].map( (item, index) => <ListItem {...item} key={item.id} number={index + 1} />)
            }
          </tbody>
        </table>
        <Pagination getPage={this.getCurrentPage} items={listData.length} />
      </div>
    )
  }
}

export default listWrapper;