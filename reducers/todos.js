const todo = (state = {}, action) => {
    switch(action.type){
        case 'ADD_TODO':
            return Object.assign(state,{
                id:action.id,
                text:action.text,
                completed:false
            });
        case 'TOGGLE_TODO':
            if(state.id !== action.id){
                return state;
            }
            return Object.assign({},
                state,
                {completed:!state.completed});
        default:
            return state;
    }
};

export default (state = [],action) => {
    switch (action.type){
        case 'TOGGLE_TODO':
            return state.map((t) => todo(t ,action));
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];
        default:
            return state;
    }
}