import React from 'react'
import { connect } from 'react-redux'
import { buy_pokemon_action, return_pokemon_action } from '../../redux/actions/gameShopActions'

//Por props recibe el estado de mi store
const ItemCount = (props) => {
    console.log(props)
    return (
            <div style={{display: 'flex', flexDirection: "row", justifyContent: "space-evenly", padding: "2em", width: "100%"}}>
                <button 
                className= "btn btn-small btn-dark"
                onClick={()=> props.buy_pokemon_action(1)}> Agregar</button>
                <span>Disponible: {props.game_shop.pokemons}</span>
                <button className= "btn btn-small btn-dark"
                onClick={()=> props.return_pokemon_action(1)}> Quitar</button>
                <span>Pokemones en su haber: {props.game_shop.cantidadUsuario}</span>               
            </div>
    )
}

//Integramos las props que recibe de mi store, "ponele"
//Es decir ahora mi componente puede recibir por props el estado del store.
const mapStateToProps = (state) => {
    console.log(state);
    return {
        game_shop: state.game_shop
    }
}

const mapDispatchToProps = {
    buy_pokemon_action,
    return_pokemon_action
}

//Conectamos el componente a redux. El primer parámetro corresponde a mappear los estados, y el segundo parámetro corresponde a los dispatch en connect
export default connect(mapStateToProps, mapDispatchToProps)(ItemCount);
