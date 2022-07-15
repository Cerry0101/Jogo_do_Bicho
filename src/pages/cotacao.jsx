import React from 'react';
import { Row } from 'react-bootstrap';
import '../css/style.css'



export default class Cotacao extends React.Component {
    render() {
    return <div>
        <Row className='text-center my-3 mt-5'> 
            <div className="card col-lg-4 col-md-6 col-sm-12 ml-2">
                <h5 className="card-title">Horários</h5>
            </div>
        </Row>
        <Row className='text-center my-3 mt-5'> 
            <div className="card col-lg-4 col-md-6 col-sm-12 ml-2">
                <h5 className="card-title">Resultados</h5>
            </div>
        </Row>
    </div>
    }
}