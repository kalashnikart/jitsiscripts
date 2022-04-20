const kick_huylo = (name) => {
  Object.values(APP.conference._room.participants).forEach(p => {
    if (p._displayName === name) {
      APP.store.dispatch({
        type: 'KICK_PARTICIPANT',
        id: p.getId()
      });
    }
  });
}
