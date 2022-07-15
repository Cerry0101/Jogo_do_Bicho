import React from 'react';
import '../css/style.css'
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';


export default function Vitrine() {
    return (
        <div>
            <h1 className='text-center my-3'>Jogo do Bixo</h1>
            
            <Row className='text-center my-3 mt-5'> 
                <Col>
                    <Link to="/apostar" title='Faça Sua Aposta' className="card-link">Faça Sua Aposta</Link>
                </Col>
                <Col>
                    <Link to="/cotacao" title='Verificar Cotações e Resultados' className="card-link">Verificar Cotações e Resultados</Link>
                </Col>
                <Col>
                    <Link to="/bichos" title='Verificar Bixos' className="card-link">Verificar Bichos</Link>
                </Col>
            </Row>
        </div>
    )
}