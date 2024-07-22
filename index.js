// index.js
const args = process.argv.slice(2);

let name = 'User';
let level = 1;
let greeting = 'Hi';

for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
        case '--name': 
        case '-n':
            name = args[i + 1];
            i++;
            break;
        case '--level':
        case '-l':
            level = parseInt(args[i + 1], 10);
            i++;
            break;
        case '--greeting':
        case '-g':
            greeting = args[i + 1];
            i++;
            break;
    }
}

const createMessage = (name, greeting) => {
    return `${greeting}, ${name}`;
};

let final = createMessage(name, greeting);

if (level === 2) {
    const now = new Date();
    now.setHours(now.getHours() + 4);
    const date = now.toISOString().replace('T', ' ').substring(0, 19);
    final += ` (Date and Time: ${date})`;
}

console.log(final);
