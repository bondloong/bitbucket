import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { selectArt } from '../../Reducers/Actions/selectArt'
class ArtDetails extends Component {
    render() {
        if (!this.props.art){
            return (<></>)
        }
        
        return (
            
            <div className='container' style={{flexDirection: 'column'}}>
                <h2>Предпросмотр картины</h2>
                <p>{this.props.art.name}</p>
                <div className='close' onClick={() => this.props.selectArt(null)}>⊗</div>
                <img width="1000px" src={this.props.art.image} alt={'картина ' + this.props.art.name + ' от ' + this.props.art.autor}></img><br />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
   return {
       art: state.active,
   }
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({selectArt: selectArt}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ArtDetails)



