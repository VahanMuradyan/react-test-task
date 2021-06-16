import React, {useEffect, useState} from "react";
import { useTypeSelector } from "../hooks/useTypeSelector";
import {useActions} from "../hooks/useActions";

const PassengerList: React.FC = () => {
    const state = useTypeSelector(state => state.passenger)
    const pagesCount = 5
    const [pages, setPages] = useState( Array.from(Array(pagesCount), (i, key) => key + 1) );
    const { setPassengerPage, fetchPassengers} = useActions()
    useEffect(() => {
        fetchPassengers(state.page, state.limit)
    }, [state.page])

    if(state.loading) {
        return <h1>Loading ...</h1>
    }
    if(state.error){
        return <h1> {state.error}</h1>
    }

    function paginate(arrow : string){
        let wd = [];
        if(
            arrow === 'right' && state.page === pages[pages.length - 1] ||
            arrow === 'left' && state.page === pages[0]
         ){
            for (let i = 1; i <= pagesCount && state.page + pagesCount < state.maxPage - 1 ; i++) {
                if (i <= pagesCount) {
                    let item = arrow === 'right' ? state.page + i : state.page - i
                    if(item > 0){
                        wd.push(item);
                    }

                }
            }
            if(arrow === 'left'){
                wd.reverse();
            }
            setPages(wd);
        }
        arrow === 'right' ? setPassengerPage(state.page + 1) :  setPassengerPage(state.page - 1)
    }


    return (
        <div>
            {
                state.passengers.map(passenger => <div style={{border: '1px solid grey', marginBottom: 10, width: '250px', padding:10}} key={passenger._id}> Trips : {passenger.trips} <br/> Passenger Name : {passenger.name} <br/><br/> </div>)
            }
            <div style={ {display:'flex'} }>
                {   state.page === 1 ||
                    <div
                        onClick={() => paginate('left')}
                        style={{border: '2px solid grey', padding: 10, cursor: 'pointer'}}>
                        &#8592;
                    </div>
                }
                {
                    pages.map(page =>
                        <div
                            onClick={() => setPassengerPage(page)}
                            style={{border: page === state.page ? '2px solid green' : '2px solid grey', padding: 10, cursor: 'pointer'}}>
                            {page}
                        </div>)
                }
                {   state.page === state.maxPage - 1 && pages.length < state.maxPage - 1 ||
                    <div onClick={() => paginate('right') } style={{border: '2px solid grey', padding: 10, cursor: 'pointer'}}>
                        &#8594;
                    </div>
                }
            </div>

        </div>
    )
}

export default PassengerList