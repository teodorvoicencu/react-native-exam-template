// @format
import React from 'react';
import { connect } from 'react-redux';
import { Trip } from './types';
import { TripActions } from './redux';
import LoadingSpinner from '../components/LoadingSpinner';

interface WithTripsProps {
    trips: Trip[];
    loading: boolean;
    fetch: () => void;
}

const withTrips = <P extends WithTripsProps>(
    Component: React.ComponentType<P>
) => {
    class TripsConnector extends React.Component<WithTripsProps> {
        componentDidMount(): void {
            const { fetch } = this.props;
            fetch();
        }

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
            loading: state.trips.loading,
            trips: state.trips.data
        };
    };

    const mapDispatchToProps = (dispatch: any) => {
        return {
            fetch: () => dispatch(TripActions.fetchAvailable())
        };
    };

    return connect(mapStateToProps, mapDispatchToProps)(TripsConnector);
};

export default withTrips;
