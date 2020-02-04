// @format
import React from 'react';
import { connect } from 'react-redux';
import LoadingSpinner from './LoadingSpinner';

interface ConnectorProps {
    loading: boolean;
}

const hockMock = <P extends ConnectorProps>(
    Component: React.ComponentType<P>
) => {
    class HocConnector extends React.Component<ConnectorProps> {
        render() {
            const { loading, ...props } = this.props;
            return loading ? (
                <LoadingSpinner />
            ) : (
                <Component {...(props as P)} />
            );
        }
    }

    const mapStateToProps = (state: any) => {
        return {
            loading: state.reducer.loading
        };
    };

    const mapDispatchToProps = (dispatch: any) => {
        return {
            fetch: () => dispatch()
        };
    };

    return connect(mapStateToProps, mapDispatchToProps)(HocConnector);
};

export default hockMock;
