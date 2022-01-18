import { useCallback, useEffect, useRef } from 'react';

const useOutsideClick = (func) => {
    const contentRef = useRef(null);

    const handleClick = useCallback((event) => {
        if (contentRef.current && !contentRef.current.contains(event.target)) {
            func();
        }
    }, [func])

    const handleKey = useCallback((event) => {
        if (event.key === 'Escape') {
            func();
        }
    }, [func])

    const registerListener = () => {
        document.addEventListener('click', handleClick, true);
        document.addEventListener('keydown', handleKey, true);
    }

    const removeListener = () => {
        document.removeEventListener('click', handleClick, true);
        document.removeEventListener('keydown', handleKey, true);
    }

    useEffect(() => {
        return () => {
            document.removeEventListener('click', handleClick, true);
            document.removeEventListener('keydown', handleKey, true);
        }
    }, [handleClick, handleKey])

    return { contentRef, registerListener, removeListener };
}

export default useOutsideClick;