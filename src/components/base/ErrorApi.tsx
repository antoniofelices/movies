const ErrorApi = ({ message }: { message: string }) => {
    return (
        <div className="grid h-screen place-items-center">
            <h1>Sorry about this</h1>
            <p>Error: {message}</p>
        </div>
    )
}

export default ErrorApi
