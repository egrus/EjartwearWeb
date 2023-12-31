// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        users: [
            { id: 1, name: 'Egrus', mail: "egrus@ejartwear.com", password: "egrus123", authorization: 3 },
            { id: 2, name: 'Raijoffle', mail: "raijoffle@ejartwear.com", password: "raijoffle23", authorization: 2 },
            { id: 3, name: 'Izzo', mail: "izzo@ejartwear.com", password: "izzo123", authorization: 1 },
            { id: 4, name: 'Zeqcv', mail: "zeqcv@ejartwear.com", password: "zeqcv123", authorization: 0 },
        ],
        isAuth: []
    }),
    getters: {
        getUserById: (state) => (userId) => {
            return state.users.find((user) => user.id === userId);
        },
        getIsAuth: (state) => {
            return state.isAuth;
        },
    },
    actions: {
        addUser(user) {
            this.users.push(user);
        },
        setIsAuth(value) {
            this.isAuth = value;
        },
    },
});