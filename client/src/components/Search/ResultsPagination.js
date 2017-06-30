import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class ResultsPagination extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      totalItems: Math.ceil(this.props.totalItems/10)
    }
  }

  printPagination = (length) => {
    const piArray = [];
    for( let i = 0; i < length; i++){
      piArray.push(
        <PaginationItem key={i} onClick={() => this.props.paginationHandler(i + 1)}>
          <PaginationLink href="#">
            { i + 1 }
          </PaginationLink>
        </PaginationItem>
      )
    } return piArray;
  }

  render() {
    let PaginationItems = this.printPagination(this.state.totalItems);
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
