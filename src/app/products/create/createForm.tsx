'use client'
import { CreateProduct } from '@/models/types';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form'

export default function CreateForm() {
    const router = useRouter();
    
    const form = useForm<CreateProduct>({
        defaultValues: {
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        mode: 'all'
    });
    const { register, handleSubmit, watch, formState, setValue } = form;
    const { errors, isDirty, isValid } = formState;
    const watchAll = watch();
    // console.log(watchAll)

    useEffect(() => {
        if (localStorage.getItem('createNewProduct')) {
            const localStorageCreateItem = JSON.parse(localStorage.getItem('createNewProduct') || '')
            setValue('title', localStorageCreateItem.title)
            setValue('price', localStorageCreateItem.price)
            setValue('description', localStorageCreateItem.description)
            setValue('image', localStorageCreateItem.image)
        }
    }, [setValue])

    useEffect(() => {
        localStorage.setItem('createNewProduct', JSON.stringify(watchAll))
    },[watchAll])
    
    function onSubmit(data: CreateProduct) {
        console.log(data)
        async function fetchAPI() {
            const res = await fetch('http://localhost:4000/products', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data)
            })
    
            if (res.status === 201) {
                localStorage.removeItem('createNewProduct');
                router.push('/')
                router.refresh()
            }
        }
        fetchAPI()
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor='title'>Product Name</label>
            <input 
                type='text' 
                id="title" 
                {...register("title", {
                    required: 'Title is required'
                })}
            />
            <p className='error'>{errors.title?.message}</p>
            <label htmlFor='price'>Price</label>
            <input 
                type='number' 
                id="price" 
                {...register("price", {
                    valueAsNumber: true,
                    required: 'Price is required'
                })}
            />
            <p className='error'>{errors.price?.message}</p>
            <label htmlFor='description'>Description</label>
            <input 
                type='text' 
                id="description" 
                {...register("description", {
                    required: 'Description is required'
                })}
            />
            <p className='error'>{errors.description?.message}</p>
            <label htmlFor='image'>Image</label>
            <input 
                type='url' 
                id="image" 
                {...register("image", {
                    required: "Image URL is required",
                    pattern: {
                        value: /(https?:\/\/.*\.(?:png|jpg))/,
                        message: 'Invalue URL'
                    }
                })}
            />
            <p className='error'>{errors.image?.message}</p>
            <button 
                type='submit' 
                // disabled={!isDirty || !isValid} 
                className='rounded-full bg-red-400 w-full text-white py-1 px-5 my-5'>
                    Submit
            </button>
        </form>
    )
}