export function useLocalStorage<T>(key: string) {
    const get = (): T | null => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    };
    
    const set = (value: T) => {
        localStorage.setItem(key, JSON.stringify(value));
    }

    const remove = () => {
        localStorage.removeItem(key);
    }

    return { get, set, remove };
}
