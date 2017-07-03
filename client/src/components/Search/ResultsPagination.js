import React, { Component } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class ResultsPagination extends Component {

  printPagination = (length) => {
    const piArray = [];
    for( let i = 0; i < length; i++){
      piArray.push(
        <PaginationItem key={i} onClick={() => this.props.paginationHandler(i)}>
          <PaginationLink href="#">
            { i + 1 }
          </PaginationLink>
        </PaginationItem>
      )
    } return piArray;
  }

  render() {
    console.log(this.props);
    let PaginationItems = this.printPagination(Math.ceil(this.props.totalItems/10));
    return (
      <Pagination style={{ justifyContent: 'center'}}>
        <PaginationItem>
          <PaginationLink previous href="#" />
        </PaginationItem>
        { PaginationItems }
        <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
      </Pagination>
    );
  }
}

export default ResultsPagination
