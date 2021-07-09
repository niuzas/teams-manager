import React, {FC, useContext, useEffect, useState} from 'react';
import LoginForm from "./components/LoginForm";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import {IUser} from "./models/IUser";
import UserService from "./services/UserService";

const App: FC = () => {
    const {store} = useContext(Context);
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth()
        }
    }, [])

    async function getUsers() {
        try {
            const response = await UserService.fetchUsers();
            setUsers(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    if (store.isLoading) {
        return <div>Užkraunama...</div>
    }

    if (!store.isAuth) {
        return (
            <div>
                <LoginForm/>
                <button onClick={getUsers}>Vartotojų sarašas</button>
            </div>
        );
    }

    return (
        <div>
            <h1>{store.isAuth ? `Vartotojas autorizuotas ${store.user.email}` : 'AUTORIZUOKITĖS'}</h1>
            <h1>{store.user.isActivated ? 'Vartotojas patvirtintas (emeilas)' : 'PATVIRTINKITE SAVO EMEILĄ!!!!'}</h1>
            <button onClick={() => store.logout()}>Atsijungti</button>
            <div>
                <button onClick={getUsers}>Vartotojų sąrašas</button>
            </div>
            {users.map(user =>
                <div key={user.email}>{user.email}</div>
            )}
        </div>
    );
};

export default observer(App);
