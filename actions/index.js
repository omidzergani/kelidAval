

//Actions Key
export const SET_INTRO_STATUS = 'SET_INTRO_STATUS';
export const GET_INTRO_STATUS = 'GET_INTRO_STATUS';
export const SET_HOME_ISMOUNTED = 'SET_HOME_ISMOUNTED';
//Actions

export const SetIntroStatus = (payload) => ({
    type: SET_INTRO_STATUS,
    payload
});

export const GetIntroStatus = (payload) => ({
    type: GET_INTRO_STATUS,
    payload
});

export const SetMountedTotrue = () => (
        {
            type: SET_HOME_ISMOUNTED,
            mounted: true
        }
    );
