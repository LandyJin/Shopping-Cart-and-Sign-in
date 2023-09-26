import { render, screen } from '@testing-library/react'
import { useGenerationStore } from "@/models/states";
import ChangeIgemQuantity from '@/components/shoppingCart/changeItemQuantity'

const mockSetCartItems = jest.fn();
const cartItems = [{
    title: "test-title",
    price: 10,
    description: "test-description",
    image: "image-url",
    id: "1",
    quantity: 1
}]

jest.mock("@/models/states");
const mockUseGenerationStore = useGenerationStore as unknown as jest.Mock;

describe('Change Item Quantity', () => {
    beforeAll (() => {
        mockUseGenerationStore.mockImplementation(() => ({
            cartItems: cartItems,
            setCartItems: mockSetCartItems
        }))
    })

    afterEach (() => {
        jest.clearAllMocks();
    })

    it ('should increase 1 after click + button', () => {
        // Arrange
        render(<ChangeIgemQuantity id='1'/>) 
    
        // Act
        const addElement = screen.getByText('+')
        addElement.click();
        
        // Assert
        expect(mockSetCartItems).toHaveBeenCalledTimes(1);
        cartItems[0].quantity = 2
        expect(mockSetCartItems).toHaveBeenCalledWith(cartItems);
    })

    it ('should decrease 1 after click - button', () => {
        // Arrange
        render(<ChangeIgemQuantity id='1'/>) 
    
        // Act
        const addElement = screen.getByText('-')
        addElement.click();
        
        // Assert
        expect(mockSetCartItems).toHaveBeenCalledTimes(1);
        cartItems[0].quantity = 0
        expect(mockSetCartItems).toHaveBeenCalledWith(cartItems);
    })

    it ('should delete cart item after click delete button', () => {
        // Arrange
        render(<ChangeIgemQuantity id='1'/>) 
    
        // Act
        const addElement = screen.getByText('DELETE')
        addElement.click();
        
        // Assert
        expect(mockSetCartItems).toHaveBeenCalledTimes(1);
        expect(mockSetCartItems).toHaveBeenCalledWith([]);
    })

})