import { useRouteProtect } from "../../../Hooks/useRouteProtect";
import { useTitle } from "../../../Hooks/useTitle";
import css from "./Statistics.module.css";

export function Statistics(): JSX.Element {
    useTitle("Statistics");
    useRouteProtect();
    return (
        <div className={css.Statistics}>
			
        </div>
    );
}
