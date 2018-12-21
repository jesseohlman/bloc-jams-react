import React, {component} from 'react';

class Album extends React.Component{
    render(){
return(
    <section className="album">
    {this.props.match.params.slug} album goes here
    </section>
);
}
}
export default Album;