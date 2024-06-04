import React from "react";
import {ErrorBoundary} from "../error-boundary/ErrorBoundary";
import {AuthenticationProvider} from "../../hooks/useAuthentication/authentication.provider";
import {DashboardPage} from "../../pages/dashboard/dashboard-page";

export const App: React.FC = () => {
    return (
        <ErrorBoundary>
            <AuthenticationProvider>
                <main>
                    <h1>React Hooks (1)</h1>
                    <DashboardPage/>
                </main>
            </AuthenticationProvider>
        </ErrorBoundary>
    )
}