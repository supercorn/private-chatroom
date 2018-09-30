export const ADD_MESSAGE = "ADD_MESSAGE";
export const DELETE_MESSAGE = "DELETE_MESSAGE";
export const EDIT_MESSAGE = "EDIT_MESSAGE";

export function addMessage(message) {
    return {
        type: ADD_MESSAGE,
        message
    };
}

export function deleteMessage(messageId) {
    return {
        type: DELETE_MESSAGE,
        messageId
    };
}

export function editMessage(message) {
    return {
        type: EDIT_MESSAGE,
        message
    };
}
