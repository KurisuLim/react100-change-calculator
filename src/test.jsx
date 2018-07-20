import React from 'react';

export class Test extends React.Component {
  render() {
    if (this.state.output == null) {
      return <div />;
    }
    if (this.state.output >= 0) {
      return (
        <div className='alert alert-success alert-dismissible' role='alert'>
        The total change is due is $ {this.state.output}
        </div>
    );
}
return (
    <div className='alert alert-success alert-dismissible' role='alert'>
    More money is needed. Please try again later.
    </div>
    );
}

}