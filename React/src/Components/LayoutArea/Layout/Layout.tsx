import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Routing } from "../Routing/Routing";
import css from "./Layout.module.css";

export function Layout(): JSX.Element {
    return (
        <div className={css.Layout}>
            <header>
                <Header />
            </header>
            <main>
                <Routing />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}
