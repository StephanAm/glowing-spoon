import React, {PropTypes} from 'react';
import {connect} from 'react-redux'
class SupplierPage extends React.Component{
    render(){
        return(
        <div>
            <h1>Suppliers</h1>
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