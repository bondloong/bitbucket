import React, { Component } from 'react'
import { connect } from 'react-redux'

class Search extends Component {
    render() {
        return (
            <div>
                <form className='search'>
                    <input type="text" placeholder="Поиск по названию картины"></input>
                    <button className='button'>Найти</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
   return {
       art: state.active
   }
}

export default connect(mapStateToProps)(Search)
