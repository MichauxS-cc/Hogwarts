function Product(props) {
    const { equipment, addToCauldron } = props;
    return (
        <div>
            <img className="equip-img" src={equipment.img} alt={equipment.name}></img>
            <h3>{equipment.name}</h3>
            <div>${equipment.price}</div>
            <div>
                <button onClick={() => addToCauldron(equipment)}>Add To Cauldron</button>
            </div>
        </div>
    );
}

export default Product;
