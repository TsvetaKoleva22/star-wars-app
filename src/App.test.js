import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import App from './App';

const queryClient = new QueryClient()

describe('App', () => {
    test('renders app main wrapper', () => {
        render(
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </QueryClientProvider>
        );
    
        const wrapper = screen.getByTestId('App__Wrapper');
        expect(wrapper).toBeInTheDocument();
    });
})

describe('App page navigating', () => {
    test('navigating from home to starships page', async () => {
        render(
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </QueryClientProvider>
        );
        
        expect(screen.getByText("No character added to favorites yet")).toBeInTheDocument();
        expect(screen.getByText("No starship added to favorites yet")).toBeInTheDocument();
        expect(screen.getByText("No vehicle added to favorites yet")).toBeInTheDocument();
      
        await userEvent.click(screen.getByText("Starships"));
        expect(screen.queryByText("No character added to favorites yet")).not.toBeInTheDocument();
        expect(screen.getByText("No starship added to favorites yet")).toBeInTheDocument();
        expect(screen.queryByText("No vehicle added to favorites yet")).not.toBeInTheDocument();
      })
      
      test('landing on a Not Found page', () => {
        const wrongRoute = '/test';
      
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter initialEntries={[wrongRoute]}>
                    <App />
                </MemoryRouter>
            </QueryClientProvider>
        )
      
        expect(screen.getByText("404")).toBeInTheDocument();
      })
})
