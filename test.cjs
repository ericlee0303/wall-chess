const assert=require('node:assert/strict'),fs=require('fs'),{Game:G}=require('./dist/engine.js'),{solve}=require('./search.cjs');const levels=JSON.parse(fs.readFileSync('level-validation.json'));
for(let [i,l]of levels.entries()){
 let start=G.initial(l),s=G.initial(l),snapshot=JSON.stringify(start);assert(l.limit>=9);
 for(let m of l.solution){const before=JSON.stringify(s);const n=G.step(s,m);assert(n,'legal solution move');assert.equal(JSON.stringify(s),before,'input remains immutable');s=n;const pos=s.pieces.map(p=>p.pos);assert.equal(new Set(pos).size,pos.length);assert(pos.every(p=>p>=0&&p<36&&!s.walls.includes(p)));}
 assert.equal(s.status,'win');assert.equal(s.turn,l.limit);assert.equal(JSON.stringify(start),snapshot);
 const shorter=solve(l,30000,l.limit-1);assert(!shorter.path,'no shorter solution');assert(shorter.nodes<30000,'shorter search exhausted, not truncated');
 let n=G.initial({...l,limit:1}),m=l.solution[0];n=G.step(n,m);assert.equal(n.status,'lose');assert.equal(n.reason,'limit');
 assert.deepEqual(G.chooseAI(start),G.chooseAI(G.copy(start)));console.log(`Stage ${i+1}: ${l.limit}-turn win, no shorter win, deadline and immutability pass.`);
}
const piece=(id,type,side,pos)=>({id,type,side,pos});let s={pieces:[piece('a','jumper','w',30),piece('k','king','b',18)],walls:[24],status:'play',turn:0,limit:1};assert(G.actions(s,'w').some(m=>m.to===18));assert.equal(G.step(s,{id:'a',to:18}).status,'win','last allowed turn wins before deadline');s.walls=[18];assert(!G.actions(s,'w').some(m=>m.to===18));
s={pieces:[piece('a','pusher','w',30),piece('h','hunter','b',24),piece('b','knight','w',35),piece('k','king','b',0)],walls:[],status:'play',turn:0,limit:12};let m=G.actions(s,'w').find(m=>m.id==='a'&&m.to===24);assert.equal(m.push,18);let pushed=G.apply(s,m);assert.equal(pushed.pieces.find(p=>p.id==='h').pos,18);assert.equal(pushed.pieces.length,4);s.walls=[18];assert(!G.actions(s,'w').some(m=>m.id==='a'&&m.to===24));
// The same black position reacts differently when the white threats change.
let black=[piece('k','king','b',0),piece('g','guard','b',7)];let responses=new Set();for(let pos of [1,2,6,8,12,14,19]){let v={pieces:[...black,piece('a','knight','w',pos),piece('b','jumper','w',35)],walls:[],status:'play',turn:0,limit:12};responses.add(JSON.stringify(G.chooseAI(v)));}assert(responses.size>=3,'AI adapts to different board positions');
const js=fs.readFileSync('dist/app.js','utf8');assert(!js.includes('forecast'));assert(!js.includes('solve('));console.log('Movement, pushing, last-turn victory, responsive AI, and removed hints/forecasts: passed.');
