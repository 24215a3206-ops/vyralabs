'use client'

import { Component, ReactNode } from 'react'
import { AlertTriangle, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Props {
    children: ReactNode
    fallback?: ReactNode
}

interface State {
    hasError: boolean
    error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error }
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        // Log error to console in development
        console.error('Error Boundary caught an error:', error, errorInfo)
        
        // In production, you could send this to an error tracking service
        // Example: Sentry.captureException(error)
    }

    render() {
        if (this.state.hasError) {
            // Custom fallback UI
            if (this.props.fallback) {
                return this.props.fallback
            }

            // Default error UI
            return (
                <div className="min-h-screen flex items-center justify-center bg-background px-6">
                    <div className="max-w-md w-full text-center">
                        <div className="mb-8">
                            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-50 flex items-center justify-center">
                                <AlertTriangle className="w-10 h-10 text-red-600" />
                            </div>
                            <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                                Something went wrong
                            </h1>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                We&apos;re sorry, but something unexpected happened. 
                                Our team has been notified and is working to fix the issue.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Button
                                variant="accent"
                                onClick={() => {
                                    this.setState({ hasError: false, error: undefined })
                                    window.location.reload()
                                }}
                                className="gap-2"
                            >
                                <RefreshCw className="w-4 h-4" />
                                Reload page
                            </Button>
                            <Button
                                variant="ghost"
                                onClick={() => window.location.href = '/'}
                            >
                                Go to homepage
                            </Button>
                        </div>

                        {process.env.NODE_ENV === 'development' && this.state.error && (
                            <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
                                <p className="text-xs font-mono text-red-800 break-all">
                                    {this.state.error.toString()}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            )
        }

        return this.props.children
    }
}
