import React from 'react';
import { Row } from 'react-bootstrap';
import '../css/style.css'



export default class Apostar extends React.Component {
    render() {
    return <div>
        <Row className='text-center my-3 mt-5'> 
            <div className="card col-lg-4 col-md-6 col-sm-12 ml-2">
                <h5 className="card-title">Tipos de Aposta 1</h5>
            </div>
        </Row>
        <Row className='text-center my-3 mt-5'> 
            <div className="card col-lg-4 col-md-6 col-sm-12 ml-2">
                <h5 className="card-title">Tipo de Aposta 2</h5>
            </div>
        </Row>
    </div>
    }
}