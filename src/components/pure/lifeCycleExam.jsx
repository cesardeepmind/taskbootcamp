import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class lifeCycleExam extends Component {
  constructor(props){
      super(props)
      console.log('CONSTRUCTOR: Cuando se instancia el componente');
  }

  componentWillMount(){
      console.log('WILLMOUNT: Antes del montaje del componente');
  }

  componentDidMount(){
    console.log('DIDMOUNT: Justo al acabar el montaje del componente');
  }

  componentWillReceiveProps(nextProps){
    console.log('Si va a recibir nuevas props');
  }

  shouldComponentUpdate(nextProps, nextState){
    //   Controlar si el componente debe o no actualizarse
    // return true / false
  }

  componentWillUpdate(nextProps, nextState){
      console.log('WillUpdate: Si va a recibir nuevos props');
  }

  componentDidUpdate(nextProps, nextState){
      console.log('DidUpdate: Justo despues de actualizarse');
  }

  componentWillUnmount(){
    console.log('WillUnmount: Justo antes de desaparecer');
  }

  render() {
    return (
      <div>lifeCycleExam</div>
    )
  }
}

export default lifeCycleExam