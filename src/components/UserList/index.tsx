import React from 'react'
import { UserItem } from '../UserItem'
import { IUser } from '@/pages/api/data.interface'
import { UserListProps } from './UserList.interface'

export const UserList = ({ users }: UserListProps) => <div className='flex flex-wrap gap-5 w-2/4'>
    {
        users?.map((user: IUser, idx) => <UserItem key={user.id} user={user} index={idx} />)
    }
</div>
