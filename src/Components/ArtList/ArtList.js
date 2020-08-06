import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { selectArt } from './Reducers/Actions/selectArt'
import './ArtList.css'
import Card from './Card'
    
class ArtList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arts: this.props.arts
        };
    }

    doneArt = id => {
        const index = this.state.arts.map(art => art.id).indexOf(id);
        
        this.setState(state => {
            let {arts} = state;
            arts[index].done = true;
            return arts;
        })

        let loader = `<div id="loader"><img width=200 src='https://upload.wikimedia.org/wikipedia/commons/a/a3/Lightness_rotate_36f_cw.gif'></img></div>`;
        document.getElementById('loaderBox').innerHTML = loader;
        
        id++
        
        fetch('https://reqres.in/api/products/'+id)
            .then(res => res.json())
            .then((data) => {
                setTimeout(() => {
                    console.log(data)
                    document.getElementById('loaderBox').innerHTML = '';
                }, 2000);
        })   
    }

    backArt = id => {
        const index = this.state.arts.map(art => art.id).indexOf(id);
        this.setState(state => {
            let {arts} = state;
            arts[index].done = false;
            return arts;
        })
    }

    componentDidMount() {
            let raw = localStorage.getItem('document');
            raw = JSON.parse(raw);
            if (raw){
                this.setState({arts: raw});
            }else{
                this.setState({arts: this.props.arts})
            }
    }

    componentDidUpdate() {
        localStorage.setItem('document',JSON.stringify(this.state.arts));
    }

    render(){
        const {arts} = this.state;
        
        return (
            <>
            <h1>Картины эпохи Возрождения</h1>
            <div className='wrapper'>
                {   
                    (arts === null)?
                        this.props.arts.map((art, i) => {
                            return <Card  key={i} art={art} doneArt={() => this.doneArt(art.id)} backArt={() => this.backArt(art.id)}/>
                        })
                    :
                    arts.map((art, i) => {
                        return <Card key={i} art={art} doneArt={() => this.doneArt(art.id)} backArt={() => this.backArt(art.id)}/>
                    })
                }
            </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        arts: state.arts
    } 
}

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators({selectArt: selectArt}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ArtList)
