import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';

import Navigation from './Navigation';

const queryClient = new QueryClient();

describe('Navigation', () => {
    beforeEach(() => {
        render(
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <Navigation />
                </BrowserRouter>
            </QueryClientProvider>
        );
    })
    
    test('renders navigation wrapper', () => {
        const wrapper = screen.getByTestId('Navigation');

        expect(wrapper).toBeInTheDocument();
    })

    test('renders correct number of navlinks', () => {
        const navlinks = screen.getAllByRole("link");

        expect(navlinks).toHaveLength(4);
    })

    test('renders navlinks with correct text and href', () => {
        const navlinks = screen.getAllByRole("link");

        expect(navlinks[0].textContent).toEqual('Home');
        expect(navlinks[0].href).toContain('/');
        expect(navlinks[1].textContent).toEqual('Characters');
        expect(navlinks[1].href).toContain('/characters');
        expect(navlinks[2].textContent).toEqual('Starships');
        expect(navlinks[2].href).toContain('/starships');
        expect(navlinks[3].textContent).toEqual('Vehicles');
        expect(navlinks[3].href).toContain('/vehicles');
    })
})
