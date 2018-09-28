import React from 'react';

import { Table, TableRow, TableBody, TableHead, TableCell, Paper } from '@material-ui/core';

const renderTableRows = (data) => {
  console.log("renderTble")
  let rows = []
  let index = 0

  data.videos.forEach(element => {
    rows.push({
      ...element,
      video: true,
      location: data.locations[0],
      rowSpan: data.locations.length >= 20 ? 20 : data.locations.length
    })
    data.locations.splice(0, 1)
    data.locations.every((element, idx) => {
      if (idx === 19 || idx + 1 === data.locations.length) {
        rows.push({
          ...element
        })
        console.log('MERCA', data.locations)
        data.locations.splice(0, idx + 1)
        console.log('PUTA', data.locations)
        index = 0
        return false
      } else {
        rows.push({
          ...element
        })
        index++
        return true
      }
    });
  });

  console.log(rows)
  return rows
}

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            queryResult: {
                videos: [],
                locations: []
            },
            fetched: false
        }

        this.query = this.query.bind(this);
    }    
    
    query() {
        const desde = {};
        const hasta = {};
        console.log($, 'query');
        desde.dia = $('#desde-dia').val();
        desde.hora = $('#desde-hora').val();

        hasta.dia = $('#desde-dia').val();
        hasta.hora = $('#hasta-hora').val();

        var dsd = new Date(desde.dia + ' ' + desde.hora);
        var hst = new Date(hasta.dia + ' ' + hasta.hora);

        dsd.setHours(dsd.getHours() - 3);
        hst.setHours(hst.getHours() - 3);

        console.log(dsd, hst);
        $.post('http://131.255.6.34:3000/api/dispositivos/betweenDates', {
            dates: {
                from: dsd,
                to: hst
            }}, (response) => {
                console.log(response);
                this.setState({
                    queryResult: response.results,
                    fetched: true
                }, () => {
                  console.log('MERCA', this.state)
                });
            });
    }
    
    render() {
        return (
        <div className="section-10 w-clearfix">
              <div className="sidebar">
                <div data-w-id="46b7a4e1-0674-635c-51b6-dabe62866699" className="div-block-24">
                  <div className="aviso">
                    <img src="images/sale.png" className="image-9" />
                    <div className="hora">14:29:30</div>
                    <div className="aviso1">Sale carga depósito</div>
                  </div>
                  <div className="aviso">
                    <img src="images/ruta_1.png" className="image-9" />
                    <div className="hora">14:29:30</div>
                    <div className="text-block-8">Nueva ruta recibida</div>
                  </div>
                  <div className="aviso">
                    <img src="images/llega.png" className="image-9" />
                    <div className="hora">14:29:30</div>
                    <div className="aviso2">Camión llegó a destino</div>
                  </div>
                </div>
              </div>
              <div className="wrappermapa" />
              <div className="modal">
                <div data-w-id="ca01c712-5b0d-eb8b-27a9-ac8982e11760" className="bienvenida">
                  <div className="text-block-4">Bienvenido usuario</div>
                  <div className="text-block-5">Cargando datos...</div>
                  <img src="images/marcador.png" data-w-id="f1950c93-1ad5-32f4-f457-4092ed775484" style={{WebkitTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0DEG) rotateY(0DEG) rotateZ(0DEG) skew(0, 0)', MozTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0DEG) rotateY(0DEG) rotateZ(0DEG) skew(0, 0)', msTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0DEG) rotateY(0DEG) rotateZ(0DEG) skew(0, 0)', transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0DEG) rotateY(0DEG) rotateZ(0DEG) skew(0, 0)'}} className="image-8" />
                </div>
              </div>
              <div data-w-id="71b6a968-c7e3-99ab-c82f-f34f782517e4" style={{WebkitTransform: 'translate3d(-100%, 0PX, 0PX) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(-100%, 0PX, 0PX) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(-100%, 0PX, 0PX) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(-100%, 0PX, 0PX) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} className="div-block-21">
                <div className="w-row">
                  <div className="column-18 w-col w-col-6 w-col-medium-6">
                    <div>
                      <div className="text-block-10">
                        <strong>STATUS</strong>: Conectado...</div>
                    </div>
                    <div className="buscador">
                      <div className="text-block-6">BUSCADOR DE EVENTOS</div>
                      <div className="w-form">
                        <form id="email-form" name="email-form" data-name="Email Form" className="w-clearfix">
                          <div className="w-row">
                            <div className="w-col w-col-4">
                              <select id="Field-4" name="Field" data-name="Field" className="fecha w-select">
                                <option value>Video</option>
                              </select>
                            </div>
                            <div className="w-col w-col-4">
                              <select id="field-2" name="field-2" data-name="Field 2" className="fecha w-select">
                                <option value>Localización</option>
                              </select>
                            </div>
                            <div className="w-col w-col-4">
                              <input id="desde-dia" min="2014-09-08" name="field-3" data-name="Field 3" className="fecha w-select" type="date" />
                            </div>
                          </div>
                          <div className="w-row">
                            <div className="w-col w-col-6">
                              <div className="text-block-6">Desde hora</div>
                              <input id="desde-hora" className="w-input"  name="field-5" data-name="Field 5" placeholder="Example Text" type="time" />
                            </div>
                            <div className="w-col w-col-6">
                              <div className="text-block-6">Hasta hora</div>
                              <input id="hasta-hora"  className="w-input"  name="field-5" data-name="Field 5" placeholder="Example Text" required type="time" />
                            </div>
                          </div>
                        </form>
                        <button onClick={this.query} defaultValue="Buscar" data-wait="Please wait..." className="buscar w-button">Buscar</button>

                        <div className="w-form-done">
                          <div>Thank you! Your submission has been received!</div>
                        </div>
                        <div className="w-form-fail">
                          <div>Oops! Something went wrong while submitting the form.</div>
                        </div>
                        <div className="w-row">
                          <div id="result">
                         
                            <Paper style={{maxHeight: 600, overflow: 'auto'}}>
                              <Table>
                                <TableHead>
                                  <TableRow>
                                    <TableCell>
                                      Video
                                    </TableCell>
                                    <TableCell>
                                      Ubicacion
                                    </TableCell> 
                                    <TableCell>
                                      Conectividad
                                    </TableCell>
                                    <TableCell>
                                      Notificaciones
                                    </TableCell>    
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                      this.state.fetched && renderTableRows(this.state.queryResult).map(row => {
                                        return (
                                          row.video ? 
                                            <TableRow>
                                              <TableCell rowSpan={row.rowSpan + 1}>
                                                <a href="#" onClick={()=> window.open(`http://131.255.6.34:3000/api/containers/videos/download/${row.path.slice(15)}`,'myWindow', 'width=600, heigth=600')}> {row.date} </a>
                                              </TableCell>
                                              <TableCell >
                                                <a href="#" onClick={()=> window.open(`https://www.google.com/maps/search/?api=1&query=${row.location.geo.lat}, ${row.location.geo.lng}`, 'myWindow', 'width=600, heigth=600')}>{ `${row.location.geo.lat} - ${row.location.geo.lng}` }</a>
                                              </TableCell>
                                              <TableCell rowSpan={row.rowSpan + 1}>
                                                ONLINE
                                              </TableCell>
                                              <TableCell rowSpan={row.rowSpan + 1}>
                                                SIN NOTIFICACIONES
                                              </TableCell>
                                            </TableRow> :
                                            <TableRow>
                                              <TableCell>
                                                <a href="#" onClick={()=> window.open(`https://www.google.com/maps/search/?api=1&query=${row.geo.lat}, ${row.geo.lng}`, 'myWindow', 'width=600, heigth=600')}>{ `${row.geo.lat} - ${row.geo.lng}` }</a>
                                              </TableCell> 
                                            </TableRow> 
                                        )
                                      }
                                        
                                      )
                                      
                                    }

                                </TableBody>
                              </Table>
                            </Paper>
                        
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column-8 w-col w-col-6 w-col-medium-6">
                    <div className="div-block-23">
                    </div>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

export default Home;