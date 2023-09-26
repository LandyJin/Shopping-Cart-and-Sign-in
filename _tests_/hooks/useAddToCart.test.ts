import useAddToCart from "@/hooks/useAddToCart";
import { useGenerationStore } from "@/models/states";
import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";

const mockSetAddedItem = jest.fn();
const mockSetCartItems = jest.fn();
const mockSetIsOpenCart = jest.fn();
const cartItems = [{
    title: "test-title",
    price: 10,
    description: "test-description",
    image: "image-url",
    id: "product-id",
    quantity: 1
}]

jest.mock("@/models/states");
const mockUseGenerationStore = useGenerationStore as unknown as jest.Mock;

describe('useAddToCart', () => {  
    beforeAll (() => {
        mockUseGenerationStore.mockImplementation(() => ({
            setAddedItem: mockSetAddedItem,
            cartItems: [],
            setCartItems: mockSetCartItems,
            setIsOpenCart: mockSetIsOpenCart
        }))
    })

    afterEach (() => {
        jest.clearAllMocks();
    })

    it ('should not update zustand if product is undefined', () => {
        // Arrange
        const renderResult = renderHook(() => useAddToCart(undefined));
        // Act
        act(()=>{
            renderResult.result.current();
        })
        // Assert
        expect(mockSetAddedItem).toHaveBeenCalledTimes(0);
        expect(mockSetCartItems).toHaveBeenCalledTimes(0);
        expect(mockSetIsOpenCart).toHaveBeenCalledTimes(0);
    });

    it ('should update zustand if product is not undefined and cartItems is empty', () => {
        // Arrange
        const product = {
            title: "test-title",
            price: 10,
            description: "test-description",
            image: "image-url",
            id: "product-id-1"
        };
        const returnProduct = {
            title: "test-title",
            price: 10,
            description: "test-description",
            image: "image-url",
            id: "product-id-1",
            quantity: 1
        };
        const renderResult = renderHook(() => useAddToCart(product));
        // Act
        act(()=>{
            renderResult.result.current();
        })
        // Assert
        expect(mockSetAddedItem).toHaveBeenCalledTimes(1);
        expect(mockSetAddedItem).toHaveBeenCalledWith(returnProduct);
        expect(mockSetCartItems).toHaveBeenCalledTimes(1);
        expect(mockSetCartItems).toHaveBeenCalledWith([returnProduct]);
    });
})

describe('useAddToCart', () => {
    beforeAll (() => {
        mockUseGenerationStore.mockImplementation(() => ({
            setAddedItem: mockSetAddedItem,
            cartItems: cartItems,
            setCartItems: mockSetCartItems,
            setIsOpenCart: mockSetIsOpenCart
        }))
    })

    afterEach (() => {
        jest.clearAllMocks();
    })

    it ('should update zustand if product is not undefined and cartItems not empty and have same id', () => {
        // Arrange
        const product = cartItems[0]
        const returnProduct = {
            title: "test-title",
            price: 10,
            description: "test-description",
            image: "image-url",
            id: "product-id",
            quantity: 2
        };
        const renderResult = renderHook(() => useAddToCart(product));
        // Act
        act(()=>{
            renderResult.result.current();
        })
        // Assert
        expect(mockSetAddedItem).toHaveBeenCalledTimes(1);
        expect(mockSetAddedItem).toHaveBeenCalledWith(returnProduct);
        expect(mockSetCartItems).toHaveBeenCalledTimes(1);
        expect(mockSetCartItems).toHaveBeenCalledWith([returnProduct]);
    });
})