import React , {Component} from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from 'react-bootstrap/Spinner'

class Infinite  extends Component{
    state = {
        items: Array.from({ length: 3 }),
        hasMore: true
      };
    
      fetchMoreData = () => {
        if (this.state.items.length >= 500) {
          this.setState({ hasMore: false });
          return;
        }
        // a fake async api call like which sends
        // 20 more records in .5 secs
        setTimeout(() => {
          this.setState({
            items: this.state.items.concat(Array.from({ length: 18 }))
          });
        }, 500);
      };

    render(){
        let {children, items=this.state.items, hasMore=this.state.hasMore, fetchMoreData=this.fetchMoreData} = this.props
    return(
        <InfiniteScroll
  dataLength={items.length} //This is important field to render the next data
  next={fetchMoreData}
  hasMore={hasMore}
  loader={<Spinner animation="grow" variant="info" style={{textAlign: 'center'}}>
     <span className="sr-only">Loading...</span>
    </Spinner>
    }
  endMessage={
    <p style={{textAlign: 'center'}}>
       Go Back to Top
    </p>
  }
  // below props only if you need pull down functionality
  refreshFunction={this.fetchMoreData}
  pullDownToRefresh
  
  >
{children}
</InfiniteScroll>
    )
}
}
export default Infinite