
import ListaFumetti from "./ListaFumetti"

const MainContent = () => {
    return (
        <main>

            <div className="jumbotron"></div>

            <section className="fumetti-section">
                <ListaFumetti />
            </section>

            <section className="info-section">
                <div className="container">
                    <ul>
                        <li>
                            <img src="src/assets/buy-comics-digital-comics.png" alt="" />
                            DIGITAL COMICS</li>
                        <li>
                            <img src="src/assets/buy-comics-merchandise.png" alt="" />
                            DC MERCHANDISE</li>
                        <li>
                            <img src="src/assets/buy-comics-subscriptions.png" alt="" />
                            SUBSCRIPTION</li>
                        <li>
                            <img src="src/assets/buy-comics-shop-locator.png" alt="" />
                            COMIC SHOP LOCATOR</li>
                        <li>
                            <img src="src/assets/buy-dc-power-visa.svg" alt="" />
                            DC POWER VISA</li>
                    </ul>
                </div>
            </section>
        </main>


    );

};

export default MainContent