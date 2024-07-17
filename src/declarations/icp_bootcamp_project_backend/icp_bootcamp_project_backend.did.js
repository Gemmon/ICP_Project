export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'add_record' : IDL.Func([IDL.Text, IDL.Text], [], []),
    'clear_leaderboard' : IDL.Func([], [], []),
    'read_leaderboard' : IDL.Func([], [IDL.Vec(IDL.Vec(IDL.Text))], ['query']),
    'sort_leaderboard' : IDL.Func([], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
