/// <reference types="react" />
import { QuarkElement } from "quarkc";
declare global {
    interface HTMLElementTagNameMap {
        "my-component": MyComponent;
    }
}
declare class MyComponent extends QuarkElement {
    count: number;
    add: () => void;
    componentDidMount(): void;
    render(): JSX.Element;
}
export default MyComponent;
