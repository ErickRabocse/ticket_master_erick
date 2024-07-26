import { Component } from 'react'
// This class-component was copied from the legacy-react-site: https://legacy.reactjs.org/docs/error-boundaries.html
// It wraps the component 'Details' in the 'Router' --> if an error is caught returns the message: Ha ocurrido un error.
class ErrorBoundary extends Component {
  constructor (props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError (error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  render () {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback
    }

    return this.props.children
  }
}

export default ErrorBoundary
