type Listener<State> = (state: State, previousState: State) => any;

export function createStore<State>(initialState: State) {
  let state: State = initialState;
  let listeners: Set<Listener<State>> = new Set();

  const get = () => {
    return state;
  };

  const set = (partial: Partial<State> | ((state: State) => State)) => {
    const nextState =
      typeof partial === "function" ? (partial as (state: State) => State)(state) : partial;
    if (nextState !== state) {
      const previousState = state;
      state =
        typeof nextState !== "object"
          ? (nextState as State)
          : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const subscribe = (listener: Listener<State>) => {
    listeners.add(listener);

    return () => {
      listeners.delete(listener);
    };
  };

  return {
    get,
    set,
    subscribe,
  };
}
