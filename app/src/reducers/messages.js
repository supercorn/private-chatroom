import uuid from "node-uuid";
import {ADD_MESSAGE, DELETE_MESSAGE, EDIT_MESSAGE} from "../actions/messages";

export const messagesReducer = function (state = [], action) {
    switch (action.type) {
        case ADD_MESSAGE:
            return [
                ...state,
                {
                    text: action.message,
                    id: uuid()
                }
            ];

        case DELETE_MESSAGE:
            return state.filter(message => {
                return message.id !== action.messageId;
            });

        case EDIT_MESSAGE: {
            state.forEach((message) => {
                if (message.id === action.message.id) {
                    message.text = action.message.text;
                }
            });
            return [...state];
        }

        default:
            return state;
    }
};
