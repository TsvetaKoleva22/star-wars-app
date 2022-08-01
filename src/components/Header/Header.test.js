import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header';

const queryClient = new QueryClient();

describe('Header', () => {
    beforeEach(() => {
        render(
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <Header />
                </BrowserRouter>
            </QueryClientProvider>
        );
    })
    
    test('renders header wrapper', () => {
        const wrapper = screen.getByTestId('Header');

        expect(wrapper).toBeInTheDocument();
    })

    test('renders app logo and navigation in the header', () => {
        
        const logo = screen.getByTestId("Header__Logo");
        const navigation = screen.getByTestId("Navigation");

        expect(logo).toBeInTheDocument();
        expect(navigation).toBeInTheDocument();
    })
})
