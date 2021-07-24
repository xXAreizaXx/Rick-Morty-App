import './Container.css';
import { CharacterQuery } from '../../services/Query'
import { useState } from 'react';
import ArrowRigth from '../Icons/ArrowRigth';
import ArrowLeft from '../Icons/ArrowLeft';

export default function Container() {
    const [page, setPage] = useState(1)


    return (
        <div className="containerCards">
            {
                page === 1
                    ?
                    <div className="pagination">
                        <h3 className="numberPage">{page}</h3>
                        <button className="next" onClick={() => setPage(page + 1)}><ArrowRigth /></button>
                    </div>
                    :
                    <div className="pagination">
                        <button className="previous" onClick={() => setPage(page - 1)}><ArrowLeft /></button>
                        <h3 className="numberPage">{page}</h3>
                        <button className="next" onClick={() => setPage(page + 1)}><ArrowRigth /></button>
                    </div>
            }
            <div className="divCards">
                <CharacterQuery page={page} />
            </div>
            {
                page === 1
                    ?
                    <div className="pagination">
                        <h3 className="numberPage">{page}</h3>
                        <button className="next" onClick={() => setPage(page + 1)}><ArrowRigth /></button>
                    </div>
                    :
                    <div className="pagination">
                        <button className="previous" onClick={() => setPage(page - 1)}><ArrowLeft /></button>
                        <h3 className="numberPage">{page}</h3>
                        <button className="next" onClick={() => setPage(page + 1)}><ArrowRigth /></button>
                    </div>
            }
        </div>

    )
}