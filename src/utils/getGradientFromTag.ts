export const getGradientFromTag = (tag: string): string => {
    switch (tag) {
        case 'climbing':
            return 'bg-gradient-to-r from-orange-500 via-neutral-500 to-yellow-500';
        case 'travel':
            return 'bg-gradient-to-r from-green-500 to-blue-300';
        default:
            return 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500';
    }
};
