const ListaCard = (props) => {

    // destructuring
    const { thumb, title, series } = props.fumetto;

    return (
        <div className="fumetto-card">
            <img src={thumb} alt={title} />
            <h3>{series}</h3>
        </div>
    )
}

export default ListaCard