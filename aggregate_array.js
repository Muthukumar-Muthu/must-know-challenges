const endorsements = [
  { skill: 'css', user: 'Bill' },
  { skill: 'javascript', user: 'Chad' },
  { skill: 'javascript', user: 'Bill' },
  { skill: 'css', user: 'Sue' },
  { skill: 'javascript', user: 'Sue' },
  { skill: 'html', user: 'Sue' },
];

const output = [
  {
    user: 'Bill',
    skill: ['css', 'javascript'],
  },
  {
    user: 'Chad',
    skill: ['javascript'],
  },
  {
    user: 'Sue',
    skill: ['css', 'javascript', 'html'],
  },
];
const aggregate = (endros = [], on, who) => {
  const refined = endros.reduce((p, c) => {
    const onValue = c[on]; //c.skill = 'css'
    const whoValue = c[who]; //c.user = 'Bill'

    if (onValue in p) {
      p[onValue] = {
        [on]: onValue,
        [who]: [...p[onValue][who], whoValue],
      };
    } else {
      p[onValue] = {
        [on]: onValue,
        [who]: [whoValue],
      };
    }
    return p;
  }, {});
  return Object.values(refined);
};

console.log(aggregate(endorsements, 'user', 'skill'));
// link for the problem : https://learnersbucket.com/examples/interview/aggregate-array-of-objects-on-the-given-keys/
