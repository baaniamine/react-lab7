function withLogging(WrappedComponent) {
  function EnhancedComponent(props) {
    console.log('Props recues :', props);
    return <WrappedComponent {...props} />;
  }

  const wrappedName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component';
  EnhancedComponent.displayName = `withLogging(${wrappedName})`;

  return EnhancedComponent;
}

export default withLogging;
