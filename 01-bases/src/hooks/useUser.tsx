import { useEffect, useRef, useState } from 'react';
import type { User } from '../interfaces/reqres.response';

// Fallback local implementation for loading users to avoid missing module import
const loadUsersAction = async (page: number): Promise<User[]> => {
    try {
        const resp = await fetch(`https://reqres.in/api/users?page=${page}`);
        const data = await resp.json();
        return data.data as User[];
    } catch (error) {
        return [];
    }
};

export const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const currentPageRef = useRef(1);

    useEffect(() => {
        loadUsersAction(1).then(setUsers);
    }, []);

    const nextPage = async () => {
        currentPageRef.current++;
        const users = await loadUsersAction(currentPageRef.current);

        if (users.length > 0) {
        setUsers(users);
        } else {
        currentPageRef.current--;
        }
    };

    const prevPage = async () => {
        if (currentPageRef.current < 1) return;

        currentPageRef.current--;

        const users = await loadUsersAction(currentPageRef.current);
        setUsers(users);
    };

    return {
        users,

        nextPage,
        prevPage,
    };
};