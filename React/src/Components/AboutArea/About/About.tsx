import { useTitle } from "../../../Utils/UseTitle";
import css from "./About.module.css";

export function About(): JSX.Element {
    useTitle("About...")
    return (
        <div className={css.About}>
            <h1>About me:</h1>
            <p>My name is Stanislav Mestechkin, and I am the full stack developer...
                I have extensive developing web applications, and I am responsible for all stages of the project - from planning and development to testing and technical support.</p>

            <h2>Tools and Technologies Used in current project:</h2>
            <ul>
                Front End:
                <li>React</li>
                <li>Bootstrap</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
            </ul>
            <ul>
                Back End:
                <li>Flask</li>
                <li>Django</li>
                <li>Python</li>
                <li>Mysql</li>
                <li>Docker</li>
                <li>AWS</li>
            </ul>
        </div>
    );
}
