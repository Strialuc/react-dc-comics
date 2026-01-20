import comics from "../comics";
import ListaCard from "./ListaCard";

const ListaFumetti = () => {
    const renderFumetti = () => {
        return comics.map((fumetto) => (
            <ListaCard key={fumetto.id}
                fumetto={fumetto}
            />
        ));
    };

    return (
        <div className="container-fumetti">
            {renderFumetti()}
        </div>
    );
};

export default ListaFumetti;
