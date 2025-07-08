import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Error404 from '@pages/Error'
import type { AuthContext } from '@hooks/useAuth'

const queryClient = new QueryClient()

type RouterContext = {
    authentication: AuthContext
}

export const Route = createRootRouteWithContext<RouterContext>()({
    component: RootComponent,
    notFoundComponent: () => <Error404 />,
})

function RootComponent() {
    return (
        <QueryClientProvider client={queryClient}>
            <Outlet />
            <TanStackRouterDevtools />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}
