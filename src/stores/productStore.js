import { reactive, toRefs } from 'vue';
import { defineStore } from 'pinia';

export const useProductStore = defineStore({
    id: 'Products',
    state: () => ({
        // filterIsOpen'u reactive olarak tanımla
        data: reactive({
            filterIsOpen: false,
        }),
    }),
    getters: {},
    actions: {
        // setIsFilter fonksiyonunu güncelle
        setIsFilter(value) {
            this.data.filterIsOpen = value;
        },
    },
});

// filterIsOpen'u toRefs ile ayrıştır
export const useProductStoreRefs = () => {
    const store = useProductStore();
    return toRefs(store.data);
};