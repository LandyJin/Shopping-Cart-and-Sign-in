import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home', () => {
    it ('should have Hi test', () => {
        // Arrange
        render(<Home />) 
    
        // Act
        const myElem = screen.getByText('Hi')
        
        // Assert
        expect(myElem).toBeInTheDocument()
    })

})