import React from 'react';
import { LISTA_DE_BIXOS } from './data';
import '../css/style.css'
import { Link } from 'react-router-dom';



export default function Bichos() {
    return (
        <div>
            <h1 className='text-center my-3'>Bichos</h1>
            {LISTA_DE_BIXOS.map((item, index) => <div className="col-12 row m-3" key={index}> 
                <div className="card col-lg-4 col-md-6 col-sm-12 ml-2">
                    <h5 className="card-title">{item.nome}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Descrição: {item.descricao}</h6>
                    <p className="card-text">Número: {item.numero}</p>
                    <Link to="/apostas" title='Adicionar ao carrinho'
                        className="btn btn-success"
                        style={{
                            position: "absolute",
                            right: 10,
                            bottom: 10,
                            fontSize: 30,
                            width: 60
                        }}>
                    <i className='bi bi-cart' />
                </Link>
                </div>
            </div>
            )}
        </div>
    )
}