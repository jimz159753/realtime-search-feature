import React from 'react'
import { UserItemProps } from './UserItem.interface'

export const UserItem = ({ user: { name, username, email, phone, website }, index }: UserItemProps) => <div data-testid={`item-${index}`} className='w-80 p-5 shadow-2xl gap-2 flex flex-col'>
    <p>Name: {name}</p>
    <p>Username: {username}</p>
    <p>Email: {email}</p>
    <p>Phone: {phone}</p>
    <p>Website: {website}</p>
</div>