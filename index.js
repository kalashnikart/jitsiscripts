const kick = (name) => {
  Object.values(APP.conference._room.participants).forEach(p => {
    if (p._displayName === name) {
      APP.store.dispatch({
        type: 'KICK_PARTICIPANT',
        id: p.getId()
      });
    }
  });
}

const nukeall = () => {
  Object.values(APP.conference._room.participants).forEach(p => {
      APP.store.dispatch({
        type: 'KICK_PARTICIPANT',
        id: p.getId()
      });
  });
}
