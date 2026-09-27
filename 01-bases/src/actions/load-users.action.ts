import type { UserListResponse } from '../interfaces/reqres.response';

export const loadUsersAction = async (page: number) => {
    try {
        const url = `https://reqres.in/api/users?page=${encodeURIComponent(
            String(page)
        )}`;
        const res = await fetch(url);
        const data: UserListResponse = await res.json();
        return data.data;
    } catch (error) {
        console.log(error);
        return [];
    }
};