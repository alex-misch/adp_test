import { IPicture } from "../../interface/IPicture";

export const ADD_PICTURE = 'ADD_PICTURE'
export const DELETE_PICTURE = 'DELETE_PICTURE'
export const PENDING_PICTURE = 'PENDING_PICTURE'

interface AddPictureAction {
    type: typeof ADD_PICTURE
    payload: IPicture
}

interface DeletePictureAction {
    type: typeof DELETE_PICTURE
    id: number
}

interface PendingPictureAction {
    type: typeof PENDING_PICTURE,
    state: boolean
}

export interface PictureState {
    isPending: boolean,
    stack: IPicture[],
    error?: object,
}

const initialImgState: PictureState = {
    isPending: false,
    stack: [],
    error: undefined,
};


export const reducer = (state = initialImgState, action: PictureActionTypes) => {
    switch (action.type) {
        case PENDING_PICTURE:
            return {
                ...state,
                isPending: action.state,
            };
        case ADD_PICTURE:
            return {
                ...state,
                isPending: false,
                stack: [(action.payload as IPicture), ...state.stack],
            };
        case DELETE_PICTURE:
            return {
                ...state,
                stack: state.stack.filter(img => img.id !== action.id),
            };
        default:
            return state;
    }
}


export type PictureActionTypes = AddPictureAction | DeletePictureAction | PendingPictureAction


export const actions = {
    delete: (id): { type: string, id: number } => ({
        type: DELETE_PICTURE,
        id
    }),
    add: (newPicture: IPicture): { type: string, payload: IPicture } => ({
        type: ADD_PICTURE,
        payload: newPicture
    }),
    pending: (state: boolean = true): { type: string, state: boolean } => ({
        type: PENDING_PICTURE,
        state
    })
}