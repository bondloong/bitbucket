import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectArt } from './Reducers/Actions/selectArt'
import Mark from '../../mark.svg'

function Card(props) {
    const ActionBtn = () =>(
        <>
        {
            props.art.done? 
            <button onClick={props.backArt}
                    className='button' 
                    style={{backgroundColor: '#5B3A32', width: 118}}>
                    <img src={Mark} style={{marginRight: 7.2}}></img> В корзине
            </button>
            : 
            <button onClick={props.doneArt}
                    className='button'
                    style={{width: 118}}>
                    Купить
            </button>
        }
        </>
    )
        
    

    return (
        <div  className={!props.art.auc? 'item saled' : 'item'}> 
        <div onClick={() => props.selectArt(props.art)}  style={{background: 'url('+props.art.image+') center', backgroundSize: 'cover', height: 157,  width: '100%', cursor: 'pointer'}}></div>
        <div className='discription-art'>
            <h2>{props.art.name}</h2>
            <h2>{props.art.autor}</h2>
            <div className='buy'>
                {
                    !props.art.auc?
                    <> 
                        <span style={{fontWeight: 'bold', fontSize: 16}}>Продана на аукционе</span>
                    </>
                    : 
                    <>
                        <div className='prices'>
                            {
                               props.art.newPrice? 
                               <>
                                <h5 className='sale'>{props.art.price} $</h5>
                                <h3>{props.art.newPrice ? props.art.newPrice + ' $' : ''}</h3>
                               </>
                            :
                                <h3>{props.art.price + ' $' }</h3>
                            }  
                        </div>
                        <ActionBtn></ActionBtn>
                    </>
                }
            </div>
        </div>
    </div>
    )
}

const mapStateToProps = (state) => {
    return {
        arts: state.arts
    } 
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({selectArt: selectArt}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Card)

