import css from "./Home.module.css";
import stat from "../../../Assets/img/stat.png"
import { useTitle } from "../../../Hooks/useTitle";
import { useRouteProtect } from "../../../Hooks/useRouteProtect";

export function Home(): JSX.Element {
    useTitle("Home");
    useRouteProtect();
    return (
        <div className={css.Home}>
            <article>
                <h1>Explanation about the system.</h1>
                <p>
                    <img src={stat} alt="Statistics" />
                    Current our system display to administrators statistics about "Vacations agency".<br />
                    Another our system "Vacation agency" allows to user to like / unlike vacations.
                </p>

            </article>


        </div>
    );
}
