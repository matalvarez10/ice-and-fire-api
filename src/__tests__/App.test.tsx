import '@testing-library/jest-dom'
import { render } from "@testing-library/react"
import { MemoryRouter } from 'react-router-dom'; 
import App from "../App"

test("Muestra la pagina principal", () => {
    render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    );
    expect(true).toBeTruthy();
});