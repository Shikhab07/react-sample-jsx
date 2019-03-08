import React from 'react';

const ProfileComponent = ({props}) => (
    <div>
        Hello  !
    </div>
)

const mapStateToProps = (state) => {
    return {
        profile: state.user.profile,
        isLoggedIn: state.isLoggedIn
    }
}

export default ProfileComponent;