import React, { Component} from 'react';

import {Card, CardTitle, CardMedia} from 'material-ui';

class Series extends Component{
  render(){
    const data = [
      {id:1, titulo: 'Strangers Things', fecha: '2016', image: './images/1.jpeg'},
      {id:2, titulo: 'Black Mirror', fecha: '2011', image: './images/2.jpeg'},
      {id:3, titulo: 'House of Cards', fecha: '2013', image: './images/3.jpeg'},
      {id:4, titulo: '13 Reasons Why', fecha: '2017', image: './images/4.jpeg'},
      {id:5, titulo: 'Bojack Horseman', fecha: '2014', image: './images/5.jpeg'},
      {id:6, titulo: 'Defenders', fecha: '2017', image: './images/6.jpeg'},
      {id:7, titulo: 'The Crow', fecha: '2016', image: './images/7.jpeg'}
    ]
    const estilos = {
      margin: '0.5em',
      padding: '0'
    }
    return(
      <main>
        <div className="row">
          <h1>Series</h1>
        </div>
        <div className="row center-xs">
          {
            data.map((item) => (
              <Card key={item.id} className="col-xs-7 col-sm-3 col-md-2" style={estilos}>
                <CardMedia>
                  <img src={item.image} alt=""/>
                </CardMedia>
                <CardTitle
                title={item.titulo}
                subtitle={item.fecha} />
              </Card>
            ))
          }
        </div>
      </main>
    );
  }
}

export default Series;
