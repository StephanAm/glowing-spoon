import React, {PropTypes} from 'react';
import SupplierRow from './SupplierRow';
import {connect} from 'react-redux'
class SupplierPage extends React.Component{
    render(){
        return(
        <div>
            {this.props.suppliers.map((sup,i)=>(<SupplierRow id={sup.id} name={sup.name}/>))}
        </div>
        );
    }
}
function mapStateToProps(state,ownProps){
    return {
        suppliers:state.suppliers
    };
}
export default connect
    (mapStateToProps)//,mapDispatchToProps)
    (SupplierPage);