// Error Boundaries | React TypeScript Cheatsheets
// cf. https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/error_boundaries/

import { Component } from 'react'
import type { ErrorInfo, ReactNode } from 'react'

interface Props {
  fallback?: JSX.Element
  children: ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      // TODO: default error component
      return this.props.fallback || <h1>Sorry.. there was an error</h1>
    }

    return this.props.children
  }
}

export default ErrorBoundary
