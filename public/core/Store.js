class Store {
    constructor() {
      this.state = {};
      this.stateHistory = [];
    }
  
    setInitialState(state) {
      if (Object.keys(this.state).length === 0) {
        this.state = state;
      }
    }
  
    getState() {
      return this.state;
    }
  
    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.stateHistory.push(this.state); // Add this line to log the new state to the history array
        console.log(this.stateHistory); // Add this line to log the state history array
      }
  }
  
  export default new Store();
  