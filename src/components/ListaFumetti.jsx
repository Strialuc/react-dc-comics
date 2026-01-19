import comics from "./comics";

const ListaFumetti = () => {
    const renderFumetti = () => {
        return comics.map((fumetto) => (
            <div className="fumetto-card" key={fumetto.id}>
                <img src={fumetto.thumb} alt={fumetto.title} />
                <h3>{fumetto.series}</h3>
            </div>
        ));
    };

    return (
        <div className="container-fumetti">
            {renderFumetti()}
        </div>
    );
};

export default ListaFumetti;
