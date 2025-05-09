export const buttonStyles = {
    base: "flex items-center gap-2 px-6 py-3 font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105",
    variants: {
        primary: "bg-primary-600 hover:bg-primary-700 ",
        secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white",
        danger: "bg-red-600 hover:bg-red-700 text-white",
        success: "bg-green-600 hover:bg-green-700 text-white",
    },
    sizes: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    },
    icon: {
        base: "h-5 w-5",
        sm: "h-4 w-4",
        lg: "h-6 w-6",
    }
};

export const inputStyles = {
    base: "peer w-full px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:border-primary-500 dark:focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:focus:ring-primary-500/20 transition-colors duration-200",
    label: "absolute left-4 top-2 text-gray-500 dark:text-gray-400 transition-all duration-200 transform peer-focus:-translate-y-5 peer-focus:scale-75 peer-[&:not(:placeholder-shown)]:-translate-y-5 peer-[&:not(:placeholder-shown)]:scale-75 origin-left bg-white dark:bg-gray-800 px-1 pointer-events-none",
    select: {
        base: "peer w-full px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:border-primary-500 dark:focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:focus:ring-primary-500/20 transition-colors duration-200",
        label: "absolute left-4 top-2 text-gray-500 dark:text-gray-400 transition-all duration-200 transform peer-focus:-translate-y-5 peer-focus:scale-75 peer-[&:not(:placeholder-shown)]:-translate-y-5 peer-[&:not(:placeholder-shown)]:scale-75 origin-left bg-white dark:bg-gray-800 px-1 pointer-events-none"
    }
};

export const cardStyles = {
    base: "bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200 p-5",
    header: "text-2xl font-bold text-gray-900 dark:text-white mb-4",
    body: "text-gray-700 dark:text-gray-300"
}; 