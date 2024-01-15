import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const UserForm = () => {
    const { register } = useForm();

    const onSubmitHandler = async (event) => {
        event.preventDefault(); // Prevents the default form submission behavior

        const formData = new FormData(event.target);
        try {
            await axios.post('http://localhost:8000/api/create/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('User added successfully!');
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <label>Username</label>
            <input {...register('username')} />

            <label>Age</label>
            <input type="number" {...register('age')} />

            <label>Phone</label>
            <input {...register('phone')} />

            <label>Email</label>
            <input type="email" {...register('email')} />

            <label>Image</label>
            <input type="file" {...register('image')} />

            <button type="submit">Submit</button>
        </form>
    );
};

export default UserForm;
