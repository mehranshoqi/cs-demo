const ErrorView = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-4 p-8 text-center">
            <div className="text-red-500 text-lg font-semibold">
                Something went wrong
            </div>
            <div className="text-gray-400 text-sm max-w-md">
                We encountered an issue while loading this section. A support ticket has been automatically created and our team is working to resolve this.
            </div>
            <div className="text-gray-500 text-xs">
                Please try refreshing the page or contact support if the issue persists.
            </div>
        </div>
    );
};

export default ErrorView; 